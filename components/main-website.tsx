"use client"

import { useState, useEffect } from "react"

type Section = "home" | "roster" | "socials" | "feed" | "announcements"

export default function MainWebsite() {
  const [activeSection, setActiveSection] = useState<Section>("home")

  return (
    <div className="min-h-screen animate-fade-in relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {/* Flowing liquid metallic background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(212, 193, 149, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(229, 224, 217, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 100% 60% at 40% 80%, rgba(212, 193, 149, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 120% 80% at 60% 10%, rgba(229, 224, 217, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, #171512 0%, #1a1714 25%, #171512 50%, #1c1916 75%, #171512 100%)
            `,
          }}
        />

        {/* Flowing animated blobs */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-enhanced"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `radial-gradient(circle, rgba(212, 193, 149, 0.8), rgba(229, 224, 217, 0.6))`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                opacity: 0.3 + Math.random() * 0.4,
                boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(212, 193, 149, 0.4)`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>

        {/* Flowing beam effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4c195] to-transparent animate-beam-flow shadow-glow blur-sm"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#e5e0d9] to-transparent animate-beam-flow-reverse shadow-glow blur-sm"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4c195] to-transparent animate-beam-flow shadow-glow blur-sm"></div>
        </div>
      </div>

      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl backdrop-blur-2xl border border-white/10 shadow-2xl">
        <div
          className="px-8 py-4 rounded-2xl"
          style={{
            background: "rgba(229, 224, 217, 0.05)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center space-x-16">
            <div className="flex items-center space-x-3 group">
              <img
                src="/haven-logo.png"
                alt="Haven Logo"
                className="w-8 h-8 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-glow"
              />
              <span
                className="text-xl font-bold tracking-wider transition-all duration-500 group-hover:scale-110"
                style={{
                  color: "#e5e0d9",
                  textShadow: "0 0 20px rgba(229, 224, 217, 0.5)",
                }}
              >
                HAVEN
              </span>
            </div>

            <div className="flex space-x-2">
              {[
                { id: "home", label: "Home" },
                { id: "roster", label: "Roster" },
                { id: "socials", label: "Socials" },
                { id: "feed", label: "Content" },
                { id: "announcements", label: "Announcements" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`px-6 py-3 rounded-xl backdrop-blur-xl border transition-all duration-500 hover:scale-110 relative overflow-hidden group ${
                    activeSection === item.id ? "scale-110" : ""
                  }`}
                  style={{
                    background:
                      activeSection === item.id
                        ? "linear-gradient(135deg, rgba(212, 193, 149, 0.3), rgba(229, 224, 217, 0.2))"
                        : "rgba(229, 224, 217, 0.08)",
                    borderColor: activeSection === item.id ? "#d4c195" : "rgba(229, 224, 217, 0.2)",
                    color: "#e5e0d9",
                    boxShadow:
                      activeSection === item.id
                        ? "0 0 30px rgba(212, 193, 149, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                        : "0 4px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-48 min-h-screen relative z-10">
        {" "}
        {activeSection === "home" && <HomeSection />}
        {activeSection === "roster" && <RosterSection />}
        {activeSection === "socials" && <SocialsSection />}
        {activeSection === "feed" && <SocialFeedSection />}
        {activeSection === "announcements" && <AnnouncementsSection />}
      </main>
    </div>
  )
}

function AnnouncementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setIsVisible(true)

    const targetDate = new Date("2025-09-12T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mb-12">
      <div
        className={`relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-white/20 transition-all duration-1000 hover:scale-[1.02] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(212, 193, 149, 0.15), rgba(229, 224, 217, 0.1))",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#d4c195] rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/3 w-1 h-1 bg-[#e5e0d9] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#d4c195] rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 p-8 md:p-12 text-center">
          <div className="mb-8">
            <div
              className="inline-block px-6 py-3 rounded-full border border-[#d4c195]/40 backdrop-blur-xl mb-6"
              style={{
                background: "rgba(212, 193, 149, 0.2)",
                boxShadow: "0 0 20px rgba(212, 193, 149, 0.3)",
              }}
            >
              <span
                className="text-lg font-bold tracking-wider uppercase flex items-center justify-center space-x-2"
                style={{
                  color: "#e5e0d9",
                  textShadow: "0 0 10px rgba(229, 224, 217, 0.5)",
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z" />
                </svg>
                <span>Announcement</span>
              </span>
            </div>

            <h4
              className="text-2xl md:text-3xl font-inter font-bold mb-6"
              style={{
                color: "#d4c195",
                textShadow: "0 0 20px rgba(212, 193, 149, 0.4)",
              }}
            >
              Haven Launch Sept 12th
            </h4>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl backdrop-blur-xl border border-[#d4c195]/30"
                  style={{
                    background: "rgba(212, 193, 149, 0.1)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    className="text-3xl md:text-4xl font-bold font-inter"
                    style={{
                      color: "#e5e0d9",
                      textShadow: "0 0 15px rgba(229, 224, 217, 0.5)",
                    }}
                  >
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wider mt-2" style={{ color: "#d4c195" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p
            className="text-lg md:text-xl font-inter max-w-3xl mx-auto mb-8 opacity-90"
            style={{
              color: "#d4c195",
              textShadow: "0 0 15px rgba(212, 193, 149, 0.4)",
            }}
          >
            The future of competitive gaming starts here. Join us as we redefine what's possible in esports.
          </p>

          <button
            onClick={() => window.open("https://x.com/TheHavenGGs", "_blank")}
            className="group px-8 py-4 rounded-2xl backdrop-blur-xl border border-[#d4c195]/40 transition-all duration-500 hover:scale-110 relative overflow-hidden cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(212, 193, 149, 0.2), rgba(229, 224, 217, 0.1))",
              boxShadow: "0 10px 30px rgba(212, 193, 149, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <span
              className="relative z-10 font-bold text-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                color: "#e5e0d9",
                textShadow: "0 0 15px rgba(229, 224, 217, 0.5)",
              }}
            >
              Stay Updated
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>

        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#d4c195]/20 via-[#e5e0d9]/30 to-[#d4c195]/20 animate-border-flow"></div>
        </div>
      </div>
    </div>
  )
}

function HomeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setIsVisible(true)

    const targetDate = new Date("2025-09-12T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-16 mb-24">
        <div className="space-y-8">
          <h1
            className={`text-7xl md:text-8xl font-inter font-black tracking-tight transition-all duration-1500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } animate-text-glow`}
            style={{
              color: "#e5e0d9",
              textShadow: "0 0 40px rgba(229, 224, 217, 0.6), 0 0 80px rgba(212, 193, 149, 0.3)",
              fontWeight: "900",
            }}
          >
            WELCOME TO HAVEN
          </h1>
          <p
            className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-inter transition-all duration-1500 delay-500 ${
              isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              color: "#d4c195",
              textShadow: "0 0 20px rgba(212, 193, 149, 0.4)",
            }}
          >
            Haven is home to world-class Fortnite talent and creators redefining what's possible in competitive gaming.
          </p>

          <div
            className={`transition-all duration-1500 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-6">
              <h3
                className="text-2xl font-inter font-bold mb-4"
                style={{
                  color: "#d4c195",
                  textShadow: "0 0 20px rgba(212, 193, 149, 0.4)",
                }}
              >
                Launch Countdown
              </h3>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl backdrop-blur-xl border border-[#d4c195]/30"
                  style={{
                    background: "rgba(212, 193, 149, 0.1)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold font-inter"
                    style={{
                      color: "#e5e0d9",
                      textShadow: "0 0 15px rgba(229, 224, 217, 0.5)",
                    }}
                  >
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wider mt-2" style={{ color: "#d4c195" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "COMPETITIVE",
              desc: "Top-tier Fortnite competition",
              icon: (
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                </svg>
              ),
            },
            {
              title: "CONTENT",
              desc: "Engaging entertainment & streams",
              icon: (
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              ),
            },
            {
              title: "COMMUNITY",
              desc: "Building the future of esports",
              icon: (
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 14C5.3 14 0 15.3 0 18V20H16V18C16 15.3 10.7 14 8 14ZM16 14C15.4 14 14.7 14.1 14 14.2C15.2 15.2 16 16.5 16 18V20H24V18C24 15.3 18.7 14 16 14Z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group p-10 rounded-3xl backdrop-blur-2xl border border-white/10 transition-all duration-700 hover:scale-105 cursor-pointer relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                background: "linear-gradient(135deg, rgba(229, 224, 217, 0.08), rgba(212, 193, 149, 0.05))",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                transitionDelay: `${800 + i * 200}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4c195]/10 via-transparent to-[#e5e0d9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div
                  className="mb-8 group-hover:scale-125 transition-transform duration-500"
                  style={{ color: "#d4c195" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-2xl font-bold mb-6 group-hover:scale-105 transition-all duration-500"
                  style={{
                    color: "#e5e0d9",
                    textShadow: "0 0 20px rgba(229, 224, 217, 0.5)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-lg opacity-80 group-hover:opacity-100 transition-all duration-500"
                  style={{ color: "#d4c195" }}
                >
                  {item.desc}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RosterSection() {
  const players = [
    { name: "Hvn Chimp", role: "Fragger", status: "Active", link: "https://x.com/chimp1k", image: "/hvn-chimp.png" },
    { name: "Player 2", role: "Fragger", status: "Active" },
    { name: "Player 3", role: "Support", status: "Active" },
    { name: "Player 4", role: "Content", status: "Active" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2
          className="text-6xl font-inter font-black mb-8 animate-text-glow"
          style={{
            color: "#e5e0d9",
            textShadow: "0 0 40px rgba(229, 224, 217, 0.6)",
            fontWeight: "900",
          }}
        >
          OUR ROSTER
        </h2>
        <p className="text-2xl font-inter" style={{ color: "#d4c195" }}>
          Meet the champions who represent Haven
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {players.map((player, i) => {
          const CardContent = (
            <div
              key={i}
              className="group p-8 rounded-3xl backdrop-blur-2xl border border-white/10 transition-all duration-700 hover:scale-110 text-center cursor-pointer relative overflow-hidden animate-fade-in-up"
              style={{
                background: "linear-gradient(135deg, rgba(229, 224, 217, 0.08), rgba(212, 193, 149, 0.05))",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                animationDelay: `${i * 200}ms`,
              }}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4c195]/30 via-[#e5e0d9]/20 to-[#d4c195]/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm scale-110"></div>
                <img
                  src={player.image || "/crown-placeholder.png"}
                  alt="Player Avatar"
                  className="w-28 h-28 mx-auto rounded-full border-2 border-white/20 group-hover:border-[#d4c195]/60 transition-all duration-500 relative z-10 group-hover:scale-110 object-cover"
                  style={{
                    boxShadow: "0 0 30px rgba(212, 193, 149, 0.3)",
                  }}
                />
              </div>
              <h3
                className="text-2xl font-inter font-bold mb-3 group-hover:scale-105 transition-all duration-500"
                style={{
                  color: "#e5e0d9",
                  textShadow: "0 0 20px rgba(229, 224, 217, 0.5)",
                }}
              >
                {player.name}
              </h3>
              <p
                className="text-lg mb-4 opacity-80 group-hover:opacity-100 transition-all duration-500"
                style={{ color: "#d4c195" }}
              >
                {player.role}
              </p>
              <span
                className="px-4 py-2 rounded-full text-sm border border-white/20 group-hover:border-[#d4c195]/60 transition-all duration-500 backdrop-blur-xl"
                style={{
                  background: "rgba(212, 193, 149, 0.15)",
                  color: "#e5e0d9",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                {player.status}
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
            </div>
          )

          return player.link ? (
            <a key={i} href={player.link} target="_blank" rel="noopener noreferrer" className="block">
              {CardContent}
            </a>
          ) : (
            <div key={i}>{CardContent}</div>
          )
        })}
      </div>
    </div>
  )
}

function SocialsSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2
          className="text-6xl font-inter font-black mb-8 animate-text-glow"
          style={{
            color: "#e5e0d9",
            textShadow: "0 0 40px rgba(229, 224, 217, 0.6)",
            fontWeight: "900",
          }}
        >
          CONNECT WITH HAVEN
        </h2>
        <p className="text-2xl font-inter" style={{ color: "#d4c195" }}>
          Join our community and stay updated
        </p>
      </div>

      <div className="flex justify-center space-x-20 mt-16">
        <a
          href="https://discord.gg/ncGdz49wFq"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer transition-all duration-500 hover:scale-125 p-6 rounded-2xl backdrop-blur-2xl border border-white/10 hover:border-[#d4c195]/60"
          style={{
            background: "linear-gradient(135deg, rgba(229, 224, 217, 0.1), rgba(212, 193, 149, 0.08))",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <svg
            className="w-20 h-20 transition-all duration-500 group-hover:rotate-12"
            style={{ color: "#d4c195", filter: "drop-shadow(0 0 25px rgba(212, 193, 149, 0.8))" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.418-2.157 2.418z" />
          </svg>
          <div className="text-center mt-4">
            <span
              className="text-lg font-bold group-hover:scale-105 transition-transform duration-500 block"
              style={{
                color: "#e5e0d9",
                textShadow: "0 0 20px rgba(229, 224, 217, 0.5)",
              }}
            >
              Discord
            </span>
          </div>
        </a>

        <a
          href="https://x.com/TheHavenGGs"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer transition-all duration-500 hover:scale-125 p-6 rounded-2xl backdrop-blur-2xl border border-white/10 hover:border-[#d4c195]/60"
          style={{
            background: "linear-gradient(135deg, rgba(229, 224, 217, 0.1), rgba(212, 193, 149, 0.08))",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <svg
            className="w-20 h-20 transition-all duration-500 group-hover:rotate-12"
            style={{ color: "#d4c195", filter: "drop-shadow(0 0 25px rgba(212, 193, 149, 0.8))" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <div className="text-center mt-4">
            <span
              className="text-lg font-bold group-hover:scale-105 transition-transform duration-500 block"
              style={{
                color: "#e5e0d9",
                textShadow: "0 0 20px rgba(229, 224, 217, 0.5)",
              }}
            >
              X (Twitter)
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

function SocialFeedSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2
          className="text-6xl font-inter font-black mb-8 animate-text-glow"
          style={{
            color: "#e5e0d9",
            textShadow: "0 0 40px rgba(229, 224, 217, 0.6)",
            fontWeight: "900",
          }}
        >
          LATEST CONTENT
        </h2>
        <p className="text-2xl font-inter" style={{ color: "#d4c195" }}>
          Highlights, streams, and updates from the team
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-video rounded-3xl backdrop-blur-2xl border border-white/10 transition-all duration-700 hover:scale-105 flex items-center justify-center cursor-pointer relative overflow-hidden animate-fade-in-up group"
            style={{
              background: "linear-gradient(135deg, rgba(229, 224, 217, 0.08), rgba(212, 193, 149, 0.05))",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              animationDelay: `${i * 150}ms`,
            }}
          >
            <p
              className="text-xl font-medium opacity-60 group-hover:opacity-100 transition-all duration-500 relative z-10"
              style={{
                color: "#d4c195",
                textShadow: "0 0 20px rgba(212, 193, 149, 0.3)",
              }}
            >
              Content Coming Soon
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
