import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>My website</h2>
            <nav>
                {/* <a href="/">Home</a> */}
                {/* here we use link for don't show the refresh  */}
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
                <Link to="/components">Components</Link>
                
            </nav>


        </div>
    );
};

export default Header;