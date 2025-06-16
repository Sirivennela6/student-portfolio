import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const pages = ['/', '/about', '/projects', '/contact'];

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const touchStartX = useRef(null);
  const [animationClass, setAnimationClass] = useState('');

  const getIndex = (path) => pages.indexOf(path);

  const goToPage = (newIndex, direction) => {
    const total = pages.length;
    const currentIndex = getIndex(location.pathname);
    const nextIndex = (newIndex + total) % total;
    setAnimationClass(direction === 'right' ? 'slide-left' : 'slide-right');
    navigate(pages[nextIndex]);
  };

  useEffect(() => {
    const handleKey = (e) => {
      const index = getIndex(location.pathname);
      if (e.key === 'ArrowRight') goToPage(index + 1, 'right');
      if (e.key === 'ArrowLeft') goToPage(index - 1, 'left');
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      const index = getIndex(location.pathname);
      if (delta > 50) goToPage(index - 1, 'left');
      else if (delta < -50) goToPage(index + 1, 'right');
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname]);

  return (
    <div className={`transition-container ${animationClass}`} key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <div className="pt-20">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  </Router>
);

export default App;
