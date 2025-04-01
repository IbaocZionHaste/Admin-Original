// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiSJrKhSII8vLTsmMh8rKlJERFNpG9plU",
  authDomain: "resort-admin-b8411.firebaseapp.com",
  databaseURL: "https://resort-admin-b8411-default-rtdb.firebaseio.com",
  projectId: "resort-admin-b8411",
  storageBucket: "resort-admin-b8411.appspot.com",
  messagingSenderId: "865886329874",
  appId: "1:865886329874:web:2c5e61e88e733fb00a4ccb",
  measurementId: "G-P59Y09ZVT4"
};
firebase.initializeApp(config);

// Get a reference to the auth service
var auth = firebase.auth();

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  // Clear any previous messages
  messageElement.textContent = '';

  // Check if the email or password is empty
  if (!email || !password) {
    messageElement.textContent = "Please enter both email and password.";
    messageElement.style.color = "red";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Log the userCredential to check its structure
    console.log('userCredential:', userCredential);

    // Access the user from the userCredential object
    const user = userCredential.user;

    // Log the user object to check if it is correctly retrieved
    console.log('User object:', user);

    if (user) {
      console.log('User logged in successfully:', user);

      // Force refresh of the token
      user.getIdToken(true)
        .then(() => {
          user.getIdTokenResult()
            .then((idTokenResult) => {
              console.log('Token Claims:', idTokenResult.claims); // Log the token claims

              // Handle admin role or other roles
              if (idTokenResult.claims.admin) {
                messageElement.textContent = "Admin Login Successful!";
                messageElement.style.color = "green";
                setTimeout(() => {
                  window.location.href = "pages/dashboard.html";
                }, 1000);
              } else {
                messageElement.textContent = "Login Successful!";
                messageElement.style.color = "green";
                setTimeout(() => {
                  window.location.href = "others/dashboard.html";
                }, 1000);
              }
            })
            .catch((error) => {
              console.error("Error fetching token claims:", error);
              messageElement.textContent = "Error verifying login!";
              messageElement.style.color = "red";
            });
        })
        .catch((error) => {
          console.error("Error getting token:", error);
        });
    } else {
      console.error('No user returned in userCredential');
      messageElement.textContent = "Login Failed: No user returned!";
      messageElement.style.color = "red";
    }
  })
  .catch((error) => {
    // Handle errors such as wrong email/password
    messageElement.textContent = "Failed Login!";
    messageElement.style.color = "red";
    console.error('Login error:', error);
  });

});


// Toggle password visibility
document.addEventListener('DOMContentLoaded', function () {
  const eyeShow = document.getElementById('eye-show');
  const eyeHide = document.getElementById('eye-hide');
  const passwordField = document.getElementById('password');

  // Ensure only the 'eye-show' icon is visible initially
  eyeShow.style.display = 'block';
  eyeHide.style.display = 'none';

  eyeShow.addEventListener('click', function () {
    passwordField.type = 'text'; // Show password
    eyeShow.style.display = 'none'; // Hide the 'show' icon
    eyeHide.style.display = 'block'; // Show the 'hide' icon
  });

  eyeHide.addEventListener('click', function () {
    passwordField.type = 'password'; // Hide password
    eyeShow.style.display = 'block'; // Show the 'show' icon
    eyeHide.style.display = 'none'; // Hide the 'hide' icon
  });
});

// Generate a random alphanumeric string (e.g., 8 characters long)
function generateRandomKey(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Replace the URL with the new query parameter 'key' set to a random key
const randomKey = generateRandomKey();
history.replaceState({}, document.title, "." + '?key=' + randomKey);



// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCiSJrKhSII8vLTsmMh8rKlJERFNpG9plU",
//   authDomain: "resort-admin-b8411.firebaseapp.com",
//   databaseURL: "https://resort-admin-b8411-default-rtdb.firebaseio.com",
//   projectId: "resort-admin-b8411",
//   storageBucket: "resort-admin-b8411.appspot.com",
//   messagingSenderId: "865886329874",
//   appId: "1:865886329874:web:2c5e61e88e733fb00a4ccb",
//   measurementId: "G-P59Y09ZVT4"
// };
// firebase.initializeApp(config);

// // Get a reference to the auth service
// var auth = firebase.auth();

// // Handle login form submission
// document.getElementById("login-form").addEventListener("submit", function(e) {
//   e.preventDefault(); // Prevent form from submitting normally

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const messageElement = document.getElementById("message");

//   // Clear any previous messages
//   messageElement.textContent = '';

//   // Firebase sign in with email and password
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Login successful
//       const user = userCredential.user;
//       messageElement.textContent = "Login Successful!";
//       messageElement.style.color = "green";
//       // Redirect to dashboard after successful login
//       setTimeout(() => {
//         window.location.href = "pages/dashboard.html"; // Redirect to dashboard
//       }, 1000); // Delay for 1 seconds to show the message
//     })
//     .catch((error) => {
//       // Handle errors
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       messageElement.textContent = "Failed Login!";
//       messageElement.style.color = "red";
//     });
// });


// // Reset form fields on page load
// window.onload = function() {
//   document.getElementById('login-form').reset();
// };


// // Toggle password visibility
// document.addEventListener('DOMContentLoaded', function() {
//   const eyeShow = document.getElementById('eye-show');
//   const eyeHide = document.getElementById('eye-hide');
//   const passwordField = document.getElementById('password');

//   // Ensure only the 'eye-show' icon is visible initially
//   eyeShow.style.display = 'block';
//   eyeHide.style.display = 'none';

//   eyeShow.addEventListener('click', function() {
//     passwordField.type = 'text'; // Show password
//     eyeShow.style.display = 'none'; // Hide the 'show' icon
//     eyeHide.style.display = 'block'; // Show the 'hide' icon
//   });

//   eyeHide.addEventListener('click', function() {
//     passwordField.type = 'password'; // Hide password
//     eyeShow.style.display = 'block'; // Show the 'show' icon
//     eyeHide.style.display = 'none'; // Hide the 'hide' icon
//   });
// });


// // Generate a random alphanumeric string (e.g., 8 characters long)
// function generateRandomKey(length = 8) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// // Replace the URL with the new query parameter 'generate' set to a random key
// const randomKey = generateRandomKey();
// history.replaceState({}, document.title, "." + '?key=' + randomKey);
