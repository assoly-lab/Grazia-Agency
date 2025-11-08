"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/features/components/ui/button"
import Image from "next/image"

const HeroCarousel = () => {
  const slides = [
    {
      image: "/modern-tech-hero-1.jpg",
      heading: "Transform Your Future",
      subheading: "Embrace innovation and unlock endless possibilities",
      primaryBtn: "Get Started",
      secondaryBtn: "Learn More",
    },
    {
      image: "/modern-tech-hero-2.jpg",
      heading: "Innovate Beyond Limits",
      subheading: "Experience the next generation of technology",
      primaryBtn: "Explore Now",
      secondaryBtn: "Discover More",
    },
    {
      image: "/modern-tech-hero-3.jpg",
      heading: "Shape Your Success",
      subheading: "Build your dreams with cutting-edge solutions",
      primaryBtn: "Start Journey",
      secondaryBtn: "See Features",
    },
    {
      image: "/modern-tech-hero-4.jpg",
      heading: "Power Your Growth",
      subheading: "Scale your business to unprecedented heights",
      primaryBtn: "Join Us",
      secondaryBtn: "Watch Demo",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [animateContent, setAnimateContent] = useState(true)
  const [direction, setDirection] = useState("right")
  const [autoPlay, setAutoPlay] = useState(true)

  const goToSlide = (index: number, dir: string) => {
    setAnimateContent(false)
    setDirection(dir)
    setTimeout(() => {
      setCurrentSlide(index)
      setAnimateContent(true)
    }, 500)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length, "right")
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length, "left")
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, currentSlide, nextSlide])

  const slide = slides[currentSlide]

  return (
    <div className="relative w-full h-[75vh] lg:h-[83vh] overflow-hidden">
      {/* Slides */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: idx === currentSlide ? 1 : 0,
            pointerEvents: idx === currentSlide ? "auto" : "none",
          }}
        >
          <Image
            src={s.image || "/placeholder.svg"}
            alt={`Slide ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
            />
        </div>
      ))}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance font-open-sans"
            style={{
              animation: animateContent
                ? direction === "right"
                  ? "slideInLeft 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                  : "slideInRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                : direction === "right"
                  ? "slideOutRight 0.6s ease-in forwards"
                  : "slideOutLeft 0.6s ease-in forwards",
            }}
          >
            {slide.heading}
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance font-nunito-sans"
            style={{
              animation: animateContent
                ? direction === "right"
                  ? "slideInRight 0.8s ease-out 0.2s backwards"
                  : "slideInLeft 0.8s ease-out 0.2s backwards"
                : direction === "right"
                  ? "slideOutLeft 0.5s ease-in 0.1s forwards"
                  : "slideOutRight 0.5s ease-in 0.1s forwards",
            }}
          >
            {slide.subheading}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              animation: animateContent
                ? "fadeInScale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s backwards"
                : "scaleOutCenter 0.5s ease-in 0.2s forwards",
            }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              {slide.primaryBtn}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              {slide.secondaryBtn}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx, idx > currentSlide ? "right" : "left")}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <div className="absolute bottom-8 right-8 gap-2 z-20 hidden md:flex">
        <button
          onClick={() => {
            setAutoPlay(false)
            prevSlide()
            setTimeout(() => setAutoPlay(true), 3000)
          }}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => {
            setAutoPlay(false)
            nextSlide()
            setTimeout(() => setAutoPlay(true), 3000)
          }}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default HeroCarousel
