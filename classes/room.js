class Room {
  constructor(roomInfo) {
    this.number = roomInfo.number;
    this.roomType = roomInfo.roomType;
    this.hasBidet = roomInfo.bidet;
    this.bedSize = roomInfo.bedSize;
    this.numBeds = roomInfo.numBeds;
    this.costPerNight = roomInfo.costPerNight;
    this.imageURL;
  }

  selectImage(images) {
    if (this.roomType === 'residential suite') {
      this.imageURL = './images/residential_suite';
    } else if (this.roomType === 'suite') {
      this.imageURL = './images/suite';
    } else if (this.roomType === 'single room') {
      this.imageURL = './images/single_room';
    } else {
      this.imageURL = './images/junior-suite'
    }
  }
}

export default Room;
