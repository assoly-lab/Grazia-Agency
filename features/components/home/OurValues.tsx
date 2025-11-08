"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/features/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"

const VALUES = [
  {
    id: 1,
    title: "Integrity",
    description:
      "It is the cornerstone of our communication agency. For our company, it means being honest, transparent and reliable at every step of the process. It is the common thread that builds strong relationships with our clients, partners and colleagues.",
    icon: "✋",
  },
  {
    id: 2,
    title: "Expertise",
    description:
      "This is the compass that guides our agency towards excellence. Our company views each project as an opportunity to apply our in-depth know-how and specialized knowledge to deliver exceptional solutions.",
    icon: "</>",
  },
  {
    id: 3,
    title: "Innovation and Creativity",
    description:
      "Innovation and creativity are the catalysts of our agency, propelling each project to new heights. We believe in the power of pushing boundaries, exploring bold ideas, and creating solutions that captivate and inspire.",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Passion",
    description:
      "Passion is the fuel that powers the soul of our agency. We firmly believe that passion brings every project to life, transforming work into a true expression of dedication.",
    icon: "❤️",
  },
]

export default function OurValues() {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-open-sans">
              OUR VALUES
            </h2>
            <div className="w-16 h-1 bg-red-500 mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-nunito-sans">
              At SGGI, we see our values as the foundation of every idea we conceptualise and every project we
              undertake!
            </p>
            <div className="flex flex-col gap-3">
              <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-6 text-base cursor-pointer font-open-sans">
                <Mail />
                CONTACT US
              </Button>
              <Button
                variant="outline"
                className="bg-green-500 hover:bg-green-600 text-white hover:text-white border-0 rounded-lg py-6 text-base cursor-pointer font-open-sans"
              >
                <PhoneCall />
                WHATSAPP US!
              </Button>
            </div>
          </div>

          {/* Right Column - Values Grid with connecting lines */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {VALUES.map((value) => (
                  <div
                    key={value.id}
                    className="group bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{value.icon}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition- font-open-sans">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm mb-4 font-nunito-sans">{value.description}</p>
                    <div className="flex items-center text-red-500 text-sm font-semibold hover:text-red-400 cursor-pointer transition-colors font-open-sans">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}