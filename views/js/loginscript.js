
let idconfirmpassword = document.getElementById("idconfirmpassword");
let idpassword = document.getElementById("idpassword");
let idname = document.getElementById("idname");

var card = document.getElementById("card");
function openregister() {
  card.style.transform = "rotateY(0deg)";
}
function openlogin() {
  card.style.transform = "rotateY(-180deg)";
}

//form validation
// debugger
function valiemail() {
  
  let idemail = document.getElementById("idEmail");
  // const rightemailsyntax = /^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][a-z]{2,4}$/;
 
  if (!idemail.value.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
    idemail.style.borderBottom = "2px solid red";
    return false;
  } else {
    idemail.style.borderBottom = "2px solid black";
    return true;
  }
}

function validata() {
  // let idname = document.getElementById("idname").value;
  if (!valiemail()) {
    // Email validation failed, show a warning or prevent form submission
    // alert("Email syntax is incorrect");
    return false;
  }
  
  if (idpassword.value != idconfirmpassword.value) {
    alert("Password is not matched");
    return false;
  } else {
    return true;
  }
  
}

function validateName() {
  // Remove non-alphabetic characters
  idname.value = idname.value.replace(/[^A-Za-z\s]/g, '');

  // You can also display a message or disable the idname if needed
  // For example, show a message if the user enters a number
  if (/\d/.test(idname.value)) {
    alert('Numbers are not allowed in the name field.');
  }
}