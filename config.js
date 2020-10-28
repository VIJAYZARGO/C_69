import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBr7oAW7oXLEmvaExHttX6lm2wSoKDVMOU",
  authDomain: "wirless-buzzer-app-feet.firebaseapp.com",
  databaseURL: "https://wirless-buzzer-app-feet.firebaseio.com",
  projectId: "wirless-buzzer-app-feet",
  storageBucket: "wirless-buzzer-app-feet.appspot.com",
  messagingSenderId: "580802927145",
  appId: "1:580802927145:web:4d4e1a69497474fc989a38",
  measurementId: "G-PRVPVD10TS"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();