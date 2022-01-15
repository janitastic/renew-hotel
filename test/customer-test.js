import chai from 'chai';
const expect = chai.expect;

import Customer from '../classes/Customer';

import {customerData, bookingsData roomsData} from '../sample-data/test-customers';

describe.only('Customer', () => {
  let customer1, customer2, booking1, bookin2;

  beforeEach(() => {
    customer1 = new Customer(customerData[0]);
    customer2 = new Customer(customerData[1]);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should instantiate a new instance of a customer', () => {
    expect(customer1).to.be.an.instanceOf(Customer);
  });

  it('Should have an id and a name', () => {
    expect(customer1).to.have.a.property('id');
      //should the expect below be 1?
    expect(customer1.id).to.equal(customerData[0].id);
    expect(customer1).to.have.a.property('name');
      //should the expect below be 'Leatha Ullrich'
    expect(customer1.name).to.equal(customerData[0].name);
  });

  it('Should be able to instantiate a different customer', () => {
    expect(customer2).to.be.an.instanceOf(Customer);
    expect(customer2).to.have.a.property('id');
    expect(customer2.id).to.equal(customerData[1].id);
    expect(customer2).to.have.a.property('name');
    expect(customer2.name).to.equal(customerData[1].name);
  });

  it('Should start out with no bookings', () => {
    expect(customer1).to.have.a.property('bookings');
    expect(customer1.bookings).to.deep.equal([]);
  });

  it('Should start out with no money spent', () => {
    expect(customer1).to.have.a.property('totalSpent');
    expect(customer1.totalSpent).to.deep.equal(0);
  });
});
