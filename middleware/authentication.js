const admin = require("firebase-admin");

admin.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_APP_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
});

const auth = async (req, res, next) => {
    const idToken = req.headers.authorization;
    try {
        if (idToken) {
            const decodedIdToken = await admin.auth().verifyIdToken(idToken);
            req.user = decodedIdToken;
            return next();
        } else {
            res.status(401).json({
                message: "Log in and provide token to view this content."
              });
        }
    } catch (err) {
        console.log("authentication error", err)
        res.status(500).json({message: "There was an error authenticating your account."})
    }
  };

  module.exports = {
      auth,
  }