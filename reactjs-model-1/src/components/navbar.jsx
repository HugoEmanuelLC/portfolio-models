import { NavLink } from 'react-router-dom';

export default function Navbar({navBar, openAndCloseNavBar, closeNavbar}) {

    return (
        <nav className='close_nav' ref={navBar}>
            <div className="container">
                <div className='burger_close' onClick={openAndCloseNavBar}><i className='bx bx-exit-fullscreen'></i></div>
                <ul>
                <li><NavLink onClick={closeNavbar} to={"/"}>Accueil</NavLink></li>
                <li><NavLink onClick={closeNavbar} to={"menus"}>Menus</NavLink></li>
                <li><a onClick={closeNavbar} href="#horaires">Horaires</a></li>
                <li><a onClick={closeNavbar} href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}