import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ==========================================
// PROJECT GALLERY DATA (Swap placeholder URLs with real client site photos when ready)
// Example: import solarSite1 from "../assets/projects/solar-site-1.jpg";
// ==========================================
const PROJECT_GALLERY = [
  {
    id: "PRJ-01",
    category: "solar",
    tag: "Solar EPC • Commercial",
    title: "Commercial Rooftop On-Grid Solar Plant",
    location: "Madhyamgram & Sodepur Belt",
    specs: "Tier-1 PV Modules • WBSEDCL Net-Metering",
    summary:
      "Elevated galvanized structure with string inverter setup, ACDB/DCDB surge protection, and grid synchronization for daytime commercial load reduction.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "PRJ-02",
    category: "lt-service",
    tag: "LT Distribution • Mass Consumer Network",
    title: "LT Service Network Covering 600+ Consumers",
    location: "North 24 Parganas Service Zone",
    specs: "LT Overhead & Service Line Distribution • Load Balancing",
    summary:
      "Structured low-tension distribution feeder, service-drop connections, pillar boxes, and phase-balanced supply serving up to 600 residential and commercial consumers.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "PRJ-03",
    category: "transformer",
    tag: "Substation & Transformer",
    title: "Plinth-Mounted Distribution Transformer Installation",
    location: "Nimta & Ghola Industrial Corridor",
    specs: "New Erection • Double Earthing Grid • Safety Fencing",
    summary:
      "Complete transformer plinth civil-electrical setup, HT/LT horn-gap fuse protection, copper/GI earthing pits, and WBSEDCL safety inspection clearance.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "PRJ-04",
    category: "solar",
    tag: "Solar EPC • Domestic Rooftop",
    title: "Residential Rooftop Solar Array",
    location: "Nimta, Kolkata - 700049",
    specs: "TATA / Waaree / Adani / Oswal Modules",
    summary:
      "High-efficiency residential rooftop installation engineered for wind resistance, zero roof leakage, and bi-directional smart meter export.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "PRJ-05",
    category: "transformer",
    tag: "11 KV & 33 KV Line Work",
    title: "11 KV & 33 KV O.H & U.G Line Maintenance",
    location: "Barasat – Sodepur Corridor",
    specs: "XLPE Armoured Cable Jointing & Overhead Insulators",
    summary:
      "Preventive shutdown maintenance, pole cross-arm replacement, underground cable fault tracing, and straight-through heat-shrink jointing.",
    image:
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "PRJ-06",
    category: "lt-service",
    tag: "Multistoried & Industrial Wiring",
    title: "Multistoried Complex Main Panel & Rising Mains",
    location: "Greater Kolkata",
    specs: "LT Bulk Panel • Busbar Chamber • Floor DBs",
    summary:
      "Heavy-duty main distribution panel assembly, armoured cable termination, and balanced three-phase internal electrification for multi-unit buildings.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80",
  },
];

function Projects() {
  const navigation = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [previewProject, setPreviewProject] = useState<
    (typeof PROJECT_GALLERY)[number] | null
  >(null);

  const trackRecord = [
    {
      value: "24+",
      title: "Solar Installations",
      detail: "Domestic, commercial & industrial rooftop plants commissioned",
    },
    {
      value: "Up to 600",
      title: "LT Service Consumers",
      detail: "Active low-tension distribution & consumer supply network",
    },
    {
      value: "11 & 33 KV",
      title: "HT/LT & Substation Work",
      detail: "Transformer erection, repair & O.H/U.G line maintenance",
    },
    {
      value: "Since 2023",
      title: "WBSEDCL Licensed",
      detail: "Executed under strict government electrical safety norms",
    },
  ];

  const filterTabs = [
    { key: "all", label: "All Executed Works" },
    { key: "solar", label: "Solar Installations (24+)" },
    { key: "lt-service", label: "LT Service & Wiring (600+ Consumers)" },
    { key: "transformer", label: "Transformers & 11KV/33KV" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((item) => item.category === selectedFilter);

  return (
    <div className="bg-stone-50 text-slate-900">
      {/* Top Banner & Verified Field Numbers */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Field Execution Record</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-300">M/s. Progressive Electrical</span>
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.14]">
            Executed Solar Plants, LT Networks &amp; Substation Projects
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            From commissioning 24+ rooftop solar installations across homes and
            commercial roofs to managing LT service distribution for up to 600
            consumers—every site is built for long-term load stability.
          </p>

          {/* 4-Card Track Record Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trackRecord.map((stat) => (
              <div
                key={stat.title}
                className="rounded-xl border border-slate-800 bg-slate-900/75 p-5"
              >
                <p className="text-2xl font-bold text-amber-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm font-bold text-white">
                  {stat.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlight Split: 24+ Solar & 600 LT Consumers */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Highlight 1: Solar Milestone */}
          <div className="rounded-2xl border border-amber-200/80 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded bg-amber-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-900">
                Solar Deployment Milestone
              </span>
              <span className="font-mono text-sm font-bold text-amber-700">
                24+ Sites
              </span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-950 sm:text-2xl">
              24+ Solar Panel Installations Completed
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              Installed across residential rooftops, commercial buildings, and
              industrial sheds using Tier-1 panels from{" "}
              <strong className="text-slate-900">
                TATA, Waaree, Adani, and Oswal
              </strong>
              —complete with earthing, inverter protection, and WBSEDCL net
              metering.
            </p>
          </div>

          {/* Highlight 2: LT Consumer Scale */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded bg-slate-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Distribution Scale
              </span>
              <span className="font-mono text-sm font-bold text-slate-800">
                600 Consumers
              </span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-950 sm:text-2xl">
              LT Service Network Up to 600 Consumers
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              End-to-end low-tension service connectivity, feeder maintenance,
              distribution boxes, and balanced power delivery supporting up to
              600 domestic and commercial consumers safely.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Visual Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Site Work Showcase
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Field Installations &amp; Infrastructure Gallery
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                    active
                      ? "bg-slate-950 text-amber-400"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:border-amber-400/80"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 rounded-md bg-slate-950/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur-xs">
                  {project.tag}
                </span>

                <button
                  type="button"
                  onClick={() => setPreviewProject(project)}
                  className="absolute right-3 bottom-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-slate-950 shadow-xs transition hover:bg-amber-400"
                >
                  Inspect Photo
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-semibold text-amber-700">
                    {project.location}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3.5">
                  <p className="text-[11px] font-semibold text-slate-500">
                    {project.specs}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing Site Visit CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Start Your Site Work
            </p>
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Planning a rooftop solar setup or LT/HT power connection?
            </h3>
            <p className="mt-1.5 text-sm text-slate-300">
              Speak directly with our team at +91 98741 49838 / +91 98367 21481
              for a site inspection.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigation("/contact")}
            className="shrink-0 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Request Site Inspection
          </button>
        </div>
      </section>

      {/* Lightbox Modal for Photo Inspection */}
      {previewProject && (
        <div
          onClick={() => setPreviewProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-2xl"
          >
            <div className="relative aspect-16/10 w-full bg-black">
              <img
                src={previewProject.image}
                alt={previewProject.title}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setPreviewProject(null)}
                aria-label="Close preview"
                className="absolute top-3 right-3 rounded-lg bg-slate-950/90 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-500 hover:text-slate-950"
              >
                Close &times;
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {previewProject.tag} &bull; {previewProject.location}
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                {previewProject.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {previewProject.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;