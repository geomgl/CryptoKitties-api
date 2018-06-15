
import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { get, param, HttpErrors } from "@loopback/rest";
import { Charity } from "../models/charity";
import { ProjectRepository } from "../repositories/project.repository";
import { Project } from "../models/project";
import { Donation } from "../models/donation";
import { DonationRepository } from "../repositories/donation.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;



export class CharitiesController {
  constructor(
    @repository(CharityRepository.name) private charityRepo: CharityRepository,
    @repository(ProjectRepository.name) private projectRepo: ProjectRepository,
    @repository(DonationRepository.name) private donationRepo: DonationRepository
  )
   {}

  @get('/charities')
  async findCharities(): Promise<Charity[]> {
  return await this.charityRepo.find();
  }
   

  @get('/charities/{charity_id}')
  async findCharitiesById(@param.path.number('charity_id') charity_id: number): Promise<Charity> {
    let charityExists: boolean = !!(await this.charityRepo.count({ charity_id }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest('ID ${charity_id} does not exist');

    }
    
    return await this.charityRepo.findById(charity_id);

  }

  @get('/charities/{charity_id}/projects')
  async findProjectsByCharityId(@param.path.number('charity_id') charity_id: number): Promise<Array<Project>> {
    let charityExists: boolean = !!(await this.charityRepo.count({ charity_id }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest('ID ${charity_id} does not exist');
    }
    
  
    return await this.projectRepo.find({
      where: {
        charity_id: charity_id
      }
    });
  }

    @get('/charities/{charity_id}/donations')
    async findDonationsByCharityId(@param.path.number('charity_id') charity_id: number): Promise<Array<Donation>> {
      let charityExists: boolean = !!(await this.charityRepo.count({ charity_id }));
  
      if (!charityExists) {
        throw new HttpErrors.BadRequest('ID ${charity_id} does not exist');
      }
      
      return await this.donationRepo.find({
        where: {
          charity_id: charity_id
        }
      });
  }

}


