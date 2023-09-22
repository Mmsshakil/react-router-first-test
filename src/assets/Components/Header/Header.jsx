import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>My website</h2>
            <nav>
                {/* <a href="/">Home</a> */}
                {/* here we use link for don't show the refresh  */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/users">Users</NavLink>
                
            </nav>
            
        </div>
    );
};

export default Header;