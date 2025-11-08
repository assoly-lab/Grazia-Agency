import { ArrowRight } from "lucide-react"
import { Button } from "@/features/components/ui/button"
import Image from "next/image"


export default function WhatWeDo2() {
    return (
      <section className="w-full bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
             {/* Mobile-first: Image appears first on mobile, second on desktop */}
             <div className="order-first md:order-last">
               <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                 <Image
                   src="/360-communications-agency-modern-office.jpg"
                   alt="SGGI Communications Agency"
                   fill
                   className="object-cover shadow-lg"
                 />
               </div>
             </div>
   
             {/* Text and CTA content */}
             <div className="order-last md:order-first">
               <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-4 font-roboto-slab">Our Services</p>
               <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-open-sans">
                 What does a 360° communications agency do?
               </h2>
               <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 font-nunito-sans">
                 How do you find a communications agency that can help you achieve your goals? How can I find a
                 communications agency specialising in business software development and website design?
               </p>
               <p className="text-foreground leading-relaxed mb-8 font-nunito-sans">
                 SGGI is your expert partner! Our agency works with you to bring all your projects to fruition with greater
                 creativity and performance, whether it&apos;s business software development, intuitive website design, SEO and
                 digital strategies.
               </p>
   
               <div className="flex flex-row gap-3">
                 <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">
                   Contact Us
                 </Button>
                 <Button size="lg" variant="outline" className="font-semibold bg-transparent rounded-lg">
                   <span className="flex items-center gap-2">
                     WhatsApp Us
                     <ArrowRight className="w-4 h-4" />
                   </span>
                 </Button>
               </div>
             </div>
           </div>
         </div>
       </section>
    );
}