import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import * as firebase from 'firebase/app'; 
import 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyAYPBBR3s_DSxOevl-KXtdFVNzP-doE6uQ",
  authDomain: "gallery-app-9b0cf.firebaseapp.com",
  projectId: "gallery-app-9b0cf",
  storageBucket: "gallery-app-9b0cf.appspot.com",
  messagingSenderId: "993789301191",
  appId: "1:993789301191:web:06835380553b2f11dfc9e2",
  measurementId: "G-KHWPR8R742"
};


firebase.initializeApp(firebaseConfig);


window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

