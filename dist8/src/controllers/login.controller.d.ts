import { User } from "../models/user";
export declare class LoginController {
    private userRepo;
    constructor();
    createUser(user: User): Promise<User>;
}
