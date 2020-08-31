import React, { useState } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false); // 메뉴 아이콘 클릭 시 아이콘 바뀜. 요게 setState임.
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click); // 햄버거 아이콘 클릭시 reverse해줌. (햄버거 → X)
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        // 화면 크기에 따라 버튼이 보이고 안보이게 하는 기능.
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar
