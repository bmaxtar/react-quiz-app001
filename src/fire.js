import firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyDzuEFvWMWiAV_JoS3CwooZRT-6FxnqMvg",
   authDomain: "react-quiz-app-457e5.firebaseapp.com",
   databaseURL: "https://react-quiz-app-457e5.firebaseio.com",
   projectId: "react-quiz-app-457e5",
   storageBucket: "react-quiz-app-457e5.appspot.com",
   messagingSenderId: "147744360829",
   appId: "1:147744360829:web:dead09323fc95e7d80e414"
 };
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
