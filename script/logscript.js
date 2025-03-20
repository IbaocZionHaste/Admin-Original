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
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  // Clear any previous messages
  messageElement.textContent = '';

  // Firebase sign in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      messageElement.textContent = "Login Successful!";
      messageElement.style.color = "green";
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = "pages/dashboard.html"; // Redirect to dashboard
      }, 1000); // Delay for 1 seconds to show the message
    })
    .catch((error) => {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      messageElement.textContent = "Failed Login!";
      messageElement.style.color = "red";
    });
});


// Reset form fields on page load
window.onload = function() {
  document.getElementById('login-form').reset();
};


// Toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
  const eyeShow = document.getElementById('eye-show');
  const eyeHide = document.getElementById('eye-hide');
  const passwordField = document.getElementById('password');

  // Ensure only the 'eye-show' icon is visible initially
  eyeShow.style.display = 'block';
  eyeHide.style.display = 'none';

  eyeShow.addEventListener('click', function() {
    passwordField.type = 'text'; // Show password
    eyeShow.style.display = 'none'; // Hide the 'show' icon
    eyeHide.style.display = 'block'; // Show the 'hide' icon
  });

  eyeHide.addEventListener('click', function() {
    passwordField.type = 'password'; // Hide password
    eyeShow.style.display = 'block'; // Show the 'show' icon
    eyeHide.style.display = 'none'; // Hide the 'hide' icon
  });
});



// function generateKey(length) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let key = '';
//   for (let i = 0; i < length; i++) {
//       key += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return key;
// }

// function updateURL() {
//   const newKey = generateKey(16);
//   const baseUrl = window.location.origin + window.location.pathname;
//   const newUrl = baseUrl + "?key=" + newKey;

//   window.history.pushState(null, null, newUrl);
//   sessionStorage.setItem('currentKey', newKey);

//   console.log("Generated URL:", newUrl);

//   navigator.clipboard.writeText(newUrl)
//       .then(() => {
//           // console.log("URL copied to clipboard!");
//       })
//       .catch(err => {
//           // console.error('Failed to copy: ', err);
//       });
// }

// window.addEventListener('popstate', function (event) {
//   checkURL();
// });

// function checkURL() {
//   const currentKey = sessionStorage.getItem('currentKey');
//   const urlParams = new URLSearchParams(window.location.search);
//   const urlKey = urlParams.get('key');

//   if (urlKey !== currentKey) {
//       console.warn("URL Tampering Detected!");

//       // More robust error handling and redirection:
//       sessionStorage.removeItem('currentKey'); // Clear invalid key

//       let errorDiv = document.getElementById('url-error-message'); // Check if error div already exists
//       if (!errorDiv) {
//           errorDiv = document.createElement('div');
//           errorDiv.id = 'url-error-message'; // Give it an ID for easy access
//           errorDiv.style.cssText = "color:red; font-weight:bold; font-size: 20px; text-align: center; margin-top: 20px;"; // Centered
//           document.body.innerHTML = ""; // Clear the page *after* getting the errorDiv
//           document.body.appendChild(errorDiv);
//       }

//       errorDiv.textContent = "URL has been tampered with. Please return to the correct page.";


//       // Redirect after a short delay (gives time to show the message)
//       setTimeout(() => {
//           // Determine the correct return URL.  Important!
//           let returnUrl = "/"; // Default to root
//           // Check if a valid "returnTo" parameter exists.  This is how you'd handle going back to a specific page.
//           const returnToParam = new URLSearchParams(window.location.search).get('returnTo');
//           if (returnToParam) {
//               returnUrl = returnToParam; // Or decodeURIComponent(returnToParam) if needed
//           } else if (document.referrer) { // Fallback: Try the referrer, but be careful about cross-origin issues.
//               returnUrl = document.referrer;
//           }
//           window.location.href = returnUrl; // Redirect!
//       }, 2000); // 2-second delay

//   }
// }

// // Call checkURL *after* the initial updateURL.  This ensures the key is set before the check.
// updateURL();
// checkURL();


// if (window.location.pathname === "/index.html") {
//   window.history.replaceState({}, document.title, "/");
// }


// Generate a random alphanumeric string (e.g., 8 characters long)
function generateRandomKey(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Replace the URL with the new query parameter 'generate' set to a random key
const randomKey = generateRandomKey();
history.replaceState({}, document.title, "." + '?key=' + randomKey);




// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDmNnimffxwrtLMoz9-frxsKuRkA8SxCwY",
//   authDomain: "admin-resort.firebaseapp.com",
//   databaseURL: "https://admin-resort-default-rtdb.firebaseio.com",
//   projectId: "admin-resort",
//   storageBucket: "admin-resort.appspot.com",
//   messagingSenderId: "631667114308",
//   appId: "1:631667114308:web:be5313efd4e98ef0969711",
//   measurementId: "G-GJJSJTKKNQ"
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

//       // Display user's profile image or email-specific image
//       showUserProfileImage(user.email);

//       // Redirect to dashboard after successful login
//       setTimeout(() => {
//         window.location.href = "dashboard.html"; // Redirect to dashboard
//       }, 2000); // Delay for 2 seconds to show the message
//     })
//     .catch((error) => {
//       // Handle errors
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       messageElement.textContent = "Failed Login!";
//       messageElement.style.color = "red";
//     });
// });

// // Function to update the profile image based on the logged-in user's email
// function showUserProfileImage(email) {
//   // Assuming images are named after users' emails in lowercase, replacing special characters
//   const profileImage = document.querySelector('.profile img');
//   const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, ''); // Remove special chars

//   // Example: Assuming images are in the format 'img/user@example_com.jpg'
//   const emailImage = `img/${sanitizedEmail}.jpg`;

//   // Set the profile image dynamically, fallback to a default image if not found
//   profileImage.src = emailImage;
//   profileImage.alt = email;
// }






