import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Men = React.lazy(() => import('./pages/Men'));
const Women = React.lazy(() => import('./pages/Women'));
const Story = React.lazy(() => import('./pages/Story'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ComingSoon = React.lazy(() => import('./pages/ComingSoon'));

const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>
);

import ErrorBoundary from './components/ErrorBoundary';

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
        return (
            <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                    <ComingSoon onLogin={() => setIsAuthenticated(true)} />
                </Suspense>
            </ErrorBoundary>
        );
    }

    return (
        <ErrorBoundary>
            <div className="font-sans text-neutral-900 bg-white antialiased selection:bg-neutral-900 selection:text-white">
                <Navbar setPage={setPage} isScrolled={isScrolled} />

                <main>
                    <Suspense fallback={<LoadingFallback />}>
                        {page === 'home' && <Home setPage={setPage} />}
                        {page === 'men' && <Men />}
                        {page === 'women' && <Women />}
                        {page === 'story' && <Story />}
                        {page === 'contact' && <Contact />}
                    </Suspense>
                </main>

                <Footer />
            </div>
        </ErrorBoundary>
    );
};

export default App;
