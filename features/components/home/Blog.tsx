"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/features/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/digital-marketing-strategy-blog.jpg",
      title: "Comment améliorer la conversion de votre site web en 5 étapes ?",
    },
    {
      id: 2,
      image: "/web-design-importance.jpg",
      title: "L'importance de créer un site web sur mesure pour votre entreprise",
    },
    {
      id: 3,
      image: "/modern-office.png",
      title: "Agences de Communication: Réponses aux 10 Questions Fréquentes",
    },
    {
      id: 4,
      image: "/digital-visibility-online.jpg",
      title: "Agence de Communication : Boostez Votre Visibilité en Ligne",
    },
  ]

  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 items-center justify-between mb-12">
          <h2 className="relative text-4xl md:text-5xl font-bold font-open-sans">
            BLOG
            <span className="absolute left-0 -bottom-12 w-16 h-1 bg-red-500 mb-6"></span>
          </h2>

          <Link href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors font-nunito-sans">
            See more articles →
          </Link>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-nunito-sans">
          Don&apos;t be disconnected and alone with your marketing challenges! Discover the latest news and buzz from
          the world of digital and communications with our original blogs!
        </p>

        {/* Blog Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="basis-full md:basis-1/4">
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  {/* Blog Image */}
                  <div className="relative h-64 md:h-72 rounded-t-lg overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Blog Title */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground leading-tight font-nunito-sans hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {blogPosts.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all ${idx === 0 ? "bg-red-600 w-8" : "bg-gray-300 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}