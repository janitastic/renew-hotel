import Hotel from '../classes/Hotel';
import {loadPage} from './scripts.js';
/*************** FETCH CALLS ***************/

const fetchCustomers = () => {
  fetch(customers)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const fetchBookings = () => {
  fetch(bookings)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const fetchRooms = () => {
  fetch(rooms)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

/*************** PROMISE ***************/
let hotel;

const fetchAllData = () => {
  Promise.all([fetchCustomers(), fetchBookings(), fetchRooms()])
    .then(data => {
      // console.log(data)
      hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
    })
}

/*************** POST REQUESTS ***************/

const bookRoom = (userId, selectedDate, roomNumber) => {
  fetch(url);
  // fetch(bookings, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(
  //     { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }
  //   )
  // })
  // .then(response => {
  //   console.log(response, '<<<<response>>>>')
  //   // checkForErrors(response);//built out this function to look for the error
  //   response.json()})//promise object that's returned to us. Carries the properties and values
  // .then(data => console.log(data))
  // .catch(error => showError(error));
}

// bookRoom(18, '2021/01/13', 5);


/*************** ERROR HANDLING ***************/

/*************** VARIABLES ***************/
const customers = 'http://localhost:3001/api/v1/customers';
const bookings = 'http://localhost:3001/api/v1/bookings';
const rooms = 'http://localhost:3001/api/v1/rooms';

/*************** QUERY SELECTORS ***************/

export default {fetchAllData, fetchCustomers, fetchBookings, fetchRooms};
