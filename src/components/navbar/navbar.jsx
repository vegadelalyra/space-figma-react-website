import React from 'react'
import logo from './assets/logo.svg'
import hamburger from './assets/hamburger.svg'
import './navbar.sass'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img
                className='logo'
                src={logo}
                alt='Space Logo'
            />
            <img
                className='burger'
                src={hamburger}
                alt='Burger Menu'
            />
        </div>
    )
}

export default Navbar
