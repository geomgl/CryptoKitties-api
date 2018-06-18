import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Charity } from '../models/charity';
import { Project } from '../models/project';
import { PaymentMethod } from '../models/paymentmethod';

export class PaymentRepository extends DefaultCrudRepository<
  PaymentMethod,
  typeof PaymentMethod.prototype.id
> {
  login(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(PaymentMethod, datasource);
  }
}