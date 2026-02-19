import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyUs from './components/WhyUs/WhyUs';
import Pricing from './components/Pricing/Pricing';
import TrustedClients from './components/TrustedClients/TrustedClients';
import GoogleBusiness from './components/GoogleBusiness/GoogleBusiness';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { packagesData, contactInfo } from './data/packagesData';

import useScrollReveal from './hooks/useScrollReveal';

import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

function App() {
    useScrollReveal();

    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <WhyUs />
                <Pricing packages={packagesData} />
                <TrustedClients />
                <GoogleBusiness />
                <Testimonials />
                <Contact info={contactInfo} />
            </main>
            <Footer />
            <FloatingWhatsApp link={contactInfo.whatsappLink} />
        </div>
    )
}

export default App
