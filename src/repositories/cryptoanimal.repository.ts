import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Cryptoanimal } from '../models/cryptoanimal';

export class CryptoanimalRepository extends DefaultCrudRepository<
  Cryptoanimal,
  typeof Cryptoanimal.prototype.id
> {
  login(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Cryptoanimal, datasource);
  }
}