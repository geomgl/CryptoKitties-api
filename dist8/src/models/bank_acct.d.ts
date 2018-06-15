import { Entity } from '@loopback/repository';
export declare class Bank_acct extends Entity {
    bank_id?: number;
    bank_name: string;
    routing_num: string;
    account_num: string;
    getId(): number | undefined;
}
