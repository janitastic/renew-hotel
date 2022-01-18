class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.totalSpent = 0;
    this.allBookings = null;
    this.pastBookings = null;
    this.upcomingBookings = null;
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
