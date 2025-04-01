
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




  // Utility function to display status messages
  function updateMessage(text, duration = 3000) {
    let messageEl = document.getElementById("message");
    if (!messageEl) {
      messageEl = document.createElement("div");
      messageEl.id = "message";
      messageEl.style.position = "fixed";
      messageEl.style.bottom = "20px";
      messageEl.style.right = "20px";
      messageEl.style.background = "rgba(0,0,0,0.7)";
      messageEl.style.color = "#fff";
      messageEl.style.padding = "10px 15px";
      messageEl.style.borderRadius = "4px";
      messageEl.style.zIndex = 1000;
      document.body.appendChild(messageEl);
    }
    messageEl.textContent = text;
    messageEl.style.display = "block";
    setTimeout(() => {
      messageEl.style.display = "none";
    }, duration);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const imageBoxes = document.querySelectorAll(".image-box");
    const saveBtn = document.querySelector(".btn-plus");

    // Create a hidden file input for image selection
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    // Track the clicked image box index
    let currentIndex = null;

    // Save images to Firebase Database as: Pages/image/photo1, photo2, photo3
    function saveImagesData() {
      const images = {};
      imageBoxes.forEach((box, index) => {
        // Build keys like "photo1", "photo2", etc.
        const photoKey = "photo" + (index + 1);
        images[photoKey] = box.querySelector("img").src;
      });
      database.ref("Pages/image")
        .set(images)
        .then(function () {
          console.log("Data saved successfully!");
          updateMessage("Images saved and updated successfully!");
          // Optionally refresh the UI with the latest data
          fetchImagesData();
        })
        .catch(function (error) {
          console.error("Error saving data: ", error);
          updateMessage("Error saving data: " + error.message, 5000);
        });
    }

    // Fetch and update the UI from Firebase Database
    function fetchImagesData() {
      database.ref("Pages/image")
        .once("value")
        .then(function (snapshot) {
          const imagesData = snapshot.val();
          if (imagesData) {
            imageBoxes.forEach((box, index) => {
              const photoKey = "photo" + (index + 1);
              if (imagesData[photoKey]) {
                box.querySelector("img").src = imagesData[photoKey];
              }
            });
            updateMessage("Images fetched successfully!");
          }
        })
        .catch(function (error) {
          console.error("Error fetching data: ", error);
          updateMessage("Error fetching data: " + error.message, 5000);
        });
    }

    // Listen for file selection changes and convert file to base64
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file && currentIndex !== null) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const base64String = e.target.result;
          imageBoxes[currentIndex].querySelector("img").src = base64String;
          // Save updated data to Firebase
          saveImagesData();
          // Reset
          currentIndex = null;
          fileInput.value = "";
        };
        reader.readAsDataURL(file);
      }
    });

    // Trigger file picker when an image box is clicked
    imageBoxes.forEach((box, index) => {
      box.addEventListener("click", function () {
        currentIndex = index;
        fileInput.click();
      });
    });

    // Save button also triggers saving of the images
    saveBtn.addEventListener("click", function () {
      saveImagesData();
    });

    // Fetch saved images on initial load
    fetchImagesData();
  });

  