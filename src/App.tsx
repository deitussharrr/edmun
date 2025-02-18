"use client"

import { useEffect, useState } from "react"
import { Instagram, MapPin, Calendar, Users, ArrowRight, ChevronDown, Menu, X } from "lucide-react"
import Image from 'next/image';

const committees = [
  {
    name: "AIPPM (All India Political Parties Meet)",
    logo: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Ravivatsan", position: "Chairperson", image: "./Ravi Vatsan.jpg" },
      { name: "Sanjay Senthilnathan", position: "Vice Chairperson", image: "./Sanjai Senthilnaathan.jpg" },
      { name: "Ritesh", position: "Director", image: "./Ritesh.jpg" },
    ],
  },
  {
    name: "C-34",
    logo: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Sivakaarthikeyan", position: "Co-Chairperson", image: "./SK.jpg" },
      { name: "Swayam Krishnan", position: "Co-Chairperson", image: "./Swayam.jpg" },
      { name: "Sundar Ganesh", position: "Co-Chairperson", image: "./Sundar Ganesh.jpg" },
      { name: "Sidhant", position: "Vice Chairperson", image: "./Sidhant.jpg" },
    ],
  },
  {
    name: "IPC (INTERNATIONAL PRESS CORPS)",
    logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Poojitha", position: "Head of Journalism", image: "./Poojitha.jpg" },
      { name: "Prabhu Shankar", position: "Head of Photography", image: "./Prabhu Shankar.jpg" },
      { name: "Sankrushi", position: "Editor in Chief", image: "./Sankrushi.jpg" },
      { name: "Santhosh Sivan", position: "Photographer in Chief", image: "./Santhosh Sivan.jpg" },
    ],
  },
  {
    name: "National Economic Council",
    logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Karthik V", position: "Chair, Donald Trump", image: "./Karthik.jpg" },
      { name: "Ruchit Shivani", position: "Director, Kevin Hassett", image: "./Ruchit.jpg" },
      { name: "Anirudh Kumaran", position: "Deputy Director, Daniel Hornung", image: "./Anirudh.jpg" },
    ],
  },
  {
    name: "Nuclear Emergency Session",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Lokesh Narayana", position: "Chairperson", image: "./Lokesh.jpg" },
      { name: "Ashwamedh", position: "Vice Chairperson", image: "./Ashwamedh.jpg" },
      { name: "Vihaan Reddy", position: "Director", image: "./Vihaan.jpg" },
    ],
  },
  {
    name: "UNGA (Unites Nations General Assembly)",
    logo: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Hrishekesh", position: "Chairperson", image: "./Hirshikesh.jpg" },
      { name: "Aashrith Narayn", position: "Vice Chairperson", image: "./Aashrith.jpg" },
      { name: "Idhant Singh Chauhan", position: "Director", image: "./Idhant.jpg" },
    ],
  },
  {
    name: "UNTAC (United Nations Transitional Authority in Cambodia)",
    logo: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Athmaaram", position: "Chairperson", image: "./Athmaaram.jpg" },
      { name: "Sowmi Narayanan", position: "Co-Vice Chairperson", image: "./Sowmi.jpg" },
      { name: "Sudharshan Sukumar", position: "Co-Vice Chairperson", image: "./Sudharshan Sukumar.jpg" },
    ],
  },
  {
    name: "US SENATE",
    logo: "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?w=300&h=300&fit=crop",
    chairpeople: [
      { name: "Venkatesh", position: "Co-Chairperson", image: "./Venky.jpg" },
      { name: "Vishwesh", position: "Co-Chairperson", image: "./Vishwesh.jpg" },
      { name: "Riyann", position: "Co-Vice Chairperson", image: "./Riyaan.jpg" },
      { name: "Saahil Ali", position: "Co-Vice Chairperson", image: "./Saahil.jpg" },
    ],
  },
]

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
            <a href="#committees" className="text-white hover:text-white/80 transition-colors block py-2">
              Committees
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
          <img src="./bg.jpg" className="w-full h-full object-cover" alt="EDMUN Conference" />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,34,17,0.7), rgba(0,34,17,0.9))",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-grid"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">About Us</h2>
          <div className="glass-card p-8 rounded-2xl text-white hover-card">
            <p className="text-lg leading-relaxed">
              Being inherently social, and most conducive to an offline experience, the Chennai Circuit saw a severe
              lapse in quality of this riveting event post the COVID-19 Pandemic. Thus, Edifice Enterprises was made by
              Arjun Krishna. An organization that brought together a group of students with over 800 MUNs of combined
              experience between them, it has been committed to promoting the culture of MUNs and introducing a better
              standard and quality to school and college students alike.
            </p>
            <p className="text-lg leading-relaxed">
              EDMUN was launched last year and had its first edition on the 26th and 27th of April 2024, at the Leo
              School of Excellence in Anna Nagar.
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
                EDMUN was launched last year and had its first edition on the 26th and 27th of April 2024, at the Leo
                School of Excellence in Anna Nagar. The conference saw over 500 students from schools and colleges,
                attending the event, making it the largest private-label MUN in Chennai.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                The event was graced by Shri C.N. Maheshvaran (I.A.S.) Secretary of Commerce and Finance for the state
                of Tamil Nadu.
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
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1057277850?h=71bf3941bc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="aftermovie"
                ></iframe>
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
          <div className="grid gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl text-white hover-card">
                <h3 className="text-3xl font-semibold mb-8 text-center">{committee.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {committee.chairpeople.map((chair, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <img
                        src={chair.image || "/placeholder.svg"}
                        alt={chair.name}
                        className="w-32 h-32 object-cover rounded-full mb-4"
                        style={{ margin: "0 auto" }}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=128&width=128"
                          e.currentTarget.className =
                            "w-32 h-32 bg-white/10 rounded-full mb-4 flex items-center justify-center"
                          const icon = document.createElement("div")
                          icon.className = "w-12 h-12 text-white/50"
                          icon.innerHTML =
                            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
                          e.currentTarget.appendChild(icon)
                        }}
                      />
                      <span className="text-center font-medium">{chair.name}</span>
                      <span className="text-center text-sm text-white/70">{chair.position}</span>
                    </div>
                  ))}
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
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-center text-white/40 mt-8">
            &copy; 2025 EDMUN 2.0. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App