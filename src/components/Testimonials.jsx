import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maya P.",
    text: "I booked color and cut in under two minutes. The results were gorgeous! The whole process felt premium.",
    rating: 5,
  },
  {
    name: "Jasmine R.",
    text: "The treatment revived my hair. Loved the calm vibe and the easy booking. My new go-to.",
    rating: 5,
  },
  {
    name: "Taylor S.",
    text: "Friendly stylists and clear pricing. The reminders were a nice touch and I started right on time.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? "fill-amber-400" : "opacity-30"}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What clients say</h2>
          <p className="mt-2 text-gray-600">Real experiences from our community.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Stars count={t.rating} />
              <blockquote className="mt-3 text-gray-700 leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
