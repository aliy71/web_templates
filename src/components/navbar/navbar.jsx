import { NavLink } from 'react-router-dom';
import './navbar.module.css'
import { Logo } from '../../constants';

const Navbar = () => {
    return (
        <nav>
            <div className="container d__flex j__content">
                <Logo />
                <ul className='d__flex'>
                    <li>
                        <NavLink to={'/'} className={'active'} >home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/template'} >template</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} >about</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;