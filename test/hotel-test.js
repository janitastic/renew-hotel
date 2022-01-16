import chai from 'chai';
const expect = chai.expect;
// chai.use(require('chai-date-string'));

import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';

import {customersData} from '../sample-data/sampleCustomers';
import {bookingsData} from '../sample-data/sampleBookings';
import {roomsData} from '../sample-data/sampleRooms';

describe.only('Hotel', () => {
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
  });

  // it('Should keep track of the user id of the user who booked the room', () => {
  //   expect(booking1).to.have.a.property('userID');
  //   expect(booking1.userID).to.be.a('number');
  //   expect(booking1.userID).to.be.at.least(1);
  // });

  // it('Should have a date string formatted by YYYY/MM/DD', () => {
  //   expect(booking1).to.have.a.property('date');
  //   expect(booking1.date).to.be.a.dateString();
  // });

  // it('Should have a room number', () => {
  //   expect(booking1).to.have.a.property('roomNumber');
  //   expect(booking1.roomNumber).to.be.a('number');
  //   expect(booking1.roomNumber).to.be.at.least(1);
  // });

  // it('Should start out with no room service charges', () => {
  //   expect(booking1).to.have.a.property('roomServiceCharges');
  //   expect(booking1.roomServiceCharges).to.deep.equal([]);
  // });
});
