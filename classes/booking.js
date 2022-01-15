import {bookingsData} from '../sample-data/test-bookings';

class Booking {
  constructor(booking) {
    this.id = booking.id;
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
    this.roomServiceCharges = [];
  }

  // findHighestNumber() {
  //   const sortLowestToHighest = bookingsData.sort((a,b) => a.userID - b.userID);
  //   return sortLowestToHighest.pop().userID;
  // }
}

export default Booking;
