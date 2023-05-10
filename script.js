// Get the form element
const form = document.querySelector('form');

// Get the input elements
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const termsAndConditions = document.getElementById('termsAndConditions');

// Get the error message elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const phoneNumberError = document.getElementById('phoneNumberError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const termsAndConditionsError = document.getElementById('termsAndConditionsError');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Validate the input fields
  let hasError = false;
  
  if (firstName.value.trim() === '') {
    firstNameError.textContent = 'Name cannot be empty';
    hasError = true;
  } else {
    firstNameError.textContent = '';
  }
  
  if (lastName.value.trim() === '') {
    lastNameError.textContent = 'Name cannot be empty';
    hasError = true;
  } else {
    lastNameError.textContent = '';
  }
  
  if (!/^(\+)?(\d{10})$/.test(phoneNumber.value.trim())) {
    phoneNumberError.textContent = 'Please enter a valid phone number';
    hasError = true;
  } else {
    phoneNumberError.textContent = '';
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    hasError = true;
  } else {
    emailError.textContent = '';
  }
  
  if (password.value.trim().length < 8 || !/\d/.test(password.value.trim()) ||
