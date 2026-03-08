"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Safety", href: "#safety" },
  { label: "Developers", href: "#developers" },
];

const featureCards = [
  {
    title: "Live Performance Analytics",
    description:
      "Monitor machine health and field data with millisecond precision through a cloud-synced dashboard accessible anywhere.",
    icon: "",
    iconSrc: "/icon-telemetry.png",
    iconAlt: "Real-time telemetry icon",
    imageSrc: "/telemetry-icon.jpg",
    imageAlt: "Telemetry dashboard and monitoring interface",
  },
  {
    title: "Precision Pathfinding",
    description:
      "High-efficiency algorithms that eliminate overlap and optimize power usage, ensuring 100% field coverage with zero human intervention.",
    icon: "",
    iconSrc: "/autonomous-navigation.png",
    iconAlt: "Autonomous navigation icon",
    imageSrc: "/field-routing.jpg",
    imageAlt: "Autonomous field routing and navigation path",
  },
  {
    title: "360° Hazard Protection",
    description:
      "Multi-layer sensor arrays and failsafe emergency protocols designed to safeguard your equipment and seedlings.",
    icon: "",
    iconSrc: "/safety-first.png",
    iconAlt: "Safety first icon",
    imageSrc: "/safety-protocol.jpg",
    imageAlt: "Safety protocol indicators and sensor coverage",
  },
];

const safetyCards = [
  {
    title: "Obstacle Detection Grid",
    description:
      "360-degree sensor monitoring identifies people, tools, and terrain hazards before contact, then adjusts motion instantly.",
    iconSrc: "/obstacle-detection.png",
    iconAlt: "Obstacle detection icon",
    imageSrc: "/obstacle-avoidance.jpeg",
    imageAlt: "Obstacle detection safety interface",
  },
  {
    title: "Emergency Stop Layer",
    description:
      "Hardware and software failsafe controls immediately halt drilling and movement when critical thresholds are triggered.",
    iconSrc: "/icon-emergency.png",
    iconAlt: "Emergency stop icon",
    imageSrc: "/emergency-stop.jpg",
    imageAlt: "Emergency safety stop controls",
  },
  {
    title: "Protected Planting Zones",
    description:
      "Boundary-aware automation preserves restricted areas and keeps operations aligned with predefined safe field corridors.",
    iconSrc: "/icon-protected.png",
    iconAlt: "Protected zone icon",
    imageSrc: "/protected-planting.jpg",
    imageAlt: "Safe planting zone protection interface",
  },
];

export default function LandingPage() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#021d1a] text-[#e8f5ef]">
      <div className="bg-[radial-gradient(circle_at_20%_10%,rgba(18,195,148,0.25),transparent_42%),radial-gradient(circle_at_80%_2%,rgba(18,148,195,0.16),transparent_28%),linear-gradient(180deg,#052d27_0%,#04211d_30%,#031916_100%)]">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#042520]/80 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/landing" className="flex items-center gap-2">
              <Image 
                src="/agridrill-logo.png" 
                alt="AgriDrill Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8"
              />
              <span className="text-sm font-semibold tracking-wide text-white">AgriDrill</span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-[#b7d7cd] md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLoginModalOpen(true)}
                className="hidden text-sm text-white/85 transition hover:text-white sm:inline"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setSignupModalOpen(true)}
                className="active:shadow-inner active:scale-95 hover:scale-105 hover:shadow-[0_0_40px_rgba(22,211,154,0.5)] rounded-md bg-[#15d8a0] px-4 py-2 text-sm font-semibold text-[#042b23] shadow-[0_0_24px_rgba(22,211,154,0.35)] transition duration-300 hover:brightness-110"
              >
                Sign Up
              </button>
            </div>
          </div>
        </header>

        <section
          id="hero"
          className="mx-auto grid w-full max-w-7xl scroll-mt-24 gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-28"
        >
          <div className="flex flex-col justify-center">
            <span className="animate-fade-in-up inline-flex w-fit items-center rounded-full border border-[#17b68a]/35 bg-[#11a079]/15 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-[#47e3b6]">
              NEXT-GENERATION AUTONOMY
            </span>
            <h1 className="animate-pop-in animation-delay-100 mt-6 text-5xl font-bold leading-[1.02] text-white sm:text-6xl">
              Autonomous <span className="text-[#15d8a0]">Precision</span> Farming
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-xl text-base leading-relaxed text-[#a9c6bc] sm:text-lg">
              Revolutionizing agriculture through high-tech autonomous systems and real-time telemetry for maximum
              yield efficiency and resource preservation.
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="active:shadow-inner active:scale-95 hover:scale-105 hover:shadow-[0_0_40px_rgba(21,216,160,0.5)] rounded-md bg-[#15d8a0] px-6 py-3 text-sm font-semibold text-[#03231c] shadow-[0_0_30px_rgba(21,216,160,0.35)] transition duration-300 hover:brightness-110"
              >
                Get Started
              </Link>
              <button
                type="button"
                className="active:shadow-inner active:scale-95 hover:scale-105 hover:bg-white/20 hover:shadow-lg rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="animate-slide-in-right animation-delay-200 relative">
            <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-[#76d888]/35 bg-[linear-gradient(140deg,#8bcf7b_0%,#66a85f_52%,#3f7f44_100%)] shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:min-h-[460px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-[#0a3d2e]/30 to-[#0a3d2e]/50" />
              <div className="relative h-full">
                <Image
                  src="/farming-tractor.jpg"
                  alt="Autonomous farming tractor in field"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white">Advanced Farming Solutions</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#16d39a]" />
            <p className="mx-auto mt-5 max-w-2xl text-[#9fc0b5]">
              Our platform integrates cutting-edge technology to ensure your farm operates at peak performance, day
              and night.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card, index) => (
              <article
                key={card.title}
                className={`animate-pop-in rounded-2xl border border-[#0f4b3f]/70 bg-[#062a23]/85 p-5 ${
                  index === 0
                    ? "animation-delay-100"
                    : index === 1
                      ? "animation-delay-200"
                      : "animation-delay-300"
                }`}
              >
                <div className="inline-flex rounded-md bg-[#09483c] px-3 py-2 text-sm font-semibold text-[#20d6a4]">
                  {card.iconSrc ? (
                    <Image
                      src={card.iconSrc}
                      alt={card.iconAlt ?? `${card.title} icon`}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-sm object-cover"
                    />
                  ) : (
                    card.icon
                  )}
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-white sm:text-2xl">{card.title}</h3>
                <p className="mt-3 min-h-[112px] text-sm leading-relaxed text-[#96b8ad]">{card.description}</p>

                <div className="mt-5 rounded-xl border border-white/10 bg-[linear-gradient(135deg,#0a3d34_0%,#123a36_35%,#182f37_100%)] p-5">
                  <div className="relative h-28 overflow-hidden rounded-lg border border-white/10 bg-black/15">
                    <Image src={card.imageSrc} alt={card.imageAlt} fill className="object-cover" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="safety" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white">Safety Systems</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#16d39a]" />
            <p className="mx-auto mt-5 max-w-2xl text-[#9fc0b5]">
              Every AgriDrill operation is protected by layered safeguards built for real field conditions and rapid
              emergency response.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {safetyCards.map((card, index) => (
              <article
                key={card.title}
                className={`animate-pop-in rounded-2xl border border-[#0f4b3f]/70 bg-[#062a23]/85 p-5 ${
                  index === 0
                    ? "animation-delay-100"
                    : index === 1
                      ? "animation-delay-200"
                      : "animation-delay-300"
                }`}
              >
                <div className="inline-flex rounded-md bg-[#09483c] px-3 py-2 text-sm font-semibold text-[#20d6a4]">
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-sm object-cover"
                  />
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-white sm:text-2xl">{card.title}</h3>
                <p className="mt-3 min-h-[112px] text-sm leading-relaxed text-[#96b8ad]">{card.description}</p>

                <div className="mt-5 rounded-xl border border-white/10 bg-[linear-gradient(135deg,#0a3d34_0%,#123a36_35%,#182f37_100%)] p-5">
                  <div className="relative h-28 overflow-hidden rounded-lg border border-white/10 bg-black/15">
                    <Image src={card.imageSrc} alt={card.imageAlt} fill className="object-cover" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="technology" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-in-up text-4xl font-bold text-white">Technology Stack</h2>
            <div className="animate-pop-in animation-delay-100 mx-auto mt-3 h-1 w-16 rounded-full bg-[#16d39a]" />
            <p className="animate-fade-in-up animation-delay-200 mx-auto mt-5 max-w-2xl text-[#9fc0b5]">
              Built on cutting-edge cloud infrastructure with real-time data synchronization, autonomous algorithms, and industrial-grade safety protocols.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Next.js 14", desc: "Server-side rendering & API routes", icon: "▼" },
              { name: "Supabase", desc: "PostgreSQL + Real-time database", icon: "▼" },
              { name: "Autonomous AI", desc: "Pathfinding & obstacle avoidance", icon: "▼" },
              { name: "Cloud Telemetry", desc: "Real-time sensor data streaming", icon: "▼" },
            ].map((tech, idx) => (
              <div
                key={tech.name}
                className={`animate-pop-in rounded-xl border border-[#17b68a]/40 bg-[#0a3d36]/60 p-5 backdrop-blur-sm ${
                  idx === 0
                    ? "animation-delay-100"
                    : idx === 1
                      ? "animation-delay-200"
                      : idx === 2
                        ? "animation-delay-300"
                        : "animation-delay-400"
                }`}
              >
                <div className="text-2xl font-bold text-[#16d39a]">{tech.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{tech.name}</h3>
                <p className="mt-2 text-sm text-[#9fc0b5]">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-[#0c453a] bg-[linear-gradient(180deg,#08342e_0%,#072b25_100%)]">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">Ready to modernize your field?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[#9cbfb4]">
              Join hundreds of innovative farmers using AgriDrill to scale their operations and reduce environmental
              footprint.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="active:shadow-inner active:scale-95 hover:scale-105 hover:shadow-[0_0_40px_rgba(21,216,160,0.5)] rounded-md bg-[#15d8a0] px-7 py-3 text-sm font-semibold text-[#03251d] shadow-[0_0_25px_rgba(21,216,160,0.3)] transition duration-300 hover:brightness-110"
              >
                Get Started Now
              </button>
              <button
                type="button"
                className="active:shadow-inner active:scale-95 hover:scale-105 hover:bg-white/20 hover:shadow-lg rounded-md border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>

        <footer id="developers" className="scroll-mt-24 border-t border-[#0f4b3f] bg-[linear-gradient(180deg,#041f1b_0%,#031713_100%)]">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <Link href="/landing" className="inline-flex items-center gap-2">
                  <Image
                    src="/agridrill-logo.png"
                    alt="AgriDrill Logo"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px]"
                  />
                  <span className="text-base font-semibold text-white">AgriDrill</span>
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8fb1a6]">
                  Autonomous precision farming platform focused on safer field operations, real-time telemetry, and
                  smarter crop outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#b2d6c9]">Navigation</h3>
                <div className="mt-4 flex flex-col gap-2 text-sm text-[#8fb1a6]">
                  <a href="#features" className="transition hover:text-white">
                    Features
                  </a>
                  <a href="#technology" className="transition hover:text-white">
                    Technology
                  </a>
                  <a href="#safety" className="transition hover:text-white">
                    Safety
                  </a>
                  <a href="#developers" className="transition hover:text-white">
                    Developers
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#b2d6c9]">Resources</h3>
                <div className="mt-4 flex flex-col gap-2 text-sm text-[#8fb1a6]">
                  <a href="#" className="transition hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Terms of Service
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Cookie Policy
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Documentation
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#b2d6c9]">Connect</h3>
                <div className="mt-4 flex flex-col gap-2 text-sm text-[#8fb1a6]">
                  <a href="mailto:hello@agridrill.dev" className="transition hover:text-white">
                    hello@agridrill.dev
                  </a>
                  <a href="#" className="transition hover:text-white">
                    LinkedIn
                  </a>
                  <a href="#" className="transition hover:text-white">
                    GitHub
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#73968b] sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 AgriDrill Inc. Empowering the future of precision agriculture.</p>
              <p>Built for farmers, researchers, and field engineers.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)}
        onSwitchToSignup={() => setSignupModalOpen(true)}
      />
      
      {/* Signup Modal */}
      <SignupModal 
        isOpen={signupModalOpen} 
        onClose={() => setSignupModalOpen(false)}
        onSwitchToLogin={() => setLoginModalOpen(true)}
      />
    </main>
  );
}
