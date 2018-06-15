import {Entity, property, model} from '@loopback/repository';


@model({
  name: "project"
}

)
export class Project extends Entity {
  @property({
    type: 'number',
    id: true
  })
  project_id?: number;

  @property({
    type: 'string',
  })
  charity_id?: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  subhead?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string'
  })
  img?: string;

  @property({
    type: 'string'
  })
  date?: string;

  getId() {
    return this.project_id;
  }
}
