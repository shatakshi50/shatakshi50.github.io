import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Salt Mountain</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the pinnacle of luxury travel and property management. We curate unforgettable journeys and exclusive stays.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/destinations"><a className="hover:text-white transition-colors">Destinations</a></Link></li>
              <li><Link href="/packages"><a className="hover:text-white transition-colors">Packages</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/booking"><a className="hover:text-white transition-colors">Book a Stay</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>123 Ocean Drive, Suite 500<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+1 (800) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>concierge@saltmountain.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Newsletter</h4>
            <p className="mb-4 text-sm text-primary-foreground/80">Subscribe for exclusive offers and travel inspiration.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-2 text-white placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary"
              />
              <button className="bg-secondary text-secondary-foreground font-medium py-2 rounded-md hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Salt Mountain Properties. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
