import './WhyUs.css';

const features = [
    {
        icon: "🚀",
        title: "Velocidad Extrema",
        description: "No solo diseñamos bonito. Optimizamos cada línea de código para que tu web cargue en milisegundos."
    },
    {
        icon: "🎨",
        title: "Diseño Estratégico",
        description: "Estética moderna y profesional que atrapa, pensada psicológicamente para convertir visitas en ventas."
    },
    {
        icon: "📱",
        title: "100% Responsivo",
        description: "Tu sitio se verá perfecto en cualquier dispositivo. Desde un iPhone hasta una pantalla 4K."
    }
];

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us fade-in-section">
            <div className="container">
                <div className="section-header">
                    <h2>¿Por qué <span className="text-gradient">Soza Systems?</span></h2>
                    <p>No somos otra agencia más. Somos tu socio tecnológico.</p>
                </div>

                <div className="why-us__grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
