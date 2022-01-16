import chai from 'chai';
const expect = chai.expect;

import Customer from '../classes/Customer';
import Room from '../classes/Room';
import Hotel from '../classes/Hotel';

import {customersData} from '../sample-data/sampleCustomers';
import {bookingsData} from '../sample-data/sampleBookings';
import {roomsData} from '../sample-data/sampleRooms';

describe.only('Customer', () => {
  let customer1, customer2, room1, room2, booking1, booking2, hotel;

  beforeEach(() => {
    customer1 = new Customer(customersData[0]);
    customer2 = new Customer(customersData[1]);
    hotel = new Hotel(roomsData, bookingsData, customersData);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should instantiate a new instance of a customer', () => {
    expect(customer1).to.be.an.instanceOf(Customer);
  });

  it('Should have an id and a name', () => {
    expect(customer1).to.have.a.property('id');
    expect(customer1.id).to.equal(1);
    expect(customer1).to.have.a.property('name');
    expect(customer1.name).to.equal('Leatha Ullrich');
  });

  it('Should start out with no bookings', () => {
    expect(customer1).to.have.a.property('bookings');
    expect(customer1.bookings).to.deep.equal([]);
  });
  
  it('Should start out with no money spent', () => {
    expect(customer1).to.have.a.property('totalSpent');
    expect(customer1.totalSpent).to.deep.equal(0);
  });

  it('Should be able to instantiate a different customer', () => {
    expect(customer2).to.be.an.instanceOf(Customer);
    expect(customer2).to.have.a.property('id');
    expect(customer2.id).to.equal(2);
    expect(customer2).to.have.a.property('name');
    expect(customer2.name).to.equal('Rocio Schuster');
    expect(customer2).to.have.a.property('bookings');
    expect(customer2.bookings).to.deep.equal([]);
    expect(customer2).to.have.a.property('totalSpent');
    expect(customer2.totalSpent).to.deep.equal(0);
  });

  it('Should be able to list all of the customer\'s bookings', () => {
    const actual = customer1.listBookings(hotel);
    expect(customer1.bookings).to.be.an('Array');
    expect(customer1.bookings.length).to.deep.equal(1);
    expect(customer1.bookings).to.deep.equal(actual);
  });
});
