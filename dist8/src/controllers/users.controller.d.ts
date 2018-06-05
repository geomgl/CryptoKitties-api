import { User } from "../models/user";
export declare class UsersController {
    private userRepo;
    constructor();
    getAllUsers(): Promise<Array<User>>;
}
