import { MapPin, Star, Scissors, Clock, ArrowUpRight, DollarSign } from "lucide-react";

const SALONS = [
  {
    id: 1,
    name: "Blossom & Co.",
    neighborhood: "downtown",
    rating: 4.9,
    reviews: 312,
    price: 2,
    services: ["cut", "color", "treatment"],
    openNow: true,
    image:
      "https://images.unsplash.com/photo-1593702295097-8b1464a0857b?q=80&w=1640&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Riverside Retreat Spa",
    neighborhood: "riverside",
    rating: 4.7,
    reviews: 188,
    price: 3,
    services: ["spa", "treatment"],
    openNow: false,
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1640&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Uptown Cuts",
    neighborhood: "uptown",
    rating: 4.8,
    reviews: 420,
    price: 1,
    services: ["cut", "treatment"],
    openNow: true,
    image:
      "https://images.unsplash.com/photo-1580618672591-8d08f1a6a3b0?q=80&w=1640&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Color House Studio",
    neighborhood: "midtown",
    rating: 4.6,
    reviews: 256,
    price: 2,
    services: ["color", "treatment"],
    openNow: true,
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba337b74a0b?q=80&w=1640&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Nail & Glow",
    neighborhood: "downtown",
    rating: 4.5,
    reviews: 150,
    price: 1,
    services: ["nails", "spa"],
    openNow: true,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1640&auto=format&fit=crop",
  },
];

function Price({ level }) {
  return (
    <div className="flex items-center gap-0.5 text-emerald-600">
      {Array.from({ length: 3 }).map((_, i) => (
        <DollarSign key={i} className={`h-3.5 w-3.5 ${i < level ? "opacity-100" : "opacity-20"}`} />
      ))}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

export default function Salons({ query, service, area, sort }) {
  let results = SALONS.filter((s) => {
    const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
    const matchesService = service === "all" || s.services.includes(service);
    const matchesArea = area === "all" || s.neighborhood === area;
    return matchesQuery && matchesService && matchesArea;
  });

  if (sort === "top") results.sort((a, b) => b.rating - a.rating);
  if (sort === "reviews") results.sort((a, b) => b.reviews - a.reviews);
  if (sort === "price") results.sort((a, b) => a.price - b.price);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Salons around the city</h2>
            <p className="mt-1 text-gray-600">{results.length} places match your search.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((s) => (
            <article key={s.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                {s.openNow && (
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">Open now</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
                  <Price level={s.price} />
                </div>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-700">
                  <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-amber-500 fill-amber-400" /> {s.rating} <span className="text-gray-500">({s.reviews})</span></span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-rose-600" /> {s.neighborhood}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.services.slice(0, 3).map((sv) => (
                    <Badge key={sv}><Scissors className="h-3.5 w-3.5" /> {sv}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> Walk-ins welcome</div>
                  <a href="#" className="inline-flex items-center gap-1 font-medium text-rose-700 hover:text-rose-800">
                    View details <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
