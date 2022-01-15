import chai from 'chai';
const expect = chai.expect;

import Room from '../classes/Room';

import {roomsData} from '../sample-data/test-rooms';

describe.only('Room', () => {
  let room1, room2;

  beforeEach(() => {
    room1 = new Room(roomsData[0]);
    room2 = new Room(roomsData[1]);
  });

  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('Should instantiate a new instance of a room', () => {
    expect(room1).to.be.an.instanceOf(Room);
  });

  it('Should have room specific details', () => {
    const expected = {
      'number': 1,
      'roomType': 'residential suite',
      'bidet': true,
      'bedSize': 'queen',
      'numBeds': 1,
      'costPerNight': 358.4
    };
    const actual = room1;
    expect(actual).to.deep.equal(expected);
  });

  it('Should be able to instantiate a different room', () => {
    expect(room2).to.be.an.instanceOf(Room);
    const expected = {
      'number': 2,
      'roomType': 'suite',
      'bidet': false,
      'bedSize': 'full',
      'numBeds': 2,
      'costPerNight': 477.38
    };
    const actual = room2;
    expect(actual).to.deep.equal(expected);
  });
});
