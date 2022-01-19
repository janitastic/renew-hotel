/*************** FILE IMPORTS ***************/
import './css/base.scss';
import {fetchCustomers, fetchBookings, fetchRooms, fetchSingleCustomer} from './apiCalls';
// import {bookNow, homeBtn, reservationsBtn, logInBtn, logOutBtn} from './domUpdates';
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

// ---- MENU BUTTONS ---- //
const homeBtn = document.getElementById('home');
const reservationsBtn = document.getElementById('reservations');
const logInBtn = document.getElementById('logIn');//goes to dashboard
const logOutBtn = document.getElementById('logOut');//goes home


/*************** GLOBAL VARIABLES ***************/
let currentDate = new Date().toJSON().slice(0, 10);
let hotel, customer, roomsData, bookingsData, customersData, customerData;
let currentCustomerId = 18;//currently global
let currentUser;
let currentUserId;
let currentUserName, currentTotalSpent, currentUserBookings;


///Random User (delete later)
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}

/*************** PROMISE & DATA COLLECTION ***************/

const loadData = () => {
  fetchAllData().then(data => instantiateClasses(data))
  domUpdates.loadLandingPage();
};

const fetchAllData = () => {
  return Promise.all([fetchRooms(), fetchBookings(),fetchCustomers(),fetchSingleCustomer(currentCustomerId)])
    .catch(error => {
      domUpdates.displayError(error)
      console.log('Promise not fulfilled.', error);
  })
}

const instantiateClasses = (data) => {
  console.log('my data >>>', data);
  roomsData = data[0].rooms;
  bookingsData = data[1].bookings;
  customersData = data[2].customers;
  customerData = data[3];
  hotel = new Hotel(roomsData, bookingsData, customersData);
  customer = new Customer(customerData);
  hotel.getCurrentCustomer(currentCustomerId);
}

/**************** FUNCTIONS ****************/


const loadCustomerDashboard = () => {
  domUpdates.displayUserDashboard(customer, hotel);
}

const getAllUserBookings = () => {
  domUpdates.displayUserBookings(customer, hotel);
}

/**************** EVENT LISTENERS ****************/

// window.addEventListener('load', loadPage);
window.addEventListener('load', loadData);
logInBtn.addEventListener('click', loadCustomerDashboard);

//test button
// bookNow.addEventListener('click', loadCustomerDashboard);

/*************** EXPORTS ***************/

export {currentCustomerId, loadData, currentUserName, currentTotalSpent};

export {hotel, customer, roomsData, bookingsData, customersData, customerData};