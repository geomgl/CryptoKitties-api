import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    charity_id?: number;
    name: string;
    mission?: string;
    description?: string;
    button?: string;
    logo?: string;
    location?: string;
}
