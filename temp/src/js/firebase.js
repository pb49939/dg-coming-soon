const firebase = require("firebase/app");
require("firebase/database");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGJ3D9A62xmSHfg2C93stxZFQYFzxp-AE",
  authDomain: "delta-gymnastics.firebaseapp.com",
  databaseURL: "https://delta-gymnastics.firebaseio.com",
  projectId: "delta-gymnastics",
  storageBucket: "",
  messagingSenderId: "443287256348",
  appId: "1:443287256348:web:c485ba36d3e564e9"
};

firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();

module.exports = database;
