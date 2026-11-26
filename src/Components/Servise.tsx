import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesList } from "../Utils/servise";
import gasCylinderImage from "../assets/GAS1.png";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const navigation = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const pageRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLElement>(null);

  const oxygenSupplySpecs = [
    {
      label: "Industrial Grade Oxygen",
      detail:
        "High-purity cylinders for metal fabrication, cutting, welding, workshops, and manufacturing units.",
    },
    {
      label: "Medical & Emergency Supply",
      detail:
        "Refilled, pressure-tested cylinders for clinics, nursing homes, and domestic healthcare needs.",
    },
    {
      label: "Bulk & Regular Refilling",
      detail:
        "Scheduled cylinder exchange and timely dispatch across Nimta, Ghola, Madhyamgram, and North 24 Parganas.",
    },
  ];

  const filters = [
    { key: "all", label: "All Services" },
    { key: "ht-lt", label: "Transformers & HT/LT Bulk" },
    { key: "lines", label: "11 KV & 33 KV Lines" },
    { key: "wiring", label: "Building & Industrial Wiring" },
    { key: "solar", label: "Solar Installation" },
  ];

  const visibleServices =
    activeCategory === "all"
      ? servicesList
      : servicesList.filter((item) => item.category === activeCategory);

  const toggleScope = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // GSAP Scroll-Scrubbed Voltage Rail, Staggered Curtain Reveal & Index Parallax
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Header kinetic line & title entrance
      gsap.from(".aw-hero-stagger", {
        yPercent: 110,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
        ease: "power4.out",
        clearProps: "transform",
      });

      // 2. Scroll-scrubbed vertical busbar progress along the services grid
      if (railFillRef.current && gridSectionRef.current) {
        gsap.fromTo(
          railFillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: gridSectionRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.4,
            },
          }
        );
      }

      // 3. Subtle scrubbed vertical parallax on service numbers (/01..06)
      gsap.utils.toArray<HTMLElement>(".aw-index-num").forEach((numEl) => {
        gsap.fromTo(
          numEl,
          { y: 14 },
          {
            y: -14,
            ease: "none",
            scrollTrigger: {
              trigger: numEl,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });

      // 4. Oxygen division kinetic entrance
      gsap.from(".aw-oxygen-reveal", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".aw-oxygen-zone",
          start: "top 78%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Re-animate visible cards cleanly whenever category filter changes
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aw-service-card",
        {
          y: 32,
          opacity: 0,
          scale: 0.985,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: { amount: 0.32, from: "start" },
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    }, gridSectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  // Smooth accordion height animation for each card's technical scope
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    servicesList.forEach((srv) => {
      const panel = document.getElementById(`scope-panel-${srv.id}`);
      if (!panel) return;

      const isOpen = expandedId === srv.id;
      if (prefersReduced) {
        panel.style.height = isOpen ? "auto" : "0px";
        panel.style.opacity = isOpen ? "1" : "0";
        return;
      }

      gsap.to(panel, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: isOpen ? 0.45 : 0.3,
        ease: isOpen ? "power3.out" : "power2.inOut",
      });
    });
  }, [expandedId, activeCategory]);

  // Pointer spotlight coordinates for studio-grade hover illumination
  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spot-x", `${x}px`);
    e.currentTarget.style.setProperty("--spot-y", `${y}px`);
    e.currentTarget.style.setProperty("--spot-opacity", "1");
  };

  const handleCardMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--spot-opacity", "0");
  };

  return (
    <div ref={pageRef} className="overflow-x-clip bg-stone-50 text-slate-900">
      {/* Editorial Header */}
      <section className="relative border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden">
            <div className="aw-hero-stagger flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <span>M/s. Progressive Electrical</span>
              <span className="text-slate-300">|</span>
              <span>WBSEDCL Licensed Contractor</span>
            </div>
          </div>

          <div className="mt-4 overflow-hidden">
            <h1 className="aw-hero-stagger max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.14]">
              Heavy Electrical Infrastructure &amp; Turnkey Solar Execution
            </h1>
          </div>

          <div className="mt-5 overflow-hidden">
            <p className="aw-hero-stagger max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From 11 KV / 33 KV transmission lines and transformer installations
              to multistoried wiring and industrial solar plants—built to utility
              standards across Kolkata and North 24 Parganas.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="aw-hero-stagger mt-9 flex flex-wrap gap-2">
            {filters.map((tab) => {
              const active = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setActiveCategory(tab.key);
                    setExpandedId(null);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
                    active
                      ? "bg-slate-950 text-amber-400 shadow-sm ring-1 ring-slate-950"
                      : "border border-slate-200 bg-stone-50 text-slate-700 hover:border-amber-500/50 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid with Scroll-Scrubbed Voltage Rail */}
      <section
        ref={gridSectionRef}
        className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        {/* Desktop Scroll-Scrubbed Vertical Track */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 bottom-16 left-2 hidden w-0.5 bg-slate-200/80 xl:block"
        >
          <div
            ref={railFillRef}
            className="h-full w-full origin-top scale-y-0 bg-linear-to-b from-amber-500 via-amber-400 to-amber-600"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {visibleServices.map((service) => {
            const isOpen = expandedId === service.id;

            return (
              <div
                key={service.id}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={
                  {
                  "--spot-x": "50%",
                  "--spot-y": "50%",
                  "--spot-opacity": "0",
                  } as CSSProperties
                }
                className="aw-service-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-colors duration-300 hover:border-amber-400/60 sm:p-8"
              >
                {/* Cursor-Tracking Warm Spotlight Layer */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: "var(--spot-opacity)",
                    background:
                      "radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(245, 158, 11, 0.09), transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 transition-transform duration-300 group-hover:scale-150" />
                      {service.badge}
                    </span>
                    <span className="aw-index-num font-mono text-sm font-bold text-slate-400 transition-colors group-hover:text-amber-700">
                      /{service.id}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.summary}
                  </p>

                  {/* Toggle Button for Technical Scope */}
                  <button
                    type="button"
                    onClick={() => toggleScope(service.id)}
                    aria-expanded={isOpen}
                    aria-controls={`scope-panel-${service.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-amber-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 font-mono text-xs text-slate-800 transition-transform duration-300 group-hover:border-amber-500">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span>{isOpen ? "Hide Execution Scope" : "Inspect Execution Scope"}</span>
                  </button>

                  {/* Smooth GSAP Collapsible Scope Panel */}
                  <div
                    id={`scope-panel-${service.id}`}
                    className="h-0 overflow-hidden opacity-0"
                  >
                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <ul className="space-y-2">
                        {service.scope.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {service.brands && (
                        <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                            Panel Brands We Deploy
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {service.brands.map((brand) => (
                              <span
                                key={brand}
                                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-900"
                              >
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => navigation("/contact")}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4 transition hover:text-amber-700"
                  >
                    <span>Request Site Inspection</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Separate Product Supply Section: Oxygen Cylinders */}
      <section className="aw-oxygen-zone border-t border-slate-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="aw-oxygen-reveal mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                Direct Product Supply &bull; Allied Division
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Oxygen Cylinder Sales &amp; Refilling
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-500">
              In association with{" "}
              <strong className="text-slate-800">Dipti Oxygen</strong> (Prop:
              Dipankar Barai)
            </span>
          </div>

          <div className="aw-oxygen-reveal overflow-hidden rounded-2xl border border-sky-200/80 bg-linear-to-br from-sky-50/70 via-white to-slate-50 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative flex min-h-72 flex-col justify-end overflow-hidden border-b border-sky-100 bg-slate-950 p-7 sm:p-9 lg:col-span-5 lg:min-h-full lg:border-r lg:border-b-0">
                <img
                  src={gasCylinderImage}
                  alt="Industrial oxygen cylinders"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/45 to-transparent" />
                <div className="relative z-10">
                  <span className="inline-block rounded-md bg-sky-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-200">
                    Product Supply
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    Industrial &amp; Medical Oxygen Cylinders
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    Alongside our electrical and solar contracting operations,
                    we supply filled oxygen cylinders and scheduled refill
                    support for workshops, industrial fabrication sites, clinics,
                    and emergency requirements.
                  </p>
                  <div className="mt-7 border-t border-white/20 pt-5">
                  <button
                    type="button"
                    onClick={() => navigation("/contact")}
                    className="w-full rounded-lg bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-600 sm:w-auto"
                  >
                    Order / Enquire Oxygen Cylinders
                  </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-200/70 p-7 sm:p-9 lg:col-span-7">
                {oxygenSupplySpecs.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`aw-oxygen-reveal ${
                      idx === 0
                        ? "pb-5"
                        : idx === oxygenSupplySpecs.length - 1
                        ? "pt-5"
                        : "py-5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-sky-600" />
                      <h4 className="text-base font-bold text-slate-950">
                        {item.label}
                      </h4>
                    </div>
                    <p className="mt-1.5 pl-4.5 text-sm leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Enquiry Strip */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="aw-oxygen-reveal flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Direct Technical Consultation
            </p>
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Need a BOQ estimate, site survey, or cylinder supply?
            </h3>
            <p className="mt-1.5 text-sm text-slate-300">
              Call +91 98741 49838 / +91 98367 21481 or send your project
              requirements online.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigation("/contact")}
            className="shrink-0 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Get a Project Quote
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;