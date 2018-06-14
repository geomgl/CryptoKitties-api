import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from '../models/login';
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
export declare class UsersController {
    private userRepo;
    private donationRepo;
    constructor(userRepo: UserRepository, donationRepo: DonationRepository);
    createUser(user: User): Promise<User>;
    login(login: Login): Promise<any>;
    loginWithQuery(login: Login): Promise<User>;
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
    findDonationsByUserId(user_id: number): Promise<Array<Donation>>;
}
