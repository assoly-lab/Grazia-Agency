"use client"

import { useEffect, useState, useRef } from "react"
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Globe, MapPin, ChevronDown } from "lucide-react"

const LANGUAGES = {
  en: "English",
  es: "Spanish",
  fr: "French",
}

const Topbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [language, setLanguage] = useState("en")
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const lastScrollPosRef = useRef<number>(0)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false)
      }
    }

    if (showMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showMobileMenu])

  useEffect(() => {
    let rafId: number | null = null

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const currentScrollPos = window.pageYOffset

        // Only update visibility if scroll distance is significant (100px threshold)
        // This prevents micro-scrolls from triggering visibility changes
        if (Math.abs(currentScrollPos - lastScrollPosRef.current) >10) {
          const scrollingDown = currentScrollPos > lastScrollPosRef.current

          // Only set visible if we're scrolling up, hidden if scrolling down
          if (scrollingDown && isVisible) {
            setIsVisible(false)
          } else if (!scrollingDown && !isVisible && currentScrollPos > 10) {
            // Only show topbar if we've scrolled past hero section (300px)
            setIsVisible(true)
          }

          lastScrollPosRef.current = currentScrollPos
        }

        rafId = null
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [isVisible])

  return (
    <>
      {/* Mobile half-circle menu - centered - uses transform instead of opacity to prevent layout shift */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed z-50 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-120px)",
        }}
      >
        {/* Half-circle button and panel container */}
        <div className="relative w-40 h-40">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-80 max-w-sm bg-slate-900 border border-slate-800 rounded-b-3xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-start pt-16 ${
              showMobileMenu ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
            }`}
            style={{
              transformOrigin: "top center",
              transition: "all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="space-y-4 text-sm w-full px-6 pb-6">
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>123 Business Ave, City</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+1234567890" className="text-sm">
                    +1 (234) 567-890
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:info@company.com" className="text-sm">
                    info@company.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-700" />

              {/* Social Icons */}
              <div className="flex items-center gap-3 justify-center">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Language Switcher */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as keyof typeof LANGUAGES)}
                className="bg-slate-700 text-white rounded px-2 py-1.5 text-sm font-medium border border-slate-600 hover:border-slate-500 transition-colors cursor-pointer w-full"
              >
                {Object.entries(LANGUAGES).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-slate-900 border border-slate-800 rounded-b-full flex items-center justify-center text-slate-300 hover:text-white transition-colors z-10"
            aria-label="Toggle top menu"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${showMobileMenu ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Desktop menu - uses transform to hide without affecting scrollbar */}
      <div
        className="hidden md:block w-full bg-slate-900 text-white border-b border-slate-800 transition-transform duration-300"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left Section - Contact Info */}
            <div className="flex items-center gap-6">
              {/* Address */}
              <div className="hidden lg:flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span>123 Business Ave, City</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>

              {/* Email */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@company.com">info@company.com</a>
              </div>
            </div>

            {/* Right Section - Social & Language */}
            <div className="flex items-center gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Divider */}
              <div className="w-px h-5 bg-slate-700" />

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors px-2 py-1 rounded hover:bg-slate-800"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs uppercase font-medium">{language}</span>
                </button>

                {/* Language Dropdown Menu */}
                {showLanguageMenu && (
                  <div className="absolute right-0 mt-1 bg-slate-800 border border-slate-700 rounded shadow-lg z-50">
                    {Object.entries(LANGUAGES).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code as keyof typeof LANGUAGES)
                          setShowLanguageMenu(false)
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === code
                            ? "bg-slate-700 text-white font-medium"
                            : "text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
