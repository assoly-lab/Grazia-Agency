"use client"

import type React from "react"
import { ArrowRight, Code2, Zap, BarChart3, Globe, Smartphone, PenTool } from "lucide-react"
import { Button } from "@/features/components/ui/button"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const OurBusinesses = () => {
  const services: Service[] = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Business Software",
      description:
        "Custom software solutions tailored to your business needs. Customised applications, mobile apps, and enterprise solutions.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and e-commerce platforms. Website design, maintenance, and domain hosting.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Digital Marketing",
      description:
        "360° digital strategy for your brand growth. SEO, paid advertising, social media, and content creation.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Branding",
      description: "Visual identity and strategic brand positioning. Logo design, brand strategy, and visual creation.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Solutions",
      description: "Powerful mobile applications for iOS and Android. Native apps and cross-platform development.",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Creative Services",
      description: "Expert creative solutions for modern brands. Content creation, consulting, and strategy planning.",
    },
  ]

  return (
    <section className="w-full bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-nunito-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-4 font-open-sans">Our core businesses</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-open-sans">
            Diverse Expertise, Concrete Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The SGGI communications agency is distinguished by the diversity of its areas of activity, 
            offering a full range of services to meet the dynamic needs of our customers.

            SGGI creates a relevant and effective approach to boosting its clients&apos; online presence and achieving concrete marketing objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="relative flex flex-col p-6 rounded-lg border border-border bg-card shadow-md">
              {/* Icon */}
              <div className="w-10 h-10 rounded-md bg-red-600 text-white flex items-center justify-center mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2 font-open-sans">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              {/*logo*/}
              <div className="absolute -bottom-4 right-4 bg-white rounded-full shadow-md">
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#d1d5db" strokeWidth="1" />
                <circle cx="24" cy="24" r="10" fill="currentColor" className="text-red-600" />
                <circle cx="24" cy="24" r="6" fill="white" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg border border-border bg-card p-8 md:p-12 shadow-md">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-open-sans">Ready to transform your business?</h3>
            <p className="text-muted-foreground">
              Let&apos;s discuss how our 360° approach can help you achieve your goals.
            </p>
          </div>

          <div className="flex gap-3 shrink-0 w-full md:w-auto flex-col md:flex-row">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold font-open-sans cursor-pointer">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="font-semibold bg-transparent font-open-sans cursor-pointer">
              <span className="flex items-center gap-2">
                WhatsApp Us
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBusinesses
