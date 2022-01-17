// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

/**************** EVENT LISTENERS ****************/

window.addEventListener('load', apiCalls.fetchAllData);


/**************** FUNCTIONS ****************/
const loadPage = () => {
  console.log('data received')
}
