import { useState } from 'react';
import './Navbar.css';
import iconMenu from '../../assets/icon-menu.svg';
import closeMenu from '../../assets/close-menu.svg';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='nav fixed top-0 left-0 right-0 py-2 px-4 z-10'>
            <div className="nav--logo"><a href='#'>New <strong>B</strong></a></div>
            <div className="mobile-menu cursor-pointer md:hidden" onClick={() => setToggleMenu((prev) => !prev)}>
                <img src={!toggleMenu ? iconMenu : closeMenu} alt="meni icon" className="w-[25px] object-contain" />
            </div>
            <ul className={`nav--menu ml-10 md:flex md:flex-row md:bg-transparent md:relative ${!toggleMenu ? 'hidden' : 'flex flex-col'} items-center bg-gray-800 p-5 rounded-[10px] max-w-[250px] md:max-w-none absolute  top-[50px] left-[50px] md:top-0 md:left-0`}>
                <li className='nav--li'><a href="#">Home</a></li>
                <li className='nav--li'><a href="#">About</a></li>
                <li className='nav--li'><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;