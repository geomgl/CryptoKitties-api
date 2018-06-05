import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharitiesController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    findCharities(): Promise<Charity[]>;
}
