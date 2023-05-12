/////////////////////////////////////////////////////
/* Function to change DOM if user clicks on sign in */
const signin = document.getElementById("existingUser");

signin.addEventListener("click", function(event) {
  event.preventDefault();
  /* DOM store objects to be manipulated in variables */
  const header = document.getElementById("heading");
  const formParent = document.getElementById("myForm");
  const formChild1 = document.getElementById("signUpData");
  const formChild2 = document.getElementById("confirmPassword");
  const submitBtn = document.getElementById('submit');
  const loginBtn = document.getElementById("login");
  const signUp = document.getElementById("newUser");
  const forgotPassword = document.getElementById("forgotPassword");


  header.innerHTML = "Sign in"; //Change Sign up to Sign in
  formParent.removeAttribute("onsubmit"); //Trigger a different event handler when on sign in page
  formParent.removeChild(formChild1); //Remove Last Name and First Name Fields
  formParent.removeChild(formChild2); //Remove Confirm Password Field
  submitBtn.style.display = 'none';
  loginBtn.style.display = 'inline-block';
  signin.style.display = "none";
  signUp.style.display = 'inline-block';
  forgotPassword.style.display = 'inline-block'; //display forgot password link
  loginBtn.setAttribute('onclick', 'return verifyUser()'); //verify user function called when log in button is clicked
});



/////////////////////////////////////////////////////
/* Try this  */
function validateForm() {
  /* Get form user input values and store them in Variables */
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let pwd2 = document.getElementById("pwd2").value;

  if (fname == "" || lname == "" || email == "" || pwd == "" || pwd2 == "") {
      alert("All fields are required");
      return false;
  }

  if( typeof(fname == 'string') && typeof(lname == 'string')) {
    alert("Names must be a string");
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

function verifyUser() {
  //get form submit details
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;

  //validate form
  if (email == "" || pwd == "") {
    alert("Please fill in all fields");
    return false;
  }
  if (pwd.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  //check database if the submitted data matches data existing in the database
}
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