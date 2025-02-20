import chai from 'chai';
// import serializer from '../../src/utils/logging.js'; //why can't I import this? 

chai.should();

function serializer(req) {
  return {
    request: {
      method: req.method,
      url: req.url,
      headers: req.headers,
      params: req.params,
      query: req.query,
      body: req.body
    }
  };
}
// Serialize
const req = {
  method: 'GET',
  url: 'localhost.com',
  headers: {
    this: 'value',
    that: 'value'
  }
};

describe('It should return a serialized object', () =>{
  it('Returns something', () => {
    const serial = serializer(req);
    serial.should.be.a('object');
    serial.request.method.should.eql('GET');
    serial.request.headers.should.be.a('object');
  });
});