//Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { CryptoanimalRepository } from "../repositories/cryptoanimal.repository";
import { Cryptoanimal } from "../models/cryptoanimal";

export class CryptoanimalController {
  constructor(
  @repository(CryptoanimalRepository.name) private cryptoanimalRepo: CryptoanimalRepository
  ) {}

  
@post('/cryptoanimals')
async paymentMethods(@requestBody() cryptoanimal: Cryptoanimal) {
if ( !cryptoanimal) {
    throw new HttpErrors.Unauthorized('No Cryptoanimals Found');
}

return await this.cryptoanimalRepo.create(cryptoanimal);
}


@get('/cryptoanimals')
async findCharities(): Promise<Cryptoanimal[]> {
return await this.cryptoanimalRepo.find();
}
 




}