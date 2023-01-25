import React from 'react';
import './Header.css';
import { Link, useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
   const navigate = useNavigate();
   return (
      <header className='header'>
         <nav className='breadcrumbs'>
            <Link to='/vindecoder' className='breadcrumbs__item'>
               VINDECODER
            </Link>
            <Link to='/vindecoder/variables' className='breadcrumbs__item'>
               Variables
            </Link>
            <a onClick={() => navigate(-1)} className='breadcrumbs__item'>
               Back
            </a>
         </nav>
      </header>
   );
};

export default Header;
