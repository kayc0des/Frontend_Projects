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

  if (pwd === pwd2) {
    alert("Password do not match");
    return false;
  }
  return true;
}