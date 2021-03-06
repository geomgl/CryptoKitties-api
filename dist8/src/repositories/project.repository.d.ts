import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Project } from '../models/project';
export declare class ProjectRepository extends DefaultCrudRepository<Project, typeof Project.prototype.id> {
    protected datasource: DataSource;
    login(arg0: any): any;
    constructor(datasource: DataSource);
}
