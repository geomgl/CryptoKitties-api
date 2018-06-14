import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    charity_id?: number;
    name: string;
    mission: string;
    description: string;
    img: string;
    location: string;
}
