import {Entity, property, model} from '@loopback/repository';

@model({
  name: "donation"
})
export class Donation extends Entity {
  @property({
    type: 'number',
    id: true
  })
  donation_id?: number;

  @property({
    type: 'string',
  })
  donation_amt_usd: number;

  getId() {
    return this.donation_id;
  }
}
