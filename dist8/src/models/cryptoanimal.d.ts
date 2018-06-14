import { Entity } from '@loopback/repository';
export declare class Cryptoanimal extends Entity {
    animal_id?: number;
    name: string;
    image: string;
    getId(): number | undefined;
}
