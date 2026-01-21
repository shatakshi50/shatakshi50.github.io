import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { packages } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Packages() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-primary pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Curated Packages
          </motion.h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            All-inclusive experiences designed for the discerning traveler.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-serif font-bold text-white">{pkg.title}</h3>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>{pkg.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-secondary/10 p-1 rounded-full">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                  <Link href="/booking">
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-full py-6 text-lg">
                      Reserve Package
                    </Button>
                  </Link>
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
