import React from 'react'
import "./NavItems.css";
import { Link } from 'react-router-dom';

const NavItems = ({nav,idx}) => {
  return (
    <Link to={`/${nav.name}`}>
        <li key={idx} className='navItems-li nav-link' >{nav.name}</li>
    </Link>
    
  )
}

export default NavItems