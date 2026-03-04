export const packagesData = [
    {
        id: 1,
        name: "Landing Page",
        description: "Web de una sola página para tener presencia digital rápida y sin costos mensuales.",
        price: "50.000",
        features: [
            "Landing Page (1 sola página)",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Enlace a Redes Sociales",
            "Hosting gratis",
            "Subdominio gratuito",
            "Sin costo de mantenimiento",
            "Sin costo de renovación anual",
            "Maximo 3 revisiones antes de entrega final**",
            "Entrega en 72hs"
        ],
        highlight: false
    },
    {
        id: 2,
        name: "Sitio Web",
        description: "Sitio web con varias secciones para detallar tus servicios, sin costos mensuales.",
        price: "100.000",
        features: [
            "Sitio Web de 3 Paginas EJ: (Inicio, Servicios, Contacto)",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Enlace a Redes Sociales",
            "Hosting gratis",
            "Subdominio gratuito",
            "Sin costo de mantenimiento",
            "Sin costo de renovación anual",
            "Maximo 5 revisiones antes de entrega final**",
            "Entrega en 5 días"
        ],
        highlight: true // Este será el paquete destacado visualmente
    },
    {
        id: 3,
        name: "Sitio Web",
        description: "Sitio web con varias secciones, dominio profesional y optimización SEO para Google.",
        price: "150.000*",
        features: [
            "Sitio Web de 3 Paginas EJ: (Inicio, Servicios, Contacto)",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Enlace a Redes Sociales",
            "Hosting gratis",
            "Dominio profesional*",
            "Optimización SEO",
            "Sin costo de mantenimiento",
            "Maximo 6 revisiones antes de entrega final**",
            "Entrega en 7 días"
        ],
        highlight: false
    },
    {
        id: 4,
        name: "E-commerce",
        description: "Negocio digital con carrito de compras, pagos integrados y panel de administración.",
        price: "Consultar",
        features: [
            "Sitio Web de 3 Paginas EJ: (Inicio, Tienda, Contacto)",
            "Carrito de Compras",
            "Pasarela de Pagos (Mercado Pago)",
            "Panel de Administración de Inventario",
            "Diseño Responsivo (Móvil/PC)",
            "Botón de WhatsApp",
            "Enlace a Redes Sociales",
            "Hosting privado",
            "Dominio profesional*",
            "Optimización SEO",
            "Maximo 7 revisiones antes de entrega final**",
            "Entrega dependiendo de la complejidad"
        ],
        highlight: false
    }
];

export const contactInfo = {
    // Usamos variables de entorno para proteger datos sensibles
    // Si no existen (ej. en desarrollo), usamos valores por defecto
    email: import.meta.env.VITE_CONTACT_EMAIL || "hola@correo.com",
    whatsappLink: import.meta.env.VITE_CONTACT_WHATSAPP_LINK || "https://wa.me/549123456789"
};
