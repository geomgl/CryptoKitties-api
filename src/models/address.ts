import {Entity, property, model} from '@loopback/repository';

@model({
  name: "address"
})
export class Address extends Entity {
  @property({
    type: 'number',
    id: true
  })
  address_id?: number;

  @property({
    type: 'string',
  })
  street: string;

  @property({
    type: 'string',
  })
  postal_code: string;

  @property({
    type: 'string',
  })
  state: string;

  @property({
    type: 'string',
  })
  city: string;

  @property({
    type: 'string'
  })
  country: string;

  getId() {
    return this.address_id;
  }
}
