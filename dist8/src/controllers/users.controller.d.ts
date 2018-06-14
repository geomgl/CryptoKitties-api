import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
export declare class UserController {
    protected userRepo: UserRepo;
    constructor(userRepo: UserRepo);
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
