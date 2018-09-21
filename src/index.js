import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
// import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

import './index.css'

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
})


ReactDOM.render(
  <App firestore={db} />,
  document.getElementById('root')
)

  // registerServiceWorker();
