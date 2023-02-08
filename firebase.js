// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyx5uiyfjIp8btZdvXFqEu-ABcKO5FPsU",
  authDomain: "phoenix-app-2539c.firebaseapp.com",
  projectId: "phoenix-app-2539c",
  storageBucket: "phoenix-app-2539c.appspot.com",
  messagingSenderId: "23383407333",
  appId: "1:23383407333:web:c412a3f5a5f699591db20c",
  measurementId: "G-NXGNT72CQ4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const analytics = getAnalytics(app);