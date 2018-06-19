import { Entity } from '@loopback/repository';
export declare class Project extends Entity {
    project_id?: number;
    charity_id?: string;
    name: string;
    subhead?: string;
    description?: string;
    img?: string;
    date?: string;
    getId(): number | undefined;
}
