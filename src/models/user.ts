import {Entity, property, model} from '@loopback/repository';

@model({
  name: "user"
}

)
export class User extends Entity {
  @property({
    type: 'number',
    id: true
  })
  user_id?: number;

  @property({
    type: 'string',
  })
  first_name?: string;

  @property({
    type: 'string',
  })
  last_name?: string;

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

  @property({
    type: 'string'
  })
  profile_pic?: string;

  @property({
    type: 'string'
  })
  address_id?: string;

  getId() {
    return this.id;
  }
}
