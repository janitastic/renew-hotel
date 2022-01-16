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
   
  filterRoomsByDate(hotel, selectedDate) {
    const bookedRooms = hotel.bookings.reduce((available, booking) => {
      if (booking.date === selectedDate) {
        available.push(booking.roomNumber);
      }
      return available;
    },[]);

    const allRoomNumbers = hotel.rooms.map(room => room.number);
    const removedRooms = new Set(bookedRooms);
    const availableRoomNumbers = allRoomNumbers.filter(number => {
      return !removedRooms.has(number);
    })

    const availableRoomDetails = hotel.rooms.reduce((roomDetails, room) => {
      if (availableRoomNumbers.includes(room.number)) {
        roomDetails.push(room)
      }
      return roomDetails;
    }, []);
    return availableRoomDetails;
  }
}

export default Customer;
