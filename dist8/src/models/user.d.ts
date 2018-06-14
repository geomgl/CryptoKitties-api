import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    user_id?: number;
    first_name?: string;
    last_name?: string;
    username: string;
    password: string;
    email?: string;
    profile_pic?: string;
    address_id?: string;
    getId(): any;
}
