import { Entity } from '@loopback/repository';
export declare class PaymentMethod extends Entity {
    payment_id?: number;
    name: string;
    user_id: string;
    card_number: string;
    CVV: string;
    card_type: string;
    expiration_date: string;
    getId(): any;
}
