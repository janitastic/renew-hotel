/********************* VARIABLE IMPORTS ******************/
import {currentUser, currentUserName} from './scripts';
import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';
import Booking from '../classes/Booking';

import {hotel, customer, roomsData, bookingsData, customersData, customerData, currentTotalSpent} from './scripts';

/********************* QUERY SELECTORS ******************/

////TEST BUTTON
const bookNow = document.getElementById('bookNow');

// ---- MENU BUTTONS ---- //
const homeBtn = document.getElementById('home');
const reservationsBtn = document.getElementById('reservations');
const logInBtn = document.getElementById('logIn');//goes to dashboard
const logOutBtn = document.getElementById('logOut');//goes home

// ---- HERO ---- //
const userMessage = document.getElementById('userMessage');//greeting
const heroLogo = document.getElementById('heroLogo');//hide on login
const userName = document.getElementById('userName');

// ---- SEARCH INPUTS & BUTTONS ---- //
const dateInput = document.getElementById('dateInput');
const dateSearchBtn = document.getElementById('dateSearch');
const roomTypeInput = document.getElementById('typeInput');
const roomSearchBtn = document.getElementById('typeSearch');
const clearBtn = document.getElementById('clear');

// ---- SECTIONS & DISPLAYS ---- //
const userDashboard = document.getElementById('userDashboard');
const totalSpent = document.getElementById('totalSpent');
const upcomingView = document.getElementById('upcomingView');
const pastView = document.getElementById('pastView');
const roomsView = document.getElementById('roomsView');
const filteredResults = document.getElementById('filteredResults');
const noRoomsMessage = document.getElementById('noRoomsMessage');
const confirmationMessage = document.getElementById('confirmationMessage');
const loginView = document.getElementById('loginView');

// ---- DASHBOARD CARDS SECTION ---- //
const upcomingResults = document.getElementById('upcomingResults');
const bookedRoomType = document.getElementById('bookedRoomType');
const bookedBedType = document.getElementById('bookedBed');
const bookedCostPerNight = document.getElementById('bookedCost');
const bookedDate = document.getElementById('bookedDate');

const pastResults = document.getElementById('pastResutls');
const pastRoomType = document.getElementById('pastRoomType');
const pastBedType = document.getElementById('pastBed');
const pastCostPerNight = document.getElementById('pastCost');
const pastDate = document.getElementById('pastDate');


// ---- ROOM SEARCH CARDS SECTION & BUTTONS ---- //
const thumbRoomImage = document.getElementById('thumbRoomImage');
const selectedRoom = document.getElementById('selectedRoom');
const roomType = document.getElementById('roomType');
const typeOfBed = document.getElementById('typeOfBed');
const costPerNight = document.getElementById('costPerNight');

const selectRoomBtn = document.getElementById('selectRoom');
const goBackBtn = document.getElementById('goBack');

/********************* DOM UPDATES ******************/

const domUpdates = {
  hide(elements) {
    elements.forEach(element => element.classList.add('hidden'));
  },

  show(elements) {
    elements.forEach(element => element.classList.remove('hidden'));
  },

  displayError(error) {
    console.log('need to display error on page', error)
    //add innerHTML display here
  },

  loadLandingPage() {//happens before login on loadData
    domUpdates.hide([logOutBtn, reservationsBtn]);
  },

  displayUserDashboard(customer, hotel) {
    domUpdates.hide([heroLogo, selectedRoom, noRoomsMessage, confirmationMessage])
    domUpdates.show([userMessage])
    userName.innerText = currentUserName;
    console.log('this is my hote>>>>>>', hotel)
    console.log('this is my customer>>>>>>>', customer)

    customer.addTotalSpent(hotel);
    totalSpent.innerText = customer.totalSpent;
    console.log('total $$$$$$$', customer.totalSpent)
  },

  displayUserBookings(customer, hotel) {
    const allBookings = customer.listAllUserBookings(hotel);
    console.log(allBookings);
  }
}

export default domUpdates;