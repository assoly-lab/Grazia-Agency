"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/features/components/ui/carousel"
import Image from "next/image"
import AnimatedCounter from "../shared/AnimatedCounter"

interface StatItem {
  number: number
  label: string
}

export default function OurWork() {
  const portfolioItems = [
    {
      id: 1,
      image: "/modern-web-design-portfolio.jpg",
      title: "Project 1",
    },
    {
      id: 2,
      image: "/web-development-project.png",
      title: "Project 2",
    },
    {
      id: 3,
      image: "/digital-agency-website.png",
      title: "Project 3",
    },
    {
      id: 4,
      image: "/brand-identity-design.png",
      title: "Project 4",
    },
  ]

  const stats: StatItem[] = [
    { number: 628, label: "Clients" },
    { number: 25, label: "Associates" },
    { number: 16, label: "Years Experience" },
    { number: 13, label: "Field of Expertise" },
  ]

  return (
    <section className="w-full bg-background py-20">
      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-12">
          <h2 className="relative text-2xl md:text-4xl font-bold font-open-sans">OUR WORK
          <span className="absolute left-0 -bottom-12 w-16 h-1 bg-red-500 mb-6"></span>
          </h2>
          
          <a href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors font-nunito-sans">
            See more projects →
          </a>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-nunito-sans">
          SGGI boasts a rich and diverse portfolio, reflecting our commitment to turning ideas into reality. From
          bespoke business software development projects for companies of all sizes to innovative websites that have
          redefined our clients&apos; online presence, our portfolio reflects our adaptability and excellence across a wide
          range of business areas.
        </p>

        {/* Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {portfolioItems.map((item) => (
              <CarouselItem key={item.id} className="basis-full md:basis-1/4">
                <div className="relative h-72 md:h-96 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {portfolioItems.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all ${idx === 0 ? "bg-black w-8" : "bg-gray-300 w-2"}`}
            />
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-slate-900 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}