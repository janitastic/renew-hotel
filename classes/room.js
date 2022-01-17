class Room {
  constructor(roomInfo) {
    this.number = roomInfo.number;
    this.roomType = roomInfo.roomType;
    this.hasBidet = roomInfo.bidet;
    this.bedSize = roomInfo.bedSize;
    this.numBeds = roomInfo.numBeds;
    this.costPerNight = roomInfo.costPerNight;
  }
}

export default Room;
