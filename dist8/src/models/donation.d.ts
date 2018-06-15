import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    donation_id?: number;
    donation_amt_usd: number;
    getId(): number | undefined;
}
