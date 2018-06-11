import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { User } from '../models/user';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  login(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(User, datasource);
  }
}

