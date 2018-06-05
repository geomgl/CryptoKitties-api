import { User } from "../models/user";
export declare class RegistrationController {
    private userRepo;
    constructor();
    createUser(user: User): Promise<User>;
}
