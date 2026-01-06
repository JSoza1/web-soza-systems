import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const handleScroll = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); // Descomentar si solo se quiere animar una vez
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1
        });

        const targets = document.querySelectorAll('.fade-in-section');
        targets.forEach((target) => observer.observe(target));

        return () => {
            targets.forEach((target) => observer.unobserve(target));
        };
    }, []);
};

export default useScrollReveal;
