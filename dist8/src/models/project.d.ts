import { Entity } from '@loopback/repository';
export declare class Project extends Entity {
    project_id?: number;
    charity_id?: string;
    name: string;
    subhead?: string;
    description?: string;
    image?: string;
    getId(): number | undefined;
}
