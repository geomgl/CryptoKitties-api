import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Cryptoanimal } from '../models/cryptoanimal';
export declare class CryptoanimalRepository extends DefaultCrudRepository<Cryptoanimal, typeof Cryptoanimal.prototype.id> {
    protected datasource: DataSource;
    login(arg0: any): any;
    constructor(datasource: DataSource);
}
