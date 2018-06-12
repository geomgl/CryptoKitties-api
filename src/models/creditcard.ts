import {Entity, property, model} from '@loopback/repository';

@model({
  name: "paymentmethod"
})
export class PaymentMethod extends Entity {
  @property({
    type: 'number',
    id: true
  })
  cc_id?: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  number: string;

  @property({
    type: 'string',
  })
  CVV: string;

  @property({
    type: 'string'
  })
  expiration_date: string;

  getId() {
    return this.cc_id;
  }
}
