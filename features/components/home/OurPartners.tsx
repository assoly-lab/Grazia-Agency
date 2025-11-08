"use client"

import { useEffect, useRef } from "react"

const partners = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" },
]

export function OurPartners() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Clone items for seamless loop
    const scrollerContent = scroller.querySelector("[data-scroller-content]")
    if (!scrollerContent) return

    const items = Array.from(scrollerContent.children)
    items.forEach((item) => {
      const clone = item.cloneNode(true)
      scrollerContent.appendChild(clone)
    })
  }, [])

  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between mb-12">
          <h2 className="relative text-2xl md:text-4xl font-bold font-open-sans">
            AMONG OUR PARTNERS
            <span className="absolute left-0 -bottom-12 w-16 h-1 bg-red-500 mb-6"></span>
          </h2>

          <a href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors font-nunito-sans">
            Become our partner? →
          </a>
        </div>

        <div className="mt-16 relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

          <div ref={scrollerRef} data-scroller className="relative w-full">
            <div data-scroller-content className="flex gap-6 md:gap-8 w-max">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center shrink-0 h-24 md:h-32 px-8 md:px-12 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="h-16 md:h-20 w-32 md:w-40 bg-linear-to-r from-gray-200 to-gray-300 rounded flex items-center justify-center text-gray-500 font-nunito-sans text-sm">
                    Logo
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}