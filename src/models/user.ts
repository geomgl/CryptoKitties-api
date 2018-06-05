import {Entity, property, model} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
  })
  firstName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
  })
  username: string;

  @property({
    type: 'string'
  })
  password: string;

  @property({
    type: 'string'
  })
  email?: string;

  getId() {
    return this.id;
  }
}
