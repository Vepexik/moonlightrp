"use client"

import { useState } from "react"
import { Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }))

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="hidden md:block fixed left-1/2 -translate-x-1/2 top-12 z-50">
          <div className="flex items-center justify-center gap-6 bg-slate-900/80 border border-purple-500/30 rounded-full px-8 py-4 backdrop-blur-xl shadow-2xl shadow-purple-500/10 animate-slideIn">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all duration-300 flex-shrink-0 shadow-lg shadow-purple-500/30"
              title="Scroll to top"
            >
              <Image
                src="/moonlight-logo.png"
                alt="MoonLightRP Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="font-bold text-white">MoonLightRP</span>
            </button>

            <div className="h-6 w-px bg-slate-700"></div>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors duration-300">
                Domů
              </Link>
              <span className="text-slate-700">|</span>
              <a
                href="https://moonlightrp.gitbook.io/moonlight-rp-pravidla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Pravidla
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="https://sakky.tebex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Obchod
              </a>
              <span className="text-slate-700">|</span>
              <Link href="/whitelist" className="text-slate-300 hover:text-white transition-colors duration-300">
                Whitelist
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/team"
                className="text-purple-300 hover:text-white transition-colors duration-300 font-semibold"
              >
                Tým
              </Link>
            </div>
            <div className="h-6 w-px bg-slate-700"></div>
          </div>
        </div>

        <div className="md:hidden fixed top-12 left-0 right-0 z-50 px-4">
          <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl backdrop-blur-xl shadow-2xl shadow-purple-500/10 p-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/moonlight-logo.png"
                  alt="MoonLightRP Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <span className="font-bold text-white">MoonLightRP</span>
              </div>
              <span className="text-white text-xl">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>

            {mobileMenuOpen && (
              <div className="mt-4 flex flex-col gap-2 text-sm font-medium">
                <Link
                  href="/"
                  className="px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 text-slate-200"
                >
                  Domů
                </Link>
                <a
                  href="https://moonlightrp.gitbook.io/moonlight-rp-pravidla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 text-slate-200"
                >
                  Pravidla
                </a>
                <a
                  href="https://sakky.tebex.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 text-slate-200"
                >
                  Obchod
                </a>
                <Link
                  href="/whitelist"
                  className="px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 text-slate-200"
                >
                  Whitelist
                </Link>
                <Link
                  href="/team"
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 transition-all duration-300 text-white font-semibold"
                >
                  Tým
                </Link>
              </div>
            )}
          </div>
        </div>

        <section className="px-4 py-32 pt-40 md:pt-32 md:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-6 py-2 text-sm text-purple-300 backdrop-blur-sm">
                <Users className="h-4 w-4" />
                <span className="font-medium">Náš tým</span>
              </div>
            </div>

            <h1 className="mb-8 text-center text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Seznamte se s{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                MoonLightRP týmem
              </span>
            </h1>

            <p className="mx-auto mb-16 max-w-2xl text-center text-lg md:text-xl text-slate-300 leading-relaxed">
              Administrace, moderace i vývoj – tým, díky kterému to žije.
            </p>

            {/* Leadership Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl md:text-4xl font-bold text-purple-400 text-center">Vedení</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
                {["Sakky", "Matysekk"].map((member) => (
                  <div
                    key={member}
                    className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 text-center"
                  >
                    <div className="h-20 w-20 rounded-full bg-purple-500/20 border-2 border-purple-500/30 mb-4 mx-auto group-hover:border-purple-400/50 transition-colors"></div>
                    <h3 className="font-bold text-purple-300 text-lg group-hover:text-purple-200 transition-colors">
                      {member}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Developers Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl md:text-4xl font-bold text-purple-400 text-center">Developers</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
                {["Kazun", "Jank"].map((member) => (
                  <div
                    key={member}
                    className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 text-center"
                  >
                    <div className="h-20 w-20 rounded-full bg-purple-500/20 border-2 border-purple-500/30 mb-4 mx-auto group-hover:border-purple-400/50 transition-colors"></div>
                    <h3 className="font-bold text-slate-300 text-lg group-hover:text-white transition-colors">
                      {member}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* A-Team Section */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl md:text-4xl font-bold text-purple-400 text-center">A-Team</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Palivi",
                  "Čong",
                  "Leo24cz",
                  "Lucifer",
                  "Činčila",
                  "Alexiia",
                  "N1gtyy",
                  "Samicer",
                  "almoondik",
                  "Martix1975",
                  "Proste_Johny",
                  "Stromicekkk",
                  "✞𝖅𝖊𝖓𝖔𝖝✞",
                ].map((member) => (
                  <div
                    key={member}
                    className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 text-center"
                  >
                    <div className="h-20 w-20 rounded-full bg-purple-500/20 border-2 border-purple-500/30 mb-4 mx-auto group-hover:border-purple-400/50 transition-colors"></div>
                    <h3 className="font-bold text-slate-300 group-hover:text-white transition-colors">{member}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                  ← Zpět na domů
                </Button>
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </div>
    </div>
  )
}
