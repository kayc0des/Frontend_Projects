/////////////////////////////////////////////////////
/* Function to change DOM if user clicks on sign in */
const signin = document.getElementById("existingUser");

signin.addEventListener("click", function(event) {
  event.preventDefault();
  const header = document.getElementById("heading");
  const formParent = document.getElementById("myForm");
  const formChild1 = document.getElementById("signUpData");
  const formChild2 = document.getElementById("confirmPassword");
  const submitBtn = document.getElementById('submit');
  const loginBtn = document.getElementById("login");
  const signUp = document.getElementById("newUser");
  const forgotPassword = document.getElementById("forgotPassword");


  header.innerHTML = "Sign in";
  formParent.removeChild(formChild1); //Remove Last Name and First Name Fields
  formParent.removeChild(formChild2); //Remove Confirm Password Field
  submitBtn.style.display = 'none';
  loginBtn.style.display = 'inline-block';
  signin.style.display = "none";
  signUp.style.display = 'inline-block';
  forgotPassword.innerHTML = "Forgot Password?";
  forgotPassword.setAttribute("href", "https://example.com");
});



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