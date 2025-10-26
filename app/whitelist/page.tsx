"use client"

import { useState } from "react"
import { Sparkles, CheckCircle2, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhitelistPage() {
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
              <Link
                href="/whitelist"
                className="text-purple-300 hover:text-white transition-colors duration-300 font-semibold"
              >
                Whitelist
              </Link>
              <span className="text-slate-700">|</span>
              <Link href="/team" className="text-slate-300 hover:text-white transition-colors duration-300">
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
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 transition-all duration-300 text-white font-semibold"
                >
                  Whitelist
                </Link>
                <Link
                  href="/team"
                  className="px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 text-slate-200"
                >
                  Tým
                </Link>
              </div>
            )}
          </div>
        </div>

        <section className="px-4 py-32 pt-40 md:pt-32 md:py-40">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-6 py-2 text-sm text-purple-300 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Whitelist aplikace</span>
              </div>
            </div>

            <h1 className="mb-8 text-center text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                Whitelist
              </span>
            </h1>

            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-purple-800/30 p-8 mb-8 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <AlertCircle className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-300 mb-3">Chceš vědět, zda je nábor stále otevřený?</h2>
                  <p className="text-slate-300 mb-4">
                    Připoj se na náš Discord server a podívej se do příslušného kanálu:
                  </p>
                  <div className="space-y-3 text-slate-300">
                    <p>
                      <span className="font-semibold text-purple-300">Discord Server:</span>{" "}
                      <a
                        href="https://discord.gg/urvYf9EYHE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 underline transition-colors"
                      >
                        https://discord.gg/urvYf9EYHE
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-purple-300">Kanál náboru:</span>{" "}
                      <a
                        href="https://discordapp.com/channels/1415730344686256201/1420508361270497321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 underline transition-colors"
                      >
                        Přejít na kanál
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 mb-8 backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-bold text-purple-400 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6" />
                Jak se přihlásit?
              </h2>
              <p className="text-slate-300 mb-4">
                Pokud chceš získat přístup do našeho whitelistu a stát se plnohodnotným členem komunity, stačí:
              </p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside ml-4">
                <li>
                  Vyplnit žádost v kanálu <span className="text-purple-300 font-semibold">《📑》pohovor-žádost</span>
                </li>
                <li>Připojit se do čekárny</li>
                <li>Člen našeho týmu tě vyzvedne a provede pohovorem</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 mb-8 backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-bold text-purple-400">Na co se připravit?</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <span className="font-semibold text-purple-300">Očekáváme, že budeš znát naše pravidla.</span> Pohovor
                  není o štěstí ani náhodě - cílem je zjistit, zda rozumíš základním principům.
                </p>
                <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-4">
                  <p className="text-yellow-300/90 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Pokud přijdeš nepřipravený, bude to ztráta času pro tebe i pro nás.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 mb-8 backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-bold text-green-300 flex items-center gap-3">
                <Sparkles className="h-6 w-6" />
                Výhody whitelistu
              </h2>
              <p className="text-slate-300">
                Úspěšným pohovorem si zajistíš místo mezi whitelist hráči a otevře se ti možnost využívat všechny
                výhody, které běžným hráčům nejsou dostupné.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 mb-8 backdrop-blur-sm">
              <p className="text-slate-300 text-lg">
                <span className="font-bold text-purple-300">Nenech to ležet!</span> Whitelist není otevřený pořád.
                Těšíme se na všechny, kdo to myslí vážně! 🚀
              </p>
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
