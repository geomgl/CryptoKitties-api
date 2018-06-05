// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";


export class UsersController {
  @repository(UserRepository.name) private userRepo: UserRepository
  constructor() {}

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
  return await this.userRepo.find();
  }
  
}



