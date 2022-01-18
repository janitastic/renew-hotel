/********************* QUERY SELECTORS ******************/

// ---- MENU BUTTONS ---- //
const homeBtn = document.getElementById('home');
const reservationsBtn = document.getElementById('reservations');
const logInBtn = document.getElementById('logIn');//goes to dashboard
const logOutBtn = document.getElementById('logOut');//goes home

// ---- HERO ---- //
const userMessage = document.getElementById('userMessage');//greeting
const heroLogo = document.getElementById('heroLogo');//hide on login

// ---- SEARCH INPUTS & BUTTONS ---- //
const dateInput = document.getElementById('dateInput');
const dateSearchBtn = document.getElementById('dateSearch');
const roomTypeInput = document.getElementById('typeInput');
const roomSearchBtn = document.getElementById('typeSearch');
const clearBtn = document.getElementById('clear');

// ---- SECTIONS & DISPLAYS ---- //
const userDashboard = document.getElementById('userDashboard');
const roomsView = document.getElementById('roomsView');
const noRoomsMessage = document.getElementById('noRoomsMessage');
const loginView = document.getElementById('loginView');


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

  loadLandingPage() {
    domUpdates.hide([
      logOutBtn, reservationsBtn
    ])
  },

  loadUserInfo(user) {
    userMessage.innerHTML = `
      <h2 class="user-message">Welcome Back ${user.name}!</h2>
      <p class="user-message">Your next vacation awaits...</p>
    `;
    domUpdates.hide([
      heroLogo
    ])
  },
}

export default domUpdates;