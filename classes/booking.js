class Booking {
  constructor(booking) {
    this.id = booking.id || this.createNewId(17);
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
    this.roomServiceCharges = [];
  }

  createNewId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let newID = '';
    for (let i = 0; i < length; i++) {
      newID += characters.charAt(Math.floor(Math.random() * length));
    }
    return newID;
  }
}

export default Booking;
