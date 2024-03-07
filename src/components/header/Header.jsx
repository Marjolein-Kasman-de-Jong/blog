import { NavLink } from 'react-router-dom';
import './header.css';
import headerLogo from '../../assets/logo-medium.png';  

const Header = () => {
    return (
        <>
            <header>
                <span className='header-logo-wrapper'>
                    <img src={headerLogo} alt="Blogventure logo" />
                </span>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink></li>
                        <li><NavLink to="/alle-posts" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Alle posts</NavLink></li>
                        <li><NavLink to="/nieuwe-post-maken" className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Nieuwe post maken</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;