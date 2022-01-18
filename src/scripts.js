// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './apiCalls';
import {fetchAllData, fetchCustomers, fetchBookings, fetchRooms} from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';
import './images/hero.png';
import './images/dew-breeze-suites-logo.png';
import './images/dew-breeze-header-logo.png';
import './images/dew-breeze-favicon.png';


/**************** FUNCTIONS ****************/
const loadPage = () => {
  console.log('data received')
  apiCalls.fetchAllData()
    .then(data => {
      console.log(data);
      console.log('then is working')
      customersData = data[0].customers
      bookingsData = data[1].bookingsData
      roomsData = data[2].roomsData
    })
}

/**************** EVENT LISTENERS ****************/

// window.addEventListener('load', loadPage);
window.addEventListener('load', () => {apiCalls.fetchAllData()});