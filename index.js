document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error").forEach(function (error) {
    error.textContent = "";
  });

  // Validate username
  const firstName = document.getElementById("first-name").value;
  if (firstName.length < 3 || firstName.length > 25) {
    document.getElementById("first-name-error").textContent =
      "Username must be between 3 and 25 characters.";
    isValid = false;
  }

  // Validate email
  const email = document.getElementById("email").value;
  const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate password
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("password-error").textContent =
      "Enter a valid password";
    alert(
      `Password must be at least 8 characters long. \nInclude at least: \none lowercase letter \none uppercase letter \none number \none special character`
    );
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // Here you can add code to submit the form data to the server
    document.getElementById("form").reset();
  }
});
