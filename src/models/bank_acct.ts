import {Entity, property, model} from '@loopback/repository';

@model({
  name: "bank_acct"
})
export class Bank_acct extends Entity {
  @property({
    type: 'number',
    id: true
  })
  bank_id?: number;

  @property({
    type: 'string',
  })
  bank_name: string;

  @property({
    type: 'string',
  })
  routing_num: string;

  @property({
    type: 'string',
  })
  account_num: string;

  getId() {
    return this.bank_id;
  }
}
