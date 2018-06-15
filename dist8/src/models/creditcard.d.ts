import { Entity } from '@loopback/repository';
export declare class PaymentMethod extends Entity {
    cc_id?: number;
    name: string;
    number: string;
    CVV: string;
    expiration_date: string;
    getId(): number | undefined;
}
