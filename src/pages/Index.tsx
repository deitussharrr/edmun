import { useEffect, useState } from "react"
import { Instagram, MapPin, Calendar, Users, ArrowRight, ChevronDown, Menu, X } from "lucide-react"

const committees = [
  {
    name: "AIPPM (All India Political Parties Meet)",
    logo: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&h=300&fit=crop",
    agenda: "Reviewing The Water (Prevention and Control of Pollution) Amendment Act 2024 in light of recent developments",
    description: "The All India Political Party Meet (AIPPM) is a domestic committee that intends to simulate the workings of the world's largest democracy. It hosts personalities such as Narendra Modi and Rahul Gandhi, as opposed to nations, with delegates making decisions and acting upon the interests of their respective personalities.",
    chairpeople: [
      { name: "Ravivatsan", position: "Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Ravi%20Vatsan-FeqXKJzRw7vaOTvg17RRDoMesm6N9I.jpg" },
      { name: "Sanjay Senthilnathan", position: "Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Sanjai%20Senthilnaathan-Gf8TFO4prMnwQ69o9doeSTANJsPEa4.jpg" },
      { name: "Ritesh", position: "Director", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Ritesh-Y6AqrBYZqhVArFHKQPq4Q64mL8fs5j.jpg" },
    ],
  },
  {
    name: "C-34",
    logo: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=300&h=300&fit=crop",
    agenda: "The future of United Nations peace operations with emphasis on its functions and chain of command",
    description: "The C-34, officially known as the Special Committee on Peacekeeping Operations, is a committee tasked with reviewing the past actions of the United Nations, ensuring that the issues that arise while dealing with complex global crises do not falter during implementation. It has also been a forum to analyze the mandate of all UN committees with an intent to review the precedents that they have set with regards to method of operation, chain of command, and so on.",
    chairpeople: [
      { name: "Sivakaarthikeyan", position: "Co-Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/SK-eYvUbVfQtW57353GKD7CFGAQdOGEF1.jpg" },
      { name: "Swayam Krishnan", position: "Co-Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Swayam-YADLSacFAMztS7dAXVdRKhLDG5LWvA.jpg" },
      { name: "Sundar Ganesh", position: "Co-Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Sundar%20Ganesh-lGzpwPx3PEPgxuPwloSp6rzOdFxWte.jpg" },
      { name: "Sidhant", position: "Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Sidhant-9FPeomrLnPGoxCbXrkcJGDwGzcSRuz.jpg" },
    ],
  },
  {
    name: "IPC (INTERNATIONAL PRESS CORPS)",
    logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=300&fit=crop",
    agenda: "Classified",
    description: "The IPC (International Press Corps) focuses on the fourth pillar of democracy: the media. Delegates represent media houses from around the world and narrate the events of other committees through their own lens; whether or not that means they have a biased perspective is for the reader to decide. This committee also includes photography, allowing individuals to showcase their skills in photography.",
    chairpeople: [
      { name: "Poojitha", position: "Head of Journalism", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Poojitha-BGPM6ZCytfYi7eZwQDAVKYUi56oMjj.jpg" },
      { name: "Prabhu Shankar", position: "Head of Photography", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Prabhu%20Shankar-5fT49b91JA9ZyCI9fJllGsWtu0Femm.jpg" },
      { name: "Sankrushi", position: "Editor in Chief", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Sankrushi-XfXRxTQnaveryX82WU9U7IczG7dycE.jpg" },
      { name: "Santhosh Sivan", position: "Photographer in Chief", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Santhosh%20Sivan-EAua1N4l5qyxKPJ9MuFz8cInVWCPrY.jpg" },
    ],
  },
  {
    name: "National Economic Council",
    logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&h=300&fit=crop",
    agenda: "Promoting sustainable economic growth with special emphasis on the implementation of monetary and fiscal policies",
    description: "The National Economic Council is a simulation of the US's economic wing, as we are on the tithe's edge of a global recession. Apart from being a domestic committee with personalities, this is a double-delegate committee, meaning that two delegates will be allotted the same person, giving them an opportunity to work as a team.",
    chairpeople: [
      { name: "Karthik V", position: "Chair, Donald Trump", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Karthik-rfLPxFHleYlzk5xhmc4f45UY7uled6.jpg" },
      { name: "Ruchit Shivani", position: "Director, Kevin Hassett", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Ruchit-RJ4BVzm0lLCknbLFSBSy6MoLd2rSeR.jpg" },
      { name: "Anirudh Kumaran", position: "Deputy Director, Daniel Hornung", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Anirudh-FKRtyS00QwaaUPDldLHgHwfZtbDHv3.jpg" },
    ],
  },
  {
    name: "Nuclear Emergency Session",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop",
    agenda: "Hell breaks loose.",
    description: "The Nuclear Emergency Session is an iteration of a Continuous Crisis Committee where the details of the committee remain classified until the day of the conference. The committee moves forward with the help of stealth operatives and covert military directives submitted by participants, adding a layer of unpredictability to what would happen during the course of the conference.",
    chairpeople: [
      { name: "Lokesh Narayana", position: "Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Lokesh-aUWJLAs1eAIXR3X9GuOyxLT5GHeWXt.jpg" },
      { name: "Ashwamedh", position: "Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Ashwamedh-tgXc0YcK625xekWhy8WoXGhpgJPJN9.jpg" },
      { name: "Vihaan Reddy", position: "Director", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Vihaan-yPm7dUVnfd6fTBBn1rxd6XoZXXzAm7.jpg" },
    ],
  },
  {
    name: "UNGA (Unites Nations General Assembly)",
    logo: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?w=300&h=300&fit=crop",
    agenda: "Discussion on the draft international convention against the recruitment, use, financing, and training of mercenaries",
    description: "The United Nations General Assembly (UNGA) is one of the six principal organs of the UN and serves as the main policymaking and representative body of the organization. This particular session also has a freeze date, discussing a policy that has impacted conflicts such as the ones in Afghanistan, Iraq, Ukraine, Palestine, and Syria.",
    chairpeople: [
      { name: "Hrishekesh", position: "Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Hirshikesh-4IMfSLbofuNMdWBlAmpJibqkUktBzX.jpg" },
      { name: "Aashrith Narayn", position: "Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Aashrith-rcJDaPJhaQb3H3yaH840PNJRLCJiVV.jpg" },
      { name: "Idhant Singh Chauhan", position: "Director", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Idhant-mwMwvZO202LoVoM8AtXocWB6L6oAA9.jpg" },
    ],
  },
  {
    name: "UNTAC (United Nations Transitional Authority in Cambodia)",
    logo: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=300&h=300&fit=crop",
    agenda: "Addressing the challenges in disarmament, refugee repatriation, and political stabilization amid factional resistance in Cambodia",
    description: "The United Nations Transitional Authority in Cambodia (UNTAC) was one of the only successful UN peacekeeping initiatives as the international community attempted to deliberate negotiations with multiple armed factions in the country post a nationwide civil war. The committee was tasked with disarming the factions, orchestrating a smooth transition of power by conducting free and fair elections, taking care of refugees, and implementing the Paris Peace Agreement.",
    chairpeople: [
      { name: "Athmaaram", position: "Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Athmaaram-rj5hRX1qRPoG2aOzsjMEZ9008nG2WW.jpg" },
      { name: "Sowmi Narayanan", position: "Co-Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Sowmi-WTUr9OF1hBhz7BZnYiSsJgA1G8stnQ.jpg" },
      { name: "Sudharshan Sukumar", position: "Co-Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Sudharshan%20Sukumar-kMOSLEkCuH7m9ruA1Acsyj2TNRjMQc.jpg" },
    ],
  },
  {
    name: "US SENATE",
    logo: "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?w=300&h=300&fit=crop",
    agenda: "Discussing the need for an interventionist stance in global affairs",
    description: "Much like AIPPM, the United States Senate is a domestic simulation of the most powerful country on the planet. Here too, delegates will represent the views and opinions of real-life personalities such as Nancy Pelosi or Marco Rubio. Given the freeze date, the committee will be set in the early 1940s, building upon a decision that will shape the rest of history.",
    chairpeople: [
      { name: "Venkatesh", position: "Co-Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Venky-fA6tcnzcFZiDNKTcoHbSi8zeJXF0YD.jpg" },
      { name: "Vishwesh", position: "Co-Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Vishwesh-PVcs8bTAp420BS9maK9Q9A8Cm9Irnu.jpg" },
      { name: "Riyann", position: "Co-Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Riyaan-zt6d3g3aV9qVgrpfq59ZLQ4wOLlccI.jpg" },
      { name: "Saahil Ali", position: "Co-Vice Chairperson", image: "https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Saahil-xavYjk7fIVnb3dpNNCRscb2sI25HpZ.jpg" },
    ],
  },
]

const App = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="min-h-screen bg-grid" style={{ backgroundColor: "#002211" }}>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#002211]/90 backdrop-blur-md py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/edmunlogo0-TxPQ639W8Am0qNrbrFMo1DIZPN84N3.png"
              alt="EDMUN Logo"
              className="w-8 h-8 text-white"
            />
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

      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/bg-wI6Tzi4ACLEW2ccPe3d2e22mrQiS0e.jpg"
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
          <img
            src="https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/edmunlogo0-TxPQ639W8Am0qNrbrFMo1DIZPN84N3.png"
            alt="EDMUN Logo"
            className="w-24 h-24 mb-8 animate-float text-white opacity-80"
          />
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

      <section id="about" className="py-20 px-4 relative bg-grid">
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

      <section className="py-20 px-4 relative bg-grid">
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
              <video
                className="w-full h-full object-cover"
                controls
                src="https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/aftermovie-zQceoljO0ANvt17OtBDQS2lIrkSYue.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="committees" className="py-20 px-4 relative bg-grid">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">Committees</h2>
          <div className="grid gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="committee-card p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-semibold mb-6 text-center">{committee.name}</h3>
                <div className="max-w-3xl mx-auto">
                  <p className="agenda-text text-center">
                    {committee.agenda}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                  {committee.chairpeople.map((chair, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <img
                        src={chair.image || "/placeholder.svg"}
                        alt={chair.name}
                        className="w-32 h-32 object-cover rounded-full mb-4 border border-[#00ff80]/20"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
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

      <section id="venue" className="py-20 px-4 relative bg-grid">
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
                <div className="w-full h-full flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-white opacity-40 animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 text-white">EDMUN 2.0</h2>
              <p className="text-white/60">A Humble aid to Save the Circuit</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-center text-white/40 mt-8">&copy; 2025 EDMUN 2.0. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
