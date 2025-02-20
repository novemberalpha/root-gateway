import chai from 'chai';
import { serializer } from '../../src/utils/logger.js';

chai.should();

// Serialize
const req = {
  method: 'GET',
  url: 'localhost.com',
  headers: {
    this: 'value',
    that: 'value'
  }
};

const res = {
  success: true,
  data: []
};

describe('It should return a serialized object', () =>{
  it('Returns nothing', () => {
    const serial = serializer(req, res, 200);
    serial.should.be.a('object');
    serial.request.method.should.eql('GET');
    serial.request.headers.should.be.a('object');
    serial.response.success.should.be.true;
    serial.response.data.length.should.be.eql(0);

  });
});
