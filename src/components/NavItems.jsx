import React from 'react'
import "./NavItems.css";
import { Link } from 'react-router-dom';

const NavItems = ({nav,idx ,style}) => {
  return (
    <Link to={`/${nav.name}`}>
        <li key={idx} className='navItems-li nav-link text-light' aria-current="page">{nav.name}</li>
    </Link>
    
  )
}

export default NavItems