class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customers = customersData;
    // this.availableRooms = [];
    this.roomTypes = this.logRoomTypes();
    this.currentCustomer = null;
    this.currentCustomerFirstName = null;
  }

  logRoomTypes() {
    const allRoomTypes = this.rooms.map(room => room.roomType);
    return this.roomTypes = [...new Set(allRoomTypes)];
  }

  getCurrentCustomer(id) {
    this.currentCustomer = this.customers.find(customer => customer.id === id);
    const fullName = this.currentCustomer.name;
    const [first, last] = fullName.split(' ');
    this.currentCustomerFirstName = first;
  }

  filterRoomsByDate(selectedDate) {
    const bookedRooms = this.bookings.reduce((available, booking) => {
      if (booking.date === selectedDate) {
        available.push(booking.roomNumber);
      }
      return available;
    },[]);

    const allRoomNumbers = this.rooms.map(room => room.number);
    const removedRooms = new Set(bookedRooms);
    const availableRoomNumbers = allRoomNumbers.filter(number => {
      return !removedRooms.has(number);
    });

    this.availableRooms = this.rooms.reduce((roomDetails, room) => {
      if (availableRoomNumbers.includes(room.number)) {
        roomDetails.push(room)
      }
      return roomDetails;
    }, []);
    return this.availableRooms;
  }

  filterAllRoomsByType(selectedType) {
    return this.rooms.filter(room => room.roomType === selectedType)
  }

  filterAvailableRoomsByType(selectedType) {
    if (!this.availableRooms.length) {
      this.availableRooms = this.rooms.filter(room => room.roomType === selectedType);
      console.log('available rooms', this.availableRooms);
      return 'no available rooms message';
    } else {
      this.availableRooms = this.availableRooms.filter(room => room.roomType === selectedType);
      console.log('available rooms 2', this.availableRooms);
    }
  }
}

export default Hotel;