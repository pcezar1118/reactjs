import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Routes from './Routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
 
    <Routes />


    <Footer />
    </BrowserRouter>
  )
}

export default App;
