// Uncomment these imports to begin using these cool features!
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";


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

  return await this.userRepo.create(user);
}

}


