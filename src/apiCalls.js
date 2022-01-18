import Hotel from '../classes/Hotel';
import {fetchAllData} from './scripts.js';
import domUpdates from './domUpdates.js';

/*************** FETCH CALLS ***************/

const fetchCustomers = () => {
  return fetch(customers)
    .then(response => response.json())
    // .then(data => console.log('customers data >>>>', data))
    .catch(error => {
      console.log(error)
      checkResponse(response)
    })
}

// const fetchSingleCustomer = (id) => {
//   fetch('http://localhost:3001/api/v1/customers/${id}')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//       console.log(error)
//       checkResponse(response)
//     })
// }

const fetchBookings = () => {
  return fetch(bookings)
    .then(response => response.json())
    // .then(data => console.log('bookings data>>>', data))
    .catch(error => {
      console.log(error)
      checkResponse(response)
    })
}

const fetchRooms = () => {
  return fetch(rooms)
    .then(response => response.json())
    // .then(data => console.log('rooms >>>', data))
    .catch(error => {
      console.log(error)
      checkResponse(response)
    })
}

/*************** POST REQUESTS ***************/

const postBooking = (newBooking) => {
  fetch(url);
  fetch(bookings, {
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
const singleCustomer = 'http://localhost:3001/api/v1/customers/${id}';

const allCustomersData = fetchCustomers();
const allBookingsData = fetchBookings();
const allRoomsData = fetchRooms();
// const singleCustomerData = fetchSingleCustomer(1);

const newBooking = { 'userID': 18, 'date': '2021/01/20', 'roomNumber': 5 }


export {fetchCustomers, fetchBookings, fetchRooms};

// export default {apiCalls};
