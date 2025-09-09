"use client"

import { useState } from "react"

interface LandingPageProps {
  onEnter: () => void
  isTransitioning: boolean
}

export default function LandingPage({ onEnter, isTransitioning }: LandingPageProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleEnterClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onEnter()
    }, 1000)
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ease-out ${
        isAnimating ? "scale-150 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{ backgroundColor: "#171512" }}
    >
      <div className="absolute inset-0">
        {/* Flowing liquid metallic background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 animate-liquid-flow"
            style={{
              background: `radial-gradient(ellipse 800px 600px at 20% 40%, #d4c195 0%, transparent 50%),
                          radial-gradient(ellipse 600px 800px at 80% 60%, #e5e0d9 0%, transparent 50%),
                          radial-gradient(ellipse 400px 400px at 40% 80%, #d4c195 0%, transparent 50%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-20 animate-liquid-flow-reverse"
            style={{
              background: `radial-gradient(ellipse 600px 400px at 60% 20%, #e5e0d9 0%, transparent 50%),
                          radial-gradient(ellipse 800px 600px at 30% 70%, #d4c195 0%, transparent 50%)`,
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Enhanced beam effects */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute top-0 left-1/4 w-px h-full transform -rotate-12 origin-top animate-pulse"
            style={{ backgroundColor: "#d4c195", animationDuration: "3s" }}
          />
          <div
            className="absolute top-0 left-1/2 w-px h-full transform rotate-12 origin-top animate-pulse"
            style={{ backgroundColor: "#d4c195", animationDuration: "4s" }}
          />
          <div
            className="absolute top-0 left-3/4 w-px h-full transform -rotate-12 origin-top animate-pulse"
            style={{ backgroundColor: "#d4c195", animationDuration: "5s" }}
          />

          <div
            className="absolute top-1/4 left-0 w-full h-px shadow-lg"
            style={{
              backgroundColor: "#d4c195",
              boxShadow: "0 0 20px rgba(212, 193, 149, 0.3)",
            }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-px shadow-lg"
            style={{
              backgroundColor: "#d4c195",
              boxShadow: "0 0 20px rgba(212, 193, 149, 0.3)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8">
          {/* Logo with glow effect */}
          <div className="mb-8">
            <img
              src="/haven-logo.png"
              alt="Haven Logo"
              className="w-32 h-32 mx-auto drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 30px rgba(212, 193, 149, 0.4))" }}
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-wider drop-shadow-lg" style={{ color: "#d4c195" }}>
            HAVEN
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-wide mb-12 opacity-90" style={{ color: "#d4c195" }}>
            FORTNITE • CONTENT • ESPORTS
          </p>

          <button
            onClick={handleEnterClick}
            disabled={isAnimating}
            className="group relative px-12 py-4 rounded-xl backdrop-blur-md border border-opacity-30 hover:border-opacity-60 transition-all duration-500 hover:scale-110 disabled:opacity-50"
            style={{
              backgroundColor: "rgba(212, 193, 149, 0.15)",
              borderColor: "#d4c195",
              color: "#d4c195",
              boxShadow: "0 8px 32px rgba(212, 193, 149, 0.1)",
            }}
          >
            <span className="relative z-10 text-lg font-medium tracking-wider">
              {isAnimating ? "ENTERING..." : "ENTER HAVEN"}
            </span>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500"
              style={{ backgroundColor: "#d4c195" }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
