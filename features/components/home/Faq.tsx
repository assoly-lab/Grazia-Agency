"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is the main role of the communication agency?",
    answer:
      "Our role is to provide comprehensive communication solutions that help businesses connect with their audience, build brand identity, and achieve their marketing goals through strategic planning and creative execution.",
  },
  {
    id: 2,
    question: "What are the main areas of activity of the communication agency?",
    answer:
      "We specialize in digital marketing, brand strategy, content creation, web development, SEO optimization, and social media management. Our services are tailored to meet the unique needs of each client.",
  },
  {
    id: 3,
    question: "How can I contact the communication agency to benefit from these services?",
    answer:
      "You can reach us through our website contact form, email, or phone. Our team is available to discuss your project requirements and provide customized solutions that align with your business objectives.",
  },
  {
    id: 4,
    question: "How can I increase my website's visibility on search engines?",
    answer:
      "We employ SEO best practices including keyword optimization, content strategy, technical SEO, link building, and performance monitoring to help your website rank higher in search results.",
  },
  {
    id: 5,
    question: "I'm getting less traffic and visitors to my website. What solution would you suggest?",
    answer:
      "We conduct a comprehensive audit of your website and digital presence, then implement targeted strategies including SEO improvements, content optimization, paid advertising, and user experience enhancements.",
  },
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-open-sans mb-4">FAQ</h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-red-500"></div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold font-open-sans mb-6 leading-tight">
              WELCOME TO OUR HELP CENTER, CAN WE HELP YOU?
            </h3>
            <div className="w-16 h-1 bg-red-500 mb-6"></div>
            <p className="text-muted-foreground leading-relaxed mb-4 font-nunito-sans">
              Here are the questions frequently asked by our customers as well as their answers.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-nunito-sans">
              If you need more information on a subject related to management software, website creation, SEO
              referencing, digital marketing strategy or others, we are at your disposal to provide you with the right
              answers!
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-500/50"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-left font-nunito-sans font-medium text-foreground">{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        expandedId === item.id ? "rotate-180" : ""
                      } text-red-500`}
                    />
                  </button>

                  {/* Expanded Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedId === item.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-muted-foreground font-nunito-sans leading-relaxed">{item.answer}</p>
                    </div>
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
