import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
export declare class UserController {
    private donationRepo;
    protected userRepo: UserRepo;
    constructor(donationRepo: DonationRepository, userRepo: UserRepo);
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
    findDonationsByUserId(user_id: number): Promise<Array<Donation>>;
}
