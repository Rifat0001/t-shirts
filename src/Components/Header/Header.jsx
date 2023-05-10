import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/order">Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/grandpa">Grandpa</Link>
        </nav>
    );
};

export default Header;