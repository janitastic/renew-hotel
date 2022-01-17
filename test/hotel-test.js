import chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-date-string'));

import Hotel from '../classes/Hotel';

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
    expect(hotel.rooms.length).to.deep.equal(25);
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

  it('Should be able to log all room types with no duplicates', () => {
    const roomTypesList = hotel.logRoomTypes();  

    expect(roomTypesList).to.be.an('array');
    expect(roomTypesList.length).to.deep.equal(4);
    expect(roomTypesList).to.deep.equal([ 'residential suite', 'suite', 'single room', 'junior suite' ]);
  });

  it('Should be able to filter room availability by date', () => {
    const selectedDate = '2022/01/10';

    const availableRooms = hotel.filterRoomsByDate(selectedDate);  

    expect(selectedDate).to.be.a.dateString();
    expect(availableRooms).to.be.an('array');
    expect(availableRooms.length).to.deep.equal(24);
  });

  it('Should be able to filter the list of rooms by their room type', () => {
    const residential = 'residential suite';
    const single = 'single room';

    const residentialType = hotel.filterAllRoomsByType(residential);  
    const singleType = hotel.filterAllRoomsByType(single);  

    expect(residential).to.be.a('string');
    expect(residentialType).to.be.an('array');
    expect(residentialType.length).to.deep.equal(5);

    expect(singleType).to.be.an('array');
    expect(singleType.length).to.deep.equal(13);
  });

  it('Should be able to filter the list of available rooms by their roomType property', () => {
    const selectedDate = '2022/01/10';
    
    const residential = 'residential suite';
    const single = 'single room';
    
    hotel.filterRoomsByDate(selectedDate); 

    const residentialType = hotel.filterAllRoomsByType(residential);
    const singleType = hotel.filterAllRoomsByType(single);

    expect(residential).to.be.a('string');
    expect(residentialType).to.be.an('array');
    expect(residentialType.length).to.deep.equal(5);
    expect(residentialType).to.deep.equal([roomsData[0], roomsData[13], roomsData[14], roomsData[19], roomsData[22]]);

    expect(single).to.be.a('string');
    expect(singleType).to.be.an('array');
    expect(singleType.length).to.deep.equal(13);
    expect(singleType).to.deep.equal([roomsData[2], roomsData[3], roomsData[4], roomsData[6], roomsData[8], roomsData[10], roomsData[11], roomsData[12], roomsData[15], roomsData[18], roomsData[20], roomsData[21], roomsData[24]]);
  });
});