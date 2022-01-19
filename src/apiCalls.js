import Hotel from '../classes/Hotel';
import {currentCustomerId, fetchAllData} from './scripts.js';
import domUpdates from './domUpdates.js';
// let id = 18;
/*************** FETCH CALLS ***************/

const fetchCustomers = () => {
  return fetch(customers)
    .then(response => response.json())
    // .then(data => console.log('customers data >>>>', data))
    .catch(error => {
      console.log(error)
      checkForErrors(response)
    })
}

const fetchSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    // .then(data => console.log('currentUser >>>', data))
    .catch(error => {
      console.log(error)
      checkForErrors(response)
    })
}

const fetchBookings = () => {
  return fetch(bookings)
    .then(response => response.json())
    // .then(data => console.log('bookings data>>>', data))
    .catch(error => {
      console.log(error)
      checkForErrors(response)
    })
}

const fetchRooms = () => {
  return fetch(rooms)
    .then(response => response.json())
    // .then(data => console.log('rooms >>>', data))
    .catch(error => {
      console.log(error)
      checkForErrors(response)
    })
}

/*************** POST REQUESTS ***************/

const postBooking = (newBooking) => {
  return fetch(bookings, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBooking)
  })
  .then(response => {
    console.log(response, '<<<<response>>>>')
    checkForErrors(response);//built out this function to look for the error
    response.json()})//promise object that's returned to us. Carries the properties and values
  .then(data => console.log(data))
  .catch(error => showError(error));
}

// postBooking(newBooking);


/*************** ERROR HANDLING ***************/

const checkForErrors = (response) => {
  if (!response.ok) {
    throw new Error('Status: ${response.status} StatusText: ${response.status.text}')
  } else if (response.ok) {
    fetchAllData();
    // display message on dom
    return response.json()
  }
}

/*************** VARIABLES ***************/
const customers = 'http://localhost:3001/api/v1/customers';
const bookings = 'http://localhost:3001/api/v1/bookings';
const rooms = 'http://localhost:3001/api/v1/rooms';


const newBooking = { 'userID': 18, 'date': '2021/01/20', 'roomNumber': 5 }


export {fetchCustomers, fetchBookings, fetchRooms, fetchSingleCustomer};
