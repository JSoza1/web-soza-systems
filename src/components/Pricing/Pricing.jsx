import './Pricing.css';

const Pricing = ({ packages }) => {
    return (
        <section id="pricing" className="pricing fade-in-section">
            <div className="container">
                <div className="section-header">
                    <h2>Nuestros <span className="text-gradient">Paquetes</span></h2>
                    <p>Elige el paquete que tu negocio necesita</p>
                </div>

                <div className="pricing__grid">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`pricing-card ${pkg.highlight ? 'pricing-card--featured' : ''}`}
                        >
                            <h3 className="pricing-card__title">{pkg.name}</h3>
                            <div className="pricing-card__price">
                                <span className="currency">$</span>{pkg.price}
                            </div>
                            <p className="pricing-card__desc">{pkg.description}</p>

                            <ul className="pricing-card__features">
                                {pkg.features.map((feature, index) => (
                                    <li key={index}>
                                        <span className="check-icon">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`btn ${pkg.highlight ? 'btn--primary' : 'btn--secondary'} btn--full`}>
                                Seleccionar
                            </a>
                        </div>
                    ))}
                </div>

                <p className="pricing__footer-note">
                    * Revisiones adicionales tienen recargo de 10.000 ARS
                </p>
            </div>
        </section>
    );
};

export default Pricing;
