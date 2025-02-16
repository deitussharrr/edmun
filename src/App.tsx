import React, { useEffect, useState } from 'react';
import { Instagram, MapPin, Calendar, Users, Award, Film, Globe, ArrowRight, ChevronDown } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

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
    <div className="min-h-screen bg-grid" style={{ backgroundColor: '#002211' }}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#002211]/90 backdrop-blur-md py-4' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-white" />
            <span className="text-white font-bold text-xl">EDMUN 2.0</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="#edmun" className="text-white hover:text-white/80 transition-colors">EDMUN</a>
            <a href="#venue" className="text-white hover:text-white/80 transition-colors">Venue</a>
            <a href="#register" className="futuristic-button bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20">
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="EDMUN Conference"
          />
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(to bottom, rgba(0,34,17,0.7), rgba(0,34,17,0.9))' 
          }}></div>
        </div>
        <div className="absolute inset-0 bg-grid"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <Globe className="w-24 h-24 mb-8 animate-float text-white opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-glow text-center">
            EDMUN 2.0
          </h1>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">
            About Edifice Enterprises
          </h2>
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

      {/* About EDMUN Section */}
      <section id="edmun" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">
            What is EDMUN?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="glass-card p-8 rounded-2xl text-white hover-card">
              <p className="text-lg leading-relaxed mb-6">
                Being inherently social, and most conducive to an offline experience, the Chennai Circuit saw a severe lapse in quality of this riveting event post the COVID-19 Pandemic. Thus, Edifice Enterprises was made by Arjun Krishna.
              </p>
              <p className="text-lg leading-relaxed">
                An organization that brought together a group of students with over 800 MUNs of combined experience between them, it has been committed to promoting the culture of MUNs and introducing a better standard and quality to school and college students alike.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-white hover-card">
              <h3 className="text-2xl font-semibold mb-8">What are MUNs?</h3>
              <p className="mb-8 leading-relaxed">
                A Model United Nations Conference (MUN) is a simulation of the workings of the United Nations. The conference sees students assuming the roles of diplomatic leaders from major countries and making decisions that would benefit their nations.
              </p>
              <ul className="space-y-6">
                {[
                  'Public speaking and Debate',
                  'Logical reasoning and Analysis',
                  'Lobbying and Negotiation',
                  'Research and Application'
                ].map((skill, index) => (
                  <li key={index} className="flex items-start group">
                    <Award className="w-6 h-6 text-white mr-3 mt-1 group-hover:rotate-12 transition-transform" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDMUN 1.0 Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">
            EDMUN 1.0 Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="glass-card p-8 rounded-2xl text-white hover-card">
              <p className="text-lg leading-relaxed mb-6">
                EDMUN was launched last year and had its first edition on the 26th and 27th of April 2024, at the Leo School of Excellence in Anna Nagar. The conference saw over 500 students from schools and colleges, attending the event, making it the largest private-label MUN in Chennai.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                The event was graced by Shri C.N. Maheshvaran (I.A.S.) Secretary of Commerce and Finance for the state of Tamil Nadu.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center glass-card px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-white mr-2" />
                  <span>500+ Participants</span>
                </div>
                <div className="flex items-center glass-card px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5 text-white mr-2" />
                  <span>April 26-27, 2024</span>
                </div>
              </div>
            </div>
            <div className="glass-card aspect-video rounded-2xl overflow-hidden hover-card">
              {/* Replace with actual aftermovie embed */}
              <div className="w-full h-full flex items-center justify-center bg-white/5">
                <Film className="w-16 h-16 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">
            Venue
          </h2>
          <div className="glass-card rounded-2xl overflow-hidden hover-card">
            <div className="grid md:grid-cols-2">
              <div className="p-8 text-white">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold">Conference Location</h3>
                </div>
                <p className="mb-8 text-lg leading-relaxed">
                  [Venue details to be added]
                </p>
                <button className="futuristic-button bg-white text-[#002211] px-8 py-3 rounded-full hover:px-10 transition-all flex items-center group">
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="bg-white/5 h-64 md:h-auto">
                {/* Replace with actual venue image */}
                <div className="w-full h-full flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-white opacity-40 animate-float" />
                </div>
              </div>
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