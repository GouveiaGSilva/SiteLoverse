import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Story from './pages/Story';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

const App = () => {
    const [page, setPage] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isAuthenticated) {
        return <ComingSoon onLogin={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="font-sans text-neutral-900 bg-white antialiased selection:bg-neutral-900 selection:text-white">
            <Navbar setPage={setPage} isScrolled={isScrolled} />

            <main>
                {page === 'home' && <Home setPage={setPage} />}
                {page === 'men' && <Men />}
                {page === 'women' && <Women />}
                {page === 'story' && <Story />}
                {page === 'contact' && <Contact />}
            </main>

            <Footer />
        </div>
    );
};

export default App;
