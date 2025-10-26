"use client"

import { useState, useEffect } from "react"
import { Diamond as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ActivityCard from "@/components/activity-card"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }))

  return (
    <div className="min-h-screen bg-black text-white relative">
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
        {/* Top Banner */}
        <div className="bg-purple-600/10 backdrop-blur-sm border-b border-purple-500/10 px-4 py-3 text-center text-sm text-white">
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-slate-500 flex-shrink-0"></div>
            <span>Ziskej VIP výhody a užij si roleplay na maximum!</span>
            <a
              href="https://sakky.tebex.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 font-semibold underline hover:text-slate-200 transition-colors"
            >
              Obchod →
            </a>
          </div>
        </div>

        {/* Bubble Navigation */}
        <div className="fixed left-1/2 transform -translate-x-1/2 top-12 z-50 pointer-events-auto">
          <div className="flex items-center justify-center gap-6 bg-purple-600/10 border border-purple-500/30 rounded-full px-8 py-4 backdrop-blur-sm animate-slideIn">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition-colors duration-300 flex-shrink-0"
              title="Scroll to top"
            >
              <Image
                src="/moonlight-logo.png"
                alt="MoonLightRP Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="font-bold text-purple-300">MoonLightRP</span>
            </button>

            <div className="h-6 w-px bg-slate-600"></div>

            <div className="flex gap-6 text-sm font-medium">
              <a
                href="fivem://connect/nl1.deluxhost.net:30121"
                className="hover:text-purple-300 transition-colors duration-300 font-semibold text-purple-300"
              >
                Připojit se
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://moonlightrp.gitbook.io/moonlight-rp-pravidla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Pravidla
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://sakky.tebex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Obchod
              </a>
              <span className="text-slate-600">|</span>
              <Link href="/whitelist" className="hover:text-purple-300 transition-colors duration-300">
                Whitelist
              </Link>
              {/* Removed Statistics link */}
              <span className="text-slate-600">|</span>
              <Link href="/team" className="hover:text-purple-300 transition-colors duration-300">
                Tým
              </Link>
            </div>
            <div className="h-6 w-px bg-slate-600"></div>
            {/* Removed Login button */}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                Největší cz/sk FiveM server
              </div>
            </div>

            <h1 className="mb-6 text-center text-6xl font-bold leading-tight">
              Vítej na portálu <span className="text-purple-400">MoonLightRP</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-center text-base text-slate-300">
              Naše komunita je postavena na principech spolupráce, respektu a zábavy. Přidej se k nám a zažij autentický
              herní zážitek v prostředí, které jsme vytvořili s láskou a péčí.
            </p>

            <div className="flex justify-center gap-4">
              <a href="fivem://connect/nl1.deluxhost.net:30121">
                <Button className="bg-purple-600 hover:bg-purple-700">Připojit se! →</Button>
              </a>
              <a href="https://discord.gg/urvYf9EYHE" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                  <Discord className="mr-2 h-4 w-4" />
                  Discord
                </Button>
              </a>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-purple-500/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-purple-600 to-purple-800 p-8">
              <div className="absolute right-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold z-10">
                MOONLIGHT RP
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-4xl font-bold">MOONLIGHT</h2>
                  <p className="mb-2 text-2xl font-light">ROLEPLAY</p>
                  <p className="text-4xl font-bold">LAUNCH TEASER</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full">
                    <blockquote
                      className="tiktok-embed"
                      cite="https://www.tiktok.com/@_moonlightrp/video/7564819028762512662"
                      data-video-id="7564819028762512662"
                      style={{ maxWidth: "605px", minWidth: "325px" }}
                    >
                      <section>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          title="@_moonlightrp"
                          href="https://www.tiktok.com/@_moonlightrp?refer=embed"
                        >
                          @_moonlightrp
                        </a>{" "}
                        🎮Přidej se k nám na MoonlightRP 🌄Discord: https://discord.gg/cGcDwwEsNU 🚗Realistický
                        roleplay, aktivní komunita!{" "}
                        <a
                          title="moonlightrp"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/moonlightrp?refer=embed"
                        >
                          #MoonlightRP
                        </a>{" "}
                        <a
                          title="fyp"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/fyp?refer=embed"
                        >
                          #fyp
                        </a>{" "}
                        <a
                          title="fivem"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/fivem?refer=embed"
                        >
                          #FiveM
                        </a>{" "}
                        <a
                          title="rp"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/tag/rp?refer=embed"
                        >
                          #RP
                        </a>{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          title="♬ původní zvuk - MoonLightRp"
                          href="https://www.tiktok.com/music/původní-zvuk-7564819058135173890?refer=embed"
                        >
                          ♬ původní zvuk - MoonLightRp
                        </a>
                      </section>
                    </blockquote>
                    <script async src="https://www.tiktok.com/embed.js"></script>
                  </div>
                </div>
              </div>

              <img
                src="/gta-roleplay-character-with-gun.jpg"
                alt="MoonLightRP Roleplay"
                className="absolute bottom-0 right-0 h-64 w-64 object-cover opacity-50"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Jsme komunitní roleplay server</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h3 className="mb-3 text-xl font-bold text-purple-400">Autentický Roleplay</h3>
                <p className="text-slate-300">
                  Ponořte se do realistického světa s propracovaným systémem rolí a interakcí.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h3 className="mb-3 text-xl font-bold text-purple-400">Stabilní Prostředí</h3>
                <p className="text-slate-300">
                  Využíváme nejmodernější technologie pro zajištění plynulého herního zážitku.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h3 className="mb-3 text-xl font-bold text-purple-400">Unikátní Skripty</h3>
                <p className="text-slate-300">Vlastní herní mechaniky a systémy vytvořené na míru pro náš server.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Aktivity</h2>
            <p className="mb-12 text-center text-slate-300">Objevte rozmanité možnosti hraní na našem serveru</p>

            <div className="grid gap-6 md:grid-cols-2">
              <ActivityCard
                title="Brigády"
                description="Brigády dostupná pro všechny hráče 1 z mnoha možností jak získat peníze legálně"
                risk="ŽÁDNÉ"
                rewards={["Peníze"]}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center text-sm text-slate-400">
              <p className="mb-2">MoonLightRP © 2025 MoonLightRP. Všechna práva vyhrazena.</p>
              <p>Tento projekt je vytvořen pro komunitu FiveM s cílem zajistit kvalitní roleplay zážitek.</p>
              <p className="mt-4">Designed & built by Vepexik_</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
