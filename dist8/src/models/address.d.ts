import { Entity } from '@loopback/repository';
export declare class Address extends Entity {
    address_id?: number;
    street: string;
    zip: string;
    state: string;
    city: string;
    country: string;
    getId(): number | undefined;
}
