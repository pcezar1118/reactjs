import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Login from './pages/Login';

import Routes from './Routes';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = (u) => {
let newUser = {
  id: u.id,
  name: u.displayName,
  avatar: u.photoURL
}

setUser(newUser)
  
}
    
  if (user === null){
      return(
        <Login onReceiveGoogle={actionLoginDataGoogle} />
      )
    }
  return (
    <BrowserRouter>
    <Header />
 
    <Routes />


    <Footer />
    </BrowserRouter>
  )
}

export default App;
