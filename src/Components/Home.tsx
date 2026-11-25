import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Swiper as SwiperInstance } from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { servicesList } from "../Utils/servise";
import { offices } from "../Utils/office";
import gasCylinderImage from "../assets/GAS1.png";

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. HERO IMAGES (Replace URLs with your 3 local asset imports)
// Example: import hero1 from "../assets/hero1.jpg";
// ==========================================
const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    caption: "Commercial & Industrial Rooftop Solar EPC",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    caption: "11 KV & 33 KV Line & Substation Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    caption: "HT/LT Bulk Panels & Multistoried Electrification",
  },
];

// ==========================================
// 2. SOLAR BRAND LOGOS (Add local logo imports inside `logo` when saved)
// Example: import tataLogo from "../assets/tata-solar.png";
// ==========================================
const SOLAR_BRANDS = [
  { name: "TATA Power Solar", logo: null },
  { name: "Waaree", logo: null },
  { name: "Adani Solar", logo: null },
  { name: "Oswal", logo: null },
];

// ==========================================
// 3. EDITABLE QUICK FACTS (Update numbers anytime here)
// ==========================================
const COMPANY_FACTS = [
  {
    id: 1,
    value: "Since 2023",
    label: "3+ Years of Active Field Execution",
  },
  {
    id: 2,
    value: "85+",
    label: "HT/LT, Transformer & Wiring Sites Completed",
  },
  {
    id: 3,
    value: "40+",
    label: "Domestic & Commercial Solar Installations",
  },
  {
    id: 4,
    value: "3 Offices",
    label: "Nimta, Ghola Check Post & Madhyamgram",
  },
];

function Home() {
  const navigation = useNavigate();
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const servicesSwiperRef = useRef<SwiperInstance | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  useEffect(() => {
    if (!pageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 22,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });
      gsap.to(".hero-glow", {
        x: 18,
        y: -16,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  // const coreServices = [
  //   {
  //     num: "01",
  //     title: "New Transformer Installation",
  //     desc: "Plinth & pole-mounted transformer erection, double earthing, fencing, and WBSEDCL testing clearance.",
  //   },
  //   {
  //     num: "02",
  //     title: "Transformer Repairing",
  //     desc: "HV/LV coil rewinding, oil filtration, BDV testing, bushing replacement, and breakdown restoration.",
  //   },
  //   {
  //     num: "03",
  //     title: "LT Bulk & HT Bulk Connections",
  //     desc: "High-capacity load sanctions, metering cubicles, VCB/ACB panels, and industrial substation setup.",
  //   },
  //   {
  //     num: "04",
  //     title: "11 KV & 33 KV O.H & U.G Line Maintenance",
  //     desc: "Overhead pole/conductor work and underground XLPE cable laying, jointing, and fault maintenance.",
  //   },
  //   {
  //     num: "05",
  //     title: "Multistoried Building & Industrial Wiring",
  //     desc: "Rising mains, busducts, floor DBs, machine power wiring, and lightning protection systems.",
  //   },
  //   {
  //     num: "06",
  //     title: "Solar Panel Installation (EPC)",
  //     desc: "Domestic, commercial, and industrial solar plants with net-metering using TATA, Waaree, Adani & Oswal.",
  //   },
  // ];

  // const offices = [
  //   {
  //     type: "Head Office",
  //     location: "Nimta, Kolkata",
  //     address: "112/1, East Alipur Talbagan 1st Lane, PO-Nimta, Kol-700049",
  //   },
  //   {
  //     type: "Branch Office I",
  //     location: "Ghola Check Post",
  //     address:
  //       "Sodepur Barasat Road, C-Block (East), Ghola Check Post, Beside Axis Bank, Kol-700110",
  //   },
  //   {
  //     type: "Branch Office II",
  //     location: "Madhyamgram",
  //     address:
  //       "137 Sodepur Road, Basunagar, Beside HDFC Bank, Madhyamgram, Kol-700129",
  //   },
  // ];

  return (
    <div ref={pageRef} className="bg-stone-50 text-slate-900">
      {/* =========================================================
          SECTION 1: HERO & CREDIBILITY BANNER
      ========================================================= */}
      <section className="hero-section relative isolate overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={
            prefersReducedMotion
              ? false
              : {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          pagination={{ clickable: true }}
          loop
          speed={prefersReducedMotion ? 0 : 1000}
          className="hero-background-swiper"
          aria-label="Project photography"
        >
          {HERO_IMAGES.map((image) => (
            <SwiperSlide key={image.caption}>
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/45"
        />
        <div aria-hidden="true" className="hero-grid-pattern pointer-events-none absolute inset-0 z-[2] opacity-30" />
        <div aria-hidden="true" className="hero-glow pointer-events-none absolute -top-40 right-[-8rem] z-[2] h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-[-18rem] left-[-10rem] z-[2] h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="hero-copy lg:col-span-8">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold tracking-wide text-amber-400">
                <span>Govt. Licensed Solar &amp; Electrical Contractor</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-200">Powered by WBSEDCL</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
                M/s. Progressive Electrical
              </h1>

              <p className="mt-2 text-lg font-semibold italic text-amber-400 sm:text-xl">
                &ldquo;Light Up Your World With Us&rdquo;
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Trusted across North 24 Parganas and Kolkata for heavy-duty
                electrical infrastructure—from 11 KV &amp; 33 KV line maintenance,
                transformer installations, and HT/LT bulk setups to turnkey
                rooftop solar power plants.
              </p>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => navigation("/contact")}
                  className="rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-400"
                >
                  Request Site Survey &amp; Quote
                </button>

                <button
                  type="button"
                  onClick={() => window.open("tel:+919874149838", "_self")}
                  className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
                >
                  Call: +91 98741 49838
                </button>
              </div>

              {/* Registration & Proprietor Metadata */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-800/90 pt-5 text-xs text-slate-400">
                <span>
                  <strong className="text-slate-200">Proprietors:</strong>{" "}
                  Subhankar Barai &amp; Amit Singha
                </span>
                <span>
                  <strong className="text-slate-200">GSTIN:</strong>{" "}
                  19BXFPB3340H1ZZ
                </span>
              </div>
            </div>

          </div>

          {/* Quick Facts Bar (Driven by COMPANY_FACTS object) */}
          <div className="facts-grid mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-4 sm:gap-6">
            {COMPANY_FACTS.map((fact) => (
              <div
                key={fact.id}
                data-reveal
                className="fact-card rounded-xl border border-slate-800/80 bg-slate-900/60 p-4"
              >
                <p className="text-xl font-bold text-amber-400 sm:text-2xl">
                  {fact.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-300">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: CORE ENGINEERING & SOLAR SERVICES
      ========================================================= */}
      <section className="home-content mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div data-reveal className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Engineering Scope
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Utility, Industrial &amp; Solar Capabilities
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigation("/services")}
            className="self-start text-sm font-bold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4 transition hover:text-amber-700 sm:self-auto"
          >
            Explore Detailed Technical Scope &rarr;
          </button>
        </div>

        <div data-reveal className="mt-10">
          <Swiper
            modules={[EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={1.08}
            centeredSlides
            spaceBetween={18}
            breakpoints={{
              640: { slidesPerView: 1.15, spaceBetween: 24 },
              1024: { slidesPerView: 1.22, spaceBetween: 30 },
            }}
            onSwiper={(swiper) => {
              servicesSwiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveServiceSlide(swiper.realIndex)}
            loop
            speed={prefersReducedMotion ? 0 : 550}
            className="service-carousel"
          >
            {servicesList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="service-slide-card relative flex min-h-[390px] items-end overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:min-h-[440px] sm:p-10 lg:min-h-[480px] lg:p-14">
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/5" />
                  <div className="relative z-10 max-w-2xl">
                    <span className="inline-flex rounded-full border border-white/25 bg-slate-950/35 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-sm">
                      {item.badge} <span className="ml-2 text-white/60">/ {item.id}</span>
                    </span>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                      {item.summary}
                    </p>
                    <button
                      type="button"
                      onClick={() => navigation("/services")}
                      className="mt-6 rounded-full bg-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-amber-300"
                    >
                      View Specifications <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              <span className="text-amber-700">
                {String(activeServiceSlide + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(servicesList.length).padStart(2, "0")} service capabilities
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => servicesSwiperRef.current?.slidePrev()}
                aria-label="Previous service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => servicesSwiperRef.current?.slideNext()}
                aria-label="Next service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: SOLAR BRAND PARTNERS & COMPLIANCE STRIP
      ========================================================= */}
      <section data-reveal className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Certified Equipment &amp; Compliance
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Tier-1 Solar Modules We Deploy
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                For domestic rooftops, commercial buildings, and industrial
                sheds, we install high-efficiency solar panels backed by
                manufacturer warranties and WBSEDCL net-metering compliance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
              {SOLAR_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="flex h-24 flex-col items-center justify-center rounded-xl border border-slate-200 bg-stone-50 p-4 text-center"
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-sm font-extrabold tracking-tight text-slate-900">
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: ASSOCIATE PARTNER & PRODUCT SUPPLY (DIPTI OXYGEN)
      ========================================================= */}
      <section data-reveal className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Identity */}
            <div className="relative flex min-h-72 flex-col justify-end overflow-hidden bg-slate-950 p-7 text-white sm:p-9 lg:col-span-5 lg:min-h-full lg:border-r lg:border-slate-200">
              <img
                src={gasCylinderImage}
                alt="Industrial oxygen cylinders"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />
              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-200">
                  Associate Partner &amp; Product Supply
                </p>
                <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Dipti Oxygen
                </h2>
                <div className="mt-4 border-l-2 border-amber-400 pl-3">
                  <p className="text-[11px] uppercase tracking-wider text-slate-300">
                    Proprietor
                  </p>
                  <p className="text-sm font-bold text-white">
                    Dipankar Barai
                  </p>
                </div>

                <p className="mt-6 text-xs font-medium text-slate-200">
                  Industrial &amp; Medical Oxygen Cylinder Division
                </p>
              </div>
            </div>

            {/* Right Description & Action */}
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-7">
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Oxygen Cylinder Sales &amp; Scheduled Refilling
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Alongside our electrical contracting operations, we supply
                  filled oxygen cylinders and regular refilling support for
                  industrial fabrication workshops, cutting/welding units,
                  clinics, and medical requirements across our service belt.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => navigation("/services")}
                  className="rounded-lg bg-slate-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-slate-800"
                >
                  View Cylinder Supply Details
                </button>
                <button
                  type="button"
                  onClick={() => navigation("/about")}
                  className="text-xs font-bold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
                >
                  About Our Leadership &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: LOCAL OFFICES & DIRECT CONSULTATION CTA
      ========================================================= */}
      <section data-reveal className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Ground Presence
            </p>
            <h2 className="mt-1.5 text-2xl font-bold text-slate-950 sm:text-3xl">
              Three Offices Across North Kolkata &amp; Barasat Belt
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office?.tag}
                data-reveal
                className="office-card rounded-xl border border-slate-200 bg-stone-50 p-6"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {office?.area}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-950">
                  {office?.address}
                </h3>
              </div>
            ))}
          </div>

          {/* Closing Action Strip */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Ready to discuss a transformer, HT/LT, or solar project?
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">
                Reach our engineering desk at{" "}
                <strong className="text-white">+91 98741 49838</strong> /{" "}
                <strong className="text-white">+91 98367 21481</strong> or
                submit your details online.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigation("/contact")}
                className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;