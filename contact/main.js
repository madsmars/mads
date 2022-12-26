// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.onsubmit = return ("false") { 
}

document.addEventListener("DOMContentLoaded", function() {
  fields.fname = document.getElementById('fname');
  fields.subject1 = document.getElementById('subject1');
  fields.subject = document.getElementById('subject');
  fields.country = document.getElementById('country');
  fields.mname = document.getElementById('mname');
 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(subject) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(subject).toLowerCase());
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.fname, isNotEmpty);
  valid &= fieldValidation(fields.subject1, isNotEmpty);
  valid &= fieldValidation(fields.subject, isNotEmpty);
  valid &= fieldValidation(fields.country, isNotEmpty);
  valid &= fieldValidation(fields.mname, isNotEmpty);
 
  return valid;
 }

 class User {
  constructor(fname, subject1, subject, country, mname) {
  this.fname = fname;
  this.subject1 = subject1;
  this.subject = subject;
  this.country = country;
  this.mname = mname;
 }

 class User {
  constructor(fname, subject1, subject, country, mname) {
  this.fname = fname;
  this.subject1 = subject1;
  this.subject = subject;
  this.country = country;
  this.mname = mname;
  }
 }