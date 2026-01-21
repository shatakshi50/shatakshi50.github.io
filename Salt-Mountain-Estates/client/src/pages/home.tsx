import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Footer from "@/components/ui/footer";
import { destinations, packages, testimonials } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      
      {/* Featured Destinations */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm block mb-2">Exclusive Stays</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Featured Destinations</h2>
          </div>
          <Link href="/destinations">
            <Button variant="link" className="text-primary hover:text-secondary p-0 h-auto text-lg mt-4 md:mt-0 group">
              View All <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white w-full bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-1 text-sm mb-1 opacity-90">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {destination.location}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{destination.name}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-primary font-medium">{destination.price}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  {destination.rating}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <span className="text-secondary font-medium tracking-widest uppercase text-sm block mb-4">Our Philosophy</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
               Crafting Journeys <br/> Beyond Imagination
             </h2>
             <p className="text-white/80 text-lg leading-relaxed mb-8">
               At Salt Mountain Properties, we believe that travel is an art form. Every property in our portfolio is hand-selected for its unique character, breathtaking location, and uncompromising luxury. We don't just offer accommodation; we curate experiences that linger in your memory forever.
             </p>
             <Link href="/about">
               <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary rounded-full px-8">
                 Read Our Story
               </Button>
             </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <img src={packages[0].image} alt="Luxury experience" className="rounded-lg object-cover h-64 w-full translate-y-8" />
              <img src={packages[1].image} alt="Luxury dining" className="rounded-lg object-cover h-64 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 px-6 container mx-auto bg-neutral-50">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm block mb-2">Curated Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Signature Packages</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
             <motion.div
               key={pkg.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
             >
               <div className="mb-6 h-48 overflow-hidden rounded-lg">
                 <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
               </div>
               <h3 className="text-2xl font-serif font-bold text-primary mb-2">{pkg.title}</h3>
               <p className="text-muted-foreground mb-4">{pkg.duration}</p>
               <ul className="space-y-2 mb-8">
                 {pkg.features.map((feature, i) => (
                   <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                     <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                     {feature}
                   </li>
                 ))}
               </ul>
               <div className="flex items-center justify-between border-t pt-6">
                 <span className="text-xl font-bold text-primary">{pkg.price}</span>
                 <Link href="/booking">
                   <Button className="rounded-full bg-primary hover:bg-primary/90">Details</Button>
                 </Link>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 container mx-auto">
         <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-16">What Our Guests Say</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((t, index) => (
             <div key={t.id} className="bg-white p-8 rounded-xl border border-gray-100 relative">
               <div className="text-6xl font-serif text-secondary/20 absolute top-4 left-6">"</div>
               <p className="text-gray-600 italic mb-6 relative z-10 pt-4">{t.content}</p>
               <div>
                 <h4 className="font-bold text-primary">{t.name}</h4>
                 <p className="text-sm text-secondary">{t.role}</p>
               </div>
             </div>
           ))}
         </div>
      </section>
      
      <Footer />
    </div>
  );
}
