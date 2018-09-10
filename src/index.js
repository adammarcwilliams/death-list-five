import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
// import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore';

// const config = {
//   apiKey: 'AIzaSyB5nnWrwULhlKSf-rKwA6oQflKmk-T4KEc',
//   authDomain: 'death-list-five.firebaseapp.com',
//   databaseURL: 'https://death-list-five.firebaseio.com',
//   projectId: 'death-list-five',
//   storageBucket: 'death-list-five.appspot.com',
//   messagingSenderId: '94482018234'
// };
firebase.initializeApp({
  apiKey: 'AIzaSyB5nnWrwULhlKSf-rKwA6oQflKmk-T4KEc',
  authDomain: 'death-list-five.firebaseapp.com',
  projectId: 'death-list-five',
});

export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
})


ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();
