import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import { Scissors, Calendar, Phone, Instagram } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white">
            <Scissors className="h-5 w-5" />
          </span>
          Blossom Salon
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#booking" className="hover:text-gray-900">Book</a>
          <a href="#testimonials" className="hover:text-gray-900">Reviews</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <a
          href="#booking"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-black"
        >
          <Calendar className="h-4 w-4" />
          Reserve
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Blossom Salon. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <a href="tel:5551234567" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Phone className="h-4 w-4" /> (555) 123-4567
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-gray-900"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
