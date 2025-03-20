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
  
  
  // // Get a reference to the auth service
  // var auth = firebase.auth();
  
  // // Show the modal when clicking the logout link
  // document.getElementById('logout-link').addEventListener('click', function (event) {
  //   event.preventDefault(); // Prevent the default link behavior
  //   openLogoutModal();
  // });
  
  // // Open the logout modal
  // function openLogoutModal() {
  //   document.getElementById('logoutModal').style.display = 'flex';
  // }
  
  // // Close the logout modal
  // function closeLogoutModal() {
  //   document.getElementById('logoutModal').style.display = 'none';
  // }
  
  // // Handle logout confirmation (directly logs out on "Yes")
  // document.getElementById('confirmLogout').addEventListener('click', function () {
  //   firebase.auth().signOut().then(function () {
  //     alert('Successfully logged out.');
  //     window.location.href = '../index.html'; // Redirect to login page or home
  //   }).catch(function (error) {
  //     console.error('Error during logout:', error);
  //     alert('Error logging out.');
  //   });
  // });
  
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
  
  
  
  // THIS IS THE ALERT BOX OF THE PROFILE INCLUDE SETTING AND LOGOUT                       This not use profile
  
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
  //     if (category === 'Package' || itemCategory === category) {
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
   // Global variable to keep track of the current filter.
 let currentFilter = 'Pacakage';

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
   currentFilter = 'Package';  // Set the default view.
   fetchProducts();
 });
 
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


  // Function to convert image file to Base64 string
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

// Handle Create Product form submission
document.getElementById('announcementForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values from the create product modal
  const name = document.getElementById('announcementTitle').value;
  const description = document.getElementById('announcementDescription').value;
  const price = document.getElementById('promoPrice').value;
  const category = document.getElementById('promoCategory').value;
  const status = document.getElementById('promoAvailability').value;
  const capacityCottage = document.getElementById('promoCapacityCottage').value;
  const beverage = document.getElementById('promoBeverage').value; // Updated field
  const cottage = document.getElementById('cottage').value; // Updated field (name changed)
  const food1 = document.getElementById('food1').value;
  const food2 = document.getElementById('food2').value;
  const food3 = document.getElementById('food3').value;
  const food4 = document.getElementById('food4').value;
  const food5 = document.getElementById('food5').value;
  const food6 = document.getElementById('food6').value; // New field
  const imageFile = document.getElementById('announcementImage').files[0];

  // Create product data object
  const productData = {
    name,
    description,
    price,
    category,
    status,
    capacityCottage,
    beverage,
    cottage, // Using the correct field name
    food1,
    food2,
    food3,
    food4,
    food5,
    food6
    // Optionally, add a timestamp:
    // createdAt: firebase.database.ServerValue.TIMESTAMP
  };

  // Helper function to push product data to Firebase
  const pushProductData = (data) => {
    const newProductRef = firebase.database().ref('products').push();
    newProductRef.set(data)
      .then(() => {
        alert('Product added successfully!');
        document.getElementById('announcementForm').reset();
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
        alert('Error adding product');
      });
  };

  if (imageFile) {
    convertToBase64(imageFile)
      .then((base64Image) => {
        productData.imageUrl = base64Image;
        pushProductData(productData);
      })
      .catch((error) => {
        console.error('Error processing image: ', error);
        alert('Error processing image');
      });
  } else {
    pushProductData(productData);
  }
});

// Function to fetch product data and open the update modal
function updateProduct(productId) {
  firebase.database().ref('products/' + productId).once('value')
    .then(snapshot => {
      const productData = snapshot.val();
      if (productData) {
        // Pre-fill the update form fields
        document.getElementById('updateTitle').value = productData.name || '';
        document.getElementById('updateDescription').value = productData.description || '';
        document.getElementById('updatePrice').value = productData.price || '';
        document.getElementById('updateCategory').value = productData.category || '';
        document.getElementById('updateAvailability').value = productData.status || '';
        document.getElementById('updateCapacityCottage').value = productData.capacityCottage || '';
        document.getElementById('updateBeverage').value = productData.beverage || ''; // Updated field
        document.getElementById('updateCottage').value = productData.cottage || ''; // Updated field
        document.getElementById('updateFood1').value = productData.food1 || '';
        document.getElementById('updateFood2').value = productData.food2 || '';
        document.getElementById('updateFood3').value = productData.food3 || '';
        document.getElementById('updateFood4').value = productData.food4 || '';
        document.getElementById('updateFood5').value = productData.food5 || '';
        document.getElementById('updateFood6').value = productData.food6 || ''; // New field

        // Update image preview if exists
        const updateImagePreview = document.getElementById('updateImagePreview');
        if (productData.imageUrl) {
          updateImagePreview.src = productData.imageUrl;
          updateImagePreview.style.display = 'block';
        } else {
          updateImagePreview.style.display = 'none';
          updateImagePreview.src = '';
        }
        // Store product ID in a hidden field
        document.getElementById('updateProductId').value = productId;
        // Open the update modal
        document.getElementById('updateModal').style.display = 'block';
      } else {
        alert('Product not found.');
      }
    })
    .catch(error => {
      console.error('Error fetching product data for update:', error);
      alert('Error fetching product data.');
    });
}

// Listen for changes on the update image input to update the preview immediately
document.getElementById('updateImage').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    convertToBase64(file)
      .then((base64Image) => {
        const updateImagePreview = document.getElementById('updateImagePreview');
        updateImagePreview.src = base64Image;
        updateImagePreview.style.display = 'block';
      })
      .catch(error => {
        console.error('Error updating image preview:', error);
      });
  }
});

// Event delegation for update (pencil icon) and delete (trash icon) actions
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('update-promo')) {
    const productKey = e.target.getAttribute('data-key');
    updateProduct(productKey);
  }
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

// Close update modal on clicking the close button
document.getElementById('closeUpdateModal').addEventListener('click', function() {
  document.getElementById('updateModal').style.display = 'none';
});

// Handle Update Product form submission
document.getElementById('updateForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const productId = document.getElementById('updateProductId').value;
  const name = document.getElementById('updateTitle').value;
  const description = document.getElementById('updateDescription').value;
  const price = document.getElementById('updatePrice').value;
  const category = document.getElementById('updateCategory').value;
  const status = document.getElementById('updateAvailability').value;
  const capacityCottage = document.getElementById('updateCapacityCottage').value;
  const beverage = document.getElementById('updateBeverage').value; // Updated field
  const cottage = document.getElementById('updateCottage').value; // Updated field
  const food1 = document.getElementById('updateFood1').value;
  const food2 = document.getElementById('updateFood2').value;
  const food3 = document.getElementById('updateFood3').value;
  const food4 = document.getElementById('updateFood4').value;
  const food5 = document.getElementById('updateFood5').value;
  const food6 = document.getElementById('updateFood6').value; // New field
  const imageFile = document.getElementById('updateImage').files[0];

  const updatedProductData = {
    name,
    description,
    price,
    category,
    status,
    capacityCottage,
    beverage,
    cottage, // Using the correct field name
    food1,
    food2,
    food3,
    food4,
    food5,
    food6
  };

  // If status is "Available", remove availableDate.
  if (status === "Available") {
    updatedProductData.availableDate = null;
  }

  // Function to update product data in Firebase
  function performUpdate(data) {
    firebase.database().ref('products/' + productId).update(data)
      .then(() => {
        alert('Product updated successfully!');
        document.getElementById('updateForm').reset();
        document.getElementById('updateModal').style.display = 'none';
      })
      .catch(error => {
        console.error('Error updating product:', error);
        alert('Error updating product');
      });
  }

  if (imageFile) {
    convertToBase64(imageFile)
      .then((base64Image) => {
        updatedProductData.imageUrl = base64Image;
        performUpdate(updatedProductData);
      })
      .catch((error) => {
        console.error('Error processing image:', error);
        alert('Error processing image');
      });
  } else {
    performUpdate(updatedProductData);
  }
});

// // Handle Update Product form submission
// document.getElementById('updateForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const productId = document.getElementById('updateProductId').value;
//   const name = document.getElementById('updateTitle').value;
//   const description = document.getElementById('updateDescription').value;
//   const price = document.getElementById('updatePrice').value;
//   const category = document.getElementById('updateCategory').value;
//   const status = document.getElementById('updateAvailability').value;
//   const capacityCottage = document.getElementById('updateCapacityCottage').value;
//   const beverage = document.getElementById('updateBeverage').value; // Updated field
//   const cottage = document.getElementById('updateCottage').value; // Updated field
//   const food1 = document.getElementById('updateFood1').value;
//   const food2 = document.getElementById('updateFood2').value;
//   const food3 = document.getElementById('updateFood3').value;
//   const food4 = document.getElementById('updateFood4').value;
//   const food5 = document.getElementById('updateFood5').value;
//   const food6 = document.getElementById('updateFood6').value; // New field
//   const imageFile = document.getElementById('updateImage').files[0];

//   const updatedProductData = {
//     name,
//     description,
//     price,
//     category,
//     status,
//     capacityCottage,
//     beverage,
//     cottage, // Using the correct field name
//     food1,
//     food2,
//     food3,
//     food4,
//     food5,
//     food6
//   };

//   // Function to update product data in Firebase
//   function performUpdate(data) {
//     firebase.database().ref('products/' + productId).update(data)
//       .then(() => {
//         alert('Product updated successfully!');
//         document.getElementById('updateForm').reset();
//         document.getElementById('updateModal').style.display = 'none';
//       })
//       .catch(error => {
//         console.error('Error updating product:', error);
//         alert('Error updating product');
//       });
//   }

//   if (imageFile) {
//     convertToBase64(imageFile)
//       .then((base64Image) => {
//         updatedProductData.imageUrl = base64Image;
//         performUpdate(updatedProductData);
//       })
//       .catch((error) => {
//         console.error('Error processing image:', error);
//         alert('Error processing image');
//       });
//   } else {
//     performUpdate(updatedProductData);
//   }
// });




  // // Function to handle form submission and upload data to Firebase
  // document.getElementById('announcementForm').addEventListener('submit', function (e) {
  //   e.preventDefault();
  
  //   // Get form values
  //   const name = document.getElementById('announcementTitle').value;
  //   const description = document.getElementById('announcementDescription').value;
  //   const specification = document.getElementById('promoSpecification').value;
  //   const price = document.getElementById('promoPrice').value;
  //   const category = document.getElementById('promoCategory').value;
  //   const status = document.getElementById('promoAvailability').value;
  //   const imageFile = document.getElementById('announcementImage').files[0];
  
  //   // Create product data object
  //   const productData = {
  //     name,
  //     description,
  //     specification,
  //     price,
  //     category,
  //     status
  //     //createdAt: firebase.database.ServerValue.TIMESTAMP // Use server timestamp
  //   };
  
  //   // If an image is uploaded, convert it to Base64
  //   if (imageFile) {
  //     convertToBase64(imageFile).then((base64Image) => {
  //       productData.imageUrl = base64Image; // Add Base64 image to product data
  
  //       // Upload product data to Firebase Realtime Database
  //       const newProductRef = firebase.database().ref('products').push(); // Push to a new unique key
  //       newProductRef.set(productData)
  //         .then(() => {
  //           alert('Product added successfully!');
  //           // Optionally, reset the form after submission
  //           document.getElementById('announcementForm').reset();
  //         })
  //         .catch((error) => {
  //           console.error('Error adding product: ', error);
  //           alert('Error adding product');
  //         });
  //     });
  //   } else {
  //     // If no image, upload only product data
  //     const newProductRef = firebase.database().ref('products').push(); // Push to a new unique key
  //     newProductRef.set(productData)
  //       .then(() => {
  //         alert('Product added successfully!');
  //         // Optionally, reset the form after submission
  //         document.getElementById('announcementForm').reset();
  //       })
  //       .catch((error) => {
  //         console.error('Error adding product: ', error);
  //         alert('Error adding product');
  //       });
  //   }
  // });
  
  // // Function to convert image file to Base64 string
  // function convertToBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onloadend = function () {
  //       resolve(reader.result); // The Base64 result
  //     };
  //     reader.onerror = function (error) {
  //       reject(error);
  //     };
  //     reader.readAsDataURL(file); // Convert the image file to Base64
  //   });
  // }
  
  
  
  // // UPDATE MODAL FUNCTION
  // function attachActionListeners() {
  //   // Open the modal and fetch product data when the pencil icon is clicked
  //   document.querySelectorAll('.update-promo').forEach((button) => {
  //     button.addEventListener('click', (e) => {
  //       const productKey = e.target.getAttribute('data-key');
  
  //       // Fetch product data for the selected key
  //       firebase.database().ref(`products/${productKey}`).once('value', (snapshot) => {
  //         const productData = snapshot.val();
  
  //         // Log product data to check it's being retrieved correctly
  //         console.log('Product Data:', productData);
  
  //         if (productData) {
  //           // Populate form fields with product data for editing
  //           document.getElementById('announcementTitles').value = productData.name;
  //           document.getElementById('announcementDescriptions').value = productData.description || '';
  //           document.getElementById('promoSpecifications').value = productData.specification || '';
  //           document.getElementById('promoPrices').value = productData.price;
  //           document.getElementById('promoCategorys').value = productData.category;
  //           document.getElementById('promoAvailabilitys').value = productData.status;
  
  //           // Open the modal
  //           document.getElementById('editModal').style.display = 'block';
  //           sidebar.classList.add('hide'); // Hide the sidebar when modal is opened
  //         } else {
  //           console.error('Product not found');
  //         }
  
  //         // Close the modal on clicking the close button
  //         document.getElementById('closeModalBtn').addEventListener('click', () => {
  //           document.getElementById('editModal').style.display = 'none';
  //           document.getElementById('announcementForm').reset();  // Reset form if needed
  //         });
  
  //         // Handle form submit to update product
  //         const form = document.getElementById('announcementForms');
  
  //         // Remove any existing event listener to avoid duplication
  //         form.removeEventListener('submit', handleFormSubmit);
  
  //         // Define the event handler function
  //         function handleFormSubmit(e) {
  //           e.preventDefault();
  
  //           const updatedData = {
  //             name: document.getElementById('announcementTitles').value,
  //             description: document.getElementById('announcementDescriptions').value,
  //             specification: document.getElementById('promoSpecifications').value,
  //             price: document.getElementById('promoPrices').value,
  //             category: document.getElementById('promoCategorys').value,
  //             status: document.getElementById('promoAvailabilitys').value,
  //           };
  
  //           // Update the data in Firebase
  //           firebase.database().ref(`products/${productKey}`).update(updatedData)
  //             .then(() => {
  //               alert('Product updated successfully!');
  //               // Reset the form after successful update
  //               form.reset();
  //               // Reload the page after successful update
  //               location.reload();
  //               // Close the modal
  //               document.getElementById('editModal').style.display = 'none';
  //             })
  //             .catch((error) => console.error('Error updating product: ', error));
  //         }
  
  //         // Attach the event listener
  //         form.addEventListener('submit', handleFormSubmit);
  //       });
  //     });
  //   });
  
  //   // Delete button functionality
  //   document.querySelectorAll('.delete-promo').forEach((button) => {
  //     button.addEventListener('click', (e) => {
  //       const productKey = e.target.getAttribute('data-key');
  //       if (confirm('Are you sure you want to delete this product?')) {
  //         firebase.database().ref(`products/${productKey}`).remove()
  //           .then(() => alert('Product deleted successfully!'))
  //           .catch((error) => console.error('Error deleting product: ', error));
  //       }
  //     });
  //   });
  // }

 
  
  
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
  
  
  
  