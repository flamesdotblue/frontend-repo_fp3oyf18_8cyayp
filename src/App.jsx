import { Scissors, Calendar, Instagram, Phone } from "lucide-react";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Salons from "./components/Salons";
import Testimonials from "./components/Testimonials";
import { useState } from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white">
            <Scissors className="h-5 w-5" />
          </span>
          City Salons
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#directory" className="hover:text-gray-900">Directory</a>
          <a href="#testimonials" className="hover:text-gray-900">Reviews</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <a
          href="#directory"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-black"
        >
          <Calendar className="h-4 w-4" />
          Browse
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
          © {new Date().getFullYear()} City Salons. All rights reserved.
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
  const [filters, setFilters] = useState({ query: "", service: "all", area: "all", sort: "top" });

  function updateFilters(patch) {
    setFilters((f) => ({ ...f, ...patch }));
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <section id="directory">
          <Filters
            query={filters.query}
            service={filters.service}
            area={filters.area}
            sort={filters.sort}
            onChange={updateFilters}
          />
          <Salons
            query={filters.query}
            service={filters.service}
            area={filters.area}
            sort={filters.sort}
          />
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
