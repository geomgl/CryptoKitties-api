// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { PaymentRepository } from "../repositories/payment.repository";
import { PaymentMethod } from "../models/creditcard";

export class LoginController {
  constructor(
  @repository(PaymentRepository.name) private paymentRepo: PaymentRepository
  ) {}

  
  @post('/payment-methods')
  async paymentMethods(@requestBody() paymentMethod: PaymentMethod) {
    if ( !paymentMethod) {
      throw new HttpErrors.Unauthorized('No Payment Methods');
    }

    return await this.paymentRepo.create(paymentMethod);

}

@get('/payment-methods')
  async findPaymentMethods(): Promise<PaymentMethod[]> {
  return await this.paymentRepo.find();
  }
   

}
