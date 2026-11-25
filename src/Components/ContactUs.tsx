import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Solar Panel Installation",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Replace with your client's actual phone & WhatsApp number (with country code 91, no +)
  const BUSINESS_PHONE = "+919876543210";
  const WHATSAPP_NUMBER = "919876543210";

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Format message and open WhatsApp directly (zero backend required)
    const text = `*New Service Inquiry - Progressive Electrical*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Area/Location:* ${formData.location || "Not specified"}%0A*Email:* ${formData.email || "N/A"}%0A*Details:* ${formData.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            Fast Response & Site Visits
          </span>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Us & Get a Free Quote
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Need urgent electrical repair, new house wiring, or a rooftop solar installation estimate? Call us directly or send your details below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left Column: Direct Contact Info (2 cols) */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-8 lg:col-span-2">
            <div>
              <h2 className="text-xl font-bold text-amber-400">
                Progressive Electrical
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Licensed electrical contractors & rooftop solar installation specialists.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-slate-400">Call Directly</p>
                    <a
                      href={`tel:${BUSINESS_PHONE}`}
                      className="mt-0.5 block text-base font-semibold text-white hover:text-amber-400"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-emerald-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-slate-400">WhatsApp Support</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 block text-base font-semibold text-emerald-400 hover:underline"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-slate-400">Email</p>
                    <a
                      href="mailto:info@progressiveelectrical.in"
                      className="mt-0.5 block text-sm font-medium text-slate-200 hover:text-amber-400"
                    >
                      info@progressiveelectrical.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-slate-400">Service Hours</p>
                    <p className="mt-0.5 text-sm text-slate-200">
                      Mon – Sat: 8:00 AM – 8:00 PM
                    </p>
                    <p className="text-xs text-amber-400">
                      Emergency fault repair available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Note */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-800/50 p-4 text-xs text-slate-300">
              <strong className="text-white">Service Coverage:</strong> Residential homes, apartments, shops, offices, and industrial sheds.
            </div>
          </div>

          {/* Right Column: Quote / Callback Form (3 cols) */}
          <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold text-slate-900">
              Request a Callback or Site Visit
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill out the details below and our team will reach out shortly.
            </p>

            {submitted && (
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                Your inquiry details have been prepared! If WhatsApp didn’t open automatically, please call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98765 43210"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="Solar Panel Installation">Solar Panel Installation</option>
                    <option value="Solar Maintenance / Cleaning">Solar Maintenance / Cleaning</option>
                    <option value="Electrical Repair / Fault Fix">Electrical Repair / Fault Fix</option>
                    <option value="New House / Office Wiring">New House / Office Wiring</option>
                    <option value="Inverter / MCB / DB Board Setup">Inverter / MCB / DB Board Setup</option>
                    <option value="Other Electrical Labour">Other Electrical Labour</option>
                  </select>
                </div>

                {/* Area / Locality */}
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Area / Locality
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Salt Lake, Kolkata"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email Address <span className="text-xs text-slate-400">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Message / Work Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Work Details / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirement (e.g., 3kW rooftop solar setup, or short circuit issue in 2BHK flat)..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;