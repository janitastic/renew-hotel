import chai from 'chai';
const expect = chai.expect;

import Room from '../classes/Room';
import {roomsData} from '../sample-data/sampleRooms';

describe('Room', () => {
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

  it('Should be able to instantiate another instance of a room', () => {
    expect(room2).to.be.an.instanceOf(Room);
  });

  it('Should have room number', () => {
    expect(room1).to.have.a.property('number');
    expect(room1.number).to.be.a('number');
    expect(room1.number).to.be.within(1, 25, 'Room number options are 1 through 25.');
  });

  it('Should have a room type', () => {
    expect(room1).to.have.a.property('roomType');
    expect(room1.roomType).to.be.a('string');
    expect(['suite', 'residential suite', 'single room', 'junior suite'], 'Invalid room type.').to.include(room1.roomType);
  });

  it('Should have a bidet or not have a bidet', () => {
    expect(room1).to.have.a.property('hasBidet');
    expect(room1.hasBidet).to.be.true;
    expect(room2.hasBidet).to.be.false;
  });

  it('Should have a bed size', () => {
    expect(room1).to.have.a.property('bedSize');
    expect(room1.bedSize).to.be.a('string');
    expect(['twin', 'full', 'queen', 'king'], 'Invalid bed size.').to.include(room1.bedSize);
    expect(['twin', 'full', 'queen', 'king'], 'Invalid bed size.').to.include(room2.bedSize);
  });

  it('Should have 1 to 2 beds', () => {
    expect(room1).to.have.a.property('numBeds');
    expect(room1.number).to.be.a('number');
    expect(room1.numBeds).to.be.at.least(1, 'Each room should have at least 1 bed.');
    expect(room2.numBeds).to.be.at.most(2, 'Each room should have no more than 2 beds.');
  });

  it('Should have a nightly rate', () => {
    expect(room1).to.have.a.property('costPerNight');
    expect(room1.number).to.be.a('number');
    expect(room1.costPerNight).to.be.at.greaterThanOrEqual(172.09, 'The lowest nightly rate available is 172.09.');
    expect(room2.costPerNight).to.be.at.lessThanOrEqual(497.64, 'The highest nightly rate available is 497.64.');
  });
});
