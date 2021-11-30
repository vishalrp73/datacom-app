import './header.css';

import logo from '../img/datacom-logo.svg';
import search_icon from '../img/search-icon.png';

const Header = () => {
    return (
        <div className = 'header-wrapper'>
            <img src = {logo} className = 'dc-logo' />

            <div className = 'menu-wrap'>
                <h5 className = 'menu-text'>Solutions</h5>
                <h5 className = 'menu-text'>Industries</h5>
                <h5 className = 'menu-text'>Discover</h5>
                <h5 className = 'menu-text'>About Us</h5>
                <h5 className = 'menu-text'>Careers</h5>
            </div>

            <div className = 'search-log-wrap'>
                <input type = 'button' className = 'sign-btn'
                    value = 'Sign In' />
                <img src = { search_icon } className = 'search-icon' />
            </div>
        </div>
    )
}

export default Header;