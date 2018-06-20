import { Entity } from '@loopback/repository';
export declare class Donation extends Entity {
    donation_id?: number;
    amount: number;
    user_id: number;
    charity_id: number;
    frequency: string;
    project_id?: string;
    date: string;
    getId(): number | undefined;
}
