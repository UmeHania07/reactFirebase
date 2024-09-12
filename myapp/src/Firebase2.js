import {initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD7jRIN4bEMT6eDLULJ5jU3PnyKJ9zjo4s",
    authDomain: "app2-bf62d.firebaseapp.com",
    projectId: "app2-bf62d",
    storageBucket: "app2-bf62d.appspot.com",
    messagingSenderId: "564398625354",
    appId: "1:564398625354:web:a4d711e9a93b157f360cb3",
    databaseURL: "https://app2-bf62d-default-rtdb.firebaseio.com "
  };

  export const app = initializeApp(firebaseConfig);