import { NavLink } from 'react-router-dom';

// Style
import './nav-item.css';

const NavItem = ({ path, text }) => {
    return (
        <li>
            <NavLink to={path} className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>
                {text}
            </NavLink>
        </li>
    );
}

export default NavItem;