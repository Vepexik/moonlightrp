import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-800 px-4 py-4 sticky top-0 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/moonlight-logo.png"
                alt="MoonLightRP Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold">MoonLightRP</span>
            </Link>
            <div className="hidden gap-8 md:flex">
              <Link href="/rules" className="text-sm hover:text-purple-400 transition-colors font-semibold">
                Pravidla
              </Link>
              <a
                href="https://sakky.tebex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                Obchod
              </a>
              <Link href="/whitelist" className="text-sm hover:text-purple-400 transition-colors">
                Whitelist
              </Link>
              {/* Removed Statistics link */}
              <Link href="/team" className="text-sm hover:text-purple-400 transition-colors">
                Tým
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-5xl font-bold">Pravidla Serveru</h1>

            <div className="space-y-8">
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h2 className="mb-3 text-2xl font-bold text-purple-400">1. Respekt a Chování</h2>
                <p className="text-slate-300">
                  Všichni hráči musí si navzájem prokazovat respekt. Není povoleno nadávání, rasismus, sexismus nebo
                  jakákoliv forma diskriminace.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h2 className="mb-3 text-2xl font-bold text-purple-400">2. Roleplay Integrita</h2>
                <p className="text-slate-300">
                  Všichni hráči musí zůstat v roli. Není povoleno opouštět roleplay bez důvodu. Komunikace mimo hru musí
                  být v OOC kanálu.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h2 className="mb-3 text-2xl font-bold text-purple-400">3. Zákaz Cheating</h2>
                <p className="text-slate-300">
                  Jakékoliv použití cheatů, hacků nebo exploitů je přísně zakázáno. Porušení tohoto pravidla vede k
                  trvalému zákazu.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h2 className="mb-3 text-2xl font-bold text-purple-400">4. Zákaz Griefingu</h2>
                <p className="text-slate-300">
                  Griefing (záměrné poškozování majetku ostatních hráčů) je zakázán. Všechny spory musí být řešeny
                  správci.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
                <h2 className="mb-3 text-2xl font-bold text-purple-400">5. Zákaz Spamu</h2>
                <p className="text-slate-300">
                  Spam v chatu, hlasovém kanálu nebo jakékoliv formě komunikace je zakázán. Porušení vede k dočasnému
                  nebo trvalému zákazu.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/">
                <Button className="bg-purple-600 hover:bg-purple-700">← Zpět na domů</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
