// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { PaymentRepository } from "../repositories/payment.repository";
import { PaymentMethod } from "../models/paymentmethod";

export class PaymentController {
  constructor(
  @repository(PaymentRepository.name) private paymentRepo: PaymentRepository
  ) {}

  
  @post('/payment-methods')
  async paymentMethods(@requestBody() paymentMethod: PaymentMethod) {
    if ( !paymentMethod) {
      throw new HttpErrors.Unauthorized('No Payment Methods');
    }

    // how to pass parameters into endpoint:

    // how to secure the endpoint 
    // quesrt parameter jwt as a string and throw an error if no token pprovided
    // user path parameters when tyring to access a specific id on a resource, otherwise use query parameters
    // in front end you would put "?param1= whateverparam1is 

    return await this.paymentRepo.create(paymentMethod);

}

@get('/payment-methods')
  async findPaymentMethods(): Promise<PaymentMethod[]> {
  return await this.paymentRepo.find();
  }
   

}
