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
  




//THIS DATA CANT ACCESS THE MY HISTORY
/**
 * Helper function to convert orderItems into a formatted HTML output.
 * It supports both object and array structures and groups items by category.
 */
function jsonToHtmlByCategory(orderItems) {
  if (!orderItems) return '';

  let html = '';

  // If orderItems is an array, group them by category.
  if (Array.isArray(orderItems)) {
    const groups = {};
    orderItems.forEach(item => {
      if (item.category) {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      }
    });
    // Render each group.
    for (let category in groups) {
      html += `<div class="order-section"><h3>${category}</h3><ul>`;
      groups[category].forEach(item => {
        html += `<li><strong>${item.name}</strong>: ₱${item.price} (Qty: ${item.quantity})</li>`;
      });
      html += `</ul></div>`;
    }
  } else if (typeof orderItems === 'object') {
    // If orderItems is an object, it might contain arrays or single objects.
    for (let key in orderItems) {
      if (orderItems.hasOwnProperty(key)) {
        let value = orderItems[key];
        if (Array.isArray(value)) {
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
            html += `</ul></div>`;
          }
        } else if (typeof value === 'object') {
          const category = value.category || key;
          html += `<div class="order-section"><h3>${category}</h3><ul>`;
          html += `<li><strong>${value.name}</strong>: ₱${value.price} (Qty: ${value.quantity})</li>`;
          html += `</ul></div>`;
        }
      }
    }
  }
  return html;
}

/**
 * Helper function to format a value into Philippine Peso currency.
 */
function formatPHP(value) {
  var number = parseFloat(value);
  if (isNaN(number)) return value;
  return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(number);
}

/**
 * Function to fetch payment transactions from all users and update the table.
 * It checks both MyBooking and MyHistory nodes.
 * - MyBooking rows are shown normally.
 * - MyHistory rows are now always shown.
 *   When displayed, the MyHistory edit icon is disabled.
 */
/**
 * Modified fetchPaymentTransactions function with new-to-old date sorting.
 */

// Helper function to check if today is the last day of the month.
// function isMonthEnd() {
//   const now = new Date();
//   const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
//   return now.getDate() === lastDay;
// }


//THIS CODE NO FUNCTION MONTH IS END THE MY HISTORY NOT HIDE 
// function fetchPaymentTransactions() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function(snapshot) {
//     var transactions = [];
    
//     snapshot.forEach(function(userSnapshot) {
//       var userId = userSnapshot.key;
//       var userData = userSnapshot.val();
      
//       // Process MyBooking transactions
//       if (userData["MyBooking"]) {
//         for (var bookingId in userData["MyBooking"]) {
//           if (userData["MyBooking"].hasOwnProperty(bookingId)) {
//             var booking = userData["MyBooking"][bookingId];
//             if (booking.paymentTransaction) {
//               var payment = booking.paymentTransaction;
//               // Kunin ang PaymentDate o gamitin ang kasalukuyang date kung wala.
//               var date = payment.PaymentDate ? new Date(payment.PaymentDate) : new Date();
//               transactions.push({
//                 type: "MyBooking",
//                 userId: userId,
//                 bookingId: bookingId,
//                 name: payment.name || "N/A",
//                 refNo: payment.refNo || "N/A",
//                 amount: payment.amount || "N/A",
//                 paymentStatus: (payment.paymentStatus || "pending").toLowerCase(),
//                 date: date
//               });
//             }
//           }
//         }
//       }
      
//       // Process MyHistory transactions
//       if ( userData["MyHistory"]) {
//         for (var bookingId in userData["MyHistory"]) {
//           if (userData["MyHistory"].hasOwnProperty(bookingId)) {
//             var booking = userData["MyHistory"][bookingId];
//             if (booking.paymentTransaction) {
//               var payment = booking.paymentTransaction;
//               var date = payment.PaymentDate ? new Date(payment.PaymentDate) : new Date();
//               transactions.push({
//                 type: "MyHistory",
//                 userId: userId,
//                 bookingId: bookingId,
//                 name: payment.name || "N/A",
//                 refNo: payment.refNo || "N/A",
//                 amount: payment.amount || "N/A",
//                 paymentStatus: (payment.paymentStatus || "pending").toLowerCase(),
//                 date: date
//               });
//             }
//           }
//         }
//       }
//     });
    
//     // Sort transactions: bagong date sa itaas (new to old)
//     transactions.sort((a, b) => b.date - a.date);
    
//     // Render sorted transactions sa table
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = "";
//     transactions.forEach(function(tx) {
//       var formattedAmount = tx.amount !== "N/A" ? formatPHP(tx.amount) : tx.amount;
//       var status = tx.paymentStatus;
//       var row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${tx.name}</td>
//         <td>${tx.refNo}</td>
//         <td>${formattedAmount}</td>
//         <td><span class="status ${status}">${status.toUpperCase()}</span></td>
//         <td>
//           <div class="actions">
//             ${tx.type === "MyBooking" 
//               ? `<i class="bx bx-pencil" onclick="viewPaymentTransactionEdit('${tx.userId}', '${tx.bookingId}', 'MyBooking')"></i>` 
//               : `<i class="bx bx-pencil disabled" style="opacity:0.5; cursor:not-allowed;"></i>`}
//             <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${tx.userId}', '${tx.bookingId}', '${tx.type}')"></i>
//           </div>
//         </td>
//       `;
//       tableBody.appendChild(row);
//     });
//   }, function(error) {
//     console.error("Error fetching users:", error);
//   });
// }


// Helper function to check if a transaction's month has ended
function isTransactionMonthEnd(transactionDate) {
  const transDate = new Date(transactionDate);
  const lastDayOfTransMonth = new Date(
    transDate.getFullYear(),
    transDate.getMonth() + 1,
    0
  );
  const now = new Date();
  return now > lastDayOfTransMonth;
}

/**
 * Main function to fetch and display payment transactions
 * with MyHistory month-end exclusion
 */
function fetchPaymentTransactions() {
  const usersRef = firebase.database().ref("users");
  usersRef.on("value", (snapshot) => {
    const transactions = [];
    
    snapshot.forEach((userSnapshot) => {
      const userId = userSnapshot.key;
      const userData = userSnapshot.val();
      
      // Process MyBooking transactions (unchanged)
      if (userData.MyBooking) {
        Object.entries(userData.MyBooking).forEach(([bookingId, booking]) => {
          if (booking.paymentTransaction) {
            const payment = booking.paymentTransaction;
            const date = payment.PaymentDate ? new Date(payment.PaymentDate) : new Date();
            
            transactions.push({
              type: "MyBooking",
              userId,
              bookingId,
              name: payment.name || "N/A",
              refNo: payment.refNo || "N/A",
              amount: payment.amount || "N/A",
              paymentStatus: (payment.paymentStatus || "pending").toLowerCase(),
              date
            });
          }
        });
      }
      
      // Process MyHistory with month-end check
      if (userData.MyHistory) {
        Object.entries(userData.MyHistory).forEach(([bookingId, booking]) => {
          if (booking.paymentTransaction) {
            const payment = booking.paymentTransaction;
            const date = payment.PaymentDate ? new Date(payment.PaymentDate) : new Date();
            
            // Skip if transaction's month has ended
            if (isTransactionMonthEnd(date)) return;
            
            transactions.push({
              type: "MyHistory",
              userId,
              bookingId,
              name: payment.name || "N/A",
              refNo: payment.refNo || "N/A",
              amount: payment.amount || "N/A",
              paymentStatus: (payment.paymentStatus || "pending").toLowerCase(),
              date
            });
          }
        });
      }
    });
    
    // Sort transactions new-to-old
    transactions.sort((a, b) => b.date - a.date);
    
    // Render table
    const tableBody = document.getElementById("accommodation-list");
    tableBody.innerHTML = transactions.map(tx => {
      const formattedAmount = tx.amount !== "N/A" ? formatPHP(tx.amount) : tx.amount;
      return `
        <tr>
          <td>${tx.name}</td>
          <td>${tx.refNo}</td>
          <td>${formattedAmount}</td>
          <td><span class="status ${tx.paymentStatus}">${tx.paymentStatus.toUpperCase()}</span></td>
          <td>
            <div class="actions">
              ${tx.type === "MyBooking" 
                ? `<i class="bx bx-pencil" onclick="viewPaymentTransactionEdit('${tx.userId}', '${tx.bookingId}', 'MyBooking')"></i>` 
                : `<i class="bx bx-pencil disabled" style="opacity:0.5; cursor:not-allowed;"></i>`}
              <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${tx.userId}', '${tx.bookingId}', '${tx.type}')"></i>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }, (error) => {
    console.error("Error fetching users:", error);
  });
}





/**
 * Function to view payment transaction details in a modal (read-only view).
 * It dynamically fetches details from either MyBooking or MyHistory based on the provided type.
 */

function viewPaymentTransactionModal(userId, bookingId, type = 'MyBooking') {
  // Build the Firebase path dynamically using the 'type' parameter.
  var path = "users/" + userId + "/" + type + "/" + bookingId;
  console.log("Fetching read-only modal details from path:", path);
  
  firebase.database().ref(path).once("value")
    .then(function(snapshot) {
      var bookingData = snapshot.val();
      console.log("Fetched booking data (detail view):", bookingData);
      var modalContent = document.getElementById("paymentModalContent");
      modalContent.innerHTML = ""; // Clear previous details

      if (bookingData) {
        // Payment Transaction Details Section
        if (bookingData.paymentTransaction) {
          var payment = bookingData.paymentTransaction;
          modalContent.innerHTML += `
            <div class="payment-transaction">
              <p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>
              <p class="payment-detail"><strong>Book Ref No:</strong> ${payment.refNo || "N/A"}</p>
              <p class="payment-detail"><strong>Amount:</strong> ${formatPHP(payment.amount || "N/A")}</p>
              <p class="payment-detail"><strong>Down Payment:</strong> ${formatPHP(payment.downPayment || "N/A")}</p>
              <p class="payment-detail">
                <strong>Payment Status:</strong>
                <span class="status ${(payment.paymentStatus || 'pending').toLowerCase()}">
                  ${(payment.paymentStatus || 'PENDING').toUpperCase()}
                </span>
              </p>
              <p class="payment-detail">
                <strong>Final Approved Status:</strong>
                <span class="status ${(payment.finalStatus || 'pending').toLowerCase()}">
                  ${(payment.finalStatus || 'PENDING').toUpperCase()}
                </span>
              </p>
            </div>`;
        } else {
          modalContent.innerHTML += "<p>No payment transaction details found.</p>";
        }
        
        // Payment Method Details Section
        if (bookingData.paymentMethod) {
          var paymentMethod = bookingData.paymentMethod;
          modalContent.innerHTML += `<hr><h2 style="text-align: center;" >Payment Details</h2>`;
          modalContent.innerHTML += `
            <div class="payment-method">
              <p class="payment-detail"><strong>Payment Method:</strong> ${paymentMethod.Payment || "N/A"}</p>
              <p class="payment-detail"><strong>Pay Ref No:</strong> ${paymentMethod.Reference || "N/A"}</p>
              <p class="payment-detail"><strong>Firstname:</strong> ${paymentMethod.Firstname || "N/A"}</p>
              <p class="payment-detail"><strong>Lastname:</strong> ${paymentMethod.Lastname || "N/A"}</p>
              <p class="payment-detail"><strong>Phone:</strong> ${paymentMethod.Phone || "N/A"}</p>
              <p class="payment-detail"><strong>Amount:</strong> ${formatPHP(paymentMethod.Amount || "N/A")}</p>
            </div>`;
        } else {
          modalContent.innerHTML += "<p>No payment method details found.</p>";
        }
      } else {
        modalContent.innerHTML = "<p>No booking details found.</p>";
      }
      
      // Display the modal
      document.getElementById("paymentModal").style.display = "block";
    })
    .catch(function(error) {
      console.error("Error fetching payment transaction details (detail view):", error);
      alert("Error fetching payment transaction details: " + error.message);
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

/**
 * Function to view (and edit) payment transaction details via the pencil icon.
 * (Note: The date field is removed as requested.)
 */
// function viewPaymentTransactionEdit(userId, bookingId) {
//   var path = "users/" + userId + "/MyBooking/" + bookingId;
//   console.log("Fetching edit modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (edit view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details with an editable dropdown for payment status.
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Reference No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${formatPHP(payment.amount || "N/A")}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${formatPHP(payment.downPayment || "N/A")}</p>`;
          
//           // Editable dropdown for payment status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> 
//             <select id="paymentStatusDropdown">
//               <option value="pending" ${(payment.paymentStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.paymentStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//               <option value="refund" ${(payment.paymentStatus || '').toLowerCase() === 'refund' ? 'selected' : ''}>REFUND</option>
//             </select>
//           </p>`;
//           // Editable dropdown for final status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Status:</strong> 
//           <select id="finalStatusDropdown">
//             <option value="pending" ${(payment.finalStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//             <option value="approved" ${(payment.finalStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//           </select>
//         </p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//       centerModalContent("paymentModal");
      
//       // Attach event listener to the payment status dropdown.
//       var statusDropdown = document.getElementById("paymentStatusDropdown");
//       if (statusDropdown) {
//         statusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updatePaymentStatus(userId, bookingId, newStatus);
//         });
//       }
//       var finalDropdown = document.getElementById("finalStatusDropdown");
//       if (finalDropdown) {
//         finalDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updateFinalStatus(userId, bookingId, newStatus);
//         });
//       }
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (edit view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

function viewPaymentTransactionEdit(userId, bookingId) {
  var path = "users/" + userId + "/MyBooking/" + bookingId;
  console.log("Fetching edit modal details from path:", path);
  
  firebase.database().ref(path).once("value")
    .then(function(snapshot) {
      var bookingData = snapshot.val();
      console.log("Fetched booking data (edit view):", bookingData);
      var modalContent = document.getElementById("paymentModalContent");
      modalContent.innerHTML = ""; // Clear previous details

      if (bookingData) {
        // Editable Payment Transaction Details Section
        if (bookingData.paymentTransaction) {
          var payment = bookingData.paymentTransaction;
          modalContent.innerHTML += `
            <div class="payment-transaction-edit">
              <p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>
              <p class="payment-detail"><strong>Reference No:</strong> ${payment.refNo || "N/A"}</p>
              <p class="payment-detail"><strong>Amount:</strong> ${formatPHP(payment.amount || "N/A")}</p>
              <p class="payment-detail"><strong>Down Payment:</strong> ${formatPHP(payment.downPayment || "N/A")}</p>
              <p class="payment-detail"><strong>Payment Status:</strong> 
                <select id="paymentStatusDropdown">
                  <option value="pending" ${(payment.paymentStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
                  <option value="approved" ${(payment.paymentStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
                  <option value="refund" ${(payment.paymentStatus || '').toLowerCase() === 'refund' ? 'selected' : ''}>REFUND</option>
                </select>
              </p>
              <p class="payment-detail"><strong>Final Status:</strong> 
                <select id="finalStatusDropdown">
                  <option value="pending" ${(payment.finalStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
                  <option value="approved" ${(payment.finalStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
                </select>
              </p>
            </div>`;
        } else {
          modalContent.innerHTML += "<p>No payment transaction details found.</p>";
        }
      } else {
        modalContent.innerHTML = "<p>No booking details found.</p>";
      }
      
      // Display the modal (without centering)
      document.getElementById("paymentModal").style.display = "block";
      centerModalContent("paymentModal");
      
      // Attach event listeners to the dropdowns
      var statusDropdown = document.getElementById("paymentStatusDropdown");
      if (statusDropdown) {
        statusDropdown.addEventListener("change", function(e) {
          var newStatus = e.target.value;
          updatePaymentStatus(userId, bookingId, newStatus);
        });
      }
      var finalDropdown = document.getElementById("finalStatusDropdown");
      if (finalDropdown) {
        finalDropdown.addEventListener("change", function(e) {
          var newStatus = e.target.value;
          updateFinalStatus(userId, bookingId, newStatus);
        });
      }
    })
    .catch(function(error) {
      console.error("Error fetching payment transaction details (edit view):", error);
      alert("Error fetching payment transaction details: " + error.message);
    });
}



/**
 * Function to update the payment status in Firebase.
 */
function updatePaymentStatus(userId, bookingId, newStatus) {
  var paymentRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/paymentTransaction");
  paymentRef.update({
    paymentStatus: newStatus
  })
    .then(() => {
      alert("Payment status updated to " + newStatus.toUpperCase());
      // Refresh the transactions list to reflect the updated status.
      fetchPaymentTransactions();
    })
    .catch(error => {
      console.error("Error updating payment status:", error);
      alert("Error updating payment status: " + error.message);
    });
}


/**
 * Function to update the final status in Firebase.
 */
function updateFinalStatus(userId, bookingId, newStatus) {
  var paymentRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/paymentTransaction");
  paymentRef.update({
    finalStatus: newStatus
  })
    .then(() => {
      alert("Final status updated to " + newStatus.toUpperCase());
      // Refresh the transactions list to reflect the updated status.
      fetchPaymentTransactions();
    })
    .catch(error => {
      console.error("Error updating final status:", error);
      alert("Error updating final status: " + error.message);
    });
}

// Modal close functionality.
document.getElementById("modalClose").addEventListener("click", function() {
  document.getElementById("paymentModal").style.display = "none";
});

// Call the fetch function when the page loads.
fetchPaymentTransactions();







//This code no format peso
// /**
//  * Function to fetch payment transactions from all users and update the table.
//  * It checks both MyBooking and MyHistory nodes.
//  * - MyBooking rows are shown normally.
//  * - MyHistory rows are now always shown.
//  *   When displayed, the MyHistory edit icon is disabled.
//  */
// function fetchPaymentTransactions() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function(snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear any existing rows.
    
//     // Arrays to store rows separately for MyBooking and MyHistory.
//     var bookingRows = [];
//     var historyRows = [];
    
//     snapshot.forEach(function(userSnapshot) {
//       var userId = userSnapshot.key;
//       var userData = userSnapshot.val();
      
//       // Process MyBooking: show payment transaction details normally.
//       if (userData["MyBooking"]) {
//         for (var bookingId in userData["MyBooking"]) {
//           if (userData["MyBooking"].hasOwnProperty(bookingId)) {
//             var booking = userData["MyBooking"][bookingId];
//             // Check if a payment transaction exists.
//             if (booking.paymentTransaction) {
//               var payment = booking.paymentTransaction;
//               var name = payment.name || "N/A";
//               var refNo = payment.refNo || "N/A";
//               var amount = payment.amount || "N/A";
//               var status = (payment.paymentStatus || "pending").toLowerCase();
              
//               var row = document.createElement("tr");
//               row.innerHTML = `
//                 <td>${name}</td>
//                 <td>${refNo}</td>
//                 <td>${amount}</td>
//                 <td><span class="status ${status}">${status.toUpperCase()}</span></td>
//                 <td>
//                   <div class="actions">
//                     <i class="bx bx-pencil" onclick="viewPaymentTransactionEdit('${userId}', '${bookingId}', 'MyBooking')"></i>
//                     <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${userId}', '${bookingId}', 'MyBooking')"></i>
//                   </div>
//                 </td>
//               `;
//               bookingRows.push(row);
//             }
//           }
//         }
//       }
      
//       // Process MyHistory: display payment transaction details (always visible now).
//       if (userData["MyHistory"]) {
//         for (var bookingId in userData["MyHistory"]) {
//           if (userData["MyHistory"].hasOwnProperty(bookingId)) {
//             var booking = userData["MyHistory"][bookingId];
//             if (booking.paymentTransaction) {
//               var payment = booking.paymentTransaction;
//               var name = payment.name || "N/A";
//               var refNo = payment.refNo || "N/A";
//               var amount = payment.amount || "N/A";
//               var status = (payment.paymentStatus || "pending").toLowerCase();
              
//               var row = document.createElement("tr");
//               row.innerHTML = `
//                 <td>${name}</td>
//                 <td>${refNo}</td>
//                 <td>${amount}</td>
//                 <td><span class="status ${status}">${status.toUpperCase()}</span></td>
//                 <td>
//                   <div class="actions">
//                     <!-- Edit icon disabled for MyHistory -->
//                     <i class="bx bx-pencil disabled" style="opacity:0.5; cursor:not-allowed;"></i>
//                     <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${userId}', '${bookingId}', 'MyHistory')"></i>
//                   </div>
//                 </td>
//               `;
//               historyRows.push(row);
//             }
//           }
//         }
//       }
//     });
    
//     // Append MyBooking rows first, then MyHistory rows.
//     bookingRows.forEach(function(row) {
//       tableBody.appendChild(row);
//     });
//     historyRows.forEach(function(row) {
//       tableBody.appendChild(row);
//     });
//   }, function(error) {
//     console.error("Error fetching users:", error);
//   });
// }

// /**
//  * Function to view payment transaction details in a modal (read-only view).
//  * It dynamically fetches details from either MyBooking or MyHistory based on the provided type.
//  */
// function viewPaymentTransactionModal(userId, bookingId, type = 'MyBooking') {
//   // Build the Firebase path dynamically using the 'type' parameter.
//   var path = "users/" + userId + "/" + type + "/" + bookingId;
//   console.log("Fetching read-only modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (detail view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Book Ref No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> <span class="status ${(payment.paymentStatus || 'pending').toLowerCase()}">${(payment.paymentStatus || 'PENDING').toUpperCase()}</span></p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Approved Status:</strong> <span class="status ${(payment.finalStatus || 'pending').toLowerCase()}">${(payment.finalStatus || 'PENDING').toUpperCase()}</span></p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
        
//         // Payment Method Details
//         if (bookingData.paymentMethod) {
//           var paymentMethod = bookingData.paymentMethod;
//           modalContent.innerHTML += `<hr><h3>Payment Details</h3>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Method:</strong> ${paymentMethod.Payment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Pay Ref No:</strong> ${paymentMethod.Reference || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Firstname:</strong> ${paymentMethod.Firstname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Lastname:</strong> ${paymentMethod.Lastname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Phone:</strong> ${paymentMethod.Phone || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${paymentMethod.Amount || "N/A"}</p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment method details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal
//       document.getElementById("paymentModal").style.display = "block";
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (detail view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
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


// /**
//  * Function to view (and edit) payment transaction details via the pencil icon.
//  * (Note: The date field is removed as requested.)
//  */
// function viewPaymentTransactionEdit(userId, bookingId) {
//   var path = "users/" + userId + "/MyBooking/" + bookingId;
//   console.log("Fetching edit modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (edit view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details with an editable dropdown for payment status.
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Reference No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
          
//           // Editable dropdown for payment status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> 
//             <select id="paymentStatusDropdown">
//               <option value="pending" ${(payment.paymentStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.paymentStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//               <option value="refund" ${(payment.paymentStatus || '').toLowerCase() === 'refund' ? 'selected' : ''}>REFUND</option>
//             </select>
//           </p>`;
//           // Editable dropdown for final status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Status:</strong> 
//           <select id="finalStatusDropdown">
//             <option value="pending" ${(payment.finalStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//             <option value="approved" ${(payment.finalStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//           </select>
//         </p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//       centerModalContent("paymentModal");
      
//       // Attach event listener to the payment status dropdown.
//       var statusDropdown = document.getElementById("paymentStatusDropdown");
//       if (statusDropdown) {
//         statusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updatePaymentStatus(userId, bookingId, newStatus);
//         });
//       }
//       var finalDropdown = document.getElementById("finalStatusDropdown");
//       if (finalDropdown) {
//         finalDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updateFinalStatus(userId, bookingId, newStatus);
//         });
//       }
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (edit view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

// /**
//  * Function to update the payment status in Firebase.
//  */
// function updatePaymentStatus(userId, bookingId, newStatus) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     paymentStatus: newStatus
//   })
//     .then(() => {
//       alert("Payment status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating payment status:", error);
//       alert("Error updating payment status: " + error.message);
//     });
// }

// /**
//  * Function to update the final status in Firebase.
//  */
// function updateFinalStatus(userId, bookingId, newStatus) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     finalStatus: newStatus
//   })
//     .then(() => {
//       alert("Final status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating final status:", error);
//       alert("Error updating final status: " + error.message);
//     });
// }

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function() {
//   document.getElementById("paymentModal").style.display = "none";
// });

// // Call the fetch function when the page loads.
// fetchPaymentTransactions();










//THIS DATA IS ERROR CAN MULTIPLE THE VIEW IN THE TABLE
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
//  * Function to fetch payment transactions from all users and update the table.
//  * Now it checks MyBooking, MyHistory, and MyCancelAndDecline.
//  * For MyHistory and MyCancelAndDecline, if the booking date is before the start of the current month
//  * (local Philippine time), the row will be hidden.
//  * Duplicate rows are prevented.
//  */
// function fetchPaymentTransactions() {
//   var usersRef = firebase.database().ref("users");
//   // Object to keep track of displayed booking keys (to prevent duplicates)
//   var displayedBookings = {};
  
//   usersRef.on("value", function(snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear any existing rows.
    
//     snapshot.forEach(function(userSnapshot) {
//       var userId = userSnapshot.key;
//       var userData = userSnapshot.val();
      
//       // Loop through the three nodes.
//       ["MyBooking", "MyHistory", "MyCancelAndDecline"].forEach(function(node) {
//         if (userData[node]) {
//           for (var bookingId in userData[node]) {
//             if (userData[node].hasOwnProperty(bookingId)) {
//               // Create a unique key for this booking.
//               var bookingKey = userId + "-" + bookingId;
//               // Skip if already processed (to prevent duplicate rows)
//               if (displayedBookings[bookingKey]) continue;
              
//               var booking = userData[node][bookingId];
              
//               // Check for a payment transaction inside the booking.
//               if (booking.paymentTransaction) {
//                 // For MyHistory and MyCancelAndDecline, check booking date.
//                 var showRow = true;
//                 if ((node === "MyHistory" || node === "MyCancelAndDecline") && booking.bookingReview && booking.bookingReview.bookingDate) {
//                   var rawDate = booking.bookingReview.bookingDate;
//                   // Remove any "Date:" prefix and time info in parentheses.
//                   var dateStr = rawDate.replace(/Date:\s*/i, "").replace(/\(.*\)/, "").trim();
//                   var bookingDate = new Date(dateStr);
//                   if (!isNaN(bookingDate)) {
//                     // Use local Philippine time (assuming system time is correct)
//                     var now = new Date();
//                     var startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
//                     // If the booking date is before the start of the current month, hide this row.
//                     if (bookingDate < startOfCurrentMonth) {
//                       showRow = false;
//                     }
//                   }
//                 }
                
//                 if (showRow) {
//                   displayedBookings[bookingKey] = true; // Mark as processed.
//                   var payment = booking.paymentTransaction;
//                   var name = payment.name || "N/A";
//                   var refNo = payment.refNo || "N/A";
//                   var amount = payment.amount || "N/A";
//                   var status = (payment.paymentStatus || "pending").toLowerCase();
                
//                   // Determine whether to show the edit icon.
//                   // For MyBooking, normal edit; for others, show edit icon with a red style and disable editing.
//                   var editIcon = `<i class="bx bx-pencil ${node === "MyBooking" ? "" : "disabled-edit"}" onclick="` + 
//                     (node === "MyBooking" ? 
//                       `viewPaymentTransactionEdit('${userId}', '${bookingId}', '${node}')` : 
//                       `viewPaymentTransactionEditDisabled()`) + `"></i>`;
                
//                   // Create a new table row for this payment transaction.
//                   var row = document.createElement("tr");
//                   row.innerHTML = `
//                     <td>${name}</td>
//                     <td>${refNo}</td>
//                     <td>${amount}</td>
//                     <td><span class="status ${status}">${status.toUpperCase()}</span></td>
//                     <td>
//                       <div class="actions">
//                         ${editIcon}
//                         <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${userId}', '${bookingId}', '${node}')"></i>
//                       </div>
//                     </td>
//                   `;
//                   tableBody.appendChild(row);
//                 }
//               }
//             }
//           }
//         }
//       });
//     });
//   }, function(error) {
//     console.error("Error fetching users:", error);
//   });
// }

// /**
//  * Function to view payment transaction details in a modal (read-only view).
//  */
// function viewPaymentTransactionModal(userId, bookingId, node) {
//   var path = "users/" + userId + "/" + node + "/" + bookingId;
//   console.log("Fetching read-only modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (detail view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Book Ref No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> <span class="status ${(payment.paymentStatus || 'pending').toLowerCase()}">${(payment.paymentStatus || 'PENDING').toUpperCase()}</span></p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Approved Status:</strong> <span class="status ${(payment.finalStatus || 'pending').toLowerCase()}">${(payment.finalStatus || 'PENDING').toUpperCase()}</span></p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
        
//         // Payment Method Details
//         if (bookingData.paymentMethod) {
//           var paymentMethod = bookingData.paymentMethod;
//           modalContent.innerHTML += `<hr><h3>Payment Details</h3>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Method:</strong> ${paymentMethod.Payment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Pay Ref No:</strong> ${paymentMethod.Reference || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Firstname:</strong> ${paymentMethod.Firstname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Lastname:</strong> ${paymentMethod.Lastname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Phone:</strong> ${paymentMethod.Phone || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${paymentMethod.Amount || "N/A"}</p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment method details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (detail view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

// /**
//  * Function to view (and edit) payment transaction details via the pencil icon.
//  * (Only available for MyBooking records for editing; others will call a disabled function.)
//  */
// function viewPaymentTransactionEdit(userId, bookingId, node) {
//   var path = "users/" + userId + "/" + node + "/" + bookingId;
//   console.log("Fetching edit modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (edit view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details with an editable dropdown for payment status.
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Reference No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
          
//           // Editable dropdown for payment status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> 
//             <select id="paymentStatusDropdown">
//               <option value="pending" ${(payment.paymentStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.paymentStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//               <option value="refund" ${(payment.paymentStatus || '').toLowerCase() === 'refund' ? 'selected' : ''}>REFUND</option>
//             </select>
//           </p>`;
//           // Editable dropdown for final status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Status:</strong> 
//             <select id="finalStatusDropdown">
//               <option value="pending" ${(payment.finalStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.finalStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//             </select>
//           </p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//       centerModalContent("paymentModal");
      
//       // Attach event listeners to the dropdowns.
//       var statusDropdown = document.getElementById("paymentStatusDropdown");
//       if (statusDropdown) {
//         statusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updatePaymentStatus(userId, bookingId, newStatus, node);
//         });
//       }
//       var finalStatusDropdown = document.getElementById("finalStatusDropdown");
//       if (finalStatusDropdown) {
//         finalStatusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updateFinalStatus(userId, bookingId, newStatus, node);
//         });
//       }
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (edit view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

// /**
//  * Function for disabled edit on non-MyBooking records.
//  */
// function viewPaymentTransactionEditDisabled() {
//   alert("This booking cannot be edited.");
// }

// /**
//  * Function to update the payment status in Firebase.
//  */
// function updatePaymentStatus(userId, bookingId, newStatus, node) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     paymentStatus: newStatus
//   })
//     .then(() => {
//       alert("Payment status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating payment status:", error);
//       alert("Error updating payment status: " + error.message);
//     });
// }

// /**
//  * Function to update the final status in Firebase.
//  */
// function updateFinalStatus(userId, bookingId, newStatus, node) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     finalStatus: newStatus
//   })
//     .then(() => {
//       alert("Final status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating final status:", error);
//       alert("Error updating final status: " + error.message);
//     });
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

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function() {
//   document.getElementById("paymentModal").style.display = "none";
// });

// // Call the fetch function when the page loads.
// fetchPaymentTransactions();









// //THIS DATA CAN ACESS THE DECLINE AND THE CANCEL
//   /**
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
//  * Function to fetch payment transactions from all users and update the table.
//  * Now it checks both MyBooking and MyHistory.
//  */
// function fetchPaymentTransactions() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function(snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear any existing rows.
    
//     snapshot.forEach(function(userSnapshot) {
//       var userId = userSnapshot.key;
//       var userData = userSnapshot.val();
      
//       // Loop through both nodes.
//       ["MyBooking", "MyHistory"].forEach(function(node) {
//         if (userData[node]) {
//           for (var bookingId in userData[node]) {
//             if (userData[node].hasOwnProperty(bookingId)) {
//               var booking = userData[node][bookingId];
//               // Check for a payment transaction inside the booking.
//               if (booking.paymentTransaction) {
//                 var payment = booking.paymentTransaction;
//                 var name = payment.name || "N/A";
//                 var refNo = payment.refNo || "N/A";
//                 var amount = payment.amount || "N/A";
//                 var status = (payment.paymentStatus || "pending").toLowerCase();
              
//                 // Create a new table row for this payment transaction.
//                 var row = document.createElement("tr");
//                 row.innerHTML = `
//                   <td>${name}</td>
//                   <td>${refNo}</td>
//                   <td>${amount}</td>
//                   <td><span class="status ${status}">${status.toUpperCase()}</span></td>
//                   <td>
//                     <div class="actions">
//                       <!-- Pencil icon for edit view -->
//                       <i class="bx bx-pencil" onclick="viewPaymentTransactionEdit('${userId}', '${bookingId}', '${node}')"></i>
//                       <!-- Detail icon for read-only view -->
//                       <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${userId}', '${bookingId}', '${node}')"></i>
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
//   }, function(error) {
//     console.error("Error fetching users:", error);
//   });
// }

// /**
//  * Function to view payment transaction details in a modal (read-only view).
//  */
// function viewPaymentTransactionModal(userId, bookingId, node) {
//   var path = "users/" + userId + "/" + node + "/" + bookingId;
//   console.log("Fetching read-only modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (detail view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Book Ref No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> <span class="status ${(payment.paymentStatus || 'pending').toLowerCase()}">${(payment.paymentStatus || 'PENDING').toUpperCase()}</span></p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Approved Status:</strong> <span class="status ${(payment.finalStatus || 'pending').toLowerCase()}">${(payment.finalStatus || 'PENDING').toUpperCase()}</span></p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
        
//         // Payment Method Details
//         if (bookingData.paymentMethod) {
//           var paymentMethod = bookingData.paymentMethod;
//           modalContent.innerHTML += `<hr><h3>Payment Details</h3>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Method:</strong> ${paymentMethod.Payment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Pay Ref No:</strong> ${paymentMethod.Reference || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Firstname:</strong> ${paymentMethod.Firstname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Lastname:</strong> ${paymentMethod.Lastname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Phone:</strong> ${paymentMethod.Phone || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${paymentMethod.Amount || "N/A"}</p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment method details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (detail view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

// /**
//  * Function to view (and edit) payment transaction details via the pencil icon.
//  */
// function viewPaymentTransactionEdit(userId, bookingId, node) {
//   var path = "users/" + userId + "/" + node + "/" + bookingId;
//   console.log("Fetching edit modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (edit view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details with an editable dropdown for payment status.
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Reference No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
          
//           // Editable dropdown for payment status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> 
//             <select id="paymentStatusDropdown">
//               <option value="pending" ${(payment.paymentStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.paymentStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//               <option value="refund" ${(payment.paymentStatus || '').toLowerCase() === 'refund' ? 'selected' : ''}>REFUND</option>
//             </select>
//           </p>`;
//           // Editable dropdown for final status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Status:</strong> 
//             <select id="finalStatusDropdown">
//               <option value="pending" ${(payment.finalStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.finalStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//             </select>
//           </p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//       centerModalContent("paymentModal");
      
//       // Attach event listeners to the dropdowns.
//       var statusDropdown = document.getElementById("paymentStatusDropdown");
//       if (statusDropdown) {
//         statusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updatePaymentStatus(userId, bookingId, newStatus, node);
//         });
//       }
//       var finalStatusDropdown = document.getElementById("finalStatusDropdown");
//       if (finalStatusDropdown) {
//         finalStatusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updateFinalStatus(userId, bookingId, newStatus, node);
//         });
//       }
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (edit view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

// /**
//  * Function to update the payment status in Firebase.
//  */
// function updatePaymentStatus(userId, bookingId, newStatus, node) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     paymentStatus: newStatus
//   })
//     .then(() => {
//       alert("Payment status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating payment status:", error);
//       alert("Error updating payment status: " + error.message);
//     });
// }

// /**
//  * Function to update the final status in Firebase.
//  */
// function updateFinalStatus(userId, bookingId, newStatus, node) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/" + node + "/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     finalStatus: newStatus
//   })
//     .then(() => {
//       alert("Final status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating final status:", error);
//       alert("Error updating final status: " + error.message);
//     });
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

// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function() {
//   document.getElementById("paymentModal").style.display = "none";
// });

// // Call the fetch function when the page loads.
// fetchPaymentTransactions();






// //THIS DATA CAN ACESS THE MY HISTORY
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
//  * Function to fetch payment transactions from all users and update the table.
//  */
// function fetchPaymentTransactions() {
//   var usersRef = firebase.database().ref("users");
//   usersRef.on("value", function(snapshot) {
//     var tableBody = document.getElementById("accommodation-list");
//     tableBody.innerHTML = ""; // Clear any existing rows.
    
//     snapshot.forEach(function(userSnapshot) {
//       var userId = userSnapshot.key;
//       var userData = userSnapshot.val();
      
//       // Ensure the user has bookings.
//       if (userData.MyBooking) {
//         for (var bookingId in userData.MyBooking) {
//           if (userData.MyBooking.hasOwnProperty(bookingId)) {
//             var booking = userData.MyBooking[bookingId];
//             // Check for a payment transaction inside the booking.
//             if (booking.paymentTransaction) {
//               var payment = booking.paymentTransaction;
//               var name = payment.name || "N/A";
//               var refNo = payment.refNo || "N/A";
//               var amount = payment.amount || "N/A";
//               var status = (payment.paymentStatus || "pending").toLowerCase();
            
              
//               // Create a new table row for this payment transaction.
//               var row = document.createElement("tr");
//               row.innerHTML = `
//                 <td>${name}</td>
//                 <td>${refNo}</td>
//                 <td>${amount}</td>
//                 <td><span class="status ${status}">${status.toUpperCase()}</span></td>
//                 <td>
//                   <div class="actions">
//                     <!-- Pencil icon for edit view -->
//                     <i class="bx bx-pencil" onclick="viewPaymentTransactionEdit('${userId}', '${bookingId}')"></i>
//                     <!-- Detail icon for read-only view -->
//                     <i class="bx bx-detail" onclick="viewPaymentTransactionModal('${userId}', '${bookingId}')"></i>
//                   </div>
//                 </td>
//               `;
//               tableBody.appendChild(row);
//             }
//           }
//         }
//       }
//     });
//   }, function(error) {
//     console.error("Error fetching users:", error);
//   });
// }

// /**
//  * Function to view payment transaction details in a modal (read-only view).
//  */
// function viewPaymentTransactionModal(userId, bookingId) {
//   var path = "users/" + userId + "/MyBooking/" + bookingId;
//   console.log("Fetching read-only modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (detail view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Book Ref No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> <span class="status ${(payment.paymentStatus || 'pending').toLowerCase()}">${(payment.paymentStatus || 'PENDING').toUpperCase()}</span></p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Approved Status:</strong> <span class="status ${(payment.finalStatus || 'pending').toLowerCase()}">${(payment.finalStatus || 'PENDING').toUpperCase()}</span></p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
        
//         // Payment Method Details
//         if (bookingData.paymentMethod) {
//           var paymentMethod = bookingData.paymentMethod;
//           modalContent.innerHTML += `<hr><h3>Payment Details</h3>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Method:</strong> ${paymentMethod.Payment || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Pay Ref No:</strong> ${paymentMethod.Reference || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Firstname:</strong> ${paymentMethod.Firstname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Lastname:</strong> ${paymentMethod.Lastname || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Phone:</strong> ${paymentMethod.Phone || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${paymentMethod.Amount || "N/A"}</p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment method details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (detail view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
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

// /**
//  * Function to view (and edit) payment transaction details via the pencil icon.
//  * (Note: The date field is removed as requested.)
//  */
// function viewPaymentTransactionEdit(userId, bookingId) {
//   var path = "users/" + userId + "/MyBooking/" + bookingId;
//   console.log("Fetching edit modal details from path:", path);
  
//   firebase.database().ref(path).once("value")
//     .then(function(snapshot) {
//       var bookingData = snapshot.val();
//       console.log("Fetched booking data (edit view):", bookingData);
//       var modalContent = document.getElementById("paymentModalContent");
//       modalContent.innerHTML = ""; // Clear previous details

//       if (bookingData) {
//         // Payment Transaction Details with an editable dropdown for payment status.
//         if (bookingData.paymentTransaction) {
//           var payment = bookingData.paymentTransaction;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Name:</strong> ${payment.name || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Reference No:</strong> ${payment.refNo || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Amount:</strong> ${payment.amount || "N/A"}</p>`;
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Down Payment:</strong> ${payment.downPayment || "N/A"}</p>`;
          
//           // Editable dropdown for payment status.
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Payment Status:</strong> 
//             <select id="paymentStatusDropdown">
//               <option value="pending" ${(payment.paymentStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//               <option value="approved" ${(payment.paymentStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//               <option value="refund" ${(payment.paymentStatus || '').toLowerCase() === 'refund' ? 'selected' : ''}>REFUND</option>
//             </select>
//           </p>`;
//           // Editable dropdown for payment status
//           modalContent.innerHTML += `<p class="payment-detail"><strong>Final Status:</strong> 
//           <select id="finalStatusDropdown">
//             <option value="pending" ${(payment.finalStatus || 'pending').toLowerCase() === 'pending' ? 'selected' : ''}>PENDING</option>
//             <option value="approved" ${(payment.finalStatus || '').toLowerCase() === 'approved' ? 'selected' : ''}>APPROVED</option>
//           </select>
//         </p>`;
//         } else {
//           modalContent.innerHTML += "<p>No payment transaction details found.</p>";
//         }
//       } else {
//         modalContent.innerHTML = "<p>No booking details found.</p>";
//       }
      
//       // Display the modal (without centering)
//       document.getElementById("paymentModal").style.display = "block";
//       centerModalContent("paymentModal");
      
//       // Attach event listener to the payment status dropdown.
//       var statusDropdown = document.getElementById("paymentStatusDropdown");
//       if (statusDropdown) {
//         statusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updatePaymentStatus(userId, bookingId, newStatus);
//         });
//       }
//       var statusDropdown = document.getElementById("finalStatusDropdown");
//       if (statusDropdown) {
//         statusDropdown.addEventListener("change", function(e) {
//           var newStatus = e.target.value;
//           updateFinalStatus(userId, bookingId, newStatus);
//         });
//       }
//     })
//     .catch(function(error) {
//       console.error("Error fetching payment transaction details (edit view):", error);
//       alert("Error fetching payment transaction details: " + error.message);
//     });
// }

// /**
//  * Function to update the payment status in Firebase.
//  */
// function updatePaymentStatus(userId, bookingId, newStatus) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     paymentStatus: newStatus

//   })
//     .then(() => {
//       alert("Payment status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating payment status:", error);
//       alert("Error updating payment status: " + error.message);
//     });
// }

// /**
//  * Function to update the payment status in Firebase.
//  */
// function updateFinalStatus(userId, bookingId, newStatus) {
//   var paymentRef = firebase.database().ref("users/" + userId + "/MyBooking/" + bookingId + "/paymentTransaction");
//   paymentRef.update({
//     finalStatus: newStatus
//     // finalStatus update removed; final approval will be handled separately.
//   })
//     .then(() => {
//       alert("Final status updated to " + newStatus.toUpperCase());
//       // Refresh the transactions list to reflect the updated status.
//       fetchPaymentTransactions();
//     })
//     .catch(error => {
//       console.error("Error updating Final status:", error);
//       alert("Error updating final status: " + error.message);
//     });
// }


// // Modal close functionality.
// document.getElementById("modalClose").addEventListener("click", function() {
//   document.getElementById("paymentModal").style.display = "none";
// });

// // Call the fetch function when the page loads.
// fetchPaymentTransactions();
