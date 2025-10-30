import { Calendar, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium">
              <Calendar className="h-4 w-4" />
              Book your glow-up today
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Salon Appointments, made modern.
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Discover effortless booking, curated services, and stylists who bring your look to life. Up-level your self-care routine in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-5 py-3 text-white font-medium shadow hover:bg-rose-700 transition">
                <Calendar className="h-5 w-5" />
                Book an appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-gray-800 font-medium bg-white hover:bg-gray-50 transition">
                Explore services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-600" /><span>(555) 123-4567</span></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-600" /><span>123 Blossom Ave, Suite 8</span></div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1593702295097-8b1464a0857b?q=80&w=1640&auto=format&fit=crop"
                alt="Modern salon interior"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white/70 backdrop-blur px-4 py-3 shadow-lg ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-900">Same-week availability</p>
              <p className="text-xs text-gray-600">Morning, afternoon, and evening slots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
