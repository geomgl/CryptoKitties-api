import {Entity, property, model} from '@loopback/repository';

@model({
  name: "paymentmethod"
})
export class PaymentMethod extends Entity {
  @property({
    type: 'number',
    id: true
  })
  payment_id?: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  user_id: string;

  @property({
    type: 'string',
  })
  card_number: string;

  @property({
    type: 'string',
  })
  CVV: string;

  @property({
    type: 'string',
  })
  card_type: string;

  @property({
    type: 'string'
  })
  expiration_date: string;

  getId() {
    return this.cc_id;
  }
}
