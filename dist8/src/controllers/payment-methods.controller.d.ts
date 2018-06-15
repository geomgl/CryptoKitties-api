import { PaymentRepository } from "../repositories/payment.repository";
import { PaymentMethod } from "../models/creditcard";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    paymentMethods(paymentMethod: PaymentMethod): Promise<PaymentMethod>;
    findPaymentMethods(): Promise<PaymentMethod[]>;
}
