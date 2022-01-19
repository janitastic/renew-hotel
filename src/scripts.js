/*************** FILE IMPORTS ***************/
import './css/base.scss';
import {fetchCustomers, fetchBookings, fetchRooms, fetchSingleCustomer, postBooking} from './apiCalls';
import domUpdates from './domUpdates';
import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';
import Booking from '../classes/Booking';

/*************** IMAGE IMPORTS ***************/
import './images/dew-breeze-suites-logo.png';
import './images/dew-breeze-header-logo.png';
import './images/dew-breeze-favicon.png';
import './images/junior-suite.png';
import './images/residential.png';
import './images/single.png';
import './images/suite.png';

// ---- MENU BUTTONS ---- //
const reservationsBtn = document.getElementById('reservations');
const logInBtn = document.getElementById('logInForm');
const bookRoomBtn = document.getElementById('selectRoom');

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
// let currentCustomerId = 18;//currently global
let currentUser;
let currentUserId;
let currentUserName, currentTotalSpent, currentUserBookings;
let dateSelection, selectedDate, selectedRoomType;

/*************** PROMISE & DATA COLLECTION ***************/

const loadData = () => {
  fetchAllData()
  .then(data => instantiateClasses(data))
  .then(data => loadCustomerDashboard())
  .then(data => domUpdates.loadLandingPage())
};

const fetchAllData = () => {
  return Promise.all([fetchRooms(), fetchBookings(),fetchCustomers(),fetchSingleCustomer(currentUserId)])
    .catch(error => {
      domUpdates.displayError(error)
  })
}

const instantiateClasses = (data) => {
  roomsData = data[0].rooms;
  bookingsData = data[1].bookings;
  customersData = data[2].customers;
  customerData = data[3];
  hotel = new Hotel(roomsData, bookingsData, customersData);
  customer = new Customer(customerData);
  hotel.getCurrentCustomer(currentUserId);
}

/**************** FUNCTIONS ****************/


const loadCustomerDashboard = () => {
  domUpdates.displayUserDashboard(customer, hotel);
  domUpdates.displayUpcomingStays(hotel, currentDate);
}

const selectDate = () => {
  dateSelection = dateInput.value;
  selectedDate = dateSelection.split("-").join("/");
}

const selectRoomType = () => {
  selectedDate = dateInput.value;
  selectedRoomType = roomTypeInput.value;
}

const loadAvailableBookings = (event) => {
  event.preventDefault();
  selectDate();
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
  domUpdates.clearSearchResults();
}

const bookARoom = (event) => {
  const newBooking = {
    userID: currentUserId,
    date: selectedDate,
    roomNumber: Number(event.target.id)
    }
    postBooking(newBooking)
    .then(response => {
      domUpdates.confirmBooking()
      console.log(response)
      console.log(newBooking)
    })
    .catch(error => console.log(error));
    
}

const getUserId =() => {
  currentUserId = parseInt(userNameInput.value.substring(8))
}

const login = (event) => {
  event.preventDefault();
  getUserId();
  if(currentUserId < 50 && 0 < currentUserId && passwordInput.value === 'overlook2021'){
    fetchSingleCustomer(currentUserId)
      .then(data => {
        loadData()
      })
  } else {
    domUpdates.displayLogInError();
  }
}


/**************** EVENT LISTENERS ****************/

window.addEventListener('load', () => {domUpdates.loadLogInPage()});
searchDate.addEventListener('submit', loadAvailableBookings);
searchRooms.addEventListener('submit', filterRoomsByType);
clearBtn.addEventListener('click', resetSearch);
logInBtn.addEventListener('submit', login);
filteredResults.addEventListener('click', bookARoom);


/*************** EXPORTS ***************/

export {currentUserId, loadData, currentUserName, currentDate};

export {hotel, customer, roomsData, bookingsData, customersData, customerData, fetchAllData};