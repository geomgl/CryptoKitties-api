import {Entity, property, model} from '@loopback/repository';

@model({
  name: "cryptoanimal"
})
export class Cryptoanimal extends Entity {
  @property({
    type: 'number',
    id: true
  })
  animal_id?: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string'
  })
  img: string;

  @property({
    type: 'string'
  })
  criteria: string;

  @property({
    type: 'string'
  })
  user_id: string;

  @property({
    type: 'string'
  })
  description: string;
  
  @property({
    type: 'string'
  })
  price: string;
    
  @property({
    type: 'string'
  })
  status: string;

  @property({
    type: 'string'
  })
  habitat: string;

  getId() {
    return this.animal_id;
  }
}
