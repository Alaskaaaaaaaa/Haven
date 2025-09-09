"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import MainWebsite from "@/components/main-website"

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleEnter = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setHasEntered(true)
      setIsTransitioning(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 pointer-events-none ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "#151310" }}
      />

      {!hasEntered ? <LandingPage onEnter={handleEnter} isTransitioning={isTransitioning} /> : <MainWebsite />}
    </div>
  )
}
