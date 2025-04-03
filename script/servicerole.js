
var admin = require("firebase-admin");
// Make sure to provide the correct path to your serviceAccountKey.json
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://resort-admin-b8411-default-rtdb.firebaseio.com"
});

// Set custom claims for a user (admin in this case)
const setAdminRole = (uid) => {
  return admin.auth().setCustomUserClaims(uid, { admin: true })
    .then(() => {
      console.log('Custom claim set for user', uid);
    })
    .catch((error) => {
      console.error('Error setting custom claims', error);
    });
};

// Call the function with the UID of the user you want to make admin
setAdminRole('lw0lKhBUyoTpzzXydjKFxip5VZ82')  // Replace with the actual UID of the user
  .then(() => {
    console.log("Admin role successfully set.");
  })
  .catch((error) => {
    console.error("Failed to set admin role:", error);
  });

