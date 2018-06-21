import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
import { Cryptoanimal } from '../models/cryptoanimal';
import { CryptoanimalRepository } from "../repositories/cryptoanimal.repository";
export declare class UserController {
    private donationRepo;
    protected userRepo: UserRepo;
    private cryptoanimalRepo;
    constructor(donationRepo: DonationRepository, userRepo: UserRepo, cryptoanimalRepo: CryptoanimalRepository);
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
    findDonationsByUserId(user_id: number): Promise<Array<Donation>>;
    findCryptoanimalsByUserId(user_id: number): Promise<Array<Cryptoanimal>>;
}
