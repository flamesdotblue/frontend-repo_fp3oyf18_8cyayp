import { useMemo, useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Scissors, Brush, Sparkles, CheckCircle2 } from "lucide-react";

const SERVICES = [
  { value: "cut", label: "Cut & Style", icon: Scissors },
  { value: "color", label: "Color & Highlights", icon: Brush },
  { value: "treatment", label: "Treatment", icon: Sparkles },
];

function Field({ label, htmlFor, children }) {
  return (
    <div className="space-y-1">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "cut",
    date: "",
    time: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function randomRef() {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setSuccess(null);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess({ ref: randomRef(), when: `${form.date} at ${form.time}` });
    setForm((f) => ({ ...f, notes: "" }));
  }

  return (
    <section id="booking" className="bg-gradient-to-b from-white to-rose-50/50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Book an appointment</h2>
            <p className="mt-2 text-gray-600">
              Pick a service, choose your date, and we’ll confirm right away.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Full name" htmlFor="name">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                      required
                    />
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </Field>

                <Field label="Email" htmlFor="email">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@email.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                      required
                    />
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </Field>

                <Field label="Phone" htmlFor="phone">
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                      required
                    />
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </Field>

                <Field label="Service" htmlFor="service">
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                    >
                      {SERVICES.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                    <Scissors className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </Field>

                <Field label="Preferred date" htmlFor="date">
                  <div className="relative">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={minDate}
                      value={form.date}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                      required
                    />
                    <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </Field>

                <Field label="Preferred time" htmlFor="time">
                  <div className="relative">
                    <input
                      id="time"
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                      required
                    />
                    <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </Field>
              </div>

              <Field label="Notes (optional)" htmlFor="notes">
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Anything we should know ahead of time?"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-rose-500/0 focus:ring-2"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:bg-rose-700 disabled:opacity-70"
              >
                {submitting ? "Booking..." : "Confirm appointment"}
              </button>

              {success && (
                <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-semibold">Appointment confirmed</p>
                    <p className="text-sm">Reference {success.ref} for {success.when}. We’ve sent a confirmation to your email.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <aside className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">What to expect</h3>
            <ul className="mt-4 space-y-4 text-gray-600">
              <li>• Complimentary consultation to tailor the service to you.</li>
              <li>• Premium products chosen for your hair type and goals.</li>
              <li>• Zero-pressure environment with clear pricing.</li>
              <li>• Text reminders 24 hours before your visit.</li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1590540179856-5ee2fa819fcc?q=80&w=1640&auto=format&fit=crop"
                alt="Stylist working with client"
                className="h-72 w-full object-cover"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
