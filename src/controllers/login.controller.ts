// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";

export class LoginController {
  constructor(
  @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/login')
  async loginUser(@requestBody() user: User) {
    if ( !user.username || !user.password) {
      throw new HttpErrors.Unauthorized('Invalid Credentials');
    }

  let userExists: boolean = !!(await this.userRepo.count({
      and: [
        {username:  user.username},
        {password: user.password},
      ],
    })
  );

    if (!userExists) {
      throw new HttpErrors.Unauthorized('Invalid Credentials');
    }

    return await this.userRepo.findOne({
      where: {
        and: [
          {username:  user.username},
          {password: user.password}
        ],
      },
    });
  }

}


 







