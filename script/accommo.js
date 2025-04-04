// Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCxEDSw_13164JHIPhdCZbUycf7peWMP3s",
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


// Filter accommodation based on category
// function filterAccommodation(category) {
//   const accommodationItems = document.querySelectorAll('.accommodation-item'); // Get all accommodation rows

//   // Loop through each row and check its category
//   accommodationItems.forEach(function (item) {
//     const itemCategory = item.getAttribute('data-type'); // Get the category of the current item

//     // If category is "All", show all items, otherwise filter based on the selected category
//     if (category === 'All' || itemCategory === category) {
//       item.style.display = ''; // Show the row
//     } else {
//       item.style.display = 'none'; // Hide the row
//     }
//   });
// }


// // Fetch products from Firebase Realtime Database and display them in the table
// function fetchProducts() {
//   const tableBody = document.getElementById('accommodation-list');

//   firebase.database().ref('products').on('value', (snapshot) => {
//     tableBody.innerHTML = ''; // Clear existing rows

//     snapshot.forEach((childSnapshot) => {
//       const productKey = childSnapshot.key; // Unique key for each product
//       const productData = childSnapshot.val();

//       const productRow = document.createElement('tr');
//       productRow.classList.add('accommodation-item');
//       productRow.setAttribute('data-type', productData.category);

//       // Populate table cells
//       productRow.innerHTML = `
//           <td>${productData.name}</td>
//           <td>${productData.category}</td>
//           <td>${productData.price}</td>
//           <td>
//            <span 
//   class="status ${productData.status === 'Available' ? 'completed' : 'unavailable'}">
//   ${productData.status.charAt(0).toUpperCase() + productData.status.slice(1)}
// </span> </td>
//           <td>
//             <div class="actions" data-key="${productKey}">
//               <i class="bx bx-pencil update-promo" data-key="${productKey}"></i>
//               <i class="bx bx-trash delete-promo" data-key="${productKey}"></i>
//             </div>
//           </td>
//         `;

//       tableBody.appendChild(productRow);
//     });

//     // Attach event listeners for delete and update actions
//     attachActionListeners();
//   });
// }

// function fetchProducts() {
//   const tableBody = document.getElementById('accommodation-list');

//   firebase.database().ref('products').on('value', (snapshot) => {
//     tableBody.innerHTML = ''; // Clear existing rows

//     snapshot.forEach((childSnapshot) => {
//       const productKey = childSnapshot.key; // Unique key for each product
//       const productData = childSnapshot.val();

//       const productRow = document.createElement('tr');
//       productRow.classList.add('accommodation-item');
//       productRow.setAttribute('data-type', productData.category);

//       // Populate table cells
//       productRow.innerHTML = `
//         <td>${productData.name}</td>
//         <td>${productData.category}</td>
//         <td>${productData.price}</td>
//         <td>
//           <span 
//             class="status ${productData.status === 'Available' ? 'completed' : 'unavailable'}">
//             ${productData.status.charAt(0).toUpperCase() + productData.status.slice(1)}
//           </span> 
//         </td>
//         <td>
//           <div class="actions" data-key="${productKey}">
//             <i class="bx bx-pencil update-promo" data-key="${productKey}"></i>  <i class="bx bx-trash delete-promo" data-key="${productKey}"></i>  </div>
//         </td>
//       `;

//       tableBody.appendChild(productRow);
//     });
//      // Attach event listeners for delete and update actions
//      attachActionListeners();
//   });
// }

 // Global variable to keep track of the current filter.
 let currentFilter = 'Cottage';
 
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
   currentFilter = 'Cottage';  // Set the default view.
   fetchProducts();
 });

 
 

//Submission Modal
// Listen for changes on the Category dropdown to show/hide the Location field
document.getElementById('promoCategory').addEventListener('change', function () {
  const category = this.value;
  const locationField = document.getElementById('promoLocation');
  if (category === 'Cottage') {
    locationField.disabled = false;
    locationField.parentElement.style.display = "block";
  } else {
    locationField.disabled = true;
    locationField.value = "";
    locationField.parentElement.style.display = "none";
  }
});

// Handle form submission and push data to Firebase Realtime Database
document.getElementById('announcementForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Gather form values including the new Amenities field
  const name = document.getElementById('announcementTitle').value;
  const description = document.getElementById('announcementDescription').value;
  const price = document.getElementById('promoPrice').value;
  const category = document.getElementById('promoCategory').value;
  const status = document.getElementById('promoAvailability').value;
  const location = document.getElementById('promoLocation').value; // Only meaningful if enabled
  const capacity = document.getElementById('promoCapacity').value;
  const design = document.getElementById('promoDesign').value;
  const amenities = document.getElementById('amenitiesName').value;
  // const imageFile = document.getElementById('announcementImage').files[0];

  // Build the product data object (location included only if Cottage)
  const productData = {
    name,
    description,
    price,
    category,
    status,
    capacity,
    design,
    amenities,
    location: category === 'Cottage' ? location : ""
  };

  // If an image is provided, convert it to Base64 before sending
  // if (imageFile) {
  //   convertToBase64(imageFile).then(base64Image => {
  //     productData.imageUrl = base64Image;
  //     pushDataToFirebase(productData);
  //   }).catch(error => {
  //     console.error('Error converting image:', error);
  //     alert('Error processing image file');
  //   });
  // } else {
  //   pushDataToFirebase(productData);
  // }
  pushDataToFirebase(productData);
});


// Function to push data to Firebase Realtime Database
function pushDataToFirebase(data) {
  const newProductRef = firebase.database().ref('products').push();
  newProductRef.set(data)
    .then(() => {
      alert('Product added successfully!');
      document.getElementById('announcementForm').reset();
    })
    .catch(error => {
      console.error('Error adding product: ', error);
      alert('Error adding product');
    });
}

// Utility function to convert an image file to a Base64 string using FileReader
// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onloadend = function () {
//       resolve(reader.result);
//     };
//     reader.onerror = function (error) {
//       reject(error);
//     };
//     reader.readAsDataURL(file);
//   });
// }




//Update Modal
// Global variable to store the current product key being updated.
let currentEditingId = null;

// Close the update modal when the close button is clicked.
document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('editModal').style.display = 'none';
});

// Category change event for the update modal: show/hide Location field
document.getElementById('promoCategorys').addEventListener('change', function () {
  const category = this.value;
  const locationField = document.getElementById('promoLocations');
  if (category === 'Cottage') {
    locationField.disabled = false;
    locationField.parentElement.style.display = "block";
  } else {
    locationField.disabled = true;
    locationField.value = "";
    locationField.parentElement.style.display = "none";
  }
});

// Update the image preview when a new file is selected in the update modal.
// document.getElementById('announcementImages').addEventListener('change', function (e) {
//   const file = e.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (evt) {
//       let imgPreview = document.getElementById('updateImagePreview');
//       if (!imgPreview) {
//         imgPreview = document.createElement('img');
//         imgPreview.id = 'updateImagePreview';
//         imgPreview.style.maxWidth = '100px';
//         imgPreview.style.height = 'auto';
//         imgPreview.style.display = 'block';
//         document.getElementById('announcementImages').parentElement.appendChild(imgPreview);
//       }
//       imgPreview.src = evt.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// });

// Event delegation: When the pencil (update) icon is clicked.
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('update-promo')) {
    const productKey = e.target.getAttribute('data-key');
    
    // Fetch product data for the given key.
    firebase.database().ref('products/' + productKey).once('value').then(snapshot => {
      const productData = snapshot.val();
      
      // Populate update modal fields including the Amenities field.
      document.getElementById('announcementTitles').value = productData.name || "";
      document.getElementById('announcementDescriptions').value = productData.description || "";
      document.getElementById('promoPrices').value = productData.price || "";
      document.getElementById('promoCategorys').value = productData.category || "";
      document.getElementById('amenitiesNames').value = productData.amenities || "";
      
      // For category "Cottage", enable and show Location; otherwise, hide it.
      const locationField = document.getElementById('promoLocations');
      if (productData.category === 'Cottage') {
        locationField.disabled = false;
        locationField.parentElement.style.display = "block";
        locationField.value = productData.location || "";
      } else {
        locationField.disabled = true;
        locationField.value = "";
        locationField.parentElement.style.display = "none";
      }
      
      document.getElementById('promoCapacitys').value = productData.capacity || "";
      document.getElementById('promoDesigns').value = productData.design || "";
      document.getElementById('promoAvailabilitys').value = productData.status || "";
      
      // Image preview: show a small preview if an imageUrl exists.
      // let imgPreview = document.getElementById('updateImagePreview');
      // if (!imgPreview) {
      //   imgPreview = document.createElement('img');
      //   imgPreview.id = 'updateImagePreview';
      //   imgPreview.style.maxWidth = '100px';
      //   imgPreview.style.height = 'auto';
      //   imgPreview.style.display = 'block';
      //   document.getElementById('announcementImages').parentElement.appendChild(imgPreview);
      // }
      // if (productData.imageUrl) {
      //   imgPreview.src = productData.imageUrl;
      //   imgPreview.style.display = 'block';
      // } else {
      //   imgPreview.style.display = 'none';
      //   imgPreview.src = "";
      // }
      
      // Set the global product key for update submission.
      currentEditingId = productKey;
      
      // Open the update modal.
      document.getElementById('editModal').style.display = 'block';
    }).catch(error => {
      console.error("Error fetching product data:", error);
      alert("Error fetching product data");
    });
  }
  
  // Delete action: When trash icon is clicked.
  if (e.target.classList.contains('delete-promo')) {
    const productKey = e.target.getAttribute('data-key');
    if (confirm("Are you sure you want to delete this product?")) {
      firebase.database().ref('products/' + productKey).remove()
        .then(() => {
          alert("Product deleted successfully!");
        })
        .catch(error => {
          console.error("Error deleting product: ", error);
          alert("Error deleting product");
        });
    }
  }
});

// Handle the update modal form submission.
document.getElementById('announcementForms').addEventListener('submit', function (e) {
  e.preventDefault();

  // Gather updated values including the new Amenities field.
  const name = document.getElementById('announcementTitles').value;
  const description = document.getElementById('announcementDescriptions').value;
  const price = document.getElementById('promoPrices').value;
  const category = document.getElementById('promoCategorys').value;
  const status = document.getElementById('promoAvailabilitys').value;
  const location = document.getElementById('promoLocations').value;
  const capacity = document.getElementById('promoCapacitys').value;
  const design = document.getElementById('promoDesigns').value;
  const amenities = document.getElementById('amenitiesNames').value;
  //const imageFile = document.getElementById('announcementImages').files[0];

  // Build the updated product data object.
  const updatedProductData = {
    name,
    description,
    price,
    category,
    status,
    capacity,
    design,
    amenities,
    location: category === 'Cottage' ? location : ""
  };

  // If status is "Available" and category is either Boat or Cottage, remove availableDate.
  if (status === "Available" && (category === "Boat" || category === "Cottage")) {
    updatedProductData.availableDate = null;
  }

  // Function to update the product data in Firebase.
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
 
  // If a new image is selected, convert it to Base64 before updating.
  // if (imageFile) {
  //   convertToBase64(imageFile).then(base64Image => {
  //     updatedProductData.imageUrl = base64Image;
  //     updateProductData(updatedProductData);
  //   }).catch(error => {
  //     console.error('Error converting image:', error);
  //     alert('Error processing image file');
  //   });
  // } else {
  //   updateProductData(updatedProductData);
  // }
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



