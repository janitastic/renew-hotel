import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-date-string'));

import Customer from '../classes/Customer';
import Hotel from '../classes/Hotel';

import {customersData} from '../sample-data/sampleCustomers';
import {bookingsData} from '../sample-data/sampleBookings';
import {roomsData} from '../sample-data/sampleRooms';

describe('Customer', () => {
  let customer1, customer2, hotel;

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
    expect(customer2).to.have.a.property('totalSpent');
    expect(customer2.totalSpent).to.deep.equal(0);
  });

  it('Should be able to list all of the current customer\'s bookings', () => {
    customer1.listAllUserBookings(hotel);
    
    expect(customer1.bookings).to.be.an('Array');
    expect(customer1.bookings.length).to.deep.equal(1);
    expect(customer1.bookings).to.deep.equal([bookingsData[4]]);
  });

  it('Should be able to list all of the current customer\'s past bookings', () => {
    const currentDate = '2022/01/16';

    const pastBookings = customer1.listPastBookings(hotel, currentDate);
    expect(pastBookings).to.be.an('Array');
    expect(pastBookings.length).to.deep.equal(1);
    expect(pastBookings).to.deep.equal([bookingsData[2]]);
  });

  it('Should be able to list all of the current customer\'s upcoming bookings', () => {
    const currentDate = '2022/01/16';

    const pastBookings = customer1.listUpcomingBookings(hotel, currentDate);
    expect(pastBookings).to.be.an('Array');
    expect(pastBookings.length).to.deep.equal(5);
    expect(pastBookings).to.deep.equal([bookingsData[0], bookingsData[1], bookingsData[3], bookingsData[4], bookingsData[5]]);
  });

  it('Should be able to list all of the current customer\'s current bookings', () => {
    const currentDate = '2022/01/16';

    const currentBookings = customer1.listCurrentBookings(hotel, currentDate);
    expect(currentBookings).to.be.an('Array');
    expect(currentBookings.length).to.deep.equal(0);
    expect(currentBookings).to.deep.equal([]);
  });
  
  it('Should be able to calculate the total amount each customer has spent', () => {
    customer1.listAllUserBookings(hotel);
    customer1.addTotalSpent(hotel);
    expect(customer1.totalSpent).to.be.a('number');
    expect(customer1.totalSpent).to.deep.equal(172.09);
  });
  
  it('Should be able to return no bookings and nothing spent if the current customer has no reservation history', () => {
    customer2.listAllUserBookings(hotel);
    expect(customer2.bookings).to.be.an('Array');
    expect(customer2.bookings.length).to.deep.equal(0);
    expect(customer2.bookings).to.deep.equal([]);

    customer2.addTotalSpent(hotel);
    expect(customer2.totalSpent).to.deep.equal(0);
  });
});
