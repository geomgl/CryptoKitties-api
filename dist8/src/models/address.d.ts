import { Entity } from '@loopback/repository';
export declare class Address extends Entity {
    address_id?: number;
    street: string;
    postal_code: string;
    state: string;
    city: string;
    country: string;
    getId(): number | undefined;
}
