class Booking {
  constructor(booking, idLength, characters) {
    this.id = booking.id || this.createNewId(idLength, characters);
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
    this.roomServiceCharges = [];
  }

  createNewId(length, characters) {
    let newID = '';
    for (let i = 0; i < length; i++) {
      newID += characters.charAt(Math.floor(Math.random() * length));
    }
    return newID;
  }
}

export default Booking;
