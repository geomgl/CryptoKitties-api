import { repository } from '@loopback/repository';
import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';
import * as bcrypt from 'bcrypt';


export class UserController {
  constructor(
    @repository(UserRepo) protected userRepo: UserRepo,
  ) {}

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }
}
