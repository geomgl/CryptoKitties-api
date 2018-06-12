import {Entity, property, model} from '@loopback/repository';
import { Project } from './project';

@model({
  name: "charity"
})
export class Charity extends Entity {
  @property({
    type: 'number',
    id: true
  })
  charity_id?: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  mission?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string'
  })
  button?: string;

  @property({
    type: 'string'
  })
  logo?: string;  

  @property({
    type: 'string'
  })
  location?: string;
}
