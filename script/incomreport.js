import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


// Firebase configuration
var firebaseConfig = {
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
const appFirebase = initializeApp(firebaseConfig);
const db = getDatabase(appFirebase);
const auth = getAuth(appFirebase);

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


// Logout function
document.getElementById('logout-link').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior

  if (confirm('Are you sure you want to log out?')) {
    signOut(auth) // ✅ Use `signOut(auth)`
      .then(() => {
        alert('Successfully logged out.');
        window.location.href = '../index.html';
      })
      .catch((error) => {
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
window.toggleReportSection = toggleReportSection;

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
window.toggleAccommodationSection = toggleAccommodationSection;

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
window.toggleTransactionSection = toggleTransactionSection;

//Fetch products when the page loads
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





// Global variables for pagination and data
const pageSize = 30;
let currentPage = 1;
let filteredBookings = [];

// Utility function: Convert raw date string to numeric format and return an object.
function parseBookingDate(rawDateStr) {
  // Remove "Date:" prefix and split at the first "("
  const cleanStr = rawDateStr.replace(/Date:\s*/i, "").split("(")[0].trim();
  // Try to create a Date object. The raw string should be in a parseable format.
  const dateObj = new Date(cleanStr);
  if (isNaN(dateObj)) {
    return null;
  }
  return {
    formatted: dateObj.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate()
  };
}

// Helper function: Returns the current (local) date formatted as needed.
function getDefaultDate() {
  const now = new Date();
  return {
    formatted: now.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };
}

// Fetch booking data from Firebase under all users' MyHistory node and walkin node.
function fetchBookingsFromFirebase() {
  let bookings = [];
  const usersRef = ref(db, "users");
  const walkinRef = ref(db, "walkin");

  console.log("Fetching data from 'users' and 'walkin'...");

  Promise.all([get(usersRef), get(walkinRef)])
    .then(results => {
      const usersSnapshot = results[0];
      const walkinSnapshot = results[1];

      // Process bookings from users
      if (usersSnapshot.exists()) {
        usersSnapshot.forEach(userSnapshot => {
          const userData = userSnapshot.val();
          let accountName = "";
          if (userData.firstName || userData.lastName) {
            accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim();
          }
          if (userData.MyHistory) {
            for (let bookingId in userData.MyHistory) {
              if (userData.MyHistory.hasOwnProperty(bookingId)) {
                const record = userData.MyHistory[bookingId];
                if (record && record.paymentTransaction) {
                  const transaction = record.paymentTransaction;
                  console.log("Payment Transaction Data:", transaction);
                  // Parse the PaymentDate string or use default date
                  const parsedDate = parseBookingDate(transaction.PaymentDate) || getDefaultDate();
                  bookings.push({
                    name: transaction.name || accountName || "N/A",
                    downPayment: transaction.downPayment !== undefined ? transaction.downPayment : "N/A",
                    amount: transaction.amount || 0,
                    paymentStatus: transaction.paymentStatus || "N/A",
                    ...parsedDate
                  });
                } else {
                  console.warn("No paymentTransaction found for record:", bookingId);
                }
              }
            }
          }
        });
      } else {
        console.warn("No data available under 'users'");
      }

      // Process walkin data from Firebase
      if (walkinSnapshot.exists()) {
        walkinSnapshot.forEach(childSnapshot => {
          const record = childSnapshot.val();
          // Parse the date; kung walang valid na date, gagamitin ang default local date.
          const parsedDate = parseBookingDate(record.date) || getDefaultDate();
          const walkinRecord = {
            name: record.customerName || "N/A",
            downPayment: "N/A",
            amount: record.total || 0,
            paymentStatus: record.status || "N/A",
            ...parsedDate
          };
          bookings.push(walkinRecord);
        });
      } else {
        console.warn("No data available under 'walkin'");
      }

      // Sort bookings so that the newest date is on top
      bookings.sort((a, b) => {
        const dateA = new Date(a.year, a.month - 1, a.day);
        const dateB = new Date(b.year, b.month - 1, b.day);
        return dateB - dateA; // descending order
      });

      console.log("Processed bookings:", bookings);
      window.initialBookings = bookings;
      filteredBookings = bookings;
      renderPage(currentPage);
      renderPagination();
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Update the Day dropdown based on the selected Year and Month.
function updateDayOptions() {
  const daySelect = document.getElementById("day");
  daySelect.innerHTML = "";
  let maxDays = 31;
  const monthVal = document.getElementById("month").value;
  const yearVal = document.getElementById("year").value || new Date().getFullYear();
  if (monthVal) {
    maxDays = new Date(yearVal, monthVal, 0).getDate();
  }
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "All";
  daySelect.appendChild(defaultOption);
  for (let d = 1; d <= maxDays; d++) {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    daySelect.appendChild(option);
  }
}

function renderPage(page) {
  const tableBody = document.getElementById("accommodation-list");
  tableBody.innerHTML = "";
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageData = filteredBookings.slice(start, end);

  pageData.forEach((booking) => {
    const formattedStatusPayment = booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1).toLowerCase();
    const row = document.createElement("tr");

    // Attach date data as data attributes
    row.dataset.paymentDate = booking.formatted;
    row.dataset.paymentYear = booking.year;
    row.dataset.paymentMonth = booking.month;
    row.dataset.paymentDay = booking.day;

    row.innerHTML = `
      <td>${booking.name}</td>
      <td>₱${booking.downPayment}</td>
      <td>₱${booking.amount}</td>
      <td>${formattedStatusPayment}</td>
    `;
    tableBody.appendChild(row);
  });

  // Update total view with the total amount for the current page.
  updateTotalView(pageData);
}

function updateTotalView(pageData) {
  let totalAmount = 0;
  pageData.forEach(booking => {
    totalAmount += parseFloat(booking.amount) || 0;
  });
  const totalDiv = document.getElementById("total");
  totalDiv.innerHTML = `<strong>Total :</strong> ₱${totalAmount.toFixed(2)}`;
}

// Render pagination controls.
function renderPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";
  const totalPages = Math.ceil(filteredBookings.length / pageSize);
  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Previous";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
      renderPagination();
    }
  };
  paginationDiv.appendChild(prevBtn);
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = i;
    if (i === currentPage) pageBtn.classList.add("active");
    pageBtn.onclick = () => {
      currentPage = i;
      renderPage(currentPage);
      renderPagination();
    };
    paginationDiv.appendChild(pageBtn);
  }
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
      renderPagination();
    }
  };
  paginationDiv.appendChild(nextBtn);
}

// Filter the bookings based on the selected Year, Month, Day, and Status.
function filterTable() {
  const yearFilter = document.getElementById("year").value;
  const monthFilter = document.getElementById("month").value;
  const dayFilter = document.getElementById("day").value;
  const statusFilter = document.getElementById("Status").value; // New status filter

  console.log("Filters selected:", { yearFilter, monthFilter, dayFilter, statusFilter });

  filteredBookings = window.initialBookings.filter(b => {
    let valid = true;
    if (yearFilter !== "" && b.year !== parseInt(yearFilter)) {
      valid = false;
    }
    if (monthFilter !== "" && b.month !== parseInt(monthFilter)) {
      valid = false;
    }
    if (dayFilter !== "" && b.day !== parseInt(dayFilter)) {
      valid = false;
    }
    if (statusFilter !== "" && b.paymentStatus.toLowerCase() !== statusFilter.toLowerCase()) {
      valid = false;
    }
    return valid;
  });

  // Re-sort filteredBookings para matiyak ang new-to-old order
  filteredBookings.sort((a, b) => {
    const dateA = new Date(a.year, a.month - 1, a.day);
    const dateB = new Date(b.year, b.month - 1, b.day);
    return dateB - dateA;
  });

  currentPage = 1;
  renderPage(currentPage);
  renderPagination();
}

// Call filterTable() whenever the status dropdown changes
function updateStatusOptions() {
  filterTable();
}

// Expose functions globally for inline event handlers
window.filterTable = filterTable;
window.printTable = printTable;
window.updateStatusOptions = updateStatusOptions;

// Print Function
function printTable() {
  const tableHTML = document.getElementById("table-print").outerHTML;
  const printWindow = window.open("", "PrintWindow", "width=800,height=600");
  printWindow.document.write(`
    <html>
      <head>
        <title>Payment Report</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table, th, td {
            border: 1px solid black;
          }
        </style>
      </head>
      <body>
        ${tableHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

// Set default filters to the current date and update the Day dropdown.
function setDefaultDateFilters() {
  const now = new Date();
  document.getElementById("year").value = now.getFullYear();
  document.getElementById("month").value = now.getMonth() + 1;
  updateDayOptions();
  document.getElementById("day").value = now.getDate();
}

// On page load, set defaults and fetch data.
window.onload = function () {
  sidebar.classList.add('hide');
  setDefaultDateFilters();
  fetchBookingsFromFirebase();
};


//This no walkin data
// // Global variables for pagination and data
// const pageSize = 30;
// let currentPage = 1;
// let filteredBookings = [];

// // Utility function: Convert raw date string to numeric format and return an object.
// function parseBookingDate(rawDateStr) {
//   // Remove "Date:" prefix and split at the first "("
//   const cleanStr = rawDateStr.replace(/Date:\s*/i, "").split("(")[0].trim();
//   // Try to create a Date object. The raw string should be in a parseable format.
//   const dateObj = new Date(cleanStr);
//   if (isNaN(dateObj)) {
//     return null;
//   }
//   return {
//     formatted: dateObj.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }), // e.g. "3/19/2025"
//     year: dateObj.getFullYear(),
//     month: dateObj.getMonth() + 1,
//     day: dateObj.getDate()
//   };
// }

// // Fetch booking data from Firebase under all users' MyHistory node.
// function fetchBookingsFromFirebase() {
//   const usersRef = ref(db, "users");
//   console.log("Fetching data from all users...");
//   get(usersRef)
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         let bookings = [];
//         snapshot.forEach(userSnapshot => {
//           const userData = userSnapshot.val();
//           let accountName = "";
//           if (userData.firstName || userData.lastName) {
//             accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim();
//           }
//           if (userData.MyHistory) {
//             for (let bookingId in userData.MyHistory) {
//               if (userData.MyHistory.hasOwnProperty(bookingId)) {
//                 const record = userData.MyHistory[bookingId];
//                 // Directly fetch the paymentTransaction from the record
//                 if (record && record.paymentTransaction) {
//                   const transaction = record.paymentTransaction;
//                   console.log("Payment Transaction Data:", transaction);

//                   // Parse the PaymentDate string (e.g., "2025-03-26 10:11 PM")
//                   const parsedDate = parseBookingDate(transaction.PaymentDate);

//                   bookings.push({
//                     name: transaction.name || accountName || "N/A",
//                     downPayment: transaction.downPayment || 0,
//                     amount: transaction.amount || 0,
//                     paymentStatus: transaction.paymentStatus || "N/A",
//                     // Add parsed date fields to your booking object
//                     ...parsedDate
//                   });
//                 } else {
//                   console.warn("No paymentTransaction found for record:", bookingId);
//                 }
//               }
//             }
//           }
//         });

//         console.log("Processed bookings:", bookings);
//         window.initialBookings = bookings;
//         filteredBookings = bookings;
//         renderPage(currentPage);
//         renderPagination();
//       } else {
//         console.warn("No data available under 'users'");
//       }
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// }

// // Update the Day dropdown based on the selected Year and Month.
// function updateDayOptions() {
//   const daySelect = document.getElementById("day");
//   daySelect.innerHTML = "";
//   let maxDays = 31;
//   const monthVal = document.getElementById("month").value;
//   const yearVal = document.getElementById("year").value || new Date().getFullYear();
//   if (monthVal) {
//     maxDays = new Date(yearVal, monthVal, 0).getDate();
//   }
//   const defaultOption = document.createElement("option");
//   defaultOption.value = "";
//   defaultOption.textContent = "All";
//   daySelect.appendChild(defaultOption);
//   for (let d = 1; d <= maxDays; d++) {
//     const option = document.createElement("option");
//     option.value = d;
//     option.textContent = d;
//     daySelect.appendChild(option);
//   }
// }



// function renderPage(page) {
//   const tableBody = document.getElementById("accommodation-list");
//   tableBody.innerHTML = "";
//   const start = (page - 1) * pageSize;
//   const end = start + pageSize;
//   const pageData = filteredBookings.slice(start, end);

//   pageData.forEach((booking) => {
//     const formattedStatusPayment = booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1).toLowerCase();
//     const row = document.createElement("tr");

//     // Attach date data as data attributes
//     row.dataset.paymentDate = booking.formatted;
//     row.dataset.paymentYear = booking.year;
//     row.dataset.paymentMonth = booking.month;
//     row.dataset.paymentDay = booking.day;

//     row.innerHTML = `
//       <td>${booking.name}</td>
//       <td>₱${booking.downPayment}</td>
//       <td>₱${booking.amount}</td>
//       <td>${formattedStatusPayment}</td>
//     `;
//     tableBody.appendChild(row);
//   });

//   // Update total view with the total amount for the current page.
//   updateTotalView(pageData);
// }


// function updateTotalView(pageData) {
//   let totalAmount = 0;
//   pageData.forEach(booking => {
//       totalAmount += parseFloat(booking.amount) || 0;
//   });
  
//  // Update the "total" div with the formatted total amount.
//  const totalDiv = document.getElementById("total");
//  totalDiv.innerHTML = `<strong>Total :</strong> ₱${totalAmount.toFixed(2)}`;
// }



// // Render pagination controls.
// function renderPagination() {
//   const paginationDiv = document.getElementById("pagination");
//   paginationDiv.innerHTML = "";
//   const totalPages = Math.ceil(filteredBookings.length / pageSize);
//   const prevBtn = document.createElement("button");
//   prevBtn.innerText = "Previous";
//   prevBtn.disabled = currentPage === 1;
//   prevBtn.onclick = () => {
//     if (currentPage > 1) {
//       currentPage--;
//       renderPage(currentPage);
//       renderPagination();
//     }
//   };
//   paginationDiv.appendChild(prevBtn);
//   for (let i = 1; i <= totalPages; i++) {
//     const pageBtn = document.createElement("button");
//     pageBtn.innerText = i;
//     if (i === currentPage) pageBtn.classList.add("active");
//     pageBtn.onclick = () => {
//       currentPage = i;
//       renderPage(currentPage);
//       renderPagination();
//     };
//     paginationDiv.appendChild(pageBtn);
//   }
//   const nextBtn = document.createElement("button");
//   nextBtn.innerText = "Next";
//   nextBtn.disabled = currentPage === totalPages;
//   nextBtn.onclick = () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       renderPage(currentPage);
//       renderPagination();
//     }
//   };
//   paginationDiv.appendChild(nextBtn);
// }


// // Filter the bookings based on the selected Year, Month, Day, and Status.
// function filterTable() {
//   const yearFilter = document.getElementById("year").value;
//   const monthFilter = document.getElementById("month").value;
//   const dayFilter = document.getElementById("day").value;
//   const statusFilter = document.getElementById("Status").value; // New status filter

//   console.log("Filters selected:", { yearFilter, monthFilter, dayFilter, statusFilter });

//   filteredBookings = window.initialBookings.filter(b => {
//     let valid = true;
//     if (yearFilter !== "" && b.year !== parseInt(yearFilter)) {
//       valid = false;
//     }
//     if (monthFilter !== "" && b.month !== parseInt(monthFilter)) {
//       valid = false;
//     }
//     if (dayFilter !== "" && b.day !== parseInt(dayFilter)) {
//       valid = false;
//     }
//     // If a status is selected, compare (case-insensitive)
//     if (statusFilter !== "" && b.paymentStatus.toLowerCase() !== statusFilter.toLowerCase()) {
//       valid = false;
//     }
//     return valid;
//   });

//   console.log("Filtered bookings:", filteredBookings);
//   currentPage = 1;
//   renderPage(currentPage);
//   renderPagination();
// }

// // Call filterTable() whenever the status dropdown changes
// function updateStatusOptions() {
//   filterTable();
// }

// // Expose filterTable globally for inline event handlers
// window.filterTable = filterTable;
// window.printTable = printTable;
// window.updateStatusOptions = updateStatusOptions;

// // Print Function
// function printTable() {
//   // Get the HTML of the table; adjust the selector as needed.
//   const tableHTML = document.getElementById("table-print").outerHTML;

//   // Open a new window.
//   const printWindow = window.open("", "PrintWindow", "width=800,height=600");

//   // Write a basic HTML document to the new window.
//   printWindow.document.write(`
//     <html>
//       <head>
//         <title>Payment Report</title>
//         <style>
//           /* Optional: Add your print-specific styles here */
//           table {
//             width: 100%;
//             border-collapse: collapse;
//           }
//           table, th, td {
//             border: 1px solid black;
//           }
//         </style>
//       </head>
//       <body>
//         ${tableHTML}
//       </body>
//     </html>
//   `);
//   // Ensure the document is fully loaded before printing.
//   printWindow.document.close();
//   printWindow.focus();
//   // Trigger the print dialog.
//   printWindow.print();
//   // Optionally close the print window after printing.
//   printWindow.close();
// }

// // Set default filters to the current date and update the Day dropdown.
// function setDefaultDateFilters() {
//   const now = new Date();
//   document.getElementById("year").value = now.getFullYear();
//   document.getElementById("month").value = now.getMonth() + 1;
//   updateDayOptions();
//   document.getElementById("day").value = now.getDate();
// }

// // On page load, set defaults and fetch data.
// window.onload = function () {
//   sidebar.classList.add('hide');
//   setDefaultDateFilters();
//   fetchBookingsFromFirebase();
// };






// Render table rows for the current page.
// function renderPage(page) {
//   const tableBody = document.getElementById("accommodation-list");
//   tableBody.innerHTML = "";
//   const start = (page - 1) * pageSize;
//   const end = start + pageSize;
//   const pageData = filteredBookings.slice(start, end);

//   pageData.forEach((booking) => {
//     // Format paymentStatus nicely
//     const formattedStatusPayment = booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1).toLowerCase();
//     const row = document.createElement("tr");

//     // Optionally attach date data as data attributes (for debugging or further filtering)
//     row.dataset.paymentDate = booking.formatted; // e.g., "3/26/2025"
//     row.dataset.paymentYear = booking.year;
//     row.dataset.paymentMonth = booking.month;
//     row.dataset.paymentDay = booking.day;

//     row.innerHTML = `
//       <td>${booking.name}</td>
//       <td>₱${booking.downPayment}</td>
//       <td>₱${booking.amount}</td>
//       <td>${formattedStatusPayment}</td>
//     `;
//     tableBody.appendChild(row);
//   });
// }
// // Global variables for pagination and data
// const pageSize = 20;
// let currentPage = 1;
// let filteredBookings = [];

// // Utility function: Convert raw date string to numeric format and return an object.
// function parseBookingDate(rawDateStr) {
//   // Remove "Date:" prefix and split at the first "("
//   const cleanStr = rawDateStr.replace(/Date:\s*/i, "").split("(")[0].trim();
//   // Try to create a Date object. The raw string should be in a parseable format.
//   const dateObj = new Date(cleanStr);
//   if (isNaN(dateObj)) {
//     return null;
//   }
//   return {
//     formatted: dateObj.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }), // "3/19/2025"
//     year: dateObj.getFullYear(),
//     month: dateObj.getMonth() + 1,
//     day: dateObj.getDate()
//   };
// }
// // Fetch booking data from Firebase under all users' MyHistory node.
// function fetchBookingsFromFirebase() {
//   const usersRef = ref(db, "users");
//   console.log("Fetching data from all users...");
//   get(usersRef)
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         let bookings = [];
//         snapshot.forEach(userSnapshot => {
//           const userData = userSnapshot.val();
//           let accountName = "";
//           if (userData.firstName || userData.lastName) {
//             accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim();
//           }
//           if (userData.MyHistory) {
//             for (let bookingId in userData.MyHistory) {
//               if (userData.MyHistory.hasOwnProperty(bookingId)) {
//                 const record = userData.MyHistory[bookingId];
//                 // Directly fetch the paymentTransaction from the record
//                 if (record && record.paymentTransaction) {
//                   const transaction = record.paymentTransaction;
//                   console.log("Payment Transaction Data:", transaction);



//                   function parsePaymentDate(rawDateStr) {
//                     // Convert "2025-03-26 10:11 PM" to a Date object.
//                     const dateObj = new Date(rawDateStr);
//                     if (isNaN(dateObj)) {
//                       console.error("Invalid date:", rawDateStr);
//                       return { formatted: "", year: 0, month: 0, day: 0 };
//                     }
//                     return {
//                       formatted: dateObj.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
//                       year: dateObj.getFullYear(),
//                       month: dateObj.getMonth() + 1,
//                       day: dateObj.getDate()
//                     };
//                   }

//                   const parsedDate = parsePaymentDate(transaction.PaymentDate);

//                   bookings.push({
//                     name: transaction.name || accountName || "N/A",
//                     downPayment: transaction.downPayment || 0,
//                     amount: transaction.amount || 0,
//                     paymentStatus: transaction.paymentStatus || "N/A",
//                     // Add parsed date fields to your booking object
//                     ...parsedDate

//                   });
//                 } else {
//                   console.warn("No paymentTransaction found for record:", bookingId);
//                 }
//               }
//             }
//           }
//         });

//         console.log("Processed bookings:", bookings);
//         window.initialBookings = bookings;
//         filteredBookings = bookings;
//         renderPage(currentPage);
//         renderPagination();
//       } else {
//         console.warn("No data available under 'users'");
//       }
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// }



// // Update the Day dropdown based on the selected Year and Month.
// function updateDayOptions() {
//   const daySelect = document.getElementById("day");
//   daySelect.innerHTML = "";
//   let maxDays = 31;
//   const monthVal = document.getElementById("month").value;
//   const yearVal = document.getElementById("year").value || new Date().getFullYear();
//   if (monthVal) {
//     maxDays = new Date(yearVal, monthVal, 0).getDate();
//   }
//   const defaultOption = document.createElement("option");
//   defaultOption.value = "";
//   defaultOption.textContent = "All";
//   daySelect.appendChild(defaultOption);
//   for (let d = 1; d <= maxDays; d++) {
//     const option = document.createElement("option");
//     option.value = d;
//     option.textContent = d;
//     daySelect.appendChild(option);
//   }
// }


// // Render table rows for the current page.
// function renderPage(page) {
//   const tableBody = document.getElementById("accommodation-list");
//   tableBody.innerHTML = "";
//   const start = (page - 1) * pageSize;
//   const end = start + pageSize;
//   const pageData = filteredBookings.slice(start, end);

//   pageData.forEach((booking) => {
//     // Format paymentStatus nicely
//     const formattedStatusPayment = booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1).toLowerCase();
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${booking.name}</td>
//       <td>₱${booking.downPayment}</td>
//       <td>₱${booking.amount}</td>
//       <td>${formattedStatusPayment}</td>
//     `;
//     tableBody.appendChild(row);
//   });
// }


// // Render pagination controls.
// function renderPagination() {
//   const paginationDiv = document.getElementById("pagination");
//   paginationDiv.innerHTML = "";
//   const totalPages = Math.ceil(filteredBookings.length / pageSize);
//   const prevBtn = document.createElement("button");
//   prevBtn.innerText = "Previous";
//   prevBtn.disabled = currentPage === 1;
//   prevBtn.onclick = () => {
//     if (currentPage > 1) {
//       currentPage--;
//       renderPage(currentPage);
//       renderPagination();
//     }
//   };
//   paginationDiv.appendChild(prevBtn);
//   for (let i = 1; i <= totalPages; i++) {
//     const pageBtn = document.createElement("button");
//     pageBtn.innerText = i;
//     if (i === currentPage) pageBtn.classList.add("active");
//     pageBtn.onclick = () => {
//       currentPage = i;
//       renderPage(currentPage);
//       renderPagination();
//     };
//     paginationDiv.appendChild(pageBtn);
//   }
//   const nextBtn = document.createElement("button");
//   nextBtn.innerText = "Next";
//   nextBtn.disabled = currentPage === totalPages;
//   nextBtn.onclick = () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       renderPage(currentPage);
//       renderPagination();
//     }
//   };
//   paginationDiv.appendChild(nextBtn);
// }

// // Filter the bookings based on the selected Year, Month, and Day.
// function filterTable() {
//   const yearFilter = document.getElementById("year").value;
//   const monthFilter = document.getElementById("month").value;
//   const dayFilter = document.getElementById("day").value;
//   console.log("Filters selected:", { yearFilter, monthFilter, dayFilter });
//   filteredBookings = window.initialBookings.filter(b => {
//     let valid = true;
//     if (yearFilter !== "" && b.parsedYear !== parseInt(yearFilter)) {
//       valid = false;
//     }
//     if (monthFilter !== "" && b.parsedMonth !== parseInt(monthFilter)) {
//       valid = false;
//     }
//     if (dayFilter !== "" && b.parsedDay !== parseInt(dayFilter)) {
//       valid = false;
//     }
//     return valid;
//   });
//   console.log("Filtered bookings:", filteredBookings);
//   currentPage = 1;
//   renderPage(currentPage);
//   renderPagination();
// }
// // Expose filterTable globally for inline event handlers
// window.filterTable = filterTable;
// window.printTable = printTable;

// //Print Function
// function printTable() {
//   // Get the HTML of the table; adjust the selector as needed.
//   const tableHTML = document.getElementById("table-print").outerHTML;

//   // Open a new window.
//   const printWindow = window.open("", "PrintWindow", "width=800,height=600");

//   // Write a basic HTML document to the new window.
//   printWindow.document.write(`
//     <html>
//       <head>
//         <title>Payment Report</title>
//         <style>
//           /* Optional: Add your print-specific styles here */
//           table {
//             width: 100%;
//             border-collapse: collapse;
//           }
//           table, th, td {
//             border: 1px solid black;
//           }
//         </style>
//       </head>
//       <body>
//         ${tableHTML}
//       </body>
//     </html>
//   `);
//   // Ensure the document is fully loaded before printing.
//   printWindow.document.close();
//   printWindow.focus();
//   // Trigger the print dialog.
//   printWindow.print();
//   // Optionally close the print window after printing.
//   printWindow.close();
// }

// // Set default filters to the current date and update the Day dropdown.
// function setDefaultDateFilters() {
//   const now = new Date();
//   document.getElementById("year").value = now.getFullYear();
//   document.getElementById("month").value = now.getMonth() + 1;
//   updateDayOptions();
//   document.getElementById("day").value = now.getDate();
// }

// // On page load, set defaults and fetch data.
// window.onload = function () {
//   sidebar.classList.add('hide');
//   setDefaultDateFilters();
//   fetchBookingsFromFirebase();
// };
