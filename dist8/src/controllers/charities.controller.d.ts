import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
import { ProjectRepository } from "../repositories/project.repository";
import { Project } from "../models/project";
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";
export declare class CharitiesController {
    private charityRepo;
    private projectRepo;
    private donationRepo;
    constructor(charityRepo: CharityRepository, projectRepo: ProjectRepository, donationRepo: DonationRepository);
    findCharities(): Promise<Charity[]>;
    findCharitiesById(charity_id: number): Promise<Charity>;
    findProjectsByCharityId(charity_id: number): Promise<Array<Project>>;
    findDonationsByCharityId(charity_id: number): Promise<Array<Donation>>;
}
