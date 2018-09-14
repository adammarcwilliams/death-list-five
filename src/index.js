import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
// import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore';

import './index.css'

firebase.initializeApp({
  apiKey: 'AIzaSyB5nnWrwULhlKSf-rKwA6oQflKmk-T4KEc',
  authDomain: 'death-list-five.firebaseapp.com',
  projectId: 'death-list-five',
});

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
})


ReactDOM.render(
  <App firestore={db} />,
  document.getElementById('root')
)

  // registerServiceWorker();
