import './Testimonials.css';

const testimonials = [
    {
        name: "Daniel Torres",
        role: "Electricista Profesional",
        text: "Antes dependía solo de recomendaciones. Desde que tengo mi web, duplicamos los presupuestos mensuales y generamos mucha más confianza.",
        avatar: "⚡"
    },
    {
        name: "Carla Montero",
        role: "Dueña de Salón de Estética",
        text: "Mis clientas quedaron encantadas con el diseño. Ahora pueden ver mis trabajos en la galería y contactarme directo por WhatsApp.",
        avatar: "💇‍♀️"
    },
    {
        name: "Miguel Ángel Russo",
        role: "Empresario Gastronómico",
        text: "Buscaba algo moderno para mi local de hamburguesas. La web no solo se ve increíble, sino que es súper rápida para ver el menú.",
        avatar: "🍔"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials fade-in-section">
            <div className="container">
                <div className="section-header">
                    <h2>Clientes <span className="text-secondary-gradient">Satisfechos</span></h2>
                    <p>Historias reales de negocios que transformaron su presencia digital.</p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">{t.avatar}</div>
                                <div>
                                    <h4>{t.name}</h4>
                                    <span className="testimonial-role">{t.role}</span>
                                </div>
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
