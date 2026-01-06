export const packagesData = [
    {
        id: 1,
        name: "Landing Page",
        description: "Ideal para emprendedores y pequeños negocios que quieren presencia digital rápida.",
        price: "150.000",
        features: [
            "Landing Page (1 sola página)",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Hosting gratis (con limite de uso generoso)",
            "Enlace a Redes Sociales",
            "Sin costo de mantenimiento",
            "Entrega en 48hs"
        ],
        highlight: false
    },
    {
        id: 2,
        name: "Sitio Web",
        description: "La opción más popular para profesionales que quieren destacar y vender más.",
        price: "300.000",
        features: [
            "Sitio Web de 3 Paginas EJ: (Inicio, Servicios, Contacto)",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Hosting gratis (con limite de uso generoso)",
            "Dominio profesional",
            "Formulario de Contacto Avanzado",
            "Enlace a Redes Sociales",
            "Optimización SEO",
            "Sin costo de mantenimiento",
            "Entrega en 5 días"
        ],
        highlight: true // Este será el paquete destacado visualmente
    },
    {
        id: 3,
        name: "E-commerce",
        description: "Tu tienda online abierta 24/7. Transforma visitantes en clientes con una experiencia de compra fluida, segura y diseñada para maximizar tus ventas.",
        price: "Consultar",
        features: [
            "Tienda Online con Carrito de Compras",
            "Pasarela de Pagos (Mercado Pago / Stripe)",
            "Panel de Administración de Inventario",
            "Gestión de Pedidos y Clientes",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Hosting y Dominio profesional por un año",
            "Enlace a Redes Sociales",
            "Optimización SEO",
            "Entrega dependiendo de la complejidad"
        ],
        highlight: false
    }
];

export const contactInfo = {
    // Usamos variables de entorno para proteger datos sensibles
    // Si no existen (ej. en desarrollo), usamos valores por defecto
    email: import.meta.env.VITE_CONTACT_EMAIL || "hola@sozasystems.com",
    whatsappLink: import.meta.env.VITE_CONTACT_WHATSAPP_LINK || "https://wa.me/5491112345678"
};
