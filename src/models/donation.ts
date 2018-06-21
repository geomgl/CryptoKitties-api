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
    type: 'number',
  })
  amount: number;

  @property({
    type: 'number',
  })
  user_id: number;

  @property({
    type: 'number',
  })
  charity_id: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  frequency: string;

  @property({
    type: 'string',
  })
  project_id?: string;

  @property({
    type: 'string',
  })
  date: string;

  getId() {
    return this.donation_id;
  }
}
