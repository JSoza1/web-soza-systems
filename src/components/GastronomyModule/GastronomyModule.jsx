import './GastronomyModule.css';

const GastronomyModule = () => {
    return (
        <section id="bonus" className="gastronomy-module fade-in-section">
            <div className="gastronomy-container">
                <div className="gm-content">
                    <span className="gm-label">Bonus Exclusivo</span>
                    <h2 className="gm-title">
                        ¡Atención <span className="text-gradient">Rubro Gastronómico!</span>
                    </h2>

                    {/* Imagen SOLO para móvil */}
                    <div className="gm-image-wrapper mobile-only">
                        <div className="gm-mockup">
                            <div className="qr-container">
                                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100" height="100" fill="white" rx="10" />
                                    <rect x="15" y="15" width="25" height="25" fill="black" />
                                    <rect x="20" y="20" width="15" height="15" fill="white" />
                                    <rect x="23" y="23" width="9" height="9" fill="black" />

                                    <rect x="60" y="15" width="25" height="25" fill="black" />
                                    <rect x="65" y="20" width="15" height="15" fill="white" />
                                    <rect x="68" y="23" width="9" height="9" fill="black" />

                                    <rect x="15" y="60" width="25" height="25" fill="black" />
                                    <rect x="20" y="65" width="15" height="15" fill="white" />
                                    <rect x="23" y="68" width="9" height="9" fill="black" />

                                    <rect x="60" y="60" width="10" height="10" fill="black" />
                                    <rect x="75" y="60" width="10" height="10" fill="black" />
                                    <rect x="60" y="75" width="10" height="10" fill="black" />
                                    <rect x="75" y="75" width="10" height="10" fill="black" />
                                    <rect x="68" y="68" width="9" height="9" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <p className="gm-description">
                        Si tenés un restaurante, bar o cafetería, sabemos que los precios cambian. Por eso incluimos un panel de administración autogestionable para que actualices tu menú en tiempo real y te damos un código QR con acceso directo a tu carta digital, ideal para colocar en las mesas.
                    </p>

                    <ul className="gm-features">
                        <li>
                            <span className="gm-icon">🍔</span>
                            Carta digital siempre actualizada
                        </li>
                        <li>
                            <span className="gm-icon">📱</span>
                            Código QR personalizado para tus mesas
                        </li>
                        <li>
                            <span className="gm-icon">⚙️</span>
                            Panel fácil para cambiar precios o platos al instante
                        </li>
                    </ul>
                </div>

                {/* Imagen SOLO para escritorio */}
                <div className="gm-image-wrapper desktop-only">
                    <div className="gm-mockup">
                        <div className="qr-container">
                            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="white" rx="10" />
                                <rect x="15" y="15" width="25" height="25" fill="black" />
                                <rect x="20" y="20" width="15" height="15" fill="white" />
                                <rect x="23" y="23" width="9" height="9" fill="black" />

                                <rect x="60" y="15" width="25" height="25" fill="black" />
                                <rect x="65" y="20" width="15" height="15" fill="white" />
                                <rect x="68" y="23" width="9" height="9" fill="black" />

                                <rect x="15" y="60" width="25" height="25" fill="black" />
                                <rect x="20" y="65" width="15" height="15" fill="white" />
                                <rect x="23" y="68" width="9" height="9" fill="black" />

                                <rect x="60" y="60" width="10" height="10" fill="black" />
                                <rect x="75" y="60" width="10" height="10" fill="black" />
                                <rect x="60" y="75" width="10" height="10" fill="black" />
                                <rect x="75" y="75" width="10" height="10" fill="black" />
                                <rect x="68" y="68" width="9" height="9" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GastronomyModule;
