import React, { useState, useEffect } from 'react';
import '../../App.css';

const Homepage = () => {
    const [isActive, setIsActive] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    // Sidebar Toggle
    const toggleSidebar = () => setIsActive(!isActive);

    // Scroll to top logic
    useEffect(() => {
        const checkScroll = () => {
            if (window.pageYOffset > 300) setShowScroll(true);
            else setShowScroll(false);
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="homepage-wrapper">
            {/* Sidebar */}
            <div className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
                <span className="closebtn" onClick={toggleSidebar}>&times;</span>
                <a href="#highlights">Highlights</a>
                <a href="#working">See Working</a>
                <a href="#features">Features</a>
                <a href="#faq">FAQ</a>
                <a href="/login">Login</a>
            </div>

            {/* Header */}
            <header>
                <nav className="navbar navbar-expand-lg">
                    <span className="menu-toggle" onClick={toggleSidebar} style={{display: 'block'}}>
                        <i className="fas fa-bars"></i>
                    </span>
                    <a className="navbar-brand" href="/">
                        <img src="/assets/img/bookitlogo.png" alt="Bookit" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item"><a className="nav-link" href="#highlights">Highlights</a></li>
                            <li className="nav-item"><a className="nav-link" href="#working">See Working</a></li>
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
                            <li className="nav-item"><a href="/login" className="btn btn-login">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1>Streamline Your Meeting Room Management</h1>
                            <p>Efficiently manage your meeting rooms and enhance collaboration with Bookit.</p>
                            <a href="/login" className="btn btn-hero">Get Started</a>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="/assets/img/businesspeople-working-together.png" alt="Meeting" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top */}
            <button className={`scroll-top ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default Homepage;