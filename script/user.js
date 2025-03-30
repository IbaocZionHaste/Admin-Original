// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiSJrKhSII8vLTsmMh8rKlJERFNpG9plU",
    authDomain: "resort-admin-b8411.firebaseapp.com",
    databaseURL: "https://resort-admin-b8411-default-rtdb.firebaseio.com",
    projectId: "resort-admin-b8411",
    storageBucket: "resort-admin-b8411.appspot.com",
    messagingSenderId: "865886329874",
    appId: "1:865886329874:web:2c5e61e88e733fb00a4ccb",
    measurementId: "G-P59Y09ZVT4"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database(app);
  const storage = firebase.storage();
  
  
  // Function to handle redirection
  function handleRedirection(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetHref = event.currentTarget.getAttribute('href'); // Get the href value
    if (targetHref && targetHref !== "#") {
      window.location.href = targetHref; // Redirect to the page
    }
  }
  
  // Select all sidebar links
  const sidebarLinks = document.querySelectorAll('.side-menu a');
  
  // Add the click event listener to each link
  sidebarLinks.forEach(link => {
    link.addEventListener('click', handleRedirection);
  });
  
  
  // Get a reference to the auth service
  var auth = firebase.auth();
  document.getElementById('logout-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
  
    // Show confirmation dialog
    if (confirm('Are you sure you want to log out?')) {
      firebase.auth().signOut().then(function () {
        alert('Successfully logged out.');
        window.location.href = '../index.html';
      }).catch(function (error) {
        console.error('Error during logout:', error);
        alert('Error logging out.');
      });
    }
  });
  
  
  
  //The Second
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
  
  allSideMenu.forEach(item => {
    const li = item.parentElement;
  
    item.addEventListener('click', function () {
      allSideMenu.forEach(i => {
        i.parentElement.classList.remove('active');
      });
      li.classList.add('active');
    });
  });
  
  // TOGGLE SIDEBAR
  
  const menuBar = document.querySelector('#content nav .bx.bx-menu');
  const sidebar = document.getElementById('sidebar');
  
  menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
  });
  
  
  // SEARCH FORM TOGGLE
  const searchButton = document.querySelector('#content nav form .form-input button');
  const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
  const searchForm = document.querySelector('#content nav form');
  
  searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
      e.preventDefault();
      searchForm.classList.toggle('show');
      if (searchForm.classList.contains('show')) {
        searchButtonIcon.classList.replace('bx-search', 'bx-x');
      } else {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
      }
    }
  });
  
  // HANDLE RESIZE
  if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
  } else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
  }
  
  window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
      searchButtonIcon.classList.replace('bx-x', 'bx-search');
      searchForm.classList.remove('show');
    }
  });
  
  // DARK MODE TOGGLE
  const switchMode = document.getElementById('switch-mode');
  
  switchMode.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
  
  
  document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // HIDE ALL SECTIONS
      document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
      });
  
      // REMOVE 'ACTIVE' CLASS FROM ALL LINKS
      document.querySelectorAll('.side-menu li').forEach(item => {
        item.classList.remove('active');
      });
  
      // Add 'active' class to the clicked link's parent li
      this.parentElement.classList.add('active');
  
      // Show the relevant section based on the link clicked
      const sectionId = this.getAttribute('data-section');
      if (sectionId) {
        document.getElementById(sectionId).style.display = 'block';
      }
    });
  });
  
    //ACCOMODATION FUNCTION

function toggleAccommodationSection(event) {
  event.preventDefault(); // Prevent default anchor behavior

  const reportSection = document.querySelector('.accommodation-section');
  const arrowDown = event.currentTarget.querySelector('.arrowsss-down');
  const arrowUp = event.currentTarget.querySelector('.arrowsss-up');

  // Toggle the display of the report section
  reportSection.style.display = reportSection.style.display === 'none' || reportSection.style.display === '' ? 'block' : 'none';

  // Toggle the arrows' visibility
  if (reportSection.style.display === 'block') {
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'inline';
  } else {
      arrowDown.style.display = 'inline';
      arrowUp.style.display = 'none';
  }
}
  
  
  //REPORT FUNCTION
  
  function toggleReportSection(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    const reportSection = document.querySelector('.report-section');
    const arrowDown = event.currentTarget.querySelector('.arrows-down');
    const arrowUp = event.currentTarget.querySelector('.arrows-up');
  
    // Toggle the display of the report section
    reportSection.style.display = reportSection.style.display === 'none' || reportSection.style.display === '' ? 'block' : 'none';
  
    // Toggle the arrows' visibility
    if (reportSection.style.display === 'block') {
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'inline';
    } else {
      arrowDown.style.display = 'inline';
      arrowUp.style.display = 'none';
    }
  }
  
  

  //TRANSACTION FUNCTION
  
  function toggleTransactionSection(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    const reportSection = document.querySelector('.transaction-section');
    const arrowDown = event.currentTarget.querySelector('.arrowss-down');
    const arrowUp = event.currentTarget.querySelector('.arrowss-up');
  
    // Toggle the display of the report section
    reportSection.style.display = reportSection.style.display === 'none' || reportSection.style.display === '' ? 'block' : 'none';
  
    // Toggle the arrows' visibility
    if (reportSection.style.display === 'block') {
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'inline';
    } else {
      arrowDown.style.display = 'inline';
      arrowUp.style.display = 'none';
    }
  }
  
  // Fetch products when the page loads
  window.onload = function () {
    sidebar.classList.add('hide'); //if reload the page will hide the side bar
  };
  
  
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
  history.replaceState({}, document.title, "" + '?key=' + randomKey);
  


  

 // Fetch users and display their status
function fetchUsers() {
  var usersRef = firebase.database().ref("users");
  usersRef.on("value", function(snapshot) {
    var tableBody = document.getElementById("accommodation-list");
    tableBody.innerHTML = ""; // Clear any existing rows

    snapshot.forEach(function(userSnapshot) {
      var userData = userSnapshot.val();
      var username = userData.username || "N/A";
      var registrationDate = userData.registrationDate || "N/A";
      
      var statusText, statusClass;
      if (userData.status === "banned") {
        statusText = "Banned";
        statusClass = "banned";
      } else {
        // Check the phoneVerified field:
        if (userData.phoneVerified === true) {
          statusText = "Verified";
          statusClass = "verified";
        } else {
          statusText = "Unverified";
          statusClass = "unverified";
        }
      }
      
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${username}</td>
        <td>${registrationDate}</td>
        <td><span class="status ${statusClass}">${statusText}</span></td>
        <td>
          <div class="actions">
            <i class="bx bx-user-x" onclick="viewUserBan('${userSnapshot.key}')"></i>
            <i class="bx bx-user-check" onclick="viewUserUpdate('${userSnapshot.key}')"></i>
            <i class="bx bx-detail" onclick="viewUserDetail('${userSnapshot.key}')"></i>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  });
}


// Call fetchUsers when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  fetchUsers();
});

// Function to ban a user (set status to "banned" and mark as offline)
function viewUserBan(userId) {
  firebase.database().ref("users/" + userId).update({
    status: "banned",
    isOnline: false
  }).then(() => {
    alert("User banned successfully.");
  }).catch(error => {
    alert("Error banning user: " + error.message);
  });
}

// Function to unban a user (set status to "default")
function viewUserUpdate(userId) {
  firebase.database().ref("users/" + userId).update({
    status: "default"
  }).then(() => {
    alert("User unbanned successfully.");
  }).catch(error => {
    alert("Error updating user status: " + error.message);
  });
}

  

  
//View the details of the user
function viewUserDetail(userId) {
  var userRef = firebase.database().ref("users/" + userId);
  userRef.once("value").then(function(snapshot) {
    var userData = snapshot.val();
    var content = document.getElementById("userDetailContent");
    content.innerHTML = ""; // Clear previous details

    if (userData) {
      content.innerHTML += `<div class="detail-row"><strong>Username:</strong> ${userData.username || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>First Name:</strong> ${userData.firstName || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Middle Initial:</strong> ${userData.middleInitial || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Last Name:</strong> ${userData.lastName || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Age:</strong> ${userData.age || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Gender:</strong> ${userData.gender || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Barangay:</strong> ${userData.barangay || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Municipality:</strong> ${userData.municipality || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Province:</strong> ${userData.province || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Street:</strong> ${userData.street || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Phone:</strong> ${userData.phoneNumber || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Email:</strong> ${userData.email || "N/A"}</div>`;
      content.innerHTML += `<div class="detail-row"><strong>Registration Date:</strong> ${userData.registrationDate || "N/A"}</div>`;
    } else {
      content.innerHTML = "<div class='detail-row'>No details found for this user.</div>";
    }
    
    // Show the modal
    document.getElementById("userDetailModal").style.display = "block";
  }).catch(function(error) {
    console.error("Error fetching user details:", error);
  });
}

  
  // Close modal when X button is clicked
  document.getElementById("userDetailClose").addEventListener("click", function() {
    document.getElementById("userDetailModal").style.display = "none";
  });
  
  // Optional: close modal if clicking outside the modal content
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("userDetailModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
  


//Count the user registered and banned
function updateUserCounts() {
  var usersRef = firebase.database().ref("users");
  usersRef.on("value", function(snapshot) {
    let nonBannedUsers = 0;
    let bannedUsers = 0;
    
    snapshot.forEach(function(childSnapshot) {
      var userData = childSnapshot.val();
      if (userData.status && userData.status.toLowerCase() === "banned") {
        bannedUsers++;
      } else {
        nonBannedUsers++;
      }
    });
    
    // Update the counts in the HTML. 
    // Assuming the first <h3> is for "Signed Up Users" (non-banned) 
    // and the second <h3> is for "Banned Users".
    var boxes = document.querySelectorAll(".box-info li span.text h3");
    if (boxes.length >= 2) {
      boxes[0].innerText = nonBannedUsers;
      boxes[1].innerText = bannedUsers;
    }
  });
}

// Initialize user counts in real time when the DOM is ready.
document.addEventListener("DOMContentLoaded", function() {
  updateUserCounts();
});
