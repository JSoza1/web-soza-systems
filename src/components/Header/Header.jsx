import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <span className="logo-neon">Soza</span> Systems
                </div>

                <button className="header__toggle" onClick={toggleMenu}>
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`header__nav ${menuOpen ? 'is-active' : ''}`}>
                    <ul className="header__list">
                        <li><a href="#hero" onClick={closeMenu}>Inicio</a></li>
                        <li><a href="#pricing" onClick={closeMenu}>Paquetes</a></li>
                        <li><a href="#bonus" onClick={closeMenu}>Bonus</a></li>
                        <li><a href="#clients" onClick={closeMenu}>Clientes</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
