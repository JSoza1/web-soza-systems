import React, { useRef, useState, useEffect } from 'react';
import './TrustedClients.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import valeriaImg from '../../assets/portfolio/valeria-relax.webp';
import valentinoImg from '../../assets/portfolio/valentino.webp';
import tallerGustavoImg from '../../assets/portfolio/taller-gustavo.webp';
import electricistaDanielImg from '../../assets/portfolio/electricista-daniel.webp';

const clients = [
    {
        id: 1,
        name: 'Valentino',
        description: 'Restaurante & Gastronomía',
        image: valentinoImg,
        link: 'https://valentinoweb.vercel.app/'
    },
    {
        id: 2,
        name: 'Taller Gustavo',
        description: 'Servicio Mecánico Automotriz',
        image: tallerGustavoImg,
        link: 'https://tallergustavo.vercel.app/'
    },
    {
        id: 3,
        name: 'Valeria Relax',
        description: 'Web para Masajista Profesional',
        image: valeriaImg,
        link: 'https://valeriarelax.vercel.app/'
    },
    {
        id: 4,
        name: 'Electricista Daniel',
        description: 'Servicios de Electricidad Profesional',
        image: electricistaDanielImg,
        link: 'https://electricistadaniel.vercel.app/'
    }
];

const TrustedClients = () => {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    useScrollReveal();

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const getScrollAmount = () => {
        if (carouselRef.current && carouselRef.current.children.length > 0) {
            const card = carouselRef.current.children[0];
            const style = window.getComputedStyle(card);
            const marginRight = parseInt(style.marginRight) || 0;
            const gap = 16; // 1rem default gap
            return card.offsetWidth + gap + marginRight;
        }
        return 320; // Fallback
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            const scrollAmount = getScrollAmount();
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const scrollAmount = getScrollAmount();
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="clients" className="trusted-clients-section fade-in-section">
            <div className="container">
                <div className="section-header">
                    <h2>Clientes que <span className="text-gradient">confiaron en nosotros</span></h2>
                    <p className="subtitle">Algunos de nuestros casos de éxito más destacados</p>
                </div>

                <div className="carousel-wrapper">
                    <button
                        className={`nav-arrow left ${!canScrollLeft ? 'disabled' : ''}`}
                        onClick={scrollLeft}
                        aria-label="Anterior"
                        disabled={!canScrollLeft}
                    >
                        &#10094;
                    </button>

                    <div
                        className="carousel-track"
                        ref={carouselRef}
                        onScroll={checkScroll}
                    >
                        {clients.map(client => (
                            <div key={client.id} className="client-card">
                                <div className="card-image">
                                    <img src={client.image} alt={client.name} loading="lazy" />
                                    <div className="overlay">
                                        <a href={client.link} target="_blank" rel="noopener noreferrer" className="visit-btn">Ver Sitio</a>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{client.name}</h3>
                                    <p>{client.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`nav-arrow right ${!canScrollRight ? 'disabled' : ''}`}
                        onClick={scrollRight}
                        aria-label="Siguiente"
                        disabled={!canScrollRight}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrustedClients;
