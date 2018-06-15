import {Entity, property, model} from '@loopback/repository';

@model({
  name: "role"
})
export class Role extends Entity {
  @property({
    type: 'number',
    id: true
  })
  role_id?: number;

  @property({
    type: 'string',
    id: true
  })
  role_name?: string;

  @property({
    type: 'number',
    id: true
  })
  user_id?: number;

  @property({
    type: 'number',
    id: true
  })
  charity_id?: number;

  getId() {
    return this.role_id;
  }
}
