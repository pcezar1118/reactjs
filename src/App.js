import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { firebaseapp, firebaseauth, firebasefirestore} from 'firebase/app';



import Header from './Components/Header';
import Footer from './Components/Footer';

import Login from './pages/Login';

import Routes from './Routes';

import './App.css';



 const firebase = () => {
  
  let firebaseapp = firebase/app;
  let firebaseauth = firebase-auth;
  let firebasefirestore = firebase-firestore;
  return firebaseapp, firebaseauth, firebasefirestore;

};
   
//export default {firebase, firebaseApp, firebaseAuth, firebaseFirestore};




function App() {

  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
let newUser = {
  id: u.uid,
  name: u.displayName,
  avatar: u.photoURL
}

setUser(newUser);
  
}
    
  if (user === null){
      return(
        <Login onReceiveGoogle={actionLoginDataGoogle} />
      )
    }
  return (
    <BrowserRouter>
    <Header user={user} />
 
    <Routes />


    <Footer />
    </BrowserRouter>
  )
}

export default {App, firebase, firebaseapp, firebaseauth, firebasefirestore};
