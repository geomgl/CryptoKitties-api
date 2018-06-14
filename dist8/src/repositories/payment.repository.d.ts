import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { PaymentMethod } from '../models/creditcard';
export declare class PaymentRepository extends DefaultCrudRepository<PaymentMethod, typeof PaymentMethod.prototype.id> {
    protected datasource: DataSource;
    login(arg0: any): any;
    constructor(datasource: DataSource);
}
