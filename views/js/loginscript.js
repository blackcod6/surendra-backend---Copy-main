
let idconfirmpassword = document.getElementById("idconfirmpassword");
let idpassword = document.getElementById("idpassword");

var card = document.getElementById("card");
function openregister() {
  card.style.transform = "rotateY(0deg)";
}
function openlogin() {
  card.style.transform = "rotateY(-180deg)";
}

//form validation
debugger
function valiemail() {
  
  let idemail = document.getElementById("idEmail");
  // const rightemailsyntax = /^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][a-z]{2,4}$/;
 
  if (!idemail.value.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
    idemail.style.borderBottom = "2px solid red";
    return false;
  } else {
    idemail.style.borderBottom = "2px solid black";
    // return true;
  }
}

function validata() {
  // let idname = document.getElementById("idname").value;

  

  if (idpassword.value != idconfirmpassword.value) {
    alert("Password is not matched");
    return false;
  } else {
    return true;
  }
}
