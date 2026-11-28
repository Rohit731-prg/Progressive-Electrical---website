import { useNavigate } from "react-router-dom";
import PLACEHOLDER_LOGO from "../assets/Progressive-Electrical-Logo.png";
import { socialLinks } from "../Utils/socialLinks";

const LINKEDIN_URL = "https://www.linkedin.com/in/rohit-singha-55477b308/";

function Footer() {
  const navigation = useNavigate();

  const exploreLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
  ];

  const helpLinks = [
    { label: "Get a Quote", path: "/contact" },
    { label: "Solar & HT/LT Scope", path: "/services" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Subtle background backdrop matching reference layout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=60')",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/90 to-slate-900/95"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid (aligned with reference pic) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Logo + Company Overview (4 cols) */}
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={() => navigation("/")}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 shadow-sm focus:outline-none"
            >
              <img
                src={PLACEHOLDER_LOGO}
                alt="M/s. Progressive Electrical"
                className="h-10 w-auto rounded-sm object-contain"
              />
            </button>

            <h2 className="mt-4 text-base font-bold text-white">
              M/s. Progressive Electrical
            </h2>
            <p className="mt-1 text-xs font-semibold italic text-amber-400">
              &ldquo;Light Up Your World With Us&rdquo;
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Govt. Licensed Solar &amp; Electrical Contractor (Powered by
              WBSEDCL). Prop: Subhankar Barai &amp; Amit Singha. Executing
              heavy HT/LT bulk, transformer, 11kV–33kV line maintenance, and
              domestic, commercial &amp; industrial solar installations (TATA,
              Waaree, Adani &amp; Oswal).
            </p>
            <p className="mt-2.5 text-xs font-medium text-slate-400">
              GSTIN: <span className="text-slate-200">19BXFPB3340H1ZZ</span>
            </p>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-amber-400">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => navigation(item.path)}
                    className="transition hover:text-amber-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help & Offices (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-amber-400">Help</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => navigation(item.path)}
                    className="transition hover:text-amber-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p>
                <span className="font-semibold text-white">Head Office:</span>{" "}
                112/1, East Alipur Talbagan 1st Lane, PO-Nimta, Kol-700049
              </p>
              <p>
                <span className="font-semibold text-white">Ghola Branch:</span>{" "}
                Sodepur Barasat Road, C-Block (East), Ghola Check Post, Beside
                Axis Bank, Kol-700110
              </p>
              <p>
                <span className="font-semibold text-white">
                  Madhyamgram Branch:
                </span>{" "}
                137 Sodepur Road, Basunagar, Beside HDFC Bank, Kol-700129
              </p>
            </div>
          </div>

          {/* Column 4: Connect With Us + 4 Social Circles (3 cols) */}
          <div className="flex flex-col justify-between lg:col-span-3">
            <div>
              <h3 className="text-base font-bold text-amber-400">
                Connect with us
              </h3>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-amber-300">
                    For Solar &amp; HT/LT Projects
                  </p>
                  <a
                    href="tel:+919874149838"
                    className="block text-slate-200 hover:text-amber-400"
                  >
                    +91 98741 49838 / +91 98367 21481
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-amber-300">
                    Site &amp; Service Desk
                  </p>
                  <a
                    href="tel:+919836721481"
                    className="block text-slate-200 hover:text-amber-400"
                  >
                    +91 98367 21481 / +91 98741 49838
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-amber-300">Email</p>
                  <a
                    href="mailto:progressive.electrical90@gmail.com"
                    className="block text-xs break-all text-slate-200 hover:text-amber-400"
                  >
                    progressive.electrical90@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* 4 White Circular Social Media Icons (matching reference) */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.link;
                return (
                  <button
                    key={social.name}
                    type="button"
                    onClick={() =>
                      window.open(social.href, "_blank", "noopener,noreferrer")
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950 transition hover:scale-105 hover:bg-amber-400"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dedicated Associate Partner Strip */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 sm:px-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-amber-400 uppercase">
                Associate Partner
              </span>
              <span className="text-sm font-bold text-white">Dipti Oxygen</span>
              <span className="text-xs text-slate-300">
                — Prop:{" "}
                <strong className="text-slate-100">Dipankar Barai</strong>
              </span>
            </div>
            <span className="text-xs text-slate-400">
              Allied Industrial &amp; Supply Alliance
            </span>
          </div>
        </div>

        {/* Divider + Bottom Bar (matching reference pic) */}
        <hr className="my-6 border-slate-300/80" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-300 sm:flex-row">
          <p>
            Copyright &copy; {new Date().getFullYear()} | M/s. Progressive
            Electrical | All Rights Reserved
          </p>
          <p>
            Designed &amp; Built by{" "}
            <button
              type="button"
              onClick={() =>
                window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")
              }
              title="ROHIT SINGHA on LinkedIn"
              className="font-semibold text-amber-400 underline decoration-amber-400/50 underline-offset-4 transition hover:text-amber-300 hover:decoration-amber-300"
            >
              ROHIT SINGHA
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;