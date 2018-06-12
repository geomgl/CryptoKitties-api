// Uncomment these imports to begin using these cool features!
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
//import { sign, verify } from 'jsonwebtoken';

import * as bcrypt from 'bcrypt';


export class RegistrationController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}


@post('/registration')
async createUser(@requestBody() user: User)  {
  if(!user.username || !user.password || !user.firstName || !user.lastName || !user.email) {
    throw new HttpErrors.BadRequest('Please input all fields');
  }

  let userExists: boolean = !!( await this.userRepo.count({username: user.username}));

  if (userExists) {
    throw new HttpErrors.BadRequest('Username already exists');
  }

  //bcrypt is a very slow algorithm, make the generation of hashes take a very long time
  let hashedPassword = await bcrypt.hash(user.password, 10);

  var userToStore = new User ();

  userToStore.firstname = user.firstname;
  userToStore.lastname = user.lastname;
  userToStore.email = user.email;
  userToStore.password = user.hashedPassword;


  let storedUser = await this.userRepo.create(userToStore);
  storedUser.password = "";
  return storedUser;
}

}


