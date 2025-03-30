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
window.toggleAccommodationSection =  toggleAccommodationSection;

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
window.toggleTransactionSection =  toggleTransactionSection;

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
    formatted: dateObj.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }), // e.g., "3/19/2025"
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate()
  };
}

// Fetch booking review data from Firebase under all users' MyHistory node and walkin
function fetchBookingsFromFirebase() {
  const usersRef = ref(db, "users");
  console.log("Fetching data from all users...");
  // Declare bookings in the outer scope so both Firebase calls share the same array.
  let bookings = [];

  get(usersRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        snapshot.forEach(userSnapshot => {
          const userData = userSnapshot.val();
          let accountName = "";
          if (userData.firstName || userData.lastName) {
            accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim();
          }
          if (userData.MyHistory) {
            for (let bookingId in userData.MyHistory) {
              if (userData.MyHistory.hasOwnProperty(bookingId)) {
                const record = userData.MyHistory[bookingId];
                if (record && record.bookingReview) {
                  const review = record.bookingReview;
                  console.log("Review data:", review);
                  const parsedDate = parseBookingDate(review.bookingDate || "");
                  if (!parsedDate) {
                    console.warn("Failed to parse date for booking:", review.bookingDate);
                    continue;
                  }
                  // Attempt to fetch the paymentTransaction from review,
                  // fallback to record.paymentTransaction if not present in review.
                  let paymentTransaction = review.paymentTransaction || record.paymentTransaction;
                  let refNo = "N/A";
                  if (paymentTransaction && paymentTransaction.refNo) {
                    refNo = paymentTransaction.refNo;
                  } else {
                    console.warn("Payment transaction refNo not found for review:", review);
                  }
                  bookings.push({
                    name: review.name || accountName || "N/A",
                    bookingDate: parsedDate.formatted,
                    statusReview: review.statusReview || "N/A",
                    refNo: refNo,
                    parsedYear: parsedDate.year,
                    parsedMonth: parsedDate.month,
                    parsedDay: parsedDate.day
                  });
                } else {
                  console.warn("No bookingReview found for record:", bookingId);
                }
              }
            }
          }
        });
      } else {
        console.warn("No data available under 'users'");
      }
      // Now process walkin data
      const walkinRef = ref(db, "walkin");
      return get(walkinRef);
    })
    .then(snapshot => {
      if (snapshot.exists()) {
        snapshot.forEach(walkinSnapshot => {
          const walkinData = walkinSnapshot.val();
          // Process only if there is a date and the status is approved
          if (walkinData.date && walkinData.status && walkinData.status.toLowerCase() === "approved") {
            const dateObj = new Date(walkinData.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric'
            });
            bookings.push({
              name: walkinData.customerName || "N/A",       // using customerName as the name
              bookingDate: formattedDate,                     // using date field
              statusReview: walkinData.status || "N/A",         // using status field
              refNo: walkinData.receiptNo || "N/A",             // using receiptNo as the reference number
              parsedYear: dateObj.getFullYear(),
              parsedMonth: dateObj.getMonth() + 1,
              parsedDay: dateObj.getDate()
            });
          }
        });
      }
      // Sort bookings so that newer dates appear first (new-to-old)
      bookings.sort((a, b) => {
        if (b.parsedYear !== a.parsedYear) return b.parsedYear - a.parsedYear;
        if (b.parsedMonth !== a.parsedMonth) return b.parsedMonth - a.parsedMonth;
        return b.parsedDay - a.parsedDay;
      });
      console.log("Processed bookings including walkin:", bookings);
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

// Render table rows for the current page.
function renderPage(page) {
  const tableBody = document.getElementById("accommodation-list");
  tableBody.innerHTML = "";
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageData = filteredBookings.slice(start, end);
  pageData.forEach((booking) => {
    const formattedStatusReview = booking.statusReview.charAt(0).toUpperCase() + booking.statusReview.slice(1).toLowerCase();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${booking.name}</td>
      <td>${booking.bookingDate}</td>
      <td>${formattedStatusReview}</td>
      <td>${booking.refNo}</td>
    `;
    tableBody.appendChild(row);
  });
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

// Filter the bookings based on the selected Year, Month, and Day.
function filterTable() {
  const yearFilter = document.getElementById("year").value;
  const monthFilter = document.getElementById("month").value;
  const dayFilter = document.getElementById("day").value;
  const statusFilter = document.getElementById("Status").value; // New status filter

  console.log("Filters selected:", { yearFilter, monthFilter, dayFilter });
  filteredBookings = window.initialBookings.filter(b => {
    let valid = true;
    if (yearFilter !== "" && b.parsedYear !== parseInt(yearFilter)) {
      valid = false;
    }
    if (monthFilter !== "" && b.parsedMonth !== parseInt(monthFilter)) {
      valid = false;
    }
    if (dayFilter !== "" && b.parsedDay !== parseInt(dayFilter)) {
      valid = false;
    }
    // If a status is selected, compare (case-insensitive)
    if (statusFilter !== "" && b.statusReview.toLowerCase() !== statusFilter.toLowerCase()) {
      valid = false;
    }
    return valid;
  });
  
  // Optionally, re-sort the filtered bookings in descending date order.
  filteredBookings.sort((a, b) => {
    if (b.parsedYear !== a.parsedYear) return b.parsedYear - a.parsedYear;
    if (b.parsedMonth !== a.parsedMonth) return b.parsedMonth - a.parsedMonth;
    return b.parsedDay - a.parsedDay;
  });

  console.log("Filtered bookings:", filteredBookings);
  currentPage = 1;
  renderPage(currentPage);
  renderPagination();
}

// Print Function
function printTable() {
  // Get the HTML of the table; adjust the selector as needed.
  const tableHTML = document.getElementById("table-print").outerHTML;
  
  // Open a new window.
  const printWindow = window.open("", "PrintWindow", "width=800,height=600");
  
  // Write a basic HTML document to the new window.
  printWindow.document.write(`
    <html>
      <head>
        <title>Booking Report</title>
        <style>
          /* Optional: Add your print-specific styles here */
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
  // Ensure the document is fully loaded before printing.
  printWindow.document.close();
  printWindow.focus();
  // Trigger the print dialog.
  printWindow.print();
  // Optionally close the print window after printing.
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

// Expose filterTable and printTable to the global scope for inline event handlers
window.filterTable = filterTable;
window.printTable = printTable;

// On page load, set defaults and fetch data.
window.onload = function () {
  sidebar.classList.add('hide');
  setDefaultDateFilters();
  fetchBookingsFromFirebase();
};



//THIS NO WALKIN DATA 
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
//     formatted: dateObj.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }), // "3/19/2025"
//     year: dateObj.getFullYear(),
//     month: dateObj.getMonth() + 1,
//     day: dateObj.getDate()
//   };
// }


// // Fetch booking review data from Firebase under all users' MyHistory node.
// function fetchBookingsFromFirebase() {
//   const usersRef = ref(db, "users");
//   console.log("Fetching data from all users...");
//   get(usersRef).then(snapshot => {
//     if (snapshot.exists()) {
//       let bookings = [];
//       snapshot.forEach(userSnapshot => {
//         const userData = userSnapshot.val();
//         let accountName = "";
//         if (userData.firstName || userData.lastName) {
//           accountName = ((userData.firstName || "") + " " + (userData.lastName || "")).trim();
//         }
//         if (userData.MyHistory) {
//           for (let bookingId in userData.MyHistory) {
//             if (userData.MyHistory.hasOwnProperty(bookingId)) {
//               const record = userData.MyHistory[bookingId];
//               if (record && record.bookingReview) {
//                 const review = record.bookingReview;
//                 console.log("Review data:", review);
//                 const parsedDate = parseBookingDate(review.bookingDate || "");
//                 if (!parsedDate) {
//                   console.warn("Failed to parse date for booking:", review.bookingDate);
//                   continue;
//                 }
//                 // Attempt to fetch the paymentTransaction from review,
//                 // fallback to record.paymentTransaction if not present in review.
//                 let paymentTransaction = review.paymentTransaction || record.paymentTransaction;
//                 let refNo = "N/A";
//                 if (paymentTransaction && paymentTransaction.refNo) {
//                   refNo = paymentTransaction.refNo;
//                 } else {
//                   console.warn("Payment transaction refNo not found for review:", review);
//                 }
//                 bookings.push({
//                   name: review.name || accountName || "N/A",
//                   bookingDate: parsedDate.formatted,
//                   statusReview: review.statusReview || "N/A",
//                   refNo: refNo,
//                   parsedYear: parsedDate.year,
//                   parsedMonth: parsedDate.month,
//                   parsedDay: parsedDate.day
//                 });
//               } else {
//                 console.warn("No bookingReview found for record:", bookingId);
//               }
//             }
//           }
//         }
//       });
      
//       console.log("Processed bookings:", bookings);
//       window.initialBookings = bookings;
//       filteredBookings = bookings;
//       renderPage(currentPage);
//       renderPagination();
//     } else {
//       console.warn("No data available under 'users'");
//     }
//   }).catch(error => {
//     console.error("Error fetching data:", error);
//   });
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
//     const formattedStatusReview = booking.statusReview.charAt(0).toUpperCase() + booking.statusReview.slice(1).toLowerCase();
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${booking.name}</td>
//       <td>${booking.bookingDate}</td>
//       <td>${formattedStatusReview}</td>
//       <td>${booking.refNo}</td>
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
//   const statusFilter = document.getElementById("Status").value; // New status filter

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
//    // If a status is selected, compare (case-insensitive)
//    if (statusFilter !== "" && b.statusReview.toLowerCase() !== statusFilter.toLowerCase()) {
//     valid = false;
//   }
//   return valid;
// });

//   console.log("Filtered bookings:", filteredBookings);
//   currentPage = 1;
//   renderPage(currentPage);
//   renderPagination();
// }
// // Expose filterTable globally for inline event handlers
// window.filterTable = filterTable;
// window.printTable = printTable;

//   //Print Function
// function printTable() {
//   // Get the HTML of the table; adjust the selector as needed.
//   const tableHTML = document.getElementById("table-print").outerHTML;
  
//   // Open a new window.
//   const printWindow = window.open("", "PrintWindow", "width=800,height=600");
  
//   // Write a basic HTML document to the new window.
//   printWindow.document.write(`
//     <html>
//       <head>
//         <title>Booking Report</title>
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
