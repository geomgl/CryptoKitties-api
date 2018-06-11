import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { User } from '../models/user';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    protected datasource: DataSource;
    login(arg0: any): any;
    constructor(datasource: DataSource);
}
