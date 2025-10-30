import { Scissors, Brush, Sparkles } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cut & Style",
    description:
      "Precision cuts, blowouts, and styling tailored to your face shape and lifestyle.",
    price: "$45+",
  },
  {
    icon: Brush,
    title: "Color & Highlights",
    description:
      "Gloss, balayage, and full color with premium, hair-friendly formulas.",
    price: "$95+",
  },
  {
    icon: Sparkles,
    title: "Treatments",
    description:
      "Deep conditioning, keratin smooth, and scalp therapy for healthy shine.",
    price: "$35+",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Our services
            </h2>
            <p className="mt-2 text-gray-600">
              Select from our most-loved treatments or mix and match for a custom look.
            </p>
          </div>
          <a href="#booking" className="hidden sm:inline-flex rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">
            Book now
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, price }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:border-rose-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-rose-600">{price}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
              <a
                href="#booking"
                className="mt-4 inline-flex text-sm font-medium text-rose-700 hover:text-rose-800"
              >
                Reserve this service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
