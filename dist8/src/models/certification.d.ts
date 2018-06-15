import { Entity } from '@loopback/repository';
export declare class Certification extends Entity {
    cert_id?: number;
    name: string;
    image?: string;
    description?: string;
    year?: string;
    getId(): number | undefined;
}
