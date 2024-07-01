import React from 'react';
import '../Css/Header.css';
function Header() {
    return (
        <header className='header1'>
            <a href='/' className='swiggyLogo'>
                <img src="https://www.cdnlogo.com/logos/s/4/swiggy.svg" height="50px" width="40px" />
            </a>
            <div className='slideBarBtn'>
                <span>Other</span>
                <i className="fa-solid fa-chevron-down" style={{ color: "rgb(253 151 67)" }}></i>
            </div>
            <ul>
                <li>
                    <i className="fa-solid fa-suitcase"></i>
                    <a href=''>Swiggy Corporate</a>
                </li>
                <li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <a href=''>Search</a>
                </li>
                <li>
                    <i className="fa-solid fa-gift"></i>
                    <a>Offers<sup style={{ color: "rgb(253 151 67)", fontWeight: "bold" }}>New</sup></a>
                </li>
                <li>
                    <i className="fa-solid fa-hand-holding-medical"></i>
                    <a href=''>Help</a>
                </li>
                <li>
                    <i className="fa-solid fa-user"></i>
                    <a href=''>Sign In</a>
                </li>
                <li>
                    <i className="fa-solid fa-cart-shopping"><sup style={{ color: "orange", fontWeight: "bold" }}></sup></i>

                    <a href=''>Cart</a>
                </li>

            </ul>
        </header>

    )
}
export default Header;