/////////////////////////////////////////////////////
/* Function to change DOM if user clicks on sign in */
const signin = document.getElementById("signin");

signin.addEventListener("click", function(event) {
  event.preventDefault();
  const header = document.getElementById("heading");
  header.innerHTML = "Sign in";
});

////////////////////////////////////////////////////
/* Form Validation 
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let pwd2 = document.getElementById("pwd2").value;
  
  if (fname == "" || lname == "" || email == "" || pwd == "" || pwd2 == "") {
    alert("All fields are required");
    return false;
  }
  if (pwd === pwd2) {
    alert("Password do not match");
    return false;
  }
  return true;
}); */

/////////////////////////////////////////////////////
/* Try this  */
function validateForm() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let pwd2 = document.getElementById("pwd2").value;

  if (fname == "" || lname == "" || email == "" || pwd == "" || pwd2 == "") {
      alert("All fields are required");
      return false;
  }

  if (pwd !== pwd2) {
    alert("Password do not match");
    return false;
  }

  if (pwd.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  if (pwd.charCodeAt(0) >= 65 && pwd.charCodeAt(0) <= 90) {
  } else {
    alert("Password must begin with an Uppercase Character (A-Z)");
    return false;
  }
  return true;
}