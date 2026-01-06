import './GoogleBusiness.css';

const GoogleBusiness = () => {
    return (
        <section className="google-business fade-in-section">
            <div className="google-business-container">
                <div className="gb-content">
                    <span className="gb-label">Bonus Exclusivo - Incluido en Todos los Planes</span>
                    <h2 className="gb-title">
                        Potencia tu Presencia <br />
                        <span className="text-gradient">Local en Google</span>
                    </h2>

                    {/* Imagen SOLO para móvil */}
                    <div className="gb-image-wrapper mobile-only">
                        <img
                            src="/google-maps.png"
                            alt="Google Maps en celular"
                            className="gb-image"
                        />
                    </div>

                    <p className="gb-description">
                        No basta con tener una web increíble si tus clientes locales no te encuentran.
                        Nos encargamos de poner tu negocio en el mapa.
                    </p>

                    <ul className="gb-features">
                        <li>
                            <span className="gb-icon">📍</span>
                            Creación y optimización de Perfil de Negocio en Google
                        </li>
                        <li>
                            <span className="gb-icon">🗺️</span>
                            Aparición destacada en Google Maps
                        </li>
                        <li>
                            <span className="gb-icon">🔗</span>
                            Vinculación directa con tu sitio web
                        </li>
                    </ul>
                </div>

                {/* Imagen SOLO para escritorio */}
                <div className="gb-image-wrapper desktop-only">
                    <img
                        src="/google-maps.png"
                        alt="Google Maps y Perfil de Negocio"
                        className="gb-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default GoogleBusiness;
