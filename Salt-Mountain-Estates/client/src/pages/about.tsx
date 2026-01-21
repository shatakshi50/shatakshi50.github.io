import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";
import { Shield, Users, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary text-white pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            The Art of <br/> Hosting
          </motion.h1>
          <p className="text-xl max-w-2xl text-white/80 leading-relaxed font-light">
            Salt Mountain Properties was founded on a simple yet ambitious premise: to redefine the luxury rental market by combining the privacy of a home with the service of a five-star hotel.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 2015, Salt Mountain began with a single chalet in the Swiss Alps. We realized that discerning travelers wanted more than just a place to sleep; they wanted an immersive experience, a connection to the local culture, and impeccable service without intrusion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, our portfolio spans three continents, yet our philosophy remains unchanged. We personally vet every property, ensuring it meets our exacting standards for design, location, and comfort.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-neutral-100 rounded-lg h-64 w-full"></div> 
             <div className="bg-neutral-200 rounded-lg h-64 w-full mt-12"></div> 
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary">Why Choose Salt Mountain</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Curated Portfolio", desc: "Every property is hand-picked and verified." },
              { icon: Users, title: "Personal Concierge", desc: "24/7 support for every aspect of your stay." },
              { icon: Globe, title: "Global Reach", desc: "Exclusive access to homes in 30+ countries." },
              { icon: Award, title: "Unmatched Quality", desc: "Consistent 5-star standards across all locations." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
