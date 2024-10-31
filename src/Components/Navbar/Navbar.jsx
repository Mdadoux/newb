import './Navbar.css';
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav--logo"><a href='#'>New <strong>B</strong></a></div>
            <ul className="nav--menu">
                <li className='nav--li'><a href="#">Home</a></li>
                <li className='nav--li'><a href="#">About</a></li>
                <li className='nav--li'><a href="#">Shop</a></li>
            </ul>
        </div>
    );
};

export default Navbar;