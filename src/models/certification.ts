
import {Entity, property, model} from '@loopback/repository';


@model({
  name: "certification"
}

)
export class Certification extends Entity {
  @property({
    type: 'number',
    id: true
  })
  cert_id?: number;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string'
  })
  year?: string;

  getId() {
    return this.cert_id;
  }
}
