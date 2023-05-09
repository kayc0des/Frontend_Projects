/* JavaScript */

/* Form Validation */
function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd1").value;
    let pwd2 = document.getElementById("pwd2").value;

    if (fname == "" || lname == "" || email == "" || pwd == "" || pwd2 == "") {
        alert("All fields are required");
        return false;
    }
    return true;
}

/* Function to change DOM if user clicks on sign in */
const signin = document.getElementById("signin");

signin.addEventListener("click", function(event) {
  event.preventDefault();
  const header = document.getElementById("heading");
  header.innerHTML = "Sign in";
});