import { initializeApp } from "firebase/app";

/**
 * Firebase app is initialized here.
 *
 */

// Set configuration data to Firebase
// All the data used here stored in the `next.config.js` file.
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

export default app;
