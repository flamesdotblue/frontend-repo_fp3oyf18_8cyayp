import { Search, Scissors, MapPin } from "lucide-react";

const serviceOptions = [
  { value: "all", label: "All services" },
  { value: "cut", label: "Cut & Style" },
  { value: "color", label: "Color" },
  { value: "treatment", label: "Treatment" },
  { value: "nails", label: "Nails" },
  { value: "spa", label: "Spa" },
];

const areaOptions = [
  { value: "all", label: "All neighborhoods" },
  { value: "downtown", label: "Downtown" },
  { value: "midtown", label: "Midtown" },
  { value: "uptown", label: "Uptown" },
  { value: "riverside", label: "Riverside" },
];

const sortOptions = [
  { value: "top", label: "Top rated" },
  { value: "reviews", label: "Most reviewed" },
  { value: "price", label: "Lowest price" },
];

export default function Filters({ query, service, area, sort, onChange }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="relative sm:col-span-2">
            <input
              type="text"
              value={query}
              onChange={(e) => onChange({ query: e.target.value })}
              placeholder="Search salons by name"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={service}
              onChange={(e) => onChange({ service: e.target.value })}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
            >
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <Scissors className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={area}
              onChange={(e) => onChange({ area: e.target.value })}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
            >
              {areaOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <MapPin className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">Filter results by service and neighborhood.</p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => onChange({ sort: e.target.value })}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
