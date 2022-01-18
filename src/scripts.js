/*************** FILE IMPORTS ***************/
import './css/base.scss';
import {fetchCustomers, fetchBookings, fetchRooms, fetchSingleCustomer} from './apiCalls';
import domUpdates from './domUpdates';

import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';
import Booking from '../classes/Booking';

/*************** IMAGE IMPORTS ***************/
import './images/hero.png';
import './images/dew-breeze-suites-logo.png';
import './images/dew-breeze-header-logo.png';
import './images/dew-breeze-favicon.png';
import './images/junior-suite.png';
import './images/residential.png';
import './images/single.png';
import './images/suite.png';


/*************** GLOBAL VARIABLES ***************/
let currentDate = new Date().toJSON().slice(0, 10);
let hotel, roomsData, bookingsData, customersData, customer;
let currentCustomerId = 18;

/*************** PROMISE & DATA COLLECTION ***************/

const loadData = () => {
  fetchAllData().then(data => instantiateClasses(data))
  domUpdates.loadLandingPage();
};

const fetchAllData = () => {
  return Promise.all([fetchRooms(), fetchBookings(),fetchCustomers()])
    .catch(err => {
      domUpdates.displayError(error)
      console.log('Promise not fulfilled.', error);
  })
}

const instantiateClasses = (data) => {
  console.log('my data >>>', data);
    //full arrays below need to be iterated over
    roomsData = data[0].rooms;
    bookingsData = data[1].bookings;
    customersData = data[2].customers;
    hotel = new Hotel(roomsData, bookingsData, customersData);
  console.log(hotel);
    hotel.getCurrentCustomer(currentCustomerId);
  console.log(currentCustomerId);
    //display customer name to DOM
  fetchCurrentUser(currentCustomerId);
}

const fetchCurrentUser = (id) => {
  console.log('id in fetch call', id)
  return Promise.all([fetchSingleCustomer(id)])
    .catch(err => {
      domUpdates.displayError(error)
      console.log('Promise not fulfilled.', error);
  })
}

/**************** FUNCTIONS ****************/
const instantiateUser = (data) => {
  customer = new Customer(data);
  domUpdates.loadUserInfo(customer);
}


/**************** EVENT LISTENERS ****************/

// window.addEventListener('load', loadPage);
window.addEventListener('load', loadData);


/*************** EXPORTS ***************/

export {currentCustomerId, fetchAllData};