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

  getId() {
    return this.role_id;
  }
}
