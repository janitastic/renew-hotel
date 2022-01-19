/********************* VARIABLE IMPORTS ******************/
import {currentUser, currentUserName} from './scripts';
import Hotel from '../classes/Hotel';
import Customer from '../classes/Customer';
import Room from '../classes/Room';
import Booking from '../classes/Booking';

import {hotel, customer, roomsData, bookingsData, customersData, customerData, currentDate, currentUserId} from './scripts';

/********************* QUERY SELECTORS ******************/

// ---- HERO ---- //
const userMessage = document.getElementById('userMessage');//greeting
const heroMessage = document.getElementById('heroMessage');
const userName = document.getElementById('userName');

// ---- MENU BUTTONS ---- //
const reservationsBtn = document.getElementById('reservations');
const logInBtn = document.getElementById('logInForm');
const bookRoomBtn = document.getElementById('selectRoom');

// ---- SECTIONS & DISPLAYS ---- //
const userDashboard = document.getElementById('userDashboard');
const totalSpent = document.getElementById('totalSpent');
const upcomingView = document.getElementById('upcomingView');
const pastView = document.getElementById('pastView');
const roomsView = document.getElementById('roomsView');
const filteredResults = document.getElementById('filteredResults');
const loyaltyMessage = document.getElementById('loyaltyMessage');
const reservationsTitle = document.getElementById('upcoming');
const confirmationMessage = document.getElementById('confirmationMessage');
const resultsMessage = document.getElementById('resultsMessage');
const resultCount = document.getElementById('resultCount');
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
  },

  loadLogInPage() {
    this.hide([bookNow, searchForm, userDashboard, roomsView])
  },

  loadLandingPage() {
    this.hide([userDashboard, roomsView, loginView, resultsMessage, confirmationMessage, filteredResults]);
    this.show([userMessage, searchForm, reservationsBtn, userDashboard, roomsView]);
  },

  displayUserDashboard(customer, hotel) {
    const fullName = customer.name;
    const [first, last] = fullName.split(' ');
    userName.innerText = first;
    totalSpent.innerText = customer.addTotalSpent(hotel);
  },

  displayUpcomingStays(hotel) {
    const allBookings = customer.listAllUserBookings(hotel);
    allBookings.forEach(booking => {
      return upcomingResults.innerHTML += `
      <article class="room-card" id="${booking.roomNumber}">
        <div class="image-area">
          <div class="thumbnail-image" id="thumbRoomImage">
            <img src="../images/suite.png" class="room-image" alt="relaxing and bright suite">
          </div>
        </div>
        <div class="room-details">
          <p class="card-text">Booking Date: <span class="card-text" id="bookedDate">${booking.date}</span></p>
          <p class="card-text">Reservation ID: <span class="card-text" id="bookedDate">${booking.id}</span></p>
        </div>
      </article>`
    });
  },

  displaySearchResults() {
    this.hide([userDashboard, confirmationMessage, loyaltyMessage, reservationsTitle])
    this.show([userDashboard, filteredResults, roomsView])
  },

  displaySearchByDate(selectedDate) {
    const filterRooms = hotel.filterRoomsByDate(selectedDate);
    this.show([resultsMessage]);
    this.hide([reservationsBtn]);
    resultCount.innerText = filterRooms.length;
    filterRooms.forEach(room => {
      return filteredResults.innerHTML += `
      <article class="room-card" id="${room.number}">
          <div class="image-area">
            <div class="thumbnail-image" id="thumbRoomImage">
              <img src="../images/suite.png" class="room-image" alt="relaxing and bright suite">
            </div>
          </div>
          <div class="room-details">
            <h3 class="card-text" id="roomType">${room.roomType}</h3>
            <p class="card-text">Beds: <span class="card-text" id="typeOfBed">${room.numBeds} ${room.bedSize}</span></p>
            <p class="card-text" id="costPerNight">$${room.costPerNight} per night</p>
            <button class="select-room" id="${room.number}">Book Room</button>
          </div>
        </article>`
    });
  },

  displayFilteredSearch(selectedRoomType) {
    const filteredType = hotel.filterAvailableRoomsByType(selectedRoomType);
    this.show([resultsMessage]);
    resultCount.innerText = filteredType.length;
    filteredResults.innerHTML = '';
    filteredType.forEach(room => {
      return filteredResults.innerHTML += `
      <article class="room-card" id="${room.number}">
          <div class="image-area">
            <div class="thumbnail-image" id="thumbRoomImage">
              <img src="../images/suite.png" class="room-image" alt="relaxing and bright suite">
            </div>
          </div>
          <div class="room-details">
            <h3 class="card-text" id="roomType">${room.roomType}</h3>
            <p class="card-text">Beds: <span class="card-text" id="typeOfBed">${room.numBeds} ${room.bedSize}</span></p>
            <p class="card-text" id="costPerNight">$${room.costPerNight} per night</p>
            <button class="select-room" id="selectRoom">Book Room</button>
          </div>
        </article>`
    });
  },

  clearSearchResults() {
    this.hide([roomsView]);
  },

  confirmBooking() {
    this.show([confirmationMessage]);
    this.hide([roomsView]);
  },

  displayLogInError() {
    this.show([loginMessage]);
  }
}

export default domUpdates;