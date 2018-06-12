import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Charity } from '../models/charity';
import { Project } from '../models/project';

export class ProjectRepository extends DefaultCrudRepository<
  Project,
  typeof Project.prototype.id
> {
  login(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Project, datasource);
  }
}