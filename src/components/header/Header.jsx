import NavItem from '../nav-item/NavItem';
import navItems from '../../constants/navItems';
import headerLogo from '../../assets/logo-medium.png';
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