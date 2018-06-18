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
    required: true
  })
  first_name?: string;

  @property({
    type: 'string',
    required: true
  })
  last_name?: string;

  @property({
    type: 'string',
    required: true
  })
  password: string;

  @property({
    type: 'string',
    required: true
  })
  email: string;

  @property({
    type:'string'
  })
  profile_pic?: string;

  @property({
    type: 'string',
  })
  address_id?: string;

  getId() {
    return this.user_id;
  }
}
