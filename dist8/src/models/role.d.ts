import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    role_id?: number;
    role_name?: string;
    user_id?: number;
    charity_id?: number;
    getId(): number | undefined;
}
