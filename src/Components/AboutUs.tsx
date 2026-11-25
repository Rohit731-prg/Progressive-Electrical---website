import { useNavigate } from "react-router-dom";
import Amit from "../assets/Amit.png";
import Subhonkor from "../assets/Subhonkor.png";
import { offices } from "../Utils/office";

function AboutUs() {
  const navigation = useNavigate();

  const capabilities = [
    {
      code: "01",
      title: "High-Tension & Distribution Infrastructure",
      detail:
        "New transformer installation, transformer repairing, LT Bulk & HT Bulk connections, and 11 KV & 33 KV overhead and underground line maintenance.",
    },
    {
      code: "02",
      title: "Commercial & Multistoried Electrification",
      detail:
        "Complete internal and external wiring for multistoried residential complexes, commercial establishments, and industrial sheds.",
    },
    {
      code: "03",
      title: "Solar EPC — Domestic, Commercial & Industrial",
      detail:
        "End-to-end rooftop and ground-mounted solar panel installation using Tier-1 modules from TATA, Waaree, Adani, and Oswal.",
    },
  ];



  return (
    <div className="bg-stone-50 text-slate-900">
      {/* Top Editorial Banner */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber-700">
            <span>Govt. Licensed Solar &amp; Electrical Contractor</span>
            <span className="text-slate-300">|</span>
            <span>Powered by WBSEDCL</span>
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.15]">
            Built on field discipline, licensed safety, and heavy electrical execution.
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-slate-200 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                <strong className="font-semibold text-slate-950">
                  M/s. Progressive Electrical
                </strong>{" "}
                operates across North 24 Parganas and Greater Kolkata as a
                registered electrical and solar contracting firm. Rather than
                limiting our work to minor domestic fixes, our field teams
                handle high-load infrastructure—from 11 KV and 33 KV overhead and
                underground line maintenance to transformer installations,
                multistoried building wiring, and industrial solar plants.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-stone-50 p-5 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Company Motto
                </p>
                <p className="mt-1 text-lg font-bold italic text-slate-900">
                  &ldquo;Light Up Your World With Us&rdquo;
                </p>
              </div>
              <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">GSTIN:</span>{" "}
                19BXFPB3340H1ZZ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Proprietors Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
            Leadership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            The Proprietors Behind Every Site
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Every transformer commissioning, HT/LT bulk setup, and rooftop
            solar array is directly overseen by the firm&rsquo;s proprietors to
            ensure WBSEDCL compliance and on-site safety.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Proprietor 1: Subhankar Barai */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white sm:flex-row">
            <div className="w-full shrink-0 bg-slate-100 sm:w-52">
              <img
                src={Subhonkor}
                alt="Subhankar Barai - Proprietor, M/s. Progressive Electrical"
                className="h-72 w-full object-cover object-top sm:h-full"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="inline-block rounded bg-slate-900 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Proprietor
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  Subhankar Barai
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Leads project planning, utility coordination under WBSEDCL
                  norms, and end-to-end execution across industrial wiring and
                  solar deployment sites.
                </p>
              </div>
              <p className="mt-5 border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
                M/s. Progressive Electrical
              </p>
            </div>
          </div>

          {/* Proprietor 2: Amit Singha */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white sm:flex-row">
            <div className="w-full shrink-0 bg-slate-100 sm:w-52">
              <img
                src={Amit}
                alt="Amit Singha - Proprietor, M/s. Progressive Electrical"
                className="h-72 w-full object-cover object-top sm:h-full"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="inline-block rounded bg-slate-900 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Proprietor
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  Amit Singha
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Oversees field operations, high-voltage line maintenance teams,
                  transformer installations, and client site inspections across
                  Kolkata and adjoining industrial belts.
                </p>
              </div>
              <p className="mt-5 border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
                M/s. Progressive Electrical
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision, Mission & Work Ethics (Asymmetric 2-Column Layout) */}
      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Direction &amp; Standards
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Our Vision &amp; Commitment
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Electrical infrastructure fails when shortcuts are taken. Our
                focus is straightforward: deliver clean, regulation-grade power
                and solar systems that run reliably for decades without recurring
                breakdown headaches.
              </p>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-base font-bold text-amber-400">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  To be the most dependable electrical and renewable energy
                  contracting partner in West Bengal—bridging heavy grid-level
                  engineering with clean solar power for homes, housing
                  complexes, and industries alike.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-base font-bold text-amber-400">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Execute every HT/LT bulk installation, transformer setup, and
                  rooftop solar project using certified materials (TATA, Waaree,
                  Adani, Oswal), trained technicians, and strict adherence to
                  government safety codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Scope */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Technical Scope
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
              What Our Teams Execute
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigation("/services")}
            className="self-start text-sm font-semibold text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700 sm:self-auto"
          >
            View full service details &rarr;
          </button>
        </div>

        <div className="mt-8 divide-y divide-slate-200">
          {capabilities.map((item) => (
            <div
              key={item.code}
              className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:items-baseline"
            >
              <span className="font-mono text-sm font-bold text-amber-700 sm:col-span-1">
                {item.code}
              </span>
              <h3 className="text-lg font-bold text-slate-950 sm:col-span-4">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:col-span-7">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated Associate Partner Section (Dipti Oxygen) */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Identity Panel */}
            <div className="flex flex-col justify-between border-b border-slate-200 bg-stone-100/80 p-7 sm:p-9 lg:col-span-5 lg:border-r lg:border-b-0">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
                  Associate Partner
                </p>
                <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Dipti Oxygen
                </h2>
                <div className="mt-4 inline-flex items-center gap-2.5 border-l-2 border-amber-600 pl-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">
                      Proprietor
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Dipankar Barai
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs font-medium tracking-wide text-slate-500">
                Allied Industrial Concern &bull; West Bengal
              </p>
            </div>

            {/* Right Context & Synergy Panel */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Operational Alliance
              </p>
              <p className="mt-2.5 text-base leading-relaxed text-slate-700">
                Operating in close coordination with{" "}
                <strong className="font-semibold text-slate-950">
                  M/s. Progressive Electrical
                </strong>
                , <strong className="font-semibold text-slate-950">Dipti Oxygen</strong>{" "}
                serves as our dedicated associate enterprise—supporting allied
                industrial supply and site-level operational requirements across
                our project network.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 text-xs">
                <div>
                  <span className="block text-slate-400">Association</span>
                  <span className="mt-0.5 block font-semibold text-slate-800">
                    Sister / Associate Concern
                  </span>
                </div>
                <div>
                  <span className="block text-slate-400">Leadership</span>
                  <span className="mt-0.5 block font-semibold text-slate-800">
                    Dipankar Barai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations & Direct Action */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
            Local Presence
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
            Our Offices in Kolkata
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.tag}
                className="rounded-xl border border-slate-200 bg-stone-50 p-5"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {office.tag}
                </span>
                <h3 className="mt-1 text-base font-bold text-slate-950">
                  {office.area}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {office.address}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-lg font-bold sm:text-xl">
                Planning an HT/LT setup, transformer job, or solar installation?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Speak directly with our team at 9874149838 / 9836721481 or
                schedule a site visit.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigation("/contact")}
              className="shrink-0 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;