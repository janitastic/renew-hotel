import chai from 'chai';
const expect = chai.expect;

import Customer from '../classes/Customer';

import {customerData} from '../sample-data/test-customers';

describe.only('Customer', () => {
  let customer1, customer2;

  beforeEach(() => {
    customer1 = new Customer(customerData[0]);
    customer2 = new Customer(customerData[1]);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });
});
