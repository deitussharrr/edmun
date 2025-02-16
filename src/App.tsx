"use client"

import { useEffect, useState } from "react"
import { Instagram, MapPin, Calendar, Users, Award, Film, Globe, ArrowRight, ChevronDown, Menu, X } from "lucide-react"

const committees = [
  {
    name: 'AIPPM (ALL INDIA POLITICAL PARTIES MEET)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'US SENATE (HAS 4 CHAIRPERSONS)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'UNGA (UNITED NATIONS GENERAL ASSEMBLY)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'UNTAC (United Nations Transitional Authority in Cambodia)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'National Economic Council',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'Nuclear Emergency Session',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'C-34',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="min-h-screen bg-grid" style={{ backgroundColor: "#002211" }}>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#002211]/90 backdrop-blur-md py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-white" />
            <span className="text-white font-bold text-xl">EDMUN 2.0</span>
          </div>
          <div>
            <button onClick={toggleMenu} className="text-white z-50 relative">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#002211]/90 p-4">
            <a href="#about" className="text-white hover:text-white/80 transition-colors block py-2">
              About
            </a>
            <a href="#edmun" className="text-white hover:text-white/80 transition-colors block py-2">
              EDMUN
            </a>
            <a href="#venue" className="text-white hover:text-white/80 transition-colors block py-2">
              Venue
            </a>
            <a
              href="#register"
              className="futuristic-button bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 block text-center mt-4"
            >
              Register
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./bg.jpg"
            className="w-full h-full object-cover"
            alt="EDMUN Conference"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,34,17,0.7), rgba(0,34,17,0.9))",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-grid"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <Globe className="w-24 h-24 mb-8 animate-float text-white opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-glow text-center">EDMUN 2.0</h1>
          <p className="text-xl mb-12 text-center max-w-2xl animate-pulse-slow">
            Chennai's Largest Private label MUN
            <br />
            <span className="text-sm opacity-80">A Humble aid to Save the Circuit</span>
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">
            About Us
          </h2>
          <div className="glass-card p-8 rounded-2xl text-white hover-card">
            <p className="text-lg leading-relaxed">
              Being inherently social, and most conducive to an offline experience, the Chennai Circuit saw a severe lapse in quality of this riveting event post the COVID-19 Pandemic. Thus, Edifice Enterprises was made by Arjun Krishna. An organization that brought together a group of students with over 800 MUNs of combined experience between them, it has been committed to promoting the culture of MUNs and introducing a better standard and quality to school and college students alike.
            </p>
            <p className="text-lg leading-relaxed">
              EDMUN was launched last year and had its first edition on the 26th and 27th of April 2024, at the Leo School of Excellence in Anna Nagar.
            </p>
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
                <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
                    <iframe src="https://player.vimeo.com/video/1057277850?h=71bf3941bc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                    style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} 
                    title="aftermovie">
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">Committees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl text-white hover-card">
                <img src={committee.logo} alt={committee.name} className="w-24 h-24 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">{committee.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    <span>Chairperson: {committee.chairperson}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    <span>Vice Chairperson: {committee.viceChairperson}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 mr-3" />
                    <span>Director: {committee.director}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">Venue</h2>
          <div className="glass-card rounded-2xl overflow-hidden hover-card">
            <div className="grid md:grid-cols-2">
              <div className="p-8 text-white">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold">Conference Location</h3>
                </div>
                <p className="mb-4 text-lg leading-relaxed">Don Bosco Arts and Science College</p>
                <p className="mb-8 text-lg leading-relaxed">April 19 and 20, 2025</p>
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
              <p className="text-white/60">A Humble aid to Save the Circuit</p>
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
  )
}

export default App