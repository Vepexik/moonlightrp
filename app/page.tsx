"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Sparkles, Users, Zap, ChevronUp, HelpCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ActivityCard from "@/components/activity-card"
import FeedbackForm from "@/components/feedback-form"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      setShowBackToTop(window.scrollY > 500)
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

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Zpět nahoru"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </button>
      )}

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
          <div className="absolute inset-0 animate-parallax pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-6 py-2 text-sm text-purple-300 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Největší cz/sk FiveM server</span>
              </div>
            </div>

            <h1 className="mb-8 text-center text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white">Vítej na portálu </span>
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
                <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-purple-500/30 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 animate-pulse-glow">
                  Připojit se! →
                </Button>
              </a>
              <a href="https://discord.gg/urvYf9EYHE" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-2 border-slate-700 text-white hover:bg-slate-800/50 bg-slate-900/50 backdrop-blur-sm px-8 py-6 text-lg rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Discord
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-sm text-slate-400">Aktivních hráčů</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Online podpora</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm col-span-2 md:col-span-1 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-slate-400">Unikátní skripty</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
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

        <section className="px-4 py-24 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">O nás</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">Poznejte náš server a naši komunitu</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">Naše mise</h3>
                  <p className="text-slate-400 leading-relaxed">
                    MoonLightRP byl založen s cílem vytvořit nejlepší český a slovenský FiveM roleplay server. Naším
                    posláním je poskytovat hráčům autentický a zábavný herní zážitek v přátelském a respektujícím
                    prostředí.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">Naše hodnoty</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Respekt a fair play mezi všemi hráči</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Kvalitní roleplay a autentické herní zážitky</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Aktivní a vstřícná komunita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Neustálé vylepšování a inovace</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">Co nabízíme</h3>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Unikátní skripty</p>
                        <p className="text-sm">Vlastní herní mechaniky vytvořené na míru</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Aktivní komunita</p>
                        <p className="text-sm">500+ aktivních hráčů denně</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Stabilní výkon</p>
                        <p className="text-sm">Výkonné servery pro plynulý zážitek</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageCircle className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">24/7 Podpora</p>
                        <p className="text-sm">Tým je vždy připraven pomoci</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Jak se připojit</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">Připojte se k nám ve 3 jednoduchých krocích</p>
            </div>

            <div className="space-y-6">
              <div className="group relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Stáhněte si FiveM
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Pokud ještě nemáte FiveM klient, stáhněte si ho z oficiálních stránek{" "}
                    <a
                      href="https://fivem.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      fivem.net
                    </a>
                    . Instalace je rychlá a jednoduchá.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Požádejte o whitelist
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Náš server vyžaduje whitelist pro zajištění kvalitního roleplay prostředí. Vyplňte žádost na naší{" "}
                    <Link href="/whitelist" className="text-purple-400 hover:text-purple-300 underline">
                      whitelist stránce
                    </Link>
                    . Schválení obvykle trvá 24-48 hodin.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Připojte se a hrajte!
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Po schválení whitelistu se můžete připojit pomocí IP adresy nebo kliknutím na tlačítko níže.
                    Přečtěte si naše{" "}
                    <a
                      href="https://moonlightrp.gitbook.io/moonlight-rp-pravidla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      pravidla
                    </a>{" "}
                    a připojte se k naší komunitě na{" "}
                    <a
                      href="https://discord.gg/urvYf9EYHE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Discordu
                    </a>
                    !
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="fivem://connect/nl1.deluxhost.net:30121" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-6 py-6 text-lg rounded-xl shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                        Připojit se nyní →
                      </Button>
                    </a>
                    <div className="flex-1 rounded-xl bg-slate-800/50 border border-slate-700 p-4 flex items-center justify-center">
                      <code className="text-purple-300 font-mono text-sm">nl1.deluxhost.net:30121</code>
                    </div>
                  </div>
                </div>
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

        <section className="px-4 py-24 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <HelpCircle className="h-8 w-8 text-purple-400" />
                <h2 className="text-4xl md:text-5xl font-bold">Často kladené otázky</h2>
              </div>
              <p className="text-xl text-slate-400">Odpovědi na nejčastější dotazy</p>
            </div>

            <div className="space-y-4">
              <details className="group rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                <summary className="cursor-pointer text-lg font-semibold text-white flex items-center justify-between">
                  Jak se mohu připojit na server?
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Stačí kliknout na tlačítko "Připojit se!" na hlavní stránce nebo použít IP adresu:
                  nl1.deluxhost.net:30121 ve FiveM klientovi.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                <summary className="cursor-pointer text-lg font-semibold text-white flex items-center justify-between">
                  Potřebuji whitelist pro vstup?
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Ano, náš server vyžaduje whitelist. Můžete si podat žádost na stránce Whitelist. Proces schvalování
                  obvykle trvá 24-48 hodin.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                <summary className="cursor-pointer text-lg font-semibold text-white flex items-center justify-between">
                  Jaké jsou pravidla serveru?
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Všechna pravidla najdete v naší GitBook dokumentaci. Klikněte na "Pravidla" v navigaci pro přístup k
                  úplnému seznamu pravidel a pokynů.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
                <summary className="cursor-pointer text-lg font-semibold text-white flex items-center justify-between">
                  Jak mohu získat VIP výhody?
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  VIP balíčky a další výhody můžete zakoupit v našem obchodě na Tebex. Klikněte na "Obchod" v navigaci
                  pro zobrazení dostupných možností.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Co říkají naši hráči</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">Přečtěte si zkušenosti členů naší komunity</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-purple-400 fill-purple-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "Nejlepší roleplay server na kterém jsem kdy hrál. Komunita je skvělá a admini jsou vždy nápomocní!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-white">Martin K.</p>
                    <p className="text-sm text-slate-400">Hráč 6+ měsíců</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-purple-400 fill-purple-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "Unikátní skripty a stabilní server. Eventy jsou vždy zábavné a odměny stojí za to!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-white">Jana S.</p>
                    <p className="text-sm text-slate-400">Hráčka 1+ rok</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-purple-400 fill-purple-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "Konečně server kde se dá normálně hrát roleplay. Doporučuji všem!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-white">Petr N.</p>
                    <p className="text-sm text-slate-400">Hráč 3+ měsíce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Máte nápad nebo připomínku?</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Vaše zpětná vazba nám pomáhá vytvářet lepší herní zážitek pro všechny
              </p>
            </div>

            <FeedbackForm />
          </div>
        </section>

        <footer className="border-t border-slate-800/50 px-4 py-16 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/moonlight-logo.png"
                    alt="MoonLightRP Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                  <span className="text-2xl font-bold gradient-text">MoonLightRP</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Největší český a slovenský FiveM roleplay server s aktivní komunitou 500+ hráčů. Připoj se a vytvoř si
                  svůj vlastní příběh.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Rychlé odkazy</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a
                      href="fivem://connect/nl1.deluxhost.net:30121"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Připojit se
                    </a>
                  </li>
                  <li>
                    <Link href="/whitelist" className="hover:text-purple-400 transition-colors">
                      Whitelist
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="hover:text-purple-400 transition-colors">
                      Náš tým
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://moonlightrp.gitbook.io/moonlight-rp-pravidla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Pravidla
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Komunita</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a
                      href="https://discord.gg/urvYf9EYHE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sakky.tebex.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Obchod
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800/50 pt-8 text-center space-y-2">
              <p className="text-sm text-slate-400">© 2025 MoonLightRP. Všechna práva vyhrazena.</p>
              <p className="text-sm text-purple-400 font-medium">Designed & built with ❤️ by Vepexik_</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
