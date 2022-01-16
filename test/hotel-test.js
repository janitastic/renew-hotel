import chai from 'chai';
const expect = chai.expect;
// chai.use(require('chai-date-string'));

import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';

import {customersData} from '../sample-data/sampleCustomers';
import {bookingsData} from '../sample-data/sampleBookings';
import {roomsData} from '../sample-data/sampleRooms';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(roomsData, bookingsData, customersData);
  });

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should instantiate a new instance of a hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('Should have a rooms property that stores all the rooms in the hotel', () => {
    expect(hotel).to.have.a.property('rooms');
    expect(hotel.rooms).to.be.an('Array');
    expect(hotel.rooms.length).to.deep.equal(6);
    expect(hotel.rooms).to.deep.equal(roomsData);
  });

  it('Should have a bookings property that stores all the bookings in the hotel', () => {
    expect(hotel).to.have.a.property('bookings');
    expect(hotel.bookings).to.be.an('Array');
    expect(hotel.bookings.length).to.deep.equal(6);
    expect(hotel.bookings).to.deep.equal(bookingsData);
  });

  it('Should have a customers property that stores all the customers in the hotel', () => {
    expect(hotel).to.have.a.property('customers');
    expect(hotel.customers).to.be.an('Array');
    expect(hotel.customers.length).to.deep.equal(6);
    expect(hotel.customers).to.deep.equal(customersData);
  });

  it('Should have an available rooms property that stores all the available rooms in the hotel', () => {
    expect(hotel).to.have.a.property('availableRooms');
    expect(hotel.availableRooms).to.deep.equal([]);
  });
});
