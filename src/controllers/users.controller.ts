// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";


export class UsersController { 
  constructor(
    @repository(UserRepository) private userRepo: UserRepository
  ) {}

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
  
}



