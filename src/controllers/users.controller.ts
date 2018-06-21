import { repository } from '@loopback/repository';
import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';
import * as bcrypt from 'bcrypt';
import { Login } from '../models/login';
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
import { Cryptoanimal } from '../models/cryptoanimal';
//import { Stripe } from '@ionic-native/stripe';
import { CryptoanimalRepository } from "../repositories/cryptoanimal.repository";



export class UserController {
  constructor(

    @repository(DonationRepository) private donationRepo: DonationRepository,
    @repository(UserRepo) protected userRepo: UserRepo,
    @repository(CryptoanimalRepository) private cryptoanimalRepo: CryptoanimalRepository,
  ) { }

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

  @get('/users/{user_id}/cryptoanimals')
  async findCryptoanimalsByUserId(@param.path.number('user_id') user_id: number): Promise<Array<Cryptoanimal>> {
    let userExists: boolean = !!(await this.userRepo.count({ user_id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest('ID ${user_id} does not exist');
    }

    return await this.cryptoanimalRepo.find({
      where: {
        user_id: user_id
      }
    });
  }

}

