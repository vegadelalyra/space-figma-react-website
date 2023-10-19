import React from 'react'
import Logo from '/assets/logo.svg'
import BurgerIcon from '/assets/burgerIcon.svg'
import closeIcon from '/assets/closeIcon.svg'
import { Link } from 'react-router-dom'

function Nav() {
    const [open, setOpen] = React.useState(false)

    return (
        <header>
            <nav className={`nav ${open ? 'show' : ''}`}>
                <div className='logo'>
                    <img
                        src={Logo}
                        alt='logo'
                    />
                </div>
                <ul>
                    <li className='active'>
                        <Link to='/'>00 Home</Link>
                    </li>
                    <li>
                        <Link to='/destination'>01 Destination</Link>
                    </li>
                    <li>
                        <Link to='/crew'>02 Crew</Link>
                    </li>
                    <li>
                        <Link to='/technology'>03 Technology</Link>
                    </li>
                </ul>
                <div
                    onClick={() => setOpen(!open)}
                    className='burger'>
                    {open === false ? (
                        <img
                            src={BurgerIcon}
                            alt=''
                        />
                    ) : (
                        <img
                            src={closeIcon}
                            alt=''
                        />
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Nav
