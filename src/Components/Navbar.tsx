import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/Progressive-Electrical-Logo.png";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const drawerRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);

  const closeMenu = useCallback(() => {
    if (!menuOpen || closingRef.current) return;
    closingRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMenuOpen(false);
      closingRef.current = false;
      menuButtonRef.current?.focus();
      return;
    }

    const finishClose = () => {
      closingRef.current = false;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    gsap.to(drawerRef.current, {
      xPercent: 100,
      duration: 0.32,
      ease: "power2.in",
    });
    gsap.to(backdropRef.current, {
      autoAlpha: 0,
      duration: 0.24,
      onComplete: finishClose,
    });
  }, [menuOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    closeMenu();
  };

  useEffect(() => {
    if (!menuOpen) return;

    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key === "Tab" && drawer) {
        const focusable = drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([drawer, backdrop], { clearProps: "all" });
    } else {
      gsap.set(drawer, { xPercent: 100 });
      gsap.set(backdrop, { autoAlpha: 0 });
      gsap.to(drawer, {
        xPercent: 0,
        duration: 0.48,
        ease: "power3.out",
      });
      gsap.to(backdrop, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.fromTo(
        ".drawer-link",
        { x: 18, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.35,
          stagger: 0.07,
          delay: 0.12,
          ease: "power2.out",
        },
      );
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      gsap.killTweensOf([drawer, backdrop, ".drawer-link"]);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950 text-white shadow-lg shadow-slate-950/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => handleNavigate("/")}
          className="group flex min-w-0 items-center gap-3 rounded-lg text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
          aria-label="Progressive Electrical home"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-white/70 sm:h-14 sm:w-14">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-wide text-white sm:text-base">
              Progressive Electrical
            </span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-300 sm:text-[10px]">
              Licensed Electrical Contractor
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <button
                key={item.link}
                type="button"
                onClick={() => handleNavigate(item.link)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber-400 after:transition-transform hover:text-white hover:after:scale-x-100 ${
                  isActive
                    ? "text-amber-300 after:scale-x-100"
                    : "text-slate-300"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919874149838"
            className="rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-amber-300 hover:text-amber-300"
          >
            +91 98741 49838
          </a>
          <button
            type="button"
            onClick={() => handleNavigate("/contact")}
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Request a Site Visit
          </button>
        </div>

        <button
          type="button"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-amber-300 hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 lg:hidden"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div
            ref={backdropRef}
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="absolute inset-0 h-full w-full cursor-default"
            />
          </div>
          <aside
            ref={drawerRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
            className="absolute top-0 right-0 flex h-full w-[min(88vw,400px)] flex-col overflow-y-auto border-l border-white/10 bg-slate-950 px-6 pt-6 pb-8 shadow-2xl shadow-black/30 sm:px-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
                  <img src={logo} alt="" className="h-full w-full object-cover" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Progressive</p>
                  <p className="text-xs text-slate-400">Electrical</p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-amber-300 hover:text-amber-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <p className="drawer-link mt-9 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
              Explore
            </p>
            <nav aria-label="Mobile navigation links" className="mt-3">
              <ul className="divide-y divide-white/10">
                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.link;
                  return (
                    <li key={item.link}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(item.link)}
                        aria-current={isActive ? "page" : undefined}
                        className={`drawer-link flex w-full items-center gap-4 py-5 text-left text-xl font-semibold transition ${
                          isActive
                            ? "text-amber-300"
                            : "text-white hover:text-amber-300"
                        }`}
                      >
                        <span className="font-mono text-xs text-slate-500">
                          0{index + 1}
                        </span>
                        {item.name}
                        <span className="ml-auto text-lg text-slate-500" aria-hidden="true">
                          ↗
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto rounded-2xl border border-white/10 bg-white/4 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Licensed electrical contractor
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Utility, industrial and solar execution across Kolkata and
                North 24 Parganas.
              </p>
              <a
                href="tel:+919874149838"
                className="mt-5 flex items-center justify-between rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                Call +91 98741 49838
                <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                onClick={() => handleNavigate("/contact")}
                className="mt-3 w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Request a Site Visit
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

export default Navbar;
