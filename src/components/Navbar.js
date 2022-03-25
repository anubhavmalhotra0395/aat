import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    return (
        <div className='container'>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/'>AAT</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>About</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Work</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;