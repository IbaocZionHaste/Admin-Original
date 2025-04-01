
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
  
  
  // Open modal when plus icon is clicked
  document.querySelector('.btn-plus').addEventListener('click', function () {
    document.getElementById('addModal').style.display = 'block';
  });
  
  
  // Close modal when clicking the close button
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('addModal').style.display = 'none';
  });
  
  // Optional: close modal when clicking outside the modal content
  window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('addModal')) {
      document.getElementById('addModal').style.display = 'none';
    }
  });
  


  
  
  // Remove the category retrieval and validation
  // const categorySelect = document.getElementById('categorySelect');
  const productNameInput = document.getElementById('productName');
  const imageBoxes = document.querySelectorAll('.image-box');
  
  // Variables to store each photo's Base64 string separately
  let photo1 = "";
  let photo2 = "";
  let photo3 = "";
  
  // A helper function to add image selection & preview logic
  function addImageListener(box, setPhoto) {
    box.addEventListener('click', function () {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      document.body.appendChild(fileInput);
  
      fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = function () {
            // Update the preview image
            box.querySelector('img').src = reader.result;
            // Save the Base64 data using the provided setter function
            setPhoto(reader.result);
            // Remove the file input from the DOM
            document.body.removeChild(fileInput);
          }
          reader.readAsDataURL(file);
        } else {
          document.body.removeChild(fileInput);
        }
      });
      // Open file picker
      fileInput.click();
    });
  }
  
  // Attach separate listeners for each image box
  addImageListener(imageBoxes[0], function (data) { photo1 = data; });
  addImageListener(imageBoxes[1], function (data) { photo2 = data; });
  addImageListener(imageBoxes[2], function (data) { photo3 = data; });
  
  // Get DOM element for Add button
  const addProductBtn = document.getElementById('addProduct');
  
  // When Add button is clicked, push data to Firebase Realtime Database
  addProductBtn.addEventListener('click', function () {
    // Only retrieve productName now
    const productName = productNameInput.value.trim();
  
    if (!productName) {
      alert('Please fill in the product name.');
      return;
    }
  
    // Check if all three images are provided
    if (!photo1 || !photo2 || !photo3) {
      alert('Please upload all three images.');
      return;
    }
  
  
    // Construct the album data object WITHOUT category
    const albumData = {
      productName: productName,
      photo1: photo1,  // Data for first image
      photo2: photo2,  // Data for second image
      photo3: photo3,  // Data for third image
      createdAt: new Date().toISOString()
    };
  
    // Push the albumData to "promoalbum" node in Realtime Database
    database.ref('promoalbum').push(albumData)
      .then(() => {
        alert('Album added successfully!');
        // Reset the form fields and image previews
        productNameInput.value = '';
        imageBoxes.forEach((box, idx) => {
          box.querySelector('img').src = `photo${idx + 1}.jpg`;
        });
        photo1 = photo2 = photo3 = "";
        fetchProducts(populateGallery);
      })
      .catch((error) => {
        console.error('Error adding album:', error);
        alert('There was an error adding the album. Please try again.');
      });
  });
  
  
  
  // ------------------ Fetch Products from Firebase ------------------
  function fetchProducts(callback) {
    firebase.database().ref('promoalbum').on('value', function (snapshot) {
      let products = [];
      snapshot.forEach(function (childSnapshot) {
        let product = childSnapshot.val();
        product.id = childSnapshot.key;
        products.push(product);
      });
      callback(products);
    }, function (error) {
      console.error("Error fetching products:", error);
    });
  }
  
  // ------------------ Populate Gallery Function ------------------
  function populateGallery(products) {
    var galleryContainer = document.getElementById("galleryContainer");
    galleryContainer.innerHTML = "";
    products.forEach(function (product) {
      var a = document.createElement("a");
      a.href = "javascript:void(0);";
      a.className = "image"; // Removed category reference
      a.onclick = function () { openModal(product); };
  
      var img = document.createElement("img");
      // Use photo1 directly for the gallery image; fallback to placeholder if needed.
      if (product.photo1 && product.photo1.trim() !== "") {
        img.src = product.photo1;
      } else if (product.imageUrl && product.imageUrl.trim() !== "") {
        img.src = product.imageUrl;
      } else {
        img.src = "https://via.placeholder.com/300x200?text=No+Image";
      }
      img.alt = product.productName || "Album Image";
      a.appendChild(img);
  
      // Add album name overlay at center
      var nameOverlay = document.createElement("div");
      nameOverlay.className = "view-name";
      nameOverlay.textContent = product.productName || "";
      a.appendChild(nameOverlay);
  
      // Existing view button overlay
      var viewDiv = document.createElement("div");
      viewDiv.className = "view-item";
      //   var viewBtn = document.createElement("button");
      //   viewBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
      //   viewBtn.textContent = "View";
      //   viewDiv.appendChild(viewBtn);
      a.appendChild(viewDiv);
  
      galleryContainer.appendChild(a);
    });
  }
  
  // ------------------ Update Modal Related Code (Category Removed) ------------------
  let currentProduct = null;
  let updatePhoto1 = "", updatePhoto2 = "", updatePhoto3 = "";
  
  function openUpdateModal(product) {
    currentProduct = product;
    document.getElementById('updateProductName').value = product.productName || "";
    document.getElementById('updateBox1').querySelector('img').src = product.photo1 || 'photo1.jpg';
    document.getElementById('updateBox2').querySelector('img').src = product.photo2 || 'photo2.jpg';
    document.getElementById('updateBox3').querySelector('img').src = product.photo3 || 'photo3.jpg';
    updatePhoto1 = product.photo1 || "";
    updatePhoto2 = product.photo2 || "";
    updatePhoto3 = product.photo3 || "";
    document.getElementById('updateModal').style.display = 'block';
  }
  
  document.getElementById('updateModalClose').addEventListener('click', function () {
    document.getElementById('updateModal').style.display = 'none';
  });
  
  function addUpdateImageListener(box, setPhoto) {
    box.addEventListener('click', function () {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      document.body.appendChild(fileInput);
  
      fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = function () {
            box.querySelector('img').src = reader.result;
            setPhoto(reader.result);
            document.body.removeChild(fileInput);
          };
          reader.readAsDataURL(file);
        } else {
          document.body.removeChild(fileInput);
        }
      });
  
      fileInput.click();
    });
  }
  
  addUpdateImageListener(document.getElementById('updateBox1'), function (data) { updatePhoto1 = data; });
  addUpdateImageListener(document.getElementById('updateBox2'), function (data) { updatePhoto2 = data; });
  addUpdateImageListener(document.getElementById('updateBox3'), function (data) { updatePhoto3 = data; });
  
  document.getElementById('updateProductBtn').addEventListener('click', function () {
    if (!currentProduct) return;
    const updatedName = document.getElementById('updateProductName').value.trim();
    if (!updatedName) {
      alert("Please fill in the product name.");
      return;
    }
    // Construct updatedData without the category field
    const updatedData = {
      productName: updatedName,
      photo1: updatePhoto1,
      photo2: updatePhoto2,
      photo3: updatePhoto3,
      updatedAt: new Date().toISOString()
    };
    firebase.database().ref('promoalbum/' + currentProduct.id).update(updatedData)
      .then(function () {
        alert("Album updated successfully!");
        document.getElementById('updateModal').style.display = 'none';
        // Refresh the gallery after update
        fetchProducts(populateGallery);
      })
      .catch(function (error) {
        console.error("Error updating album:", error);
        alert("Error updating album. Please try again.");
      });
  });
  
  document.getElementById('deleteProductBtn').addEventListener('click', function () {
    if (!currentProduct) return;
    // Confirm deletion
    if (confirm("Are you sure you want to delete this album?")) {
      firebase.database().ref('promoalbum/' + currentProduct.id).remove()
        .then(function () {
          alert("Album deleted successfully!");
          document.getElementById('updateModal').style.display = 'none';
          // Optionally refresh your gallery after deletion
          fetchProducts(populateGallery);
        })
        .catch(function (error) {
          console.error("Error deleting album:", error);
          alert("Error deleting album. Please try again.");
        });
    }
  });
  
  
  // ------------------ Alias openModal to openUpdateModal ------------------
  openModal = openUpdateModal;
  
  // ------------------ Populate the Gallery on Page Load ------------------
  document.addEventListener("DOMContentLoaded", function () {
    fetchProducts(populateGallery);
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("galleryContainer");
    // Using CSS Grid, set to 4 columns
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(4, 1fr)";
    container.style.gap = "1rem";
    container.style.padding = "1rem";
  });
  