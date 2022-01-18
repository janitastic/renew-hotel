/*************** FILE IMPORTS ***************/
import './css/base.scss';
import apiCalls from './apiCalls';
import {fetchCustomers, fetchBookings, fetchRooms, allCustomersData, allBookingsData, allRoomsData} from './apiCalls';

import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';
import Booking from '../classes/Booking';

/*************** IMAGE IMPORTS ***************/
import './images/hero.png';
import './images/dew-breeze-suites-logo.png';
import './images/dew-breeze-header-logo.png';
import './images/dew-breeze-favicon.png';


/*************** GLOBAL VARIABLES ***************/
let hotel, bookings, rooms, customer;
let customerId;
/*************** PROMISE & DATA COLLECTION ***************/

const loadData = () => {
  fetchAllData().then(data => instantiateClasses(data))
};

const fetchAllData = () => {
  return Promise.all([allCustomersData, allBookingsData, allRoomsData])
}

const instantiateClasses = (data) => {
    console.log('my data >>>', data);
    console.log('load page data received')
    bookings = new Booking(data[1]);
    rooms = new Room(data[2]);
    customer = new Customer(data[0].customers[0]);
    hotel = new Hotel(data[0], data[1], data[2]);
}

const loadPage = (data) => {
  // console.log('load page data received')
  // customersData = data[0].customers;
  // bookingsData = data[1].bookings;
  // roomsData = data[2].rooms;
  // collectData(customersData, bookingsData, roomsData);
}

const collectData = (customersData, bookingsData, roomsData) => {
  // collectHotelData(bookingsData, roomsData, customersData);
  // collectCustomers(customersData);
}

/**************** FUNCTIONS ****************/



/**************** EVENT LISTENERS ****************/

// window.addEventListener('load', loadPage);
window.addEventListener('load', loadData);


/*************** EXPORTS ***************/

export {fetchAllData};