import chai from 'chai';
const expect = chai.expect;

import Booking from '../classes/Booking';
import {bookingsData} from '../sample-data/test-bookings';

describe.only('Booking', () => {
  let booking1, booking2;

  beforeEach(() => {
    booking1 = new Booking(bookingsData[0]);
    booking2 = new Booking(bookingsData[1]);
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

  it('Should have booking number', () => {
    expect(booking1).to.have.a.property('id');
    expect(booking1.number).to.be.within(1, 25, 'Booking number options are 1 through 25.');
  });

  it('Should have a booking type', () => {
    expect(booking1).to.have.a.property('bookingType');
    expect(['suite', 'residential suite', 'single booking', 'junior suite'], 'Invalid booking type.').to.include(booking1.bookingType);
  });

  it('Should have a bidet or not have a bidet', () => {
    expect(booking1).to.have.a.property('hasBidet');
    expect(booking1.hasBidet).to.be.true;
    expect(booking2.hasBidet).to.be.false;
  });

  it('Should have a bed size', () => {
    expect(booking1).to.have.a.property('bedSize');
    expect(['twin', 'full', 'queen', 'king'], 'Invalid bed size.').to.include(booking1.bedSize);
    expect(['twin', 'full', 'queen', 'king'], 'Invalid bed size.').to.include(booking2.bedSize);
  });

  it('Should have 1 to 2 beds', () => {
    expect(booking1).to.have.a.property('numBeds');
    expect(booking1.numBeds).to.be.at.least(1, 'Each booking should have at least 1 bed.');
    expect(booking2.numBeds).to.be.at.most(2, 'Each booking should have no more than 2 beds.');
  });

  it('Should have a nightly rate', () => {
    expect(booking1).to.have.a.property('costPerNight');
    expect(booking1.costPerNight).to.be.at.greaterThanOrEqual(172.09, 'The lowest nightly rate available is 172.09.');
    expect(booking2.costPerNight).to.be.at.lessThanOrEqual(497.64, 'The highest nightly rate available is 497.64.');
  });
});
