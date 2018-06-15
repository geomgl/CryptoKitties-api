import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";
export declare class DonationController {
    private donationRepo;
    constructor(donationRepo: DonationRepository);
    paymentMethods(donation: Donation): Promise<Donation>;
}
