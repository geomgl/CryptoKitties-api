import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstName?: string;
    lastName?: string;
    username: string;
    password: string;
    email?: string;
    getId(): number | undefined;
}
