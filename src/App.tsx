import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Instagram, MapPin, Calendar, Users, Award, Film, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import Committees from './Committees';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Custom cursor effect
    const cursor = document.createElement('div');
    const cursorOutline = document.createElement('div');

    cursor.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorOutline);
    document.body.classList.add('custom-cursor');

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    function animate() {
      let distX = mouseX - outlineX;
      let distY = mouseY - outlineY;

      outlineX += distX / 8;
      outlineY += distY / 8;

      cursor.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px)`;
      cursorOutline.style.transform = `translate(${outlineX - 15}px, ${outlineY - 15}px)`;

      requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorOutline);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home scrolled={scrolled} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />} />
        <Route path="/committees" element={<Committees />} />
      </Routes>
    </Router>
  );
}

interface HomeProps {
  scrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

function Home({ scrolled, isMobileMenuOpen, setIsMobileMenuOpen }: HomeProps) {
  return (
    <div className="min-h-screen bg-grid" style={{ backgroundColor: '#002211' }}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#002211]/90 backdrop-blur-md py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-white" />
            <span className="text-white font-bold text-xl">EDMUN 2.0</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="#edmun" className="text-white hover:text-white/80 transition-colors">EDMUN</a>
            <a href="#venue" className="text-white hover:text-white/80 transition-colors">Venue</a>
            <a href="/committees" className="text-white hover:text-white/80 transition-colors">Committees</a>
            <a href="#register" className="futuristic-button bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20">
              Register
            </a>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#002211]/90 backdrop-blur-md px-4 py-2">
            <Link to="#about" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="#edmun" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>EDMUN</Link>
            <Link to="#venue" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Venue</Link>
            <Link to="/committees" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Committees</Link>
            <Link to="#register" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="EDMUN Conference"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,34,17,0.7), rgba(0,34,17,0.9))' }}></div>
        </div>
        <div className="absolute inset-0 bg-grid"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <Globe className="w-24 h-24 mb-8 animate-float text-white opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-glow text-center">EDMUN 2.0</h1>
          <p className="text-xl mb-12 text-center max-w-2xl animate-pulse-slow">
            Chennai's Premier Model United Nations Conference
            <br />
            <span className="text-sm opacity-80">Shaping Tomorrow's Leaders Today</span>
          </p>
          <a
            href="#register"
            className="group futuristic-button bg-white text-[#002211] px-8 py-3 rounded-full font-semibold transition-all hover:px-10 hover:shadow-lg hover:shadow-white/20 flex items-center"
          >
            Register Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <ChevronDown className="absolute bottom-8 w-8 h-8 animate-bounce opacity-50" />
        </div>
      </header>

      {/* About Edifice Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">About Edifice Enterprises</h2>
          <div className="glass-card p-8 rounded-2xl text-white hover-card">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Edifice Enterprises was founded by Arjun Krishna with a vision to revitalize the MUN culture in Chennai's educational circuit. In response to the post-pandemic decline in quality MUN experiences, Edifice emerged as a beacon of excellence in the domain.
              </p>
              <p className="text-lg leading-relaxed">
                What sets Edifice apart is its exceptional team - a collective of passionate individuals with over 800 MUNs of combined experience. This wealth of expertise enables us to understand the nuances of Model United Nations conferences and deliver experiences that truly enhance participants' skills and understanding.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment goes beyond just organizing events. We're dedicated to nurturing the next generation of diplomatic leaders by maintaining high standards and introducing innovative approaches to MUN conferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 text-white">EDMUN 2.0</h2>
              <p className="text-white/60">Chennai's Premier Model United Nations Conference</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/edmun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-opacity-80 transition-all hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;