import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { destinations } from "@/lib/data";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Destinations() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Destinations
          </motion.h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From the sun-drenched coasts of the Mediterranean to the snow-capped peaks of the Alps, explore our collection of extraordinary properties.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                  {destination.price}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-1 text-secondary text-sm mb-2 font-medium">
                      <MapPin className="w-4 h-4" />
                      {destination.location}
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-2">{destination.name}</h2>
                  </div>
                  <div className="flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded text-primary font-bold">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    {destination.rating}
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex gap-4">
                  <Link href="/booking">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full">Book Now</Button>
                  </Link>
                  <Button variant="outline" className="flex-1 rounded-full border-primary/20 hover:bg-neutral-50">View Details</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
