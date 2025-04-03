const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const accountSid = functions.config().twilio.account_sid;
const authToken = functions.config().twilio.auth_token;
const client = require('twilio')(accountSid, authToken);

// This Cloud Function triggers whenever a new booking is added under /users/{userId}/MyBooking/{bookingId}
exports.sendBookingSms = functions.database
  .ref('/users/{userId}/MyBooking/{bookingId}')
  .onCreate((snapshot, context) => {
    const booking = snapshot.val();
    
    // Extract details (customize these according to your booking data structure)
    const customerName = booking.customerName || "Customer";
    const bookingDate = booking.bookingReview ? booking.bookingReview.bookingDate : "N/A";
    const phoneNumber = booking.phoneNumber || '+639504779614'; // Make sure the booking data has a valid phone number

    // Compose your SMS message
    const messageBody = `Hi ${customerName}, your booking request for ${bookingDate} has been received! We'll keep you updated.`;

    // Send the SMS via Twilio
    return client.messages
      .create({
        body: messageBody,
        from: '+639504779614', // Your Twilio phone number
        to: phoneNumber
      })
      .then(message => {
        console.log("SMS sent with SID:", message.sid);
        return null;
      })
      .catch(error => {
        console.error("Error sending SMS:", error);
        throw new Error("Failed to send SMS");
      });
  });
