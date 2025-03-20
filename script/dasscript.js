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
function setCurrentMonth() {
    const monthDropdown = document.getElementById("monthDropdown");
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const currentMonth = months[new Date().getMonth()];
    for (const option of monthDropdown.options) {
        if (option.value === currentMonth) {
            option.selected = true;
            break;
        }
    }
}

function setCurrentMonth2() {
    const monthDropdown = document.getElementById("monthDropdown2");
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const currentMonth = months[new Date().getMonth()];
    for (const option of monthDropdown.options) {
        if (option.value === currentMonth) {
            option.selected = true;
            break;
        }
    }
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", setCurrentMonth);
document.addEventListener("DOMContentLoaded", setCurrentMonth2);