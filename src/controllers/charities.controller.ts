import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { get, param, HttpErrors } from "@loopback/rest";
import { Charity } from "../models/charity";

// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;



export class CharitiesController {
  constructor(
    @repository(CharityRepository.name) private charityRepo: CharityRepository
  )
   {}

  @get('/charities')
  async findCharities(): Promise<Charity[]> {
  return await this.charityRepo.find();
  }
   

  @get('/charities/{id}')
  async findCharitiesById(@param.path.number('id') id: number): Promise<Charity> {
    let charityExists: boolean = !!(await this.charityRepo.count({ id }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest('ID ${id} does not exist');

    }
    
    return await this.charityRepo.findById(id);

  }

  @get('/charities/{id}/projects')
  async findProjectsByCharityId(@param.path.number('id') id: number): Promise<Charity> {
    let charityExists: boolean = !!(await this.charityRepo.count({ id }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest('ID ${id} does not exist');

    }
    
    
    return await this.charityRepo.findById(id);

  }

}

