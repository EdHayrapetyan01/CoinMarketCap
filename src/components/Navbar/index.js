import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm' style={{ background: 'black' }}>
      <Link className='nav-link' to='/' style={{ marginLeft: 100 }}>
        Home
      </Link>
      <div className='container'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/cryptocurrencies'>
                  Cryptocurrencies
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
