class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.totalSpent = 0;
  }

  listAllUserBookings(hotel) {
    this.bookings = hotel.bookings.filter(booking => this.id === booking.userID);
    return this.bookings; 
  }

  addTotalSpent(hotel) {
    this.totalSpent = this.bookings.reduce((total, booking) => {
      hotel.rooms.find(room => {
        if (room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      });
      return Math.round(total * 100)/100;
    }, 0);
    return this.totalSpent;
  }
}

export default Customer;
