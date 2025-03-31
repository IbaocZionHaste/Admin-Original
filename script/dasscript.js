
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
const database = firebase.database(app);

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



// THIS THE PROMO AND ANNOUCEMENT JS FUNCTION
// Convert image to Base64
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Reference to the todo list UL element
const todoList = document.getElementById('todoList');

// Handle form submission for promo
document.getElementById("announcementForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("announcementTitle").value;
    const description = document.getElementById("announcementDescription").value;
    const discount = document.getElementById("promoDiscount").value;
    const startDate = document.getElementById("promoStartDate").value;
    const duration = document.getElementById("promoDuration").value;
    const imageFile = document.getElementById("announcementImage").files[0];

    const promoData = {
        title: title,
        description: description,
        discount: discount,
        startDate: startDate,
        duration: duration
    };

    if (imageFile) {
        toBase64(imageFile).then((base64Image) => {
            promoData.imageBase64 = base64Image;

            const promoRef = database.ref('promotions');
            promoRef.push(promoData).then(() => {
                alert("Promotion added successfully!");
                resetForm();
            }).catch((error) => {
                alert("Error adding promotion: " + error.message);
            });
        }).catch((error) => {
            alert("Error converting image to base64: " + error.message);
        });
    } else {
        const promoRef = database.ref('promotions');
        promoRef.push(promoData).then(() => {
            alert("Promotion added successfully!");
            resetForm();
        }).catch((error) => {
            alert("Error adding promotion: " + error.message);
        });
    }
});

// Add title to the todo list

// Add a new list item to the todo list
function addToList(title, key) {
    const todoList = document.getElementById('todoList');
    const listItems = todoList.getElementsByTagName('li');

    //Ensure the list doesn't exceed 6 items
    // if (listItems.length >= 6) {
    //     todoList.removeChild(listItems[0]);
    // }

    const listItem = document.createElement('li');
    listItem.classList.add('completed');
    listItem.innerHTML = `
        <p>${title}</p>
        <div class="actions" data-key="${key}">
            <i class="bx bx-pencil update-promo" data-key="${key}"></i>
            <i class="bx bx-trash delete-promo" data-key="${key}"></i>
        </div>
    `;
    todoList.appendChild(listItem);
}



// Reset the form after submission
function resetForm() {
    document.getElementById("announcementForm").reset();
}

// Firebase listener to dynamically fetch and add titles from database (optional)
const promoRef = database.ref('promotions');
promoRef.on('child_added', function (snapshot) {
    const title = snapshot.val().title;
    const key = snapshot.key;
    addToList(title, key); // Add each title from Firebase to the list
});

// Modal interaction (open and close)
const modal = document.getElementById('announcementModal');
const closeModal = document.getElementById('closeModal');

// Open modal on plus icon click
document.querySelector('.bx-plus').addEventListener('click', function () {
    modal.style.display = 'block'; // Show the modal
    modal.style.display = 'flex'; // Show the modal
    sidebar.classList.add('hide');  // Hide the sidebar when modal is open
    resetForm();
});

// Close the modal when the user clicks the close button
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});



// Close the modal if the user clicks outside of the modal content
// window.addEventListener('click', function (event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// Delete promotion function
function deletePromo(key) {
    const promoRef = database.ref('promotions').child(key);
    promoRef.remove().then(() => {
        alert("Promotion deleted successfully!");
        location.reload();  // Refresh the page
    }).catch((error) => {
        alert("Error deleting promotion: " + error.message);
    });
}


function updatePromo(key) {
    const promoRef = database.ref('promotions').child(key);
    promoRef.once('value', function (snapshot) {
        const promoData = snapshot.val();
        // Pre-fill the form with existing data
        document.getElementById("announcementTitle").value = promoData.title;
        document.getElementById("announcementDescription").value = promoData.description;
        document.getElementById("promoDiscount").value = promoData.discount;
        document.getElementById("promoStartDate").value = promoData.startDate;
        document.getElementById("promoDuration").value = promoData.duration;

        // Show the modal to allow updating
        // modal.style.display = 'block';
        modal.style.display = 'flex';
        sidebar.classList.add('hide');


        // Remove existing event listeners on the form
        const form = document.getElementById("announcementForm");
        const newForm = form.cloneNode(true); // Create a fresh copy of the form
        form.parentNode.replaceChild(newForm, form);

        // Attach the new event listener for updating the promotion
        newForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const updatedData = {
                title: document.getElementById("announcementTitle").value,
                description: document.getElementById("announcementDescription").value,
                discount: document.getElementById("promoDiscount").value,
                startDate: document.getElementById("promoStartDate").value,
                duration: document.getElementById("promoDuration").value
            };

            // Update Firebase with new values
            promoRef.update(updatedData)
                .then(() => {
                    alert("Promotion updated successfully!");
                    modal.style.display = 'none';
                    resetForm();
                    // Reload the page after successful update
                    location.reload();
                })
                .catch((error) => {
                    alert("Error updating promotion: " + error.message);
                });
        });
    });
}

// Handle vertical dots click
todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('bx-dots-vertical-rounded')) {
        const key = event.target.getAttribute('data-key');
        const dropdown = event.target.nextElementSibling;
        dropdown.classList.toggle('show');
    }
    if (event.target.classList.contains('delete-promo')) {
        const key = event.target.getAttribute('data-key');
        deletePromo(key);
    }
    if (event.target.classList.contains('update-promo')) {
        const key = event.target.getAttribute('data-key');
        updatePromo(key);
    }
});

// Close dropdown when clicking outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('.bx-dots-vertical-rounded')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('show');
        });
    }
});
// THIS THE PROMO AND ANNOUCEMENT JS FUNCTION


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
window.toggleAccommodationSection = toggleAccommodationSection;


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

// Fetch products when the page loads
window.onload = function () {
    sidebar.classList.add('hide'); //if reload the page will hide the side bar
};


// THIS IS THE ALERT BOX OF THE PROFILE INCLUDE SETTING AND LOGOUT                      This not use profile


// const profileMenu = document.getElementById('profileMenu');
// const profileModal = document.getElementById('profileModal');
// const closeBtn = document.querySelector('.close-btn');
// const exitBtn = document.getElementById('exit');

// // Show the modal when profile image is clicked
// profileMenu.addEventListener('click', function (e) {
//     e.preventDefault();
//     profileModal.style.display = 'block'; // Show modal
// });

// // Close the modal when 'X' or 'Exit' is clicked
// closeBtn.addEventListener('click', function () {
//     profileModal.style.display = 'none'; // Hide modal
// });

// exitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     profileModal.style.display = 'none'; // Hide modal
// });

// // Close the modal when clicking outside the modal content
// window.addEventListener('click', function (event) {
//     if (event.target === profileModal) {
//         profileModal.style.display = 'none'; // Hide modal
//     }
// });



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





// Automatically select the current month in the dropdown
// function setCurrentMonth() {
//     const monthDropdown = document.getElementById("monthDropdown");
//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];
//     const currentMonth = months[new Date().getMonth()];
//     for (const option of monthDropdown.options) {
//         if (option.value === currentMonth) {
//             option.selected = true;
//             break;
//         }
//     }
// }

// function setCurrentMonth2() {
//     const monthDropdown = document.getElementById("monthDropdown2");
//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];
//     const currentMonth = months[new Date().getMonth()];
//     for (const option of monthDropdown.options) {
//         if (option.value === currentMonth) {
//             option.selected = true;
//             break;
//         }
//     }
// }

// Run the function on page load
// document.addEventListener("DOMContentLoaded", setCurrentMonth);
// document.addEventListener("DOMContentLoaded", setCurrentMonth2);




function countVacancies() {
    const ref = firebase.database().ref("products");

    // Query for products with status exactly "Unavailable"
    const queryUpper = ref.orderByChild("status").equalTo("Unavailable");
    // Query for products with status exactly "unavailable"
    const queryLower = ref.orderByChild("status").equalTo("unavailable");

    let countUpper = 0;
    let countLower = 0;

    // First query: "Unavailable"
    queryUpper.once("value")
        .then(snapshot => {
            countUpper = snapshot.numChildren();
            // Second query: "unavailable"
            return queryLower.once("value");
        })
        .then(snapshot => {
            countLower = snapshot.numChildren();
            const vacancyCount = countUpper + countLower;
            // Update the HTML element with the vacancy count
            document.getElementById("vacancyCount").innerText = vacancyCount;
            console.log("Vacancy count:", vacancyCount);
        })
        .catch(error => {
            console.error("Error counting vacancies:", error);
        });
}


// Count total approved sales from all users' payment transactions

// function fetchTotalApprovedSales() {
//     firebase.database().ref("users").once("value")
//         .then(snapshot => {
//             let totalSales = 0;
//             snapshot.forEach(userSnapshot => {
//                 const userData = userSnapshot.val();
//                 if (userData.MyHistory) {
//                     Object.values(userData.MyHistory).forEach(booking => {
//                         if (booking.paymentTransaction && booking.paymentTransaction.paymentStatus) {
//                             if (booking.paymentTransaction.paymentStatus.toLowerCase() === "approved") {
//                                 totalSales += parseFloat(booking.paymentTransaction.amount) || 0;
//                             }
//                         }
//                     });
//                 }
//             });
//             // Update the Total Sales element using its ID with the Philippine peso sign and no decimals
//             document.getElementById("totalSalesAmount").innerText = "₱" + Math.round(totalSales);
//         })
//         .catch(error => {
//             console.error("Error fetching total approved sales:", error);
//         });
// }

function fetchTotalApprovedSales() {
    let totalSales = 0;

    // Fetch approved sales from user MyHistory transactions
    firebase.database().ref("users").once("value")
        .then(snapshot => {
            snapshot.forEach(userSnapshot => {
                const userData = userSnapshot.val();
                if (userData.MyHistory) {
                    Object.values(userData.MyHistory).forEach(booking => {
                        if (booking.paymentTransaction && booking.paymentTransaction.paymentStatus) {
                            if (booking.paymentTransaction.paymentStatus.toLowerCase() === "approved") {
                                totalSales += parseFloat(booking.paymentTransaction.amount) || 0;
                            }
                        }
                    });
                }
            });
            // Now fetch approved walkin transactions
            return firebase.database().ref("walkin").once("value");
        })
        .then(snapshot => {
            snapshot.forEach(bookingSnapshot => {
                const booking = bookingSnapshot.val();
                if (booking.status && booking.status.toLowerCase() === "approved") {
                    totalSales += parseFloat(booking.total) || 0;
                }
            });
            // Update the Total Sales element with the Philippine peso sign and no decimals
            document.getElementById("totalSalesAmount").innerText = "₱" + Math.round(totalSales);
        })
        .catch(error => {
            console.error("Error fetching total approved sales:", error);
        });
}



//Count al pending booking
function fetchPendingBookingCount() {
    firebase.database().ref("users").once("value")
        .then(snapshot => {
            let pendingCount = 0;
            snapshot.forEach(userSnapshot => {
                const userData = userSnapshot.val();
                if (userData.MyBooking) {
                    Object.values(userData.MyBooking).forEach(booking => {
                        const status = (booking.bookingReview?.statusReview || "").toLowerCase();
                        if (status === "pending") {
                            pendingCount++;
                        }
                    });
                }
            });
            document.querySelector("li span.text h3").innerText = pendingCount;
        })
        .catch(error => {
            console.error("Error fetching booking count:", error);
        });
}






//COUN ALL ITEM IN PRODUCT
let pieChart;

// Initialize the pie chart with default data.
function initializePieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');

    const data = {
        labels: ['Accommodation', 'Food and Dessert', 'Beverage and Alcohol', 'Package'],
        datasets: [{
            label: 'Product Percentage',
            data: [0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',   // Red for Accommodation
                'rgba(54, 162, 235, 0.8)',    // Blue for Food and Dessert
                'rgba(255, 206, 86, 0.8)',    // Yellow for Beverage and Alcohol
                'rgba(75, 192, 192, 0.8)'     // Green for Package
            ],
            borderWidth: 1,
            borderColor: '#fff'
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let value = context.raw;
                        return `${context.label}: ${value}%`;
                    }
                }
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    font: { family: 'Arial', size: 14, weight: 'bold' },
                    color: 'grey'
                }
            },
            datalabels: {
                color: '#fff',
                font: { family: 'Arial', size: 14, weight: 'bold' },
                formatter: function (value) {
                    return `${value}%`;
                }
            }
        }
    };

    pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
        plugins: [ChartDataLabels]
    });
}

// Automatically select the current month in the dropdown.
function setCurrentMonth2() {
    const monthDropdown = document.getElementById("monthDropdown2");
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = months[new Date().getMonth()];
    for (const option of monthDropdown.options) {
        if (option.value === currentMonth) {
            option.selected = true;
            break;
        }
    }
}


// Function to count product items per category based on your desired grouping.
// Optionally filters by month if the product has a "date" property.
function countProductCategories() {
    // Updated category mapping:
    // "Accommodation": Boat or Cottage.
    // "Food and Dessert": Accepts Food, Dessert, Food/Dessert, or Food & Dessert.
    // "Beverage and Alcohol": Accepts Beverage, Alcohol, Beverage/Alcohol, or Beverage & Alcohol.
    // "Package": Package.
    const categoryMapping = {
        "Accommodation": ["Boat", "Cottage"],
        "Food and Dessert": ["Food", "Dessert", "Food/Dessert", "Food & Dessert"],
        "Beverage and Alcohol": ["Beverage", "Alcohol", "Beverage/Alcohol", "Beverage & Alcohol"],
        "Package": ["Package"]
    };

    // Get selected month from the dropdown.
    const monthDropdown = document.getElementById("monthDropdown2");
    const selectedMonth = monthDropdown.value;
    let monthIndex = -1;
    if (selectedMonth) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        monthIndex = months.indexOf(selectedMonth);
    }

    // Initialize counts for each group.
    let counts = {
        "Accommodation": 0,
        "Food and Dessert": 0,
        "Beverage and Alcohol": 0,
        "Package": 0
    };

    // Fetch all products from Firebase.
    firebase.database().ref("products").once("value")
        .then(snapshot => {
            snapshot.forEach(productSnapshot => {
                const product = productSnapshot.val();
                if (product.category) {
                    console.log("Product category:", product.category); // Debug log

                    // Optionally, if your products have a date field, filter by month.
                    if (monthIndex !== -1 && product.date) {
                        const prodDate = new Date(product.date);
                        if (prodDate.getMonth() !== monthIndex) {
                            return; // Skip if not in the selected month.
                        }
                    }

                    // Check each group mapping.
                    for (let group in categoryMapping) {
                        if (categoryMapping[group].includes(product.category)) {
                            counts[group]++;
                            break;
                        }
                    }
                }
            });
            console.log("Counts per group:", counts);

            // Calculate total products (in the selected month if filtering is applied).
            const totalItems = Object.values(counts).reduce((sum, val) => sum + val, 0);
            console.log("Total products:", totalItems);

            // Compute percentages for each group.
            let percentages = [];
            if (totalItems > 0) {
                percentages = [
                    Math.round((counts["Accommodation"] / totalItems) * 100),
                    Math.round((counts["Food and Dessert"] / totalItems) * 100),
                    Math.round((counts["Beverage and Alcohol"] / totalItems) * 100),
                    Math.round((counts["Package"] / totalItems) * 100)
                ];
            } else {
                percentages = [0, 0, 0, 0];
            }

            console.log("Computed percentages:", percentages);
            updatePieChart(percentages);
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
}

// Update the pie chart with new data.
function updatePieChart(percentages) {
    if (pieChart) {
        pieChart.data.datasets[0].data = percentages;
        pieChart.update();
    }
}

// Set up a realtime listener on the "products" node to automatically detect changes.
function listenForNewProducts() {
    firebase.database().ref("products").on("value", () => {
        // Whenever the products data changes, re-run the count.
        countProductCategories();
    });
}

// Expose countProductCategories to the global scope.
window.countProductCategories = countProductCategories;

// On DOM load, initialize everything.
document.addEventListener('DOMContentLoaded', function () {
    initializePieChart();
    setCurrentMonth2();
    countProductCategories();
    listenForNewProducts(); // Start listening for realtime updates.


    //This data count all pending, sales and vacancy
    fetchPendingBookingCount();
    fetchTotalApprovedSales();
    countVacancies();
});





//THIS BY DAY COUNT INCOME CHART
let myChart;

// Initialize Chart.js with default settings (empty daily data)
function initializeChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    if (myChart) {
        myChart.destroy();
    }
    // Default empty chart with one label, will be updated later
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [''],
            datasets: [{
                label: 'Income',
                data: [0],
                borderColor: 'rgba(135, 206, 250, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 500,
                easing: 'easeOutQuad'
            },
            scales: {
                x: {
                    grid: { color: 'grey' },
                    ticks: { font: { family: 'Arial', size: 14, weight: 'bold' } },
                    title: { display: true, text: 'Day of Month' }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'grey' },
                    ticks: { font: { family: 'Arial', size: 14, weight: 'bold' } }
                }
            },
            plugins: {
                legend: {
                    labels: { font: { family: 'Arial', size: 14, weight: 'bold' } }
                }
            }
        }
    });
}

// Automatically select the current month in the dropdown
function setCurrentMonth() {
    const monthDropdown = document.getElementById("monthDropdown");
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = months[new Date().getMonth()];
    for (const option of monthDropdown.options) {
        if (option.value === currentMonth) {
            option.selected = true;
            break;
        }
    }
}
// function filterIncomeByDay() {
//     const selectedMonth = document.getElementById("monthDropdown").value;
//     if (!selectedMonth) return;

//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     const monthIndex = monthNames.indexOf(selectedMonth);
//     if (monthIndex === -1) return;

//     const currentYear = new Date().getFullYear();
//     const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
//     let dailyTotals = new Array(daysInMonth).fill(0);

//     firebase.database().ref("users").once("value")
//         .then(snapshot => {
//             console.log("Fetching data for", selectedMonth, currentYear);
//             snapshot.forEach(userSnapshot => {
//                 const userData = userSnapshot.val();
//                 if (userData.MyHistory) {
//                     Object.values(userData.MyHistory).forEach(booking => {
//                         // Check if paymentTransaction exists
//                         if (booking.paymentTransaction) {
//                             const transaction = booking.paymentTransaction;
//                             // Use PaymentDate instead of booking.date
//                             const bookingDateStr = transaction.PaymentDate;
//                             if (!bookingDateStr) {
//                                 console.warn("No PaymentDate found for booking:", booking);
//                                 return;
//                             }
//                             // Parse the date string
//                             const bookingDate = new Date(bookingDateStr);
//                             console.log("Processing PaymentDate:", bookingDateStr, "Parsed:", bookingDate);

//                             // Check if the booking matches the current year and selected month
//                             if (bookingDate.getFullYear() !== currentYear) return;
//                             if (bookingDate.getMonth() !== monthIndex) return;

//                             const day = bookingDate.getDate();
//                             const amount = parseFloat(transaction.amount) || 0;

//                             // Only add if finalStatus is approved (change "approved" to match your data)
//                             if (transaction.finalStatus && transaction.finalStatus.toLowerCase() === "approved") {
//                                 dailyTotals[day - 1] += amount;
//                                 console.log(`Day ${day}: Added ₱${amount}. Running total: ₱${dailyTotals[day - 1]}`);
//                             } else {
//                                 console.log(`Day ${day}: Transaction not approved. Status: ${transaction.finalStatus}`);
//                             }
//                         } else {
//                             console.warn("No paymentTransaction found for booking:", booking);
//                         }
//                     });
//                 }
//             });
//             console.log("Final daily totals:", dailyTotals);
//         })
//         .then(() => {
//             // Compute the maximum value for dynamic y-axis scaling
//             const maxVal = Math.max(...dailyTotals);
//             const newSuggestedMax = maxVal + (maxVal * 0.2);

//             const labels = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
//             if (myChart) {
//                 myChart.options.scales.y.suggestedMax = newSuggestedMax;
//                 myChart.data.labels = labels;
//                 myChart.data.datasets[0].data = dailyTotals;
//                 myChart.update();
//             }
//             console.log("Chart updated with new suggestedMax:", newSuggestedMax);
//         })
//         .catch(error => {
//             console.error("Error fetching approved sales:", error);
//         });
// }


//This code walkin count the amount and view into income chart
function filterIncomeByDay() {
    const selectedMonth = document.getElementById("monthDropdown").value;
    if (!selectedMonth) return;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthIndex = monthNames.indexOf(selectedMonth);
    if (monthIndex === -1) return;

    const currentYear = new Date().getFullYear();
    const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
    let dailyTotals = new Array(daysInMonth).fill(0);

    firebase.database().ref("users").once("value")
        .then(snapshot => {
            console.log("Fetching user data for", selectedMonth, currentYear);
            snapshot.forEach(userSnapshot => {
                const userData = userSnapshot.val();
                if (userData.MyHistory) {
                    Object.values(userData.MyHistory).forEach(booking => {
                        if (booking.paymentTransaction) {
                            const transaction = booking.paymentTransaction;
                            const bookingDateStr = transaction.PaymentDate;
                            if (!bookingDateStr) {
                                console.warn("No PaymentDate found for booking:", booking);
                                return;
                            }
                            const bookingDate = new Date(bookingDateStr);
                            console.log("Processing PaymentDate:", bookingDateStr, "Parsed:", bookingDate);

                            if (bookingDate.getFullYear() !== currentYear) return;
                            if (bookingDate.getMonth() !== monthIndex) return;

                            const day = bookingDate.getDate();
                            const amount = parseFloat(transaction.amount) || 0;

                            // Only count if finalStatus is approved
                            if (transaction.finalStatus && transaction.finalStatus.toLowerCase() === "approved") {
                                dailyTotals[day - 1] += amount;
                                console.log(`User Day ${day}: Added ₱${amount}. Running total: ₱${dailyTotals[day - 1]}`);
                            } else {
                                console.log(`User Day ${day}: Transaction not approved. Status: ${transaction.finalStatus}`);
                            }
                        } else {
                            console.warn("No paymentTransaction found for booking:", booking);
                        }
                    });
                }
            });
            // Now process walkin transactions
            return firebase.database().ref("walkin").once("value");
        })
        .then(snapshot => {
            console.log("Fetching walkin data for", selectedMonth, currentYear);
            snapshot.forEach(bookingSnapshot => {
                const booking = bookingSnapshot.val();
                // Check if booking.date exists and status is approved
                if (booking.date && booking.status && booking.status.toLowerCase() === "approved") {
                    const bookingDate = new Date(booking.date);
                    if (bookingDate.getFullYear() !== currentYear) return;
                    if (bookingDate.getMonth() !== monthIndex) return;

                    const day = bookingDate.getDate();
                    const amount = parseFloat(booking.total) || 0;
                    dailyTotals[day - 1] += amount;
                    console.log(`Walkin Day ${day}: Added ₱${amount}. Running total: ₱${dailyTotals[day - 1]}`);
                }
            });
            console.log("Final daily totals:", dailyTotals);
        })
        .then(() => {
            // Compute the maximum value for dynamic y-axis scaling
            const maxVal = Math.max(...dailyTotals);
            const newSuggestedMax = maxVal + (maxVal * 0.2);

            const labels = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
            if (myChart) {
                myChart.options.scales.y.suggestedMax = newSuggestedMax;
                myChart.data.labels = labels;
                myChart.data.datasets[0].data = dailyTotals;
                myChart.update();
            }
            console.log("Chart updated with new suggestedMax:", newSuggestedMax);
        })
        .catch(error => {
            console.error("Error fetching approved sales:", error);
        });
}


// Expose filterIncomeByDay to the global scope so the inline onchange event can access it
window.filterIncomeByDay = filterIncomeByDay;

// Initialize chart, auto-select current month, and load daily income data on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initializeChart();
    setCurrentMonth();
    filterIncomeByDay();
});


document.getElementById('profileMenu').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modalimage').classList.toggle('active');
});


// Hide modal if clicking outside of modal and profileMenu
// document.addEventListener('click', function(e) {
//     const modal = document.getElementById('modalimage');
//     const profileMenu = document.getElementById('profileMenu');

//     // Check if the clicked target is outside both the modal and the profile menu
//     if (!modal.contains(e.target) && !profileMenu.contains(e.target)) {
//         modal.classList.remove('active');
//     }
// });


// //THIS CODE FOR THE INCOME CHART BUT NOT WORK
//  let myChart;
// // Initialize Chart.js
// function initializeChart() {
//   const ctx = document.getElementById('myChart').getContext('2d');
//   // Destroy an existing instance if it exists to avoid duplicates
//   if (myChart) {
//     myChart.destroy();
//   }
//   myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//       datasets: [{
//         label: 'Income',
//         data: [0, 0, 0, 0],
//         borderColor: 'rgba(135, 206, 250, 1)',
//         borderWidth: 2,
//         fill: false
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       animation: {
//         duration: 500,
//         easing: 'easeOutQuad'
//       },
//       scales: {
//         x: {
//           grid: { color: 'grey' },
//           ticks: { font: { family: 'Arial', size: 14, weight: 'bold' } }
//         },
//         y: {
//           beginAtZero: true,
//           grid: { color: 'grey' },
//           ticks: { font: { family: 'Arial', size: 14, weight: 'bold' } }
//         }
//       },
//       plugins: {
//         legend: {
//           labels: { font: { family: 'Arial', size: 14, weight: 'bold' } }
//         }
//       }
//     }
//   });
// }

// // Fetch approved transactions and group income by week for the selected month
// function filterIncome() {
//   const selectedMonth = document.getElementById("monthDropdown").value;
//   if (!selectedMonth) return;

//   const weekTotals = [0, 0, 0, 0];
//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//   firebase.database().ref("users").once("value")
//     .then(snapshot => {
//       snapshot.forEach(userSnapshot => {
//         const userData = userSnapshot.val();
//         if (userData.MyHistory) {
//           Object.values(userData.MyHistory).forEach(booking => {
//             if (booking.paymentTransaction && booking.paymentTransaction.paymentStatus) {
//               if (booking.paymentTransaction.paymentStatus.toLowerCase() === "approved") {
//                 // Assumes a 'date' property in "YYYY-MM-DD" format
//                 const bookingDateStr = booking.date;
//                 if (!bookingDateStr) return;
//                 const bookingDate = new Date(bookingDateStr);
//                 if (monthNames[bookingDate.getMonth()] !== selectedMonth) return;
//                 const day = bookingDate.getDate();
//                 let weekIndex = day <= 7 ? 0 : day <= 14 ? 1 : day <= 21 ? 2 : 3;
//                 weekTotals[weekIndex] += parseFloat(booking.paymentTransaction.amount) || 0;
//               }
//             }
//           });
//         }
//       });
//     })
//     .then(() => {
//       if (myChart) {
//         myChart.data.datasets[0].data = weekTotals;
//         console.log("Weekly totals:", weekTotals);
//         myChart.update();
//       }
//     })
//     .catch(error => {
//       console.error("Error fetching approved sales:", error);
//     });
// }

// // Function to automatically select the current month in the dropdown
// function setCurrentMonth() {
//   const monthDropdown = document.getElementById("monthDropdown");
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const currentMonth = months[new Date().getMonth()];
//   for (const option of monthDropdown.options) {
//     if (option.value === currentMonth) {
//       option.selected = true;
//       break;
//     }
//   }
// }

// // Expose filterIncome to the global scope so the inline onchange event can access it
// window.filterIncome = filterIncome;

// // Initialize chart and auto-select month on DOM load, then load income data
// document.addEventListener('DOMContentLoaded', function () {
//   initializeChart();
//   setCurrentMonth();
//   filterIncome();
// });
