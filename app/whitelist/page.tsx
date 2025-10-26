import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhitelistPage() {
  return (
    <div className="min-h-screen bg-purple-950 text-white">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-800 px-4 py-4 sticky top-0 bg-purple-950/95 backdrop-blur">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/moonlight-logo.png" alt="MoonLightRP Logo" width={32} height={32} className="rounded-full" />
              <span className="font-bold">MoonLightRP</span>
            </Link>
            <div className="hidden gap-8 md:flex">
              <a
                href="https://moonlightrp.gitbook.io/moonlight-rp-pravidla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Pravidla
              </a>
              <a
                href="https://sakky.tebex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Obchod
              </a>
              <Link href="/whitelist" className="text-sm hover:text-blue-400 transition-colors font-semibold">
                Whitelist
              </Link>
              <Link href="/team" className="text-sm hover:text-blue-400 transition-colors">
                Tým
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-5xl font-bold">Whitelist</h1>

            <div className="rounded-lg border border-blue-500/30 bg-blue-900/20 p-8 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">📢</span>
                <div>
                  <h2 className="text-2xl font-bold text-blue-300">Chceš vědět, zda je nábor stále otevřený?</h2>
                  <p className="text-blue-200 mt-4">
                    Připoj se na náš Discord server a podívej se do příslušného kanálu:
                  </p>
                  <div className="mt-4 space-y-3">
                    <p>
                      <span className="font-semibold text-blue-300">Discord Server:</span>{" "}
                      <a
                        href="https://discord.gg/urvYf9EYHE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        https://discord.gg/urvYf9EYHE
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-blue-300">Kanál náboru:</span>{" "}
                      <a
                        href="https://discordapp.com/channels/1415730344686256201/1420508361270497321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        Přejít na kanál
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-8 mb-8">
              <h2 className="mb-4 text-xl font-bold text-blue-400">Jak se přihlásit?</h2>
              <p className="text-slate-300 mb-4">
                Pokud chceš získat přístup do našeho whitelistu a stát se plnohodnotným členem komunity, stačí:
              </p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li>
                  Vyplnit žádost v kanálu <span className="text-blue-300 font-semibold">《📑》pohovor-žádost</span>
                </li>
                <li>Připojit se do čekárny</li>
                <li>Člen našeho týmu tě vyzvedne a provede pohovorem</li>
              </ol>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-8 mb-8">
              <h2 className="mb-4 text-xl font-bold text-blue-400">Na co se připravit?</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <span className="font-semibold text-blue-300">Očekáváme, že budeš znát naše pravidla.</span> Pohovor
                  není o štěstí ani náhodě - cílem je zjistit, zda rozumíš základním principům.
                </p>
                <p className="text-yellow-300/80">
                  ⚠️ Pokud přijdeš nepřipravený, bude to ztráta času pro tebe i pro nás.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-green-500/30 bg-green-900/20 p-8 mb-8">
              <h2 className="mb-4 text-xl font-bold text-green-300">Výhody whitelistu</h2>
              <p className="text-slate-300">
                Úspěšným pohovorem si zajistíš místo mezi whitelist hráči a otevře se ti možnost využívat všechny
                výhody, které běžným hráčům nejsou dostupné.
              </p>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-8 mb-8">
              <p className="text-slate-300 text-lg">
                <span className="font-bold text-blue-300">Nenech to ležet!</span> Whitelist není otevřený pořád. Těšíme
                se na všechny, kdo to myslí vážně! 🚀
              </p>
            </div>

            <div className="mt-12">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700">← Zpět na domů</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
