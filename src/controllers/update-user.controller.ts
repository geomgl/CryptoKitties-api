import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;


export class Update_userController {
  constructor(
    @repository(UserRepository) private userRepo: UserRepository
  ) {}

  
}
