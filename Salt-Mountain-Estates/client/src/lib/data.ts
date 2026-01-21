import { LucideIcon, Globe, MapPin, Star, Calendar, Shield, Users, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
// Import images using assets alias
import villaImage from '@assets/stock_images/luxury_villa_with_oc_ec5b0c29.jpg';
import resortImage from '@assets/stock_images/tropical_luxury_reso_08939c5e.jpg';
import cabinImage from '@assets/stock_images/luxury_mountain_cabi_a4172227.jpg';
import hotelImage from '@assets/stock_images/modern_luxury_hotel__a7086a5b.jpg';

export interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  description: string;
}

export interface Package {
  id: number;
  title: string;
  duration: string;
  price: string;
  image: string;
  features: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Azure Coast Villa",
    location: "Amalfi Coast, Italy",
    image: villaImage,
    price: "$2,500 / night",
    rating: 4.9,
    description: "Cliffside luxury with panoramic ocean views and private infinity pool.",
  },
  {
    id: 2,
    name: "Serenity Palms Resort",
    location: "Maldives",
    image: resortImage,
    price: "$3,200 / night",
    rating: 5.0,
    description: "Overwater bungalows featuring glass floors and direct lagoon access.",
  },
  {
    id: 3,
    name: "Alpine Summit Lodge",
    location: "Aspen, USA",
    image: cabinImage,
    price: "$4,500 / night",
    rating: 4.8,
    description: "Ski-in/ski-out luxury chalet with gourmet kitchen and spa facilities.",
  },
  {
    id: 4,
    name: "The Royal Obsidian",
    location: "Dubai, UAE",
    image: hotelImage,
    price: "$1,800 / night",
    rating: 4.9,
    description: "Urban opulence in the heart of the city with rooftop dining and spa.",
  },
];

export const packages: Package[] = [
  {
    id: 1,
    title: "Mediterranean Escape",
    duration: "7 Days / 6 Nights",
    price: "$15,000",
    image: villaImage,
    features: ["Private Yacht Charter", "Michelin Star Dining", "Personal Concierge"],
  },
  {
    id: 2,
    title: "Alpine Adventure",
    duration: "5 Days / 4 Nights",
    price: "$12,500",
    image: cabinImage,
    features: ["Heliskiing", "Private Chef", "Spa Treatments"],
  },
  {
    id: 3,
    title: "Tropical Paradise",
    duration: "10 Days / 9 Nights",
    price: "$22,000",
    image: resortImage,
    features: ["Private Island Access", "Underwater Dining", "Seaplane Transfer"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Eleanor Sterling",
    role: "CEO, Sterling Inc.",
    content: "Salt Mountain Properties curated the most exquisite vacation for our anniversary. Every detail was flawless.",
  },
  {
    id: 2,
    name: "Jameson Ford",
    role: "Architect",
    content: "The properties are simply stunning. I've never seen such attention to architectural beauty and comfort.",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Fashion Designer",
    content: "An absolute dream. The concierge service anticipated needs I didn't even know I had.",
  },
];

export const faqs = [
  {
    question: "What is included in the luxury packages?",
    answer: "Our packages are all-inclusive, covering private transfers, accommodation, gourmet meals, and curated experiences specific to your destination.",
  },
  {
    question: "Do you offer bespoke itineraries?",
    answer: "Absolutely. Our travel designers work closely with you to craft a completely personalized itinerary based on your preferences.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation terms for our members. Specific details vary by property and season, but we prioritize your peace of mind.",
  },
];
