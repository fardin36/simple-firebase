import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='nav-links'>
            <Link to={'/'}>HOME</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Header;