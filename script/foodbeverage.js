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


// Open modal function bx plus
function openModals() {
  document.getElementById('announcementModal').style.display = 'block';
  sidebar.classList.add('hide');  // Hide the sidebar when modal is opened
}

// Close modal when close button is clicked
document.getElementById('closeModal').addEventListener('click', closeModal);

function closeModal() {
  document.getElementById('announcementModal').style.display = 'none';
  document.getElementById('announcementForm').reset();  // Reset form if needed
}

//Close modal if clicked outside the modal content
// window.onclick = function (event) {
//   const modal = document.getElementById('announcementModal');
//   if (event.target == modal) {
//     modal.style.display = 'none';
//     document.getElementById('announcementForm').reset();
//   }
// }



// FILTER THE CATEGORY
// Global variable to keep track of the current filter.
let currentFilter = 'Food';

// Filtering function: shows only rows that match the selected category.
function filterAccommodation(category) {
  currentFilter = category;
  const items = document.querySelectorAll('.accommodation-item');
  items.forEach(item => {
    // If the row's category exactly matches the selected category, display it; otherwise, hide it.
    if (item.getAttribute('data-type') === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// THIS FETCH DATA INTO FIREBASE APPEAR INTO TABLE WITH DELETE AND UPDATE
// Function to fetch products from Firebase and append rows to the table.
function fetchProducts() {
  const tableBody = document.getElementById('accommodation-list');

  // Listen for changes in the "products" node.
  firebase.database().ref('products').on('value', (snapshot) => {
    tableBody.innerHTML = ''; // Clear existing rows

    snapshot.forEach((childSnapshot) => {
      const productKey = childSnapshot.key;
      const productData = childSnapshot.val();

      // Create a new row and assign the category to the data-type attribute.
      const productRow = document.createElement('tr');
      productRow.classList.add('accommodation-item');
      productRow.setAttribute('data-type', productData.category);

      // Populate the row.
      productRow.innerHTML = `
         <td>${productData.name}</td>
         <td>${productData.category}</td>
         <td>${productData.price}</td>
         <td>
           <span class="status ${productData.status === 'Available' ? 'completed' : 'unavailable'}">
             ${productData.status.charAt(0).toUpperCase() + productData.status.slice(1)}
           </span>
         </td>
         <td>
           <div class="actions" data-key="${productKey}">
             <i class="bx bx-pencil update-promo" data-key="${productKey}"></i>
             <i class="bx bx-trash delete-promo" data-key="${productKey}"></i>
           </div>
         </td>
       `;

      // Append the row to the table.
      tableBody.appendChild(productRow);
    });

    // Once data is loaded, apply the default filter (Cottage).
    filterAccommodation(currentFilter);
  });
}

// On page load, set the default filter and fetch data.
document.addEventListener('DOMContentLoaded', () => {
  currentFilter = 'Food';  // Set the default view.
  fetchProducts();
});



//SUBMITTED MODAL
// Toggle conditional fields based on selected category
document.getElementById('promoCategory').addEventListener('change', function () {
  const category = this.value;
  // Containers for conditional fields
  const foodContainer = document.getElementById('foodContainer');
  const dessertContainer = document.getElementById('dessertContainer');
  const beverageContainer = document.getElementById('beverageContainer');
  const alcoholContainer = document.getElementById('alcoholContainer');

  // Hide all containers initially
  foodContainer.style.display = 'none';
  dessertContainer.style.display = 'none';
  beverageContainer.style.display = 'none';
  alcoholContainer.style.display = 'none';

  // Remove required attributes from conditional inputs
  document.getElementById('food1').required = false;
  document.getElementById('flavorToppings').required = false;
  document.getElementById('perfectFor').required = false;
  document.getElementById('beverageSize').required = false;
  document.getElementById('alcoholSize').required = false;

  // Show and set required fields based on selected category.
  if (category === 'Dessert') {
    dessertContainer.style.display = 'flex'; // or 'block'
    document.getElementById('flavorToppings').required = true;
    document.getElementById('perfectFor').required = true;
  } else if (category === 'Beverage') {
    beverageContainer.style.display = 'flex';
    document.getElementById('beverageSize').required = true;
  } else if (category === 'Alcohol') {
    alcoholContainer.style.display = 'flex';
    document.getElementById('alcoholSize').required = true;
  } else {
    // For Food or any other category, show food fields.
    foodContainer.style.display = 'flex';
    document.getElementById('food1').required = true;
  }
});

// Form submission handling and Firebase upload
document.getElementById('announcementForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Common form values
  const name = document.getElementById('announcementTitle').value;
  const description = document.getElementById('announcementDescription').value;
  const price = document.getElementById('promoPrice').value;
  const category = document.getElementById('promoCategory').value;
  const status = document.getElementById('promoAvailability').value;


  // Create the product data object with common fields.
  const productData = {
    name,
    description,
    price,
    category,
    status
  };

  // Gather conditional fields based on category.
  if (category === 'Dessert') {
    productData.flavorToppings = document.getElementById('flavorToppings').value;
    productData.perfectFor = document.getElementById('perfectFor').value;
    productData.pieceNameDessert = document.getElementById('pieceNameDessert').value;
  } else if (category === 'Beverage') {
    productData.beverageSize = document.getElementById('beverageSize').value;
  } else if (category === 'Alcohol') {
    productData.alcoholSize = document.getElementById('alcoholSize').value;
  } else {
    // For Food or other categories, gather food fields.
    productData.food1 = document.getElementById('food1').value;
    productData.pieceNameFood = document.getElementById('pieceNameFood').value;
  }

  // Push data to Firebase
  firebase.database().ref('products').push(productData)
    .then(() => {
      alert('Product added successfully!');
      this.reset();
    })
    .catch(error => {
      console.error('Error adding product:', error);
      alert('Error adding product');
    });
});



//UPDATE MODAL 
// Global variable to store the current product key being updated.
let currentEditingId = null;

// Exit button for update modal.
document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('editModal').style.display = 'none';
});

// Category change listener in update modal.
document.getElementById('promoCategorys').addEventListener('change', function () {
  const category = this.value;
  const foodContainer = document.getElementById('foodContainers');
  const dessertContainer = document.getElementById('dessertContainers');
  const beverageContainer = document.getElementById('beverageContainers');
  const alcoholContainer = document.getElementById('alcoholContainers');

  // Hide all conditional containers.
  foodContainer.style.display = 'none';
  dessertContainer.style.display = 'none';
  beverageContainer.style.display = 'none';
  alcoholContainer.style.display = 'none';

  // Remove required attribute from all conditional fields.
  document.getElementById('food1s').required = false;
  document.getElementById('flavorToppingss').required = false;
  document.getElementById('perfectFors').required = false;
  if (document.getElementById('pieceNameDessertUpdate')) {
    document.getElementById('pieceNameDessertUpdate').required = false;
  }
  document.getElementById('beverageSizeUpdate').required = false;
  document.getElementById('alcoholSizeUpdate').required = false;

  // Show and require fields based on selected category.
  if (category === 'Dessert') {
    dessertContainer.style.display = 'flex';
    document.getElementById('flavorToppingss').required = true;
    document.getElementById('perfectFors').required = true;
  } else if (category === 'Beverage') {
    beverageContainer.style.display = 'flex';
    document.getElementById('beverageSizeUpdate').required = true;
  } else if (category === 'Alcohol') {
    alcoholContainer.style.display = 'flex';
    document.getElementById('alcoholSizeUpdate').required = true;
  } else {
    // For Food or any other category.
    foodContainer.style.display = 'flex';
    document.getElementById('food1s').required = true;
  }
});


// Event delegation for update and delete actions.
document.addEventListener('click', function (e) {
  // Update action (pencil icon).
  if (e.target.classList.contains('update-promo')) {
    const productKey = e.target.getAttribute('data-key');

    // Fetch product data from Firebase.
    firebase.database().ref('products/' + productKey).once('value').then(snapshot => {
      const productData = snapshot.val();

      // Populate common update modal fields.
      document.getElementById('announcementTitles').value = productData.name || '';
      document.getElementById('announcementDescriptions').value = productData.description || '';
      document.getElementById('promoPrices').value = productData.price || '';
      document.getElementById('promoCategorys').value = productData.category || '';
      document.getElementById('promoAvailabilitys').value = productData.status || '';

      // Populate conditional fields based on category.
      if (productData.category === 'Dessert') {
        document.getElementById('flavorToppingss').value = productData.flavorToppings || '';
        document.getElementById('perfectFors').value = productData.perfectFor || '';
        if (document.getElementById('pieceNameDessertUpdate')) {
          document.getElementById('pieceNameDessertUpdate').value = productData.pieceNameDessert || '';
        }
      } else if (productData.category === 'Beverage') {
        document.getElementById('beverageSizeUpdate').value = productData.beverageSize || '';
      } else if (productData.category === 'Alcohol') {
        document.getElementById('alcoholSizeUpdate').value = productData.alcoholSize || '';
      } else {
        // Default (Food or other category).
        document.getElementById('food1s').value = productData.food1 || '';
        if (document.getElementById('pieceNameFoodUpdate')) {
          document.getElementById('pieceNameFoodUpdate').value = productData.pieceNameFood || '';
        }
      }

      // Set the current editing ID.
      currentEditingId = productKey;

      // Dispatch a change event on the category dropdown so conditional fields update.
      document.getElementById('promoCategorys').dispatchEvent(new Event('change'));

      // Open the update modal.
      document.getElementById('editModal').style.display = 'block';
    }).catch(error => {
      console.error("Error fetching product data:", error);
      alert("Error fetching product data");
    });
  }

  // Delete action (trash icon).
  if (e.target.classList.contains('delete-promo')) {
    const productKey = e.target.getAttribute('data-key');
    if (confirm("Are you sure you want to delete this product?")) {
      firebase.database().ref('products/' + productKey).remove()
        .then(() => {
          alert("Product deleted successfully!");
        })
        .catch(error => {
          console.error("Error deleting product:", error);
          alert("Error deleting product");
        });
    }
  }
});

// Update modal form submission.
document.getElementById('announcementForms').addEventListener('submit', function (e) {
  e.preventDefault();

  // Gather updated form values.
  const name = document.getElementById('announcementTitles').value;
  const description = document.getElementById('announcementDescriptions').value;
  const price = document.getElementById('promoPrices').value;
  const category = document.getElementById('promoCategorys').value;
  const status = document.getElementById('promoAvailabilitys').value;
 
  // Create updated product data object with common fields.
  const updatedProductData = {
    name,
    description,
    price,
    category,
    status
  };

  // Add conditional fields based on category.
  if (category === 'Dessert') {
    updatedProductData.flavorToppings = document.getElementById('flavorToppingss').value;
    updatedProductData.perfectFor = document.getElementById('perfectFors').value;
    if (document.getElementById('pieceNameDessertUpdate')) {
      updatedProductData.pieceNameDessert = document.getElementById('pieceNameDessertUpdate').value;
    }
  } else if (category === 'Beverage') {
    updatedProductData.beverageSize = document.getElementById('beverageSizeUpdate').value;
  } else if (category === 'Alcohol') {
    updatedProductData.alcoholSize = document.getElementById('alcoholSizeUpdate').value;
  } else {
    updatedProductData.food1 = document.getElementById('food1s').value;
    if (document.getElementById('pieceNameFoodUpdate')) {
      updatedProductData.pieceNameFood = document.getElementById('pieceNameFoodUpdate').value;
    }
  }

  // Function to update product data in Firebase.
  function updateProductData(data) {
    firebase.database().ref('products/' + currentEditingId).update(data)
      .then(() => {
        alert('Product updated successfully!');
        document.getElementById('announcementForms').reset();
        document.getElementById('editModal').style.display = 'none';
      })
      .catch(error => {
        console.error('Error updating product:', error);
        alert('Error updating product');
      });
  }
  updateProductData(updatedProductData);
});



// Fetch products when the page loads
window.onload = function () {
  fetchProducts();
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



