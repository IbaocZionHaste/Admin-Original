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
 



//SUBMIT MODAL
document.getElementById('announcementForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values from the create product modal
  const name = document.getElementById('announcementTitle').value;
  const description = document.getElementById('announcementDescription').value;
  const price = document.getElementById('promoPrice').value;
  const category = document.getElementById('promoCategory').value;
  const status = document.getElementById('promoAvailability').value;
  const capacityCottage = document.getElementById('promoCapacityCottage').value;
  const beverage = document.getElementById('promoBeverage').value; 
  const cottage = document.getElementById('cottage').value; 
  const food1 = document.getElementById('food1').value;
  const food2 = document.getElementById('food2').value;
  const food3 = document.getElementById('food3').value;
  const food4 = document.getElementById('food4').value;
  const food5 = document.getElementById('food5').value;
  const food6 = document.getElementById('food6').value; 

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

  pushProductData(productData);
});




//UPDATE MODAL
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
        document.getElementById('updateBeverage').value = productData.beverage || '';
        document.getElementById('updateCottage').value = productData.cottage || '';
        document.getElementById('updateFood1').value = productData.food1 || '';
        document.getElementById('updateFood2').value = productData.food2 || '';
        document.getElementById('updateFood3').value = productData.food3 || '';
        document.getElementById('updateFood4').value = productData.food4 || '';
        document.getElementById('updateFood5').value = productData.food5 || '';
        document.getElementById('updateFood6').value = productData.food6 || '';

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
  const beverage = document.getElementById('updateBeverage').value; 
  const cottage = document.getElementById('updateCottage').value; 
  const food1 = document.getElementById('updateFood1').value;
  const food2 = document.getElementById('updateFood2').value;
  const food3 = document.getElementById('updateFood3').value;
  const food4 = document.getElementById('updateFood4').value;
  const food5 = document.getElementById('updateFood5').value;
  const food6 = document.getElementById('updateFood6').value;
  

  const updatedProductData = {
    name,
    description,
    price,
    category,
    status,
    capacityCottage,
    beverage,
    cottage,
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

  performUpdate(updatedProductData);
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
  
  
  
  