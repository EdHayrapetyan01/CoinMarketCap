import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Cryptocurrencies from './components/Cryptocurrencies';
import CurrentCrypto from './components/CurrentCrypto'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/cryptocurrencies' component={Cryptocurrencies} />
        <Route exact path='/current-crypto' component={CurrentCrypto} />
      </Router>
    </>
  );
}
