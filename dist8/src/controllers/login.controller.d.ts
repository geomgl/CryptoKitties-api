import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
import { Login } from '../models/login';
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepo);
    createUser(user: User): Promise<User>;
    login(login: Login): Promise<any>;
}
