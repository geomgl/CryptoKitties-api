import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    mission?: string;
    description?: string;
    button?: string;
}
