"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Sparkles, Users, Zap, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ActivityCard from "@/components/activity-card"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setShowPlayButton(false)
    }
  }

  const handleVideoPause = () => {
    setShowPlayButton(true)
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
        <div className="bg-gradient-to-r from-purple-600/20 via-purple-500/20 to-purple-600/20 backdrop-blur-md border-b border-purple-500/20 px-4 py-3 text-center text-sm">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-white/90">Získej VIP výhody a užij si roleplay na maximum!</span>
            <a
              href="https://sakky.tebex.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 font-semibold text-purple-300 hover:text-purple-200 transition-colors underline decoration-purple-400"
            >
              Obchod →
            </a>
          </div>
        </div>

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
              <a
                href="fivem://connect/nl1.deluxhost.net:30121"
                className="text-purple-300 hover:text-white transition-colors duration-300 font-semibold"
              >
                Připojit se
              </a>
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
                <a
                  href="fivem://connect/nl1.deluxhost.net:30121"
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all duration-300 font-semibold text-white text-center shadow-lg shadow-purple-500/20"
                >
                  Připojit se
                </a>
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
                  className="px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 text-slate-200"
                >
                  Tým
                </Link>
              </div>
            )}
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-32 pt-40 md:pt-32 md:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-6 py-2 text-sm text-purple-300 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Největší cz/sk FiveM server</span>
              </div>
            </div>

            <h1 className="mb-8 text-center text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Vítej na portálu{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                MoonLightRP
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-center text-lg md:text-xl text-slate-300 leading-relaxed">
              Naše komunita je postavena na principech spolupráce, respektu a zábavy. Přidej se k nám a zažij autentický
              herní zážitek v prostředí, které jsme vytvořili s láskou a péčí.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a href="fivem://connect/nl1.deluxhost.net:30121">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-purple-500/30 w-full sm:w-auto transition-all duration-300 hover:scale-105">
                  Připojit se! →
                </Button>
              </a>
              <a href="https://discord.gg/urvYf9EYHE" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-2 border-slate-700 text-white hover:bg-slate-800/50 bg-slate-900/50 backdrop-blur-sm px-8 py-6 text-lg rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Discord
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-sm text-slate-400">Aktivních hráčů</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Online podpora</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-slate-400">Unikátní skripty</div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-purple-800/30 p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
              <div className="absolute right-6 top-6 rounded-full bg-slate-900/90 px-4 py-2 text-xs font-bold tracking-wider z-10 border border-purple-500/30">
                MOONLIGHT RP
              </div>

              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      MOONLIGHT
                    </h2>
                    <p className="text-3xl md:text-4xl font-light text-purple-300 mb-2">ROLEPLAY</p>
                    <p className="text-4xl md:text-5xl font-bold text-white">LAUNCH TEASER</p>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Ponořte se do světa neomezených možností. Vytvořte si vlastní příběh a staňte se součástí naší
                    komunity.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl group">
                    <video
                      ref={videoRef}
                      className="w-full h-auto"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/moonlight-roleplay-fivem-server-cinematic-dark-pur.jpg"
                      onPause={handleVideoPause}
                      onEnded={handleVideoPause}
                    >
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snaptik_7564819028762512662_hd-PROizEgFTwCFMeWkdjELs1LjyFojri.mp4" type="video/mp4" />
                      Váš prohlížeč nepodporuje video tag.
                    </video>

                    {showPlayButton && (
                      <div
                        onClick={handlePlayVideo}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-black/30"
                      >
                        <div className="flex flex-col items-center gap-4 animate-pulse">
                          <div className="rounded-full bg-purple-600 p-6 shadow-2xl shadow-purple-500/50 hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                            <Play className="h-12 w-12 text-white fill-white" />
                          </div>
                          <p className="text-white font-semibold text-lg">Klikni pro přehrání</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Jsme komunitní roleplay server</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Připojte se k tisícům hráčů a zažijte nejlepší roleplay zážitek
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Autentický Roleplay
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Ponořte se do realistického světa s propracovaným systémem rolí a interakcí.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Stabilní Prostředí
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Využíváme nejmodernější technologie pro zajištění plynulého herního zážitku.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Unikátní Skripty
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Vlastní herní mechaniky a systémy vytvořené na míru pro náš server.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Aktivity</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Objevte rozmanité možnosti hraní na našem serveru
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ActivityCard
                title="Brigády"
                description="Brigády dostupná pro všechny hráče - jedna z mnoha možností jak získat peníze legálně"
                risk="ŽÁDNÉ"
                rewards={["Peníze", "Zkušenosti"]}
              />
              <ActivityCard
                title="Eventy"
                description="Pravidelné komunitní eventy s exkluzivními odměnami a zábavou pro všechny"
                risk="NÍZKÉ"
                rewards={["Speciální odměny", "Zkušenosti"]}
              />
              <ActivityCard
                title="Akce"
                description="Zapojte se do různých akcí a získejte unikátní výhody a odměny"
                risk="STŘEDNÍ"
                rewards={["Bonusy", "Peníze", "Zkušenosti"]}
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800/50 px-4 py-16 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <Image
                  src="/moonlight-logo.png"
                  alt="MoonLightRP Logo"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain opacity-80"
                />
              </div>
              <div className="text-sm text-slate-400 space-y-2">
                <p className="font-semibold text-slate-300">MoonLightRP © 2025 MoonLightRP. Všechna práva vyhrazena.</p>
                <p className="max-w-2xl mx-auto">
                  Tento projekt je vytvořen pro komunitu FiveM s cílem zajistit kvalitní roleplay zážitek.
                </p>
                <p className="text-purple-400 font-medium pt-4">Designed & built by Vepexik_</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
