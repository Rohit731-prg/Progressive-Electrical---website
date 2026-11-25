import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { servicesList } from "../Utils/servise";

function Services() {
    const navigation = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");



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

    return (
        <div className="bg-stone-50 text-slate-900">
            {/* Page Header */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber-700">
                        <span>M/s. Progressive Electrical</span>
                        <span className="text-slate-300">|</span>
                        <span>WBSEDCL Licensed Contractor</span>
                    </div>

                    <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.15]">
                        Heavy Electrical Infrastructure &amp; Turnkey Solar Execution
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        From 11 KV / 33 KV transmission lines and transformer installations
                        to multistoried wiring and industrial solar plants—built to utility
                        standards across Kolkata and North 24 Parganas.
                    </p>

                    {/* Filter Tabs */}
                    <div className="mt-9 flex flex-wrap gap-2">
                        {filters.map((tab) => {
                            const active = activeCategory === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveCategory(tab.key)}
                                    className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition sm:text-sm ${active
                                        ? "bg-slate-950 text-amber-400 shadow-xs"
                                        : "border border-slate-200 bg-stone-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Detailed Grid */}
            <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {visibleServices.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                                        {service.badge}
                                    </span>
                                    <span className="font-mono text-xs font-bold text-slate-400">
                                        /{service.id}
                                    </span>
                                </div>

                                <h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">
                                    {service.title}
                                </h2>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {service.summary}
                                </p>

                                {/* Scope Checklist */}
                                <div className="mt-6 border-t border-slate-100 pt-5">
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                        Scope of Execution
                                    </p>
                                    <ul className="mt-3 space-y-2">
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
                                </div>

                                {/* Authorized Solar Brands Strip (only on Solar card) */}
                                {service.brands && (
                                    <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/60 p-3.5">
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

                            <div className="mt-7 border-t border-slate-100 pt-4">
                                <button
                                    type="button"
                                    onClick={() => navigation("/contact")}
                                    className="text-sm font-bold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4 transition hover:text-amber-700"
                                >
                                    Request Site Inspection for This Service &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Separate Product Supply Section: Oxygen Cylinders */}
            <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
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

                    <div className="overflow-hidden rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 via-white to-slate-50 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            {/* Left Column: Product Overview */}
                            <div className="flex flex-col justify-between border-b border-sky-100 p-7 sm:p-9 lg:col-span-5 lg:border-r lg:border-b-0">
                                <div>
                                    <span className="inline-block rounded-md bg-sky-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-200">
                                        Product Supply
                                    </span>
                                    <h3 className="mt-4 text-xl font-bold text-slate-950 sm:text-2xl">
                                        Industrial &amp; Medical Oxygen Cylinders
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Alongside our electrical and solar contracting operations,
                                        we supply filled oxygen cylinders and scheduled refill
                                        support for workshops, industrial fabrication sites, clinics,
                                        and emergency requirements.
                                    </p>
                                </div>

                                <div className="mt-7 border-t border-sky-100 pt-5">
                                    <button
                                        type="button"
                                        onClick={() => navigation("/contact")}
                                        className="w-full rounded-lg bg-sky-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800 sm:w-auto"
                                    >
                                        Order / Enquire Oxygen Cylinders
                                    </button>
                                </div>
                            </div>

                            {/* Right Column: Supply Categories */}
                            <div className="divide-y divide-slate-200/70 p-7 sm:p-9 lg:col-span-7">
                                {oxygenSupplySpecs.map((item, idx) => (
                                    <div
                                        key={item.label}
                                        className={`${idx === 0 ? "pb-5" : idx === oxygenSupplySpecs.length - 1 ? "pt-5" : "py-5"}`}
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
                <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:p-10">
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