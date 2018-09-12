import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux';
import './index.css'
import App from './containers/AppContainer'
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


ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'))

  // registerServiceWorker();
