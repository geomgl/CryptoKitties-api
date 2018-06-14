// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import {sign, verify} from 'jsonwebtoken'; 
import * as bcrypt from 'bcrypt';
import {Login} from '../models/login';
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
//import { Stripe } from '@ionic-native/stripe';




export class UsersController { 
  constructor(
    @repository(UserRepository) private userRepo: UserRepository,
    @repository(DonationRepository) private donationRepo: DonationRepository
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

@post('/login')
async login(@requestBody() login: Login): Promise<any> {
  var users = await this.userRepo.find();

  var email = login.email;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.email == email && await bcrypt.compare(login.password, user.password)) {

      var jwt = sign(
        {
          user: {
            id: user.id,
            firstname: user.firstname,
            email: user.email
          },
          anything: "hello"
        },
        'shh',
        {
          issuer: 'auth.ix.co.za',
          audience: 'ix.co.za',
        },
      );
      
      return {
        token: jwt,
      };
    }
  }

  throw new HttpErrors.Unauthorized('User not found');
  //return "Error";
}

@post('/login-with-query')
async loginWithQuery(@requestBody() login: Login): Promise<User> {
  var users = await this.userRepo.find({
    where: {
      and: [{email: login.email}, {password: login.password}],
    },
  });

  if (users.length == 0) {
    throw new HttpErrors.NotFound('User not found');
  }

  return users[0];
}




  @get('/users')
    async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest('ID ${id} does not exist');
    }

    return await this.userRepo.findById(id);

  }

  @get('/users/{user_id}/donations')
  async findDonationsByUserId(@param.path.number('user_id') user_id: number): Promise<Array<Donation>> {
    let userExists: boolean = !!(await this.userRepo.count({ user_id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest('ID ${user_id} does not exist');
    }
    
    return await this.donationRepo.find({
      where: {
        user_id: user_id
      }
    });
}
 
}



