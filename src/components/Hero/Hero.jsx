import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero fade-in-section">
            <div className="container hero__container">
                <h1 className="hero__title">
                    Forjamos tu <span className="text-gradient">Presencia Digital</span>
                </h1>
                <p className="hero__subtitle">
                    Estrategia, Diseño y Desarrollo Web. Creamos sitios rápidos, modernos y optimizados para escalar tu negocio.
                </p>
                <div className="hero__actions">
                    <a href="#pricing" className="btn btn--primary">Ver Planes</a>
                    <a href="#contact" className="btn btn--secondary">Contactar</a>
                </div>
            </div>
            {/* Fondo de gradiente decorativo */}
            <div className="hero__glow"></div>
        </section>
    );
};

export default Hero;
