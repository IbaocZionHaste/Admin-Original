// Firebase configuration
const firebaseConfig = {
  //  apiKey: "AIzaSyCxEDSw_13164JHIPhdCZbUycf7peWMP3s",
  // authDomain: "resortbookingapp-1a2b5.firebaseapp.com",
  // databaseURL: "https://resortbookingapp-1a2b5-default-rtdb.firebaseio.com",
  // projectId: "resortbookingapp-1a2b5",
  // storageBucket: "resortbookingapp-1a2b5.firebasestorage.app",
  // messagingSenderId: "672228962058",
  // appId: "1:672228962058:web:81930d7e2dfa49add114f3"
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


function goToTransaction() {
  // This will load the "walkintransaction.html" page
  window.location.href = "walkintransaction.html";
}




//THIS DATA CANt ACESS THE DECLINE AND THE CANCEL
/**
 * Helper function to convert orderItems into a formatted HTML output.
 * It supports both object and array structures and groups items by category.
 */
// function jsonToHtmlByCategory(orderItems) {
//   if (!orderItems) return '';

//   let html = '';

//   // If orderItems is an array, group them by category.
//   if (Array.isArray(orderItems)) {
//     const groups = {};
//     orderItems.forEach(item => {
//       if (item.category) {
//         if (!groups[item.category]) groups[item.category] = [];
//         groups[item.category].push(item);
//       }
//     });
//     // Render each group.
//     for (let category in groups) {
//       html += `<div class="order-section"><h3>${category}</h3><ul>`;
//       groups[category].forEach(item => {
//         html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//       });
//       html += `</ul></div>`;
//     }
//   } else if (typeof orderItems === 'object') {
//     // If orderItems is an object, it might contain arrays or single objects.
//     for (let key in orderItems) {
//       if (orderItems.hasOwnProperty(key)) {
//         let value = orderItems[key];
//         // If it's an array, group items by their category.
//         if (Array.isArray(value)) {
//           const groups = {};
//           value.forEach(item => {
//             if (item.category) {
//               if (!groups[item.category]) groups[item.category] = [];
//               groups[item.category].push(item);
//             }
//           });
//           for (let category in groups) {
//             html += `<div class="order-section"><h3>${category}</h3><ul>`;
//             groups[category].forEach(item => {
//               html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//             });
//             html += `</ul></div>`;
//           }
//         } else if (typeof value === 'object') {
//           // Handle single object items.
//           const category = value.category || key;
//           html += `<div class="order-section"><h3>${category}</h3><ul>`;
//           html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
//           html += `</ul></div>`;
//         }
//       }
//     }
//   }
//   return html;
// }



function jsonToHtmlByCategory(orderItems) {
  if (!orderItems) return '';

  let html = '';

  // Check if orderItems is an array
  if (Array.isArray(orderItems)) {
    // Determine if any items have a category property
    const hasCategory = orderItems.some(item => item.category);
    
    // If no item has a category, render them in a simple list
    if (!hasCategory) {
      html += '<ul>';
      orderItems.forEach(item => {
        html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
      });
      html += '</ul>';
    } else {
      // Otherwise, group by category
      const groups = {};
      orderItems.forEach(item => {
        if (item.category) {
          if (!groups[item.category]) groups[item.category] = [];
          groups[item.category].push(item);
        }
      });
      // Render each group
      for (let category in groups) {
        html += `<div class="order-section"><h3>${category}</h3><ul>`;
        groups[category].forEach(item => {
          html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
        });
        html += '</ul></div>';
      }
    }
  } else if (typeof orderItems === 'object') {
    // If orderItems is an object, handle each property
    for (let key in orderItems) {
      if (orderItems.hasOwnProperty(key)) {
        let value = orderItems[key];
        if (Array.isArray(value)) {
          const hasCategory = value.some(item => item.category);
          if (!hasCategory) {
            html += '<ul>';
            value.forEach(item => {
              html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
            });
            html += '</ul>';
          } else {
            const groups = {};
            value.forEach(item => {
              if (item.category) {
                if (!groups[item.category]) groups[item.category] = [];
                groups[item.category].push(item);
              }
            });
            for (let category in groups) {
              html += `<div class="order-section"><h3>${category}</h3><ul>`;
              groups[category].forEach(item => {
                html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
              });
              html += '</ul></div>';
            }
          }
        } else if (typeof value === 'object') {
          const category = value.category || key;
          html += `<div class="order-section"><h3>${category}</h3><ul>`;
          html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
          html += '</ul></div>';
        }
      }
    }
  }
  return html;
}


//THIS CODE NO FUNCTION MONTH IS END THE MY HISTORY AND WALKIN NOT HIDE 
// // Helper function to determine if today is the last day of the month.
// function isMonthEnd() {
//   const now = new Date();
//   const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
//   return now.getDate() === lastDay;
// }


// function fetchAllBookings() {
//   var tableBody = document.getElementById("accommodation-list");
//   tableBody.innerHTML = ""; // Clear existing rows

//   // Separate arrays for each booking type
//   var myBookingRows = [];
//   var myHistoryRows = [];
//   var walkinRows = [];

//   // Fetch user bookings (MyBooking and MyHistory)
//   var usersRef = firebase.database().ref("users");
//   usersRef.once("value").then(function (snapshot) {
//     snapshot.forEach(function (userSnapshot) {
//       var userData = userSnapshot.val();
//       var accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim() || "N/A";

//       // Process MyBooking rows
//       if (userData['MyBooking']) {
//         for (var bookingId in userData['MyBooking']) {
//           if (userData['MyBooking'].hasOwnProperty(bookingId)) {
//             var booking = userData['MyBooking'][bookingId];
//             var review = booking.bookingReview || {};
//             var name = review.name || accountName;
//             var rawDate = review.bookingDate || "N/A";
//             var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//             var status = (review.statusReview || "pending").toLowerCase();

//             var row = document.createElement("tr");
//             row.innerHTML = `
//               <td>${name}</td>
//               <td>${date}</td>
//               <td style="color: green;">Online</td>
//               <td><span id="status-${userSnapshot.key}-${bookingId}-MyBooking" class="status ${status}">${status.toUpperCase()}</span></td>
//               <td>
//                 <div class="actions">
//                   <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
//                   <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
//                 </div>
//               </td>
//             `;
//             row.dataset.bookingDate = date;
//             row.dataset.bookingType = "MyBooking";
//             myBookingRows.push(row);
//           }
//         }
//       }


//       // Process MyHistory rows
//       if (userData['MyHistory']) {
//         for (var bookingId in userData['MyHistory']) {
//           if (userData['MyHistory'].hasOwnProperty(bookingId)) {
//             var booking = userData['MyHistory'][bookingId];
//             var review = booking.bookingReview || {};
//             var name = review.name || accountName;
//             var rawDate = review.bookingDate || "N/A";
//             var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//             var status = (review.statusReview || "pending").toLowerCase();

//             var row = document.createElement("tr");
//             row.innerHTML = `
//               <td>${name}</td>
//               <td>${date}</td>
//               <td style="color: red;">Online</td>
//               <td><span id="status-${userSnapshot.key}-${bookingId}-MyHistory" class="status ${status}">${status.toUpperCase()}</span></td>
//               <td>
//                 <div class="actions">
//                   <i class="bx bx-pencil disabled" style="opacity: 0.5; cursor: not-allowed;"></i>
//                   <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyHistory')"></i>
//                 </div>
//               </td>
//             `;
//             row.dataset.bookingDate = date;
//             row.dataset.bookingType = "MyHistory";
//             myHistoryRows.push(row);
//           }
//         }
//       }
//     });



//     // After processing user bookings, fetch Walkin orders.
//     var walkinRef = firebase.database().ref("walkin");
//     walkinRef.once("value").then(function (snapshot) {
//       snapshot.forEach(function (childSnapshot) {
//         var order = childSnapshot.val();
//         var name = order.customerName || "N/A";
//         var date = order.date || "N/A";
//         var orderName = order.orderName || "Walkin";
//         var status = (order.status || "approve").toUpperCase();

//         var row = document.createElement("tr");
//         row.innerHTML = `
//           <td>${name}</td>
//           <td>${date}</td>
//           <td style="color: blue;">${orderName}</td>
//           <td><span class="status approved">${status}</span></td>
//           <td>
//             <i class='bx bx-detail' onclick="viewWalkinBooking('${childSnapshot.key}')"></i>
//           </td>
//         `;
//         row.dataset.bookingDate = date;
//         row.dataset.bookingType = "Walkin";
//         walkinRows.push(row);
//       });

//       // Sort rows within each category by booking date descending
//       function sortRows(rows) {
//         return rows.sort(function (a, b) {
//           return new Date(b.dataset.bookingDate) - new Date(a.dataset.bookingDate);
//         });
//       }
//       myBookingRows = sortRows(myBookingRows);
//       myHistoryRows = sortRows(myHistoryRows);
//       walkinRows = sortRows(walkinRows);

//       // Append rows: MyBooking on top, then MyHistory, then Walkin orders.
//       var allRows = myBookingRows.concat(walkinRows, myHistoryRows);
//       allRows.forEach(function (row) {
//         tableBody.appendChild(row);
//       });
//     }).catch(function (error) {
//       console.error("Error fetching walkin orders:", error);
//     });
//   }).catch(function (error) {
//     console.error("Error fetching user bookings:", error);
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   fetchAllBookings();
// });

// document.addEventListener("DOMContentLoaded", fetchAllBookings);







// Helper function to check if a date's month has closed
function isMonthClosed(date) {
  const transDate = new Date(date);
  const lastDay = new Date(
    transDate.getFullYear(),
    transDate.getMonth() + 1,
    0
  );
  const now = new Date();
  return now > lastDay;
}


// function fetchAllBookings() {
//   const tableBody = document.getElementById("accommodation-list");
//   tableBody.innerHTML = "";

//   const myBookingRows = [];
//   const myHistoryRows = [];
//   const walkinRows = [];

//   const usersRef = firebase.database().ref("users");
//   usersRef.once("value").then((snapshot) => {
//     snapshot.forEach((userSnapshot) => {
//       const userData = userSnapshot.val();
//       const accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim() || "N/A";

//       // Process MyBooking (unchanged)
//       if (userData.MyBooking) {
//         Object.entries(userData.MyBooking).forEach(([bookingId, booking]) => {
//           const review = booking.bookingReview || {};
//           const rawDate = review.bookingDate || "N/A";
//           const date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
          
//           const row = document.createElement("tr");
//           row.innerHTML = `
//             <td>${review.name || accountName}</td>
//             <td>${date}</td>
//             <td style="color: green;">Online</td>
//             <td><span class="status ${(review.statusReview || "pending").toLowerCase()}">
//               ${(review.statusReview || "pending").toUpperCase()}
//             </span></td>
//             <td>
//               <div class="actions">
//                 <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
//                 <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
//               </div>
//             </td>
//           `;
//           row.dataset.bookingDate = date;
//           row.dataset.bookingType = "MyBooking";
//           myBookingRows.push(row);
//         });
//       }

//       // Process MyHistory with month check
//       if (userData.MyHistory) {
//         Object.entries(userData.MyHistory).forEach(([bookingId, booking]) => {
//           const review = booking.bookingReview || {};
//           const rawDate = review.bookingDate || "N/A";
//           const dateStr = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
          
//           // Month-end check
//           const bookingDate = new Date(dateStr);
//           if (isNaN(bookingDate)) return;
//           if (isMonthClosed(bookingDate)) return;

//           const row = document.createElement("tr");
//           row.innerHTML = `
//             <td>${review.name || accountName}</td>
//             <td>${dateStr}</td>
//             <td style="color: red;">Online</td>
//             <td><span class="status ${(review.statusReview || "pending").toLowerCase()}">
//               ${(review.statusReview || "pending").toUpperCase()}
//             </span></td>
//             <td>
//               <div class="actions">
//                 <i class="bx bx-pencil disabled" style="opacity: 0.5; cursor: not-allowed;"></i>
//                 <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyHistory')"></i>
//               </div>
//             </td>
//           `;
//           row.dataset.bookingDate = dateStr;
//           row.dataset.bookingType = "MyHistory";
//           myHistoryRows.push(row);
//         });
//       }
//     });

//     // Process Walkin with month check
//     const walkinRef = firebase.database().ref("walkin");
//     walkinRef.once("value").then((snapshot) => {
//       snapshot.forEach((childSnapshot) => {
//         const order = childSnapshot.val();
//         const dateStr = order.date || "N/A";
//         const bookingDate = new Date(dateStr);
        
//         if (isNaN(bookingDate)) return;
//         if (isMonthClosed(bookingDate)) return;

//         const row = document.createElement("tr");
//         row.innerHTML = `
//           <td>${order.customerName || "N/A"}</td>
//           <td>${dateStr}</td>
//           <td style="color: blue;">${order.orderName || "Walkin"}</td>
//           <td><span class="status approved">${(order.status || "approve").toUpperCase()}</span></td>
//           <td>
//             <i class='bx bx-detail' onclick="viewWalkinBooking('${childSnapshot.key}')"></i>
//           </td>
//         `;
//         row.dataset.bookingDate = dateStr;
//         row.dataset.bookingType = "Walkin";
//         walkinRows.push(row);
//       });

//       // Sort and combine all rows
//       const sortRows = (rows) => rows.sort((a, b) => 
//         new Date(b.dataset.bookingDate) - new Date(a.dataset.bookingDate)
//       );
      
//       tableBody.append(
//         ...sortRows(myBookingRows),
//         ...sortRows(walkinRows),
//         ...sortRows(myHistoryRows)
//       );
//     }).catch(console.error);
//   }).catch(console.error);
// }
 

// document.addEventListener("DOMContentLoaded", function () {
//   fetchAllBookings();
// });


//THIS ACCURATE REALTIME UPDATES

// Using .on("value") for real-time updates
const usersRef = firebase.database().ref("users");
usersRef.on("value", (snapshot) => {
  const tableBody = document.getElementById("accommodation-list");
  tableBody.innerHTML = ""; // Clear previous content

  const myBookingRows = [];
  const myHistoryRows = [];
  const walkinRows = [];

  snapshot.forEach((userSnapshot) => {
    const userData = userSnapshot.val();
    const accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim() || "N/A";

    // Process MyBooking
    if (userData.MyBooking) {
      Object.entries(userData.MyBooking).forEach(([bookingId, booking]) => {
        const review = booking.bookingReview || {};
        const rawDate = review.bookingDate || "N/A";
        const date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
        
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${review.name || accountName}</td>
          <td>${date}</td>
          <td style="color: green;">Online</td>
          <td><span class="status ${(review.statusReview || "pending").toLowerCase()}">
            ${(review.statusReview || "pending").toUpperCase()}
          </span></td>
          <td>
            <div class="actions">
              <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
              <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
            </div>
          </td>
        `;
        row.dataset.bookingDate = date;
        row.dataset.bookingType = "MyBooking";
        myBookingRows.push(row);
      });
    }

    // Process MyHistory with month check
    if (userData.MyHistory) {
      Object.entries(userData.MyHistory).forEach(([bookingId, booking]) => {
        const review = booking.bookingReview || {};
        const rawDate = review.bookingDate || "N/A";
        const dateStr = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
        
        const bookingDate = new Date(dateStr);
        if (isNaN(bookingDate)) return;
        if (isMonthClosed(bookingDate)) return;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${review.name || accountName}</td>
          <td>${dateStr}</td>
          <td style="color: red;">Online</td>
          <td><span class="status ${(review.statusReview || "pending").toLowerCase()}">
            ${(review.statusReview || "pending").toUpperCase()}
          </span></td>
          <td>
            <div class="actions">
              <i class="bx bx-pencil disabled" style="opacity: 0.5; cursor: not-allowed;"></i>
              <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyHistory')"></i>
            </div>
          </td>
        `;
        row.dataset.bookingDate = dateStr;
        row.dataset.bookingType = "MyHistory";
        myHistoryRows.push(row);
      });
    }
  });

  // Process Walkin with month check
  const walkinRef = firebase.database().ref("walkin");
  walkinRef.on("value", (snapshot) => {
    const walkinRows = [];
    snapshot.forEach((childSnapshot) => {
      const order = childSnapshot.val();
      const dateStr = order.date || "N/A";
      const bookingDate = new Date(dateStr);
      
      if (isNaN(bookingDate)) return;
      if (isMonthClosed(bookingDate)) return;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${order.customerName || "N/A"}</td>
        <td>${dateStr}</td>
        <td style="color: blue;">${order.orderName || "Walkin"}</td>
        <td><span class="status approved">${(order.status || "approve").toUpperCase()}</span></td>
        <td>
          <i class='bx bx-detail' onclick="viewWalkinBooking('${childSnapshot.key}')"></i>
        </td>
      `;
      row.dataset.bookingDate = dateStr;
      row.dataset.bookingType = "Walkin";
      walkinRows.push(row);
    });

    // Combine and sort rows before appending to the table
    const sortRows = (rows) => rows.sort((a, b) => 
      new Date(b.dataset.bookingDate) - new Date(a.dataset.bookingDate)
    );
    
    tableBody.append(
      ...sortRows(myBookingRows),
      ...sortRows(walkinRows),
      ...sortRows(myHistoryRows)
    );
  });
});



function viewWalkinBooking(orderKey) {
  var orderRef = firebase.database().ref("walkin/" + orderKey);
  orderRef.once("value").then(function (snapshot) {
    var orderData = snapshot.val();
    var modalContent = document.getElementById("bookingDetails");
    modalContent.innerHTML = ""; // Clear previous details

    if (orderData) {
      // All order details are wrapped in a single container
      modalContent.innerHTML += `<div class="order-container">
        <p><strong>Name:</strong> ${orderData.customerName || "N/A"}</p>
        <p><strong>Date:</strong> ${orderData.date || "N/A"}</p>
        <p><strong>Phone:</strong> ${orderData.customerPhone || "N/A"}</p>
        <p><strong>Status:</strong> <span id="modalStatus" class="status ${(orderData.status || 'pending').toLowerCase()}">${(orderData.status || 'PENDING').toUpperCase()}</span></p>
        <p><strong>Address:</strong> ${orderData.customerAddress || "N/A"}</p>
        <p><strong>Receipt No:</strong> ${orderData.receiptNo || "N/A"}</p>
        <p><strong>Total:</strong> ₱${orderData.total || "0"}</p>`;

      // Check if order items exist and wrap them in their own sub-container
      if (orderData.items) {
        modalContent.innerHTML += `
          <div class="order-items-container">
            <hr  style="display: none;">
            <h3 style="text-align: center;">Order Items</h3>
            ${jsonToHtmlByCategory(orderData.items)}
          </div>`;
      }
      modalContent.innerHTML += `</div>`;
    } else {
      modalContent.innerHTML = "<p>No order details found.</p>";
    }
    document.getElementById("bookingModal").style.display = "block";
    centerModalContent("bookingModal");
  }).catch(function (error) {
    console.error("Error fetching walkin order data:", error);
    alert("Error fetching order details.");
  });
}


// Function to view booking details (read-only mode) for both MyBooking and MyHistory.
function viewBooking(userId, bookingId, node) {
  var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
  bookingRef.once("value").then(function (snapshot) {
    var bookingData = snapshot.val();
    var modalContent = document.getElementById("bookingDetails");
    modalContent.innerHTML = ""; // Clear previous details

    if (bookingData) {
      var review = bookingData.bookingReview || {};
      //var payment = bookingData.paymentTransaction || {};

      modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Status:</strong> <span id="modalStatus" class="status ${(review.statusReview || 'pending').toLowerCase()}">${(review.statusReview || 'PENDING').toUpperCase()}</span></p>`;

      // Show Order Details if available.
      if (review.orderItems) {
        modalContent.innerHTML += `<hr><h3 style="text-align: center;">Order Details</h3>`;
        modalContent.innerHTML += jsonToHtmlByCategory(review.orderItems);
      }
    } else {
      modalContent.innerHTML = "<p>No booking details found.</p>";
    }

    // Show the modal.
    document.getElementById("bookingModal").style.display = "block";
  }).catch(function (error) {
    console.error("Error fetching booking data:", error);
    alert("Error fetching booking details.");
  });
}



// Helper function to center modal content.
function centerModalContent(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex"; // Use flex to center content
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
  }
}




// New function to view booking details with an editable status dropdown.
function viewBookingEdit(userId, bookingId, node) {
  var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
  bookingRef.once("value").then(function (snapshot) {
    var bookingData = snapshot.val();
    var modalContent = document.getElementById("bookingDetails");
    modalContent.innerHTML = ""; // Clear previous details

    if (bookingData) {
      var review = bookingData.bookingReview || {};
      //var payment = bookingData.paymentTransaction || {};

      // Display booking details
      modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
      modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
      // Editable status dropdown without inline color styling
      modalContent.innerHTML += `<p><strong>Status:</strong> 
           <select id="statusDropdown">
             <option value="pending" ${review.statusReview === 'pending' ? 'selected' : ''}>PENDING</option>
             <option value="approved" ${review.statusReview === 'approved' ? 'selected' : ''}>APPROVED</option>
             <option value="declined" ${review.statusReview === 'declined' ? 'selected' : ''}>DECLINED</option>
           </select>
           </p>`;
    } else {
      modalContent.innerHTML = "<p>No booking details found.</p>";
    }

    // Show the modal and center its content.
    document.getElementById("bookingModal").style.display = "block";
    centerModalContent("bookingModal");

    // Attach event listener to the dropdown to update status when changed.
    document.getElementById("statusDropdown").addEventListener("change", function (e) {
      var newStatus = e.target.value;
      updateBookingStatus(userId, bookingId, newStatus, node);
    });
  }).catch(function (error) {
    console.error("Error fetching booking data:", error);
    alert("Error fetching booking details.");
  });
}


// Function to update the booking status.
function updateBookingStatus(userId, bookingId, newStatus, node) {
  var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/bookingReview");
  bookingRef.update({ statusReview: newStatus })
    .then(() => {
      // Update status in the modal if it exists.
      var modalStatusElem = document.getElementById("modalStatus");
      if (modalStatusElem) {
        modalStatusElem.className = "status " + newStatus;
        modalStatusElem.innerText = newStatus.toUpperCase();
      }
      // Update status in the table.
      var statusElem = document.getElementById("status-" + userId + "-" + bookingId + "-" + node);
      if (statusElem) {
        statusElem.className = "status " + newStatus;
        statusElem.innerText = newStatus.toUpperCase();
      }
      alert("Booking status updated to " + newStatus.toUpperCase());
    })
    .catch(error => {
      alert("Error updating status: " + error);
    });
}



// Modal close functionality.
document.getElementById("modalClose").addEventListener("click", function () {
  document.getElementById("bookingModal").style.display = "none";
});


// Close modal if clicking outside the modal content.
window.onclick = function (event) {
  var modal = document.getElementById("bookingModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Function to fetch user bookings and history, then update the table.
// function fetchUserBookings() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function (snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear existing rows.

//     // Separate arrays for MyBooking and MyHistory rows.
//     var bookingRows = [];
//     var historyRows = [];
//     const hideHistory = isMonthEnd(); // Hide MyHistory if it's month-end.

//     snapshot.forEach(function (userSnapshot) {
//       var userData = userSnapshot.val();
//       var firstName = userData.firstName || "";
//       var lastName = userData.lastName || "";
//       var accountName = (firstName + " " + lastName).trim() || "N/A";

//       // Process MyBooking rows (editing enabled).
//       if (userData['MyBooking']) {
//         for (var bookingId in userData['MyBooking']) {
//           if (userData['MyBooking'].hasOwnProperty(bookingId)) {
//             var booking = userData['MyBooking'][bookingId];
//             var review = booking.bookingReview || {};
//             var name = review.name || accountName;
//             var rawDate = review.bookingDate || "N/A";
//             // Remove "Date:" and any time info in parentheses.
//             var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//             var status = (review.statusReview || "pending").toLowerCase();

//             var row = document.createElement("tr");
//             row.innerHTML = `
//               <td>${name}</td>
//               <td>${date}</td>
//               <td><span class="online" style="color: green;">Online</span></td>
//               <td><span id="status-${userSnapshot.key}-${bookingId}-MyBooking" class="status ${status}">${status.toUpperCase()}</span></td>
//               <td>
//                 <div class="actions">
//                   <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
//                   <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyBooking')"></i>
//                 </div>
//               </td>
//             `;
//             bookingRows.push(row);
//           }
//         }
//       }





//       // Process MyHistory rows only if not hiding them.
//       if (!hideHistory && userData['MyHistory']) {
//         for (var bookingId in userData['MyHistory']) {
//           if (userData['MyHistory'].hasOwnProperty(bookingId)) {
//             var booking = userData['MyHistory'][bookingId];
//             var review = booking.bookingReview || {};
//             var name = review.name || accountName;
//             var rawDate = review.bookingDate || "N/A";
//             var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//             var status = (review.statusReview || "pending").toLowerCase();

//             var row = document.createElement("tr");
//             row.innerHTML = `
//               <td>${name}</td>
//               <td>${date}</td>
//               <td><span class="online" style="color: red;">Online</span></td>
//               <td><span id="status-${userSnapshot.key}-${bookingId}-MyHistory" class="status ${status}">${status.toUpperCase()}</span></td>
//               <td>
//                 <div class="actions">
//                   <!-- Edit is disabled for MyHistory: icon shown but not clickable -->
//                   <i class="bx bx-pencil disabled" style="opacity: 0.5; cursor: not-allowed;"></i>
//                   <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', 'MyHistory')"></i>
//                 </div>
//               </td>
//             `;
//             historyRows.push(row);
//           }
//         }
//       }
//     });

//     // Append MyBooking rows first, then MyHistory rows.
//     bookingRows.forEach(function(row) {
//       tableBody.appendChild(row);
//     });
//      // Sort MyHistory rows by date descending (latest first)
// historyRows.sort(function(a, b) {
//   // Assuming the date is in the second <td> (index 1) and in a format recognized by Date()
//   var dateA = new Date(a.querySelectorAll('td')[1].innerText.trim());
//   var dateB = new Date(b.querySelectorAll('td')[1].innerText.trim());
//   return dateB - dateA; // Latest date first
// });
//     historyRows.forEach(function(row) {
//       tableBody.appendChild(row);
//     });
//   });
// }








// //THIS DATA IS ERROR CAN MULTIPLE THE VIEW IN THE TABLE
// /**
//  * Helper function to convert orderItems into a formatted HTML output.
//  * It supports both object and array structures and groups items by category.
//  */
// function jsonToHtmlByCategory(orderItems) {
//   if (!orderItems) return '';

//   let html = '';

//   // If orderItems is an array, group them by category.
//   if (Array.isArray(orderItems)) {
//     const groups = {};
//     orderItems.forEach(item => {
//       if (item.category) {
//         if (!groups[item.category]) groups[item.category] = [];
//         groups[item.category].push(item);
//       }
//     });
//     // Render each group.
//     for (let category in groups) {
//       html += `<div class="order-section"><h3>${category}</h3><ul>`;
//       groups[category].forEach(item => {
//         html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//       });
//       html += `</ul></div>`;
//     }
//   } else if (typeof orderItems === 'object') {
//     // If orderItems is an object, it might contain arrays or single objects.
//     for (let key in orderItems) {
//       if (orderItems.hasOwnProperty(key)) {
//         let value = orderItems[key];
//         if (Array.isArray(value)) {
//           const groups = {};
//           value.forEach(item => {
//             if (item.category) {
//               if (!groups[item.category]) groups[item.category] = [];
//               groups[item.category].push(item);
//             }
//           });
//           for (let category in groups) {
//             html += `<div class="order-section"><h3>${category}</h3><ul>`;
//             groups[category].forEach(item => {
//               html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//             });
//             html += `</ul></div>`;
//           }
//         } else if (typeof value === 'object') {
//           const category = value.category || key;
//           html += `<div class="order-section"><h3>${category}</h3><ul>`;
//           html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
//           html += `</ul></div>`;
//         }
//       }
//     }
//   }
//   return html;
// }

// /**
//  * Function to fetch user bookings and history, then update the table.
//  * Now it checks MyBooking, MyHistory, and MyCancelAndDecline.
//  * For MyHistory and MyCancelAndDecline, if the booking date is before the start of the current month
//  * (local Philippine time), the row will be hidden.
//  * A duplicate check is implemented so that each booking (userId + bookingId) is added only once.
//  */
// function fetchUserBookings() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function (snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear existing rows.
    
//     // Use an object to track displayed bookings.
//     var displayedBookings = {};
    
//     snapshot.forEach(function (userSnapshot) {
//       var userData = userSnapshot.val();
//       var firstName = userData.firstName || "";
//       var lastName = userData.lastName || "";
//       var accountName = (firstName + " " + lastName).trim() || "N/A";

//       // Process MyBooking, MyHistory, and MyCancelAndDecline nodes.
//       ['MyBooking', 'MyHistory', 'MyCancelAndDecline'].forEach(function(node) {
//         if (userData[node]) {
//           for (var bookingId in userData[node]) {
//             if (userData[node].hasOwnProperty(bookingId)) {
//               // Create a unique key combining user id and booking id.
//               var uniqueKey = userSnapshot.key + "-" + bookingId;
//               if (displayedBookings[uniqueKey]) {
//                 // Skip duplicate bookings.
//                 continue;
//               }
              
//               var booking = userData[node][bookingId];
//               var review = booking.bookingReview || {};
//               var name = review.name || accountName;
//               var rawDate = review.bookingDate || "N/A";
//               // Remove "Date:" (case-insensitive) and any time info in parentheses.
//               var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//               var status = (review.statusReview || "pending").toLowerCase();

//               // For MyHistory and MyCancelAndDecline, hide if the booking date is before the start of current month.
//               var showRow = true;
//               if ((node === "MyHistory" || node === "MyCancelAndDecline") && date !== "N/A") {
//                 var bookingDate = new Date(date);
//                 if (!isNaN(bookingDate)) {
//                   var now = new Date();
//                   var startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
//                   if (bookingDate < startOfCurrentMonth) {
//                     showRow = false;
//                   }
//                 }
//               }

//               if (showRow) {
//                 // Mark as displayed.
//                 displayedBookings[uniqueKey] = true;
                
//                 // Always include the edit icon; for MyHistory and MyCancelAndDecline, disable it.
//                 var editIcon = `<i class="bx bx-pencil ${node === "MyBooking" ? "" : "disabled-edit"}" onclick="` + 
//                   (node === "MyBooking" ? 
//                     `viewBookingEdit('${userSnapshot.key}', '${bookingId}', '${node}')` : 
//                     `viewBookingEditDisabled()`) + `"></i>`;
                
//                 // Create a row with action icons (detail and edit).
//                 var row = document.createElement("tr");
//                 row.innerHTML = `
//                   <td>${name}</td>
//                   <td>${date}</td>
//                   <td><span class="online" style="color: green;">Online</span></td>
//                   <td><span id="status-${userSnapshot.key}-${bookingId}-${node}" class="status ${status}">${status.toUpperCase()}</span></td>
//                   <td>
//                     <div class="actions">
//                       ${editIcon}
//                       <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', '${node}')"></i>
//                     </div>
//                   </td>
//                 `;
//                 tableBody.appendChild(row);
//               }
//             }
//           }
//         }
//       });
//     });
//   });
// }

// /**
//  * Function to view booking details (read-only mode)
//  */
// function viewBooking(userId, bookingId, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Status:</strong> <span id="modalStatus" class="status ${(review.statusReview || 'pending').toLowerCase()}">${(review.statusReview || 'PENDING').toUpperCase()}</span></p>`;

//       // Order Items: Use the updated helper to show all categories.
//       if (review.orderItems) {
//         modalContent.innerHTML += `<hr><h3>Order Details</h3>`;
//         modalContent.innerHTML += jsonToHtmlByCategory(review.orderItems);
//       }
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal.
//     document.getElementById("bookingModal").style.display = "block";

//     // Set up static view update buttons if needed.
//     document.getElementById("approveBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'approved', node);
//     };
//     document.getElementById("declineBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'declined', node);
//     };
//   });
// }

// /**
//  * Helper function to center modal content.
//  */
// function centerModalContent(modalId) {
//   var modal = document.getElementById(modalId);
//   if (modal) {
//     modal.style.display = "flex"; // Use flex to center content
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";
//   }
// }

// /**
//  * New function to view booking details with an editable status dropdown.
//  * (Editing is only enabled via the pencil icon on MyBooking records.)
//  */
// function viewBookingEdit(userId, bookingId, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       // Display booking details
//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       // Editable status dropdown without inline color styling
//       modalContent.innerHTML += `<p><strong>Status:</strong> 
//            <select id="statusDropdown">
//              <option value="pending" ${review.statusReview === 'pending' ? 'selected' : ''}>PENDING</option>
//              <option value="approved" ${review.statusReview === 'approved' ? 'selected' : ''}>APPROVED</option>
//              <option value="declined" ${review.statusReview === 'declined' ? 'selected' : ''}>DECLINED</option>
//            </select>
//            </p>`;
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal and center its content.
//     document.getElementById("bookingModal").style.display = "block";
//     centerModalContent("bookingModal");

//     // Attach event listener to the dropdown to update status when changed.
//     document.getElementById("statusDropdown").addEventListener("change", function (e) {
//       var newStatus = e.target.value;
//       updateBookingStatus(userId, bookingId, newStatus, node);
//     });
//   }).catch(function (error) {
//     console.error("Error fetching booking data:", error);
//     alert("Error fetching booking details.");
//   });
// }

// /**
//  * Function to update the booking status.
//  */
// function updateBookingStatus(userId, bookingId, newStatus, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/bookingReview");
//   bookingRef.update({ statusReview: newStatus })
//     .then(() => {
//       // Update status in the modal if it exists.
//       var modalStatusElem = document.getElementById("modalStatus");
//       if (modalStatusElem) {
//         modalStatusElem.className = "status " + newStatus;
//         modalStatusElem.innerText = newStatus.toUpperCase();
//       }
//       // Update status in the table.
//       var statusElem = document.getElementById("status-" + userId + "-" + bookingId + "-" + node);
//       if (statusElem) {
//         statusElem.className = "status " + newStatus;
//         statusElem.innerText = newStatus.toUpperCase();
//       }
//       alert("Booking status updated to " + newStatus.toUpperCase());
//     })
//     .catch(error => {
//       alert("Error updating status: " + error);
//     });
// }

// /**
//  * Function for disabled edit on non-MyBooking records.
//  */
// function viewBookingEditDisabled() {
//   alert("This booking cannot be edited.");
// }

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function () {
//   document.getElementById("bookingModal").style.display = "none";
// });

// // Close modal if clicking outside the modal content.
// window.onclick = function (event) {
//   var modal = document.getElementById("bookingModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // Initialize bookings when DOM is ready.
// document.addEventListener("DOMContentLoaded", function () {
//   fetchUserBookings();
// });









//THIS FUNCTION NOT HIDE THE MY HISTORY AND THE DECLINE IF THE MONTH IS END
// /**
//  * Helper function to convert orderItems into a formatted HTML output.
//  * It supports both object and array structures and groups items by category.
//  */
// function jsonToHtmlByCategory(orderItems) {
//   if (!orderItems) return '';

//   let html = '';

//   // If orderItems is an array, group them by category.
//   if (Array.isArray(orderItems)) {
//     const groups = {};
//     orderItems.forEach(item => {
//       if (item.category) {
//         if (!groups[item.category]) groups[item.category] = [];
//         groups[item.category].push(item);
//       }
//     });
//     // Render each group.
//     for (let category in groups) {
//       html += `<div class="order-section"><h3>${category}</h3><ul>`;
//       groups[category].forEach(item => {
//         html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//       });
//       html += `</ul></div>`;
//     }
//   } else if (typeof orderItems === 'object') {
//     // If orderItems is an object, it might contain arrays or single objects.
//     for (let key in orderItems) {
//       if (orderItems.hasOwnProperty(key)) {
//         let value = orderItems[key];
//         // If it's an array, group items by their category.
//         if (Array.isArray(value)) {
//           const groups = {};
//           value.forEach(item => {
//             if (item.category) {
//               if (!groups[item.category]) groups[item.category] = [];
//               groups[item.category].push(item);
//             }
//           });
//           for (let category in groups) {
//             html += `<div class="order-section"><h3>${category}</h3><ul>`;
//             groups[category].forEach(item => {
//               html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//             });
//             html += `</ul></div>`;
//           }
//         } else if (typeof value === 'object') {
//           // Handle single object items.
//           const category = value.category || key;
//           html += `<div class="order-section"><h3>${category}</h3><ul>`;
//           html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
//           html += `</ul></div>`;
//         }
//       }
//     }
//   }
//   return html;
// }

// // Function to fetch user bookings, history, and cancellations, then update the table.
// function fetchUserBookings() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function (snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear existing rows.

//     snapshot.forEach(function (userSnapshot) {
//       var userData = userSnapshot.val();
//       var firstName = userData.firstName || "";
//       var lastName = userData.lastName || "";
//       var accountName = (firstName + " " + lastName).trim() || "N/A";

//       // Process MyBooking, MyHistory, and MyCancelAndDecline nodes.
//       ['MyBooking', 'MyHistory', 'MyCancelAndDecline'].forEach(function(node) {
//         if (userData[node]) {
//           for (var bookingId in userData[node]) {
//             if (userData[node].hasOwnProperty(bookingId)) {
//               var booking = userData[node][bookingId];
//               var review = booking.bookingReview || {};
//               var name = review.name || accountName;
//               var rawDate = review.bookingDate || "N/A";
//               // Remove "Date:" (case-insensitive) and any time info in parentheses
//               var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//               var status = (review.statusReview || "pending").toLowerCase();

//               // Create a row with action icons (detail, pencil for edit)
//               var row = document.createElement("tr");
//               row.innerHTML = `
//                 <td>${name}</td>
//                 <td>${date}</td>
//                 <td><span class="online" style="color: green;">Online</span></td>
//                 <td><span id="status-${userSnapshot.key}-${bookingId}-${node}" class="status ${status}">${status.toUpperCase()}</span></td>
//                 <td>
//                   <div class="actions">
//                     <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}', '${node}')"></i>
//                     <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', '${node}')"></i>
//                   </div>
//                 </td>
//               `;
//               tableBody.appendChild(row);
//             }
//           }
//         }
//       });
//     });
//   });
// }

// // Function to view booking details (read-only mode)
// function viewBooking(userId, bookingId, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Status:</strong> <span id="modalStatus" class="status ${(review.statusReview || 'pending').toLowerCase()}">${(review.statusReview || 'PENDING').toUpperCase()}</span></p>`;

//       // Order Items: Use the updated helper to show all categories.
//       if (review.orderItems) {
//         modalContent.innerHTML += `<hr><h3>Order Details</h3>`;
//         modalContent.innerHTML += jsonToHtmlByCategory(review.orderItems);
//       }
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal.
//     document.getElementById("bookingModal").style.display = "block";

//     // Set up static view update buttons if needed.
//     document.getElementById("approveBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'approved', node);
//     };
//     document.getElementById("declineBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'declined', node);
//     };
//   });
// }

// // Helper function to center modal content.
// function centerModalContent(modalId) {
//   var modal = document.getElementById(modalId);
//   if (modal) {
//     modal.style.display = "flex"; // Use flex to center content
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";
//   }
// }

// // New function to view booking details with an editable status dropdown.
// function viewBookingEdit(userId, bookingId, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       // Display booking details
//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       // Editable status dropdown without inline color styling
//       modalContent.innerHTML += `<p><strong>Status:</strong> 
//            <select id="statusDropdown">
//              <option value="pending" ${review.statusReview === 'pending' ? 'selected' : ''}>PENDING</option>
//              <option value="approved" ${review.statusReview === 'approved' ? 'selected' : ''}>APPROVED</option>
//              <option value="declined" ${review.statusReview === 'declined' ? 'selected' : ''}>DECLINED</option>
//            </select>
//            </p>`;
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal and center its content.
//     document.getElementById("bookingModal").style.display = "block";
//     centerModalContent("bookingModal");

//     // Attach event listener to the dropdown to update status when changed.
//     document.getElementById("statusDropdown").addEventListener("change", function (e) {
//       var newStatus = e.target.value;
//       updateBookingStatus(userId, bookingId, newStatus, node);
//     });
//   }).catch(function (error) {
//     console.error("Error fetching booking data:", error);
//     alert("Error fetching booking details.");
//   });
// }

// // Function to update the booking status.
// function updateBookingStatus(userId, bookingId, newStatus, node) {

//   if (newStatus.toLowerCase() === "cancelled" || newStatus.toLowerCase() === "refund") {
//   }
  
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/bookingReview");
//   bookingRef.update({ statusReview: newStatus })
//     .then(() => {
//       // Update status in the modal if it exists.
//       var modalStatusElem = document.getElementById("modalStatus");
//       if (modalStatusElem) {
//         modalStatusElem.className = "status " + newStatus;
//         modalStatusElem.innerText = newStatus.toUpperCase();
//       }
//       // Update status in the table.
//       var statusElem = document.getElementById("status-" + userId + "-" + bookingId + "-" + node);
//       if (statusElem) {
//         statusElem.className = "status " + newStatus;
//         statusElem.innerText = newStatus.toUpperCase();
//       }
//       alert("Booking status updated to " + newStatus.toUpperCase());
//     })
//     .catch(error => {
//       alert("Error updating status: " + error);
//     });
// }

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function () {
//   document.getElementById("bookingModal").style.display = "none";
// });

// // Close modal if clicking outside the modal content.
// window.onclick = function (event) {
//   var modal = document.getElementById("bookingModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // Initialize bookings when DOM is ready.
// document.addEventListener("DOMContentLoaded", function () {
//   fetchUserBookings();
// });





// //THIS DATA CAN ACESS THE DECLINE AND THE CANCEL
// /**
//  * Helper function to convert orderItems into a formatted HTML output.
//  * It supports both object and array structures and groups items by category.
//  */
// function jsonToHtmlByCategory(orderItems) {
//   if (!orderItems) return '';

//   let html = '';

//   // If orderItems is an array, group them by category.
//   if (Array.isArray(orderItems)) {
//     const groups = {};
//     orderItems.forEach(item => {
//       if (item.category) {
//         if (!groups[item.category]) groups[item.category] = [];
//         groups[item.category].push(item);
//       }
//     });
//     // Render each group.
//     for (let category in groups) {
//       html += `<div class="order-section"><h3>${category}</h3><ul>`;
//       groups[category].forEach(item => {
//         html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//       });
//       html += `</ul></div>`;
//     }
//   } else if (typeof orderItems === 'object') {
//     // If orderItems is an object, it might contain arrays or single objects.
//     for (let key in orderItems) {
//       if (orderItems.hasOwnProperty(key)) {
//         let value = orderItems[key];
//         // If it's an array, group items by their category.
//         if (Array.isArray(value)) {
//           const groups = {};
//           value.forEach(item => {
//             if (item.category) {
//               if (!groups[item.category]) groups[item.category] = [];
//               groups[item.category].push(item);
//             }
//           });
//           for (let category in groups) {
//             html += `<div class="order-section"><h3>${category}</h3><ul>`;
//             groups[category].forEach(item => {
//               html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//             });
//             html += `</ul></div>`;
//           }
//         } else if (typeof value === 'object') {
//           // Handle single object items.
//           const category = value.category || key;
//           html += `<div class="order-section"><h3>${category}</h3><ul>`;
//           html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
//           html += `</ul></div>`;
//         }
//       }
//     }
//   }
//   return html;
// }

// // Function to fetch user bookings and history, then update the table.
// function fetchUserBookings() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function (snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear existing rows.

//     snapshot.forEach(function (userSnapshot) {
//       var userData = userSnapshot.val();
//       var firstName = userData.firstName || "";
//       var lastName = userData.lastName || "";
//       var accountName = (firstName + " " + lastName).trim() || "N/A";

//       // Process both MyBooking and MyHistory nodes.
//       ['MyBooking', 'MyHistory'].forEach(function(node) {
//         if (userData[node]) {
//           for (var bookingId in userData[node]) {
//             if (userData[node].hasOwnProperty(bookingId)) {
//               var booking = userData[node][bookingId];
//               var review = booking.bookingReview || {};
//               var name = review.name || accountName;
//               var rawDate = review.bookingDate || "N/A";
//               // Remove "Date:" (case-insensitive) and any time info in parentheses
//               var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//               var status = (review.statusReview || "pending").toLowerCase();

//               // Create a row with action icons (detail, pencil for edit)
//               var row = document.createElement("tr");
//               row.innerHTML = `
//                 <td>${name}</td>
//                 <td>${date}</td>
//                 <td><span class="online" style="color: green;">Online</span></td>
//                 <td><span id="status-${userSnapshot.key}-${bookingId}-${node}" class="status ${status}">${status.toUpperCase()}</span></td>
//                 <td>
//                   <div class="actions">
//                     <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}', '${node}')"></i>
//                     <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}', '${node}')"></i>
//                   </div>
//                 </td>
//               `;
//               tableBody.appendChild(row);
//             }
//           }
//         }
//       });
//     });
//   });
// }

// // Function to view booking details (read-only mode)
// function viewBooking(userId, bookingId, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Status:</strong> <span id="modalStatus" class="status ${(review.statusReview || 'pending').toLowerCase()}">${(review.statusReview || 'PENDING').toUpperCase()}</span></p>`;

//       // Order Items: Use the updated helper to show all categories.
//       if (review.orderItems) {
//         modalContent.innerHTML += `<hr><h3>Order Details</h3>`;
//         modalContent.innerHTML += jsonToHtmlByCategory(review.orderItems);
//       }
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal.
//     document.getElementById("bookingModal").style.display = "block";

//     // Set up static view update buttons if needed.
//     document.getElementById("approveBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'approved', node);
//     };
//     document.getElementById("declineBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'declined', node);
//     };
//   });
// }

// // Helper function to center modal content.
// function centerModalContent(modalId) {
//   var modal = document.getElementById(modalId);
//   if (modal) {
//     modal.style.display = "flex"; // Use flex to center content
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";
//   }
// }

// // New function to view booking details with an editable status dropdown.
// function viewBookingEdit(userId, bookingId, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       // Display booking details
//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       // Editable status dropdown without inline color styling
//       modalContent.innerHTML += `<p><strong>Status:</strong> 
//            <select id="statusDropdown">
//              <option value="pending" ${review.statusReview === 'pending' ? 'selected' : ''}>PENDING</option>
//              <option value="approved" ${review.statusReview === 'approved' ? 'selected' : ''}>APPROVED</option>
//              <option value="declined" ${review.statusReview === 'declined' ? 'selected' : ''}>DECLINED</option>
//            </select>
//            </p>`;
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal and center its content.
//     document.getElementById("bookingModal").style.display = "block";
//     centerModalContent("bookingModal");

//     // Attach event listener to the dropdown to update status when changed.
//     document.getElementById("statusDropdown").addEventListener("change", function (e) {
//       var newStatus = e.target.value;
//       updateBookingStatus(userId, bookingId, newStatus, node);
//     });
//   }).catch(function (error) {
//     console.error("Error fetching booking data:", error);
//     alert("Error fetching booking details.");
//   });
// }

// // Function to update the booking status.
// function updateBookingStatus(userId, bookingId, newStatus, node) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/bookingReview");
//   bookingRef.update({ statusReview: newStatus })
//     .then(() => {
//       // Update status in the modal if it exists.
//       var modalStatusElem = document.getElementById("modalStatus");
//       if (modalStatusElem) {
//         modalStatusElem.className = "status " + newStatus;
//         modalStatusElem.innerText = newStatus.toUpperCase();
//       }
//       // Update status in the table.
//       var statusElem = document.getElementById("status-" + userId + "-" + bookingId + "-" + node);
//       if (statusElem) {
//         statusElem.className = "status " + newStatus;
//         statusElem.innerText = newStatus.toUpperCase();
//       }
//       alert("Booking status updated to " + newStatus.toUpperCase());
//     })
//     .catch(error => {
//       alert("Error updating status: " + error);
//     });
// }

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function () {
//   document.getElementById("bookingModal").style.display = "none";
// });

// // Close modal if clicking outside the modal content.
// window.onclick = function (event) {
//   var modal = document.getElementById("bookingModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // Initialize bookings when DOM is ready.
// document.addEventListener("DOMContentLoaded", function () {
//   fetchUserBookings();
// });








//THIS DATA CAN ACESS THE MY HISTORY
// /**
//  * Helper function to convert orderItems into a formatted HTML output.
//  * It supports both object and array structures and groups items by category.
//  */
// function jsonToHtmlByCategory(orderItems) {
//   if (!orderItems) return '';

//   let html = '';

//   // If orderItems is an array, group them by category.
//   if (Array.isArray(orderItems)) {
//     const groups = {};
//     orderItems.forEach(item => {
//       if (item.category) {
//         if (!groups[item.category]) groups[item.category] = [];
//         groups[item.category].push(item);
//       }
//     });
//     // Render each group.
//     for (let category in groups) {
//       html += `<div class="order-section"><h3>${category}</h3><ul>`;
//       groups[category].forEach(item => {
//         html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//       });
//       html += `</ul></div>`;
//     }
//   } else if (typeof orderItems === 'object') {
//     // If orderItems is an object, it might contain arrays or single objects.
//     for (let key in orderItems) {
//       if (orderItems.hasOwnProperty(key)) {
//         let value = orderItems[key];
//         // If it's an array, group items by their category.
//         if (Array.isArray(value)) {
//           const groups = {};
//           value.forEach(item => {
//             if (item.category) {
//               if (!groups[item.category]) groups[item.category] = [];
//               groups[item.category].push(item);
//             }
//           });
//           for (let category in groups) {
//             html += `<div class="order-section"><h3>${category}</h3><ul>`;
//             groups[category].forEach(item => {
//               html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
//             });
//             html += `</ul></div>`;
//           }
//         } else if (typeof value === 'object') {
//           // Handle single object items.
//           const category = value.category || key;
//           html += `<div class="order-section"><h3>${category}</h3><ul>`;
//           html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
//           html += `</ul></div>`;
//         }
//       }
//     }
//   }
//   return html;
// }

// // Function to fetch user bookings and update the table.
// function fetchUserBookings() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function (snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear existing rows.

//     snapshot.forEach(function (userSnapshot) {
//       var userData = userSnapshot.val();
//       var firstName = userData.firstName || "";
//       var lastName = userData.lastName || "";
//       var accountName = (firstName + " " + lastName).trim() || "N/A";

//       if (userData.MyBooking) {
//         for (var bookingId in userData.MyBooking) {
//           if (userData.MyBooking.hasOwnProperty(bookingId)) {
//             var booking = userData.MyBooking[bookingId];
//             var review = booking.bookingReview || {};
//             var name = review.name || accountName;
//             var rawDate = review.bookingDate || "N/A";
//             // Remove "Date:" (case-insensitive) and any time info in parentheses
//             var date = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//             var status = (review.statusReview || "pending").toLowerCase();

//             // Create a row with action icons (detail, pencil for edit)
//             var row = document.createElement("tr");
//             row.innerHTML = `
//               <td>${name}</td>
//               <td>${date}</td>
//               <td><span class="online" style="color: green;">Online</span></td>
//               <td><span id="status-${userSnapshot.key}-${bookingId}" class="status ${status}">${status.toUpperCase()}</span></td>
//               <td>
//                 <div class="actions">
//                   <i class="bx bx-pencil" onclick="viewBookingEdit('${userSnapshot.key}', '${bookingId}')"></i>
//                   <i class="bx bx-detail" onclick="viewBooking('${userSnapshot.key}', '${bookingId}')"></i>
//                 </div>
//               </td>
//             `;
//             tableBody.appendChild(row);
//           }
//         }
//       }
//     });
//   });
// }

// // Function to view booking details (read-only mode)
// function viewBooking(userId, bookingId) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;
//       //modalContent.innerHTML += `<p><strong>Payment Status:</strong> <span class="status ${(payment.paymentStatus || 'pending').toLowerCase()}">${(payment.paymentStatus || 'PENDING').toUpperCase()}</span></p>`;
//       // Added Phone display
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Status:</strong> <span id="modalStatus" class="status ${(review.statusReview || 'pending').toLowerCase()}">${(review.statusReview || 'PENDING').toUpperCase()}</span></p>`;

//       // Order Items: Use the updated helper to show all categories.
//       if (review.orderItems) {
//         modalContent.innerHTML += `<hr><h3>Order Details</h3>`;
//         modalContent.innerHTML += jsonToHtmlByCategory(review.orderItems);
//       }
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal.
//     document.getElementById("bookingModal").style.display = "block";

//     // Set up static view update buttons if needed.
//     document.getElementById("approveBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'approved');
//     };
//     document.getElementById("declineBtn").onclick = function () {
//       updateBookingStatus(userId, bookingId, 'declined');
//     };
//   });
// }


// // Helper function to center modal content.
// function centerModalContent(modalId) {
//   var modal = document.getElementById(modalId);
//   if (modal) {
//     modal.style.display = "flex"; // Use flex to center content
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";
//   }
// }

// // New function to view booking details with an editable status dropdown.
// function viewBookingEdit(userId, bookingId) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId);
//   bookingRef.once("value").then(function (snapshot) {
//     var bookingData = snapshot.val();
//     var modalContent = document.getElementById("bookingDetails");
//     modalContent.innerHTML = ""; // Clear previous details

//     if (bookingData) {
//       var review = bookingData.bookingReview || {};
//       var payment = bookingData.paymentTransaction || {};

//       // Display booking details
//       modalContent.innerHTML += `<p><strong>Name:</strong> ${review.name || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Date:</strong> ${review.bookingDate || "N/A"}</p>`;

//       //modalContent.innerHTML += `<p><strong>Payment Status:</strong> ${payment.paymentStatus || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Phone:</strong> ${review.phone || "N/A"}</p>`;
//       modalContent.innerHTML += `<p><strong>Email:</strong> ${review.email || "N/A"}</p>`;
//       // Editable status dropdown without inline color styling
//       modalContent.innerHTML += `<p><strong>Status:</strong> 
//            <select id="statusDropdown">
//              <option value="pending" ${review.statusReview === 'pending' ? 'selected' : ''}>PENDING</option>
//              <option value="approved" ${review.statusReview === 'approved' ? 'selected' : ''}>APPROVED</option>
//              <option value="declined" ${review.statusReview === 'declined' ? 'selected' : ''}>DECLINED</option>
//            </select>
//            </p>`;
//     } else {
//       modalContent.innerHTML = "<p>No booking details found.</p>";
//     }

//     // Show the modal and center its content.
//     document.getElementById("bookingModal").style.display = "block";
//     centerModalContent("bookingModal");

//     // Attach event listener to the dropdown to update status when changed.
//     document.getElementById("statusDropdown").addEventListener("change", function (e) {
//       var newStatus = e.target.value;
//       updateBookingStatus(userId, bookingId, newStatus);
//     });
//   }).catch(function (error) {
//     console.error("Error fetching booking data:", error);
//     alert("Error fetching booking details.");
//   });
// }


// // Function to update the booking status.
// function updateBookingStatus(userId, bookingId, newStatus) {
//   var bookingRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/bookingReview");
//   bookingRef.update({ statusReview: newStatus })
//     .then(() => {
//       // Update status in the modal if it exists.
//       var modalStatusElem = document.getElementById("modalStatus");
//       if (modalStatusElem) {
//         modalStatusElem.className = "status " + newStatus;
//         modalStatusElem.innerText = newStatus.toUpperCase();
//       }
//       // Update status in the table.
//       var statusElem = document.getElementById("status-" + userId + "-" + bookingId);
//       if (statusElem) {
//         statusElem.className = "status " + newStatus;
//         statusElem.innerText = newStatus.toUpperCase();
//       }
//       alert("Booking status updated to " + newStatus.toUpperCase());
//     })
//     .catch(error => {
//       alert("Error updating status: " + error);
//     });
// }

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function () {
//   document.getElementById("bookingModal").style.display = "none";
// });

// // Close modal if clicking outside the modal content.
// window.onclick = function (event) {
//   var modal = document.getElementById("bookingModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // Initialize bookings when DOM is ready.
// document.addEventListener("DOMContentLoaded", function () {
//   fetchUserBookings();
// });


