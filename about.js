const ex =require('./ex');
const client = require('twilio')(ex.ACCOUNT_SID, ex.ACCOUNT_TOKEN, {
   lazyLoading: true
});

// Function to send message to WhatsApp
const aboutMessage = async (senderID) => {
      try {
         await client.messages.create({
            from: `whatsapp:+14155238886`,
            body: 'Hello there, welcome to Email alerts on Whatsapp.\n\n' + 
                  'This is a mini project made by ',
            to: senderID
         });
      } catch (error) {
         console.log(`Error at sendMessage --> ${error}`);
      }
};

module.exports = {
   aboutMessage
};