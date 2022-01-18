import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-date-string'));

import Booking from '../classes/Booking';
import {bookingsData} from '../sample-data/sampleBookings';

describe('Booking', () => {
  let booking1, booking2, idLength, characters;

  beforeEach(() => {
    booking1 = new Booking(bookingsData[0]);
    booking2 = new Booking(bookingsData[1]);
    idLength = 17;
    characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should instantiate a new instance of a booking', () => {
    expect(booking1).to.be.an.instanceOf(Booking);
  });

  it('Should be able to instantiate another instance of a booking', () => {
    expect(booking2).to.be.an.instanceOf(Booking);
  });

  it('Should have booking id number', () => {
    expect(booking1).to.have.a.property('id');
    expect(booking1.id).to.be.a('string');
    //will I need the tests below? Or do these change with date.now bookings?
    expect(booking1.id).to.include('5fwrgu4i7k55hl', 'Every booking id starts with the same 14 characters.');
    expect(booking1.id).to.have.lengthOf(17);
  });

  it('Should keep track of the user id of the user who booked the room', () => {
    expect(booking1).to.have.a.property('userID');
    expect(booking1.userID).to.be.a('number');
    expect(booking1.userID).to.be.at.least(1);
  });

  it('Should have a date string formatted by YYYY/MM/DD', () => {
    expect(booking1).to.have.a.property('date');
    expect(booking1.date).to.be.a.dateString();
  });

  it('Should have a room number', () => {
    expect(booking1).to.have.a.property('roomNumber');
    expect(booking1.roomNumber).to.be.a('number');
    expect(booking1.roomNumber).to.be.at.least(1);
  });

  it('Should start out with no room service charges', () => {
    expect(booking1).to.have.a.property('roomServiceCharges');
    expect(booking1.roomServiceCharges).to.deep.equal([]);
  });

  it('Should be able to create a new booking ID', () => {
    // const idLength = 17;
    // const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const newID = booking1.createNewId(idLength, characters);
    console.log(newID);

    expect(newID.length).to.equal(17);
  });
});
