// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { DonationRepository } from "../repositories/donation.repository";
import { Donation } from "../models/donation";

export class DonationController {
  constructor(
  @repository(DonationRepository.name) private donationRepo: DonationRepository
  ) {}

  
  @post('/donations')
  async paymentMethods(@requestBody() donation: Donation) {
    if ( !donation) {
      throw new HttpErrors.Unauthorized('No Donations Found');
    }

    return await this.donationRepo.create(donation);

}
}