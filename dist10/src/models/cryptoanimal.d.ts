import { Entity } from '@loopback/repository';
export declare class Cryptoanimal extends Entity {
    animal_id?: number;
    name: string;
    img: string;
    criteria: string;
    user_id: string;
    description: string;
    getId(): number | undefined;
}
