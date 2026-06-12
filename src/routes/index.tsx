import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VANGUARD — World-Class Digital Collective" },
      { name: "description", content: "VANGUARD builds fierce brand identities that don't just turn heads — they lead." },
      { property: "og:title", content: "VANGUARD — World-Class Digital Collective" },
      { property: "og:description", content: "Design. Disrupt. Conquer. A top-rated brand studio for fearless companies." },
    ],
  }),
  component: Index,
});

const NAV_LINKS = ["Projects", "Studio", "Offerings", "Inquire"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <a href="/" className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
          VANGUARD
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-inter text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all hover:border-white/60 hover:bg-white/10 md:inline-flex"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex flex-col space-y-1.5 md:hidden"
        >
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-4 bg-white" />
        </button>
      </nav>

      {/* Hero content */}
      <section className="relative z-20 flex h-[calc(100vh-88px)] items-center px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-5xl">
          <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
            <Crown className="h-4 w-4 text-white/70" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              World-Class Digital Collective
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium font-bold uppercase leading-[0.92] tracking-tight text-white">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
            We build fierce brand identities
            <br />
            that don't just turn heads —{" "}
            <span className="font-bold text-white">they lead.</span>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
            >
              See our work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-white/50" />
              <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                <div>Top-Rated</div>
                <div>Brand Studio</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {[
              { v: "250+", l: "Brands Transformed" },
              { v: "95%", l: "Client Retention" },
              { v: "10+", l: "Years in the Game" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {s.v}
                </div>
                <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
            VANGUARD
          </span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-white">
            <X className="h-7 w-7" />
          </button>
        </div>
        <div className="flex h-[calc(100vh-88px)] flex-col items-start justify-center gap-6 px-6 sm:px-10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 500ms ease-out, transform 500ms ease-out",
              }}
              className="font-podium text-4xl uppercase text-white sm:text-5xl"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
            }}
            className="mt-6 inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-colors hover:bg-white/10"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
