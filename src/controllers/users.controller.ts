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

  @get('/users/{user_id}/donations')
  async getDonationsByUserId(
    @param.path.number('user_id') userId: number,
    @param.query.date('date_from') dateFrom: Date
  ) {
    console.log(userId);
    console.log(dateFrom);
  }

//   @post('/login-with-query')
//   async loginWithQuery(@requestBody() login: Login): Promise<User> {
//   var users = await this.userRepo.find({
//     where: {
//       email: login.email
//     }
//   })
// }
  
}



