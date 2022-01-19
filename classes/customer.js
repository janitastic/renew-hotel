class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.totalSpent = 0;
    this.bookings = null;
    this.pastBookings = null;
    this.upcomingBookings = null;
    this.currentBookings = null;
  }

  listAllUserBookings(hotel) {
    this.bookings = hotel.bookings.filter(booking => this.id === booking.userID);
    return this.bookings;
  }

  listPastBookings(hotel, currentDate) {
    this.pastBookings = hotel.bookings.filter(booking => booking.date < currentDate);
    return this.pastBookings;
  }

  listUpcomingBookings(hotel, currentDate) {
    this.upcomingBookings = hotel.bookings.filter(booking => booking.date >= currentDate);
    return this.upcomingBookings;
  }

  listCurrentBookings(hotel, currentDate) {
    this.currentBookings = hotel.bookings.filter(booking => booking.date === currentDate);
    return this.currentBookings;
  }

  sortBookings(hotel) {
    
  }

  addTotalSpent(hotel) {
    let bookings = this.listAllUserBookings(hotel);
    this.totalSpent = bookings.reduce((total, booking) => {
      hotel.rooms.forEach(room => {
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
