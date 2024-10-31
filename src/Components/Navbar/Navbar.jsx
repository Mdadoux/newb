import './Navbar.css';
const Navbar = () => {
    return (
        <div className='nav fixed top-0 left-0 right-0 py-2 px-4 z-10'>
            <div className="nav--logo"><a href='#'>New <strong>B</strong></a></div>
            <ul className="nav--menu">
                <li className='nav--li'><a href="#">Home</a></li>
                <li className='nav--li'><a href="#">About</a></li>
                <li className='nav--li'><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;