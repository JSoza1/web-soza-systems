import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <p>&copy; {new Date().getFullYear()} <span className="logo-neon">Soza</span> Systems. Todos los derechos reservados.</p>
                <div className="footer__links">
                    <a href="#hero">Inicio</a>
                    <a href="#pricing">Paquetes</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
