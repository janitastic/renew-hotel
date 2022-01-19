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

// ---- SEARCH INPUTS & BUTTONS ---- //
const dateInput = document.getElementById('dateInput');
const searchDate = document.getElementById('searchDate');
const searchRooms = document.getElementById('searchRooms');
const dateSearchBtn = document.getElementById('dateSearch');
const roomTypeInput = document.getElementById('typeInput');
const roomSearchBtn = document.getElementById('typeSearch');
const clearBtn = document.getElementById('clear');

/*************** GLOBAL VARIABLES ***************/
let todaysDate = new Date().toJSON().slice(0, 10);
let currentDate = todaysDate.split("-").join("/");
const minDate = document.getElementById('dateInput').setAttribute("min", todaysDate);
let hotel, customer, roomsData, bookingsData, customersData, customerData;
let currentCustomerId = 18;//currently global
let currentUser;
let currentUserId;
let currentUserName, currentTotalSpent, currentUserBookings;
let dateSelection, selectedDate, selectedRoomType;


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
  domUpdates.displayUpcomingStays(hotel, currentDate);
  console.log(currentDate);
}

const selectDate = () => {
  dateSelection = dateInput.value;
  selectedDate = dateSelection.split("-").join("/");
}

const selectRoomType = () => {
  selectedDate = dateInput.value;
  const roomTypes = hotel.logRoomTypes();
  // console.log(roomTypes);

  selectedRoomType = roomTypeInput.value;
  // console.log(selectedRoomType)
  if (selectedRoomType === 'single') {
    selectedRoomType = 'single room'
  } else if (selectedRoomType === 'residential') {
    selectedRoomType = 'residential suite'
  } else if (selectedRoomType === 'junior') {
    selectedRoomType = 'junior suite'
  }
}

const loadAvailableBookings = (event) => {
  event.preventDefault();
  selectDate();
  console.log('selected date', selectedDate);
  domUpdates.displaySearchResults();
  domUpdates.displaySearchByDate(selectedDate);
}

const filterRoomsByType = (event) => {
  event.preventDefault();
  selectRoomType();
  domUpdates.displayFilteredSearch(selectedRoomType);
}

const resetSearch = () => {
  dateInput.value = null;
  roomTypeInput.value = null;
}

/**************** EVENT LISTENERS ****************/

// window.addEventListener('load', loadPage);
window.addEventListener('load', loadData);
homeBtn.addEventListener('click', loadCustomerDashboard);
searchDate.addEventListener('submit', loadAvailableBookings);
searchRooms.addEventListener('submit', filterRoomsByType);
clearBtn.addEventListener('click', resetSearch);
// logInBtn.addEventListener('click', loadCustomerDashboard);

//test button
// bookNow.addEventListener('click', loadCustomerDashboard);

/*************** EXPORTS ***************/

export {currentCustomerId, loadData, currentUserName, currentDate};

export {hotel, customer, roomsData, bookingsData, customersData, customerData};