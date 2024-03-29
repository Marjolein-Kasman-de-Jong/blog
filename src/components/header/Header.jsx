// Data
import navItems from '../../constants/navItems';

// Components
import NavItem from '../nav-item/NavItem';

// Images
import headerLogo from '../../assets/logo-medium.png';

// Style
import './header.css';

const Header = () => {
    return (
        <header>
            {/* Logo */}
            <span className='header-logo-wrapper'>
                <img src={headerLogo} alt="Blogventure logo" />
            </span>
            {/* Menu */}
            <nav>
                <ul>
                    {
                        navItems.map((navItem) => {
                            return <NavItem key={navItem.text} path={navItem.path} text={navItem.text} />;
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;