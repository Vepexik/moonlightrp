import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
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
              <Link href="/whitelist" className="text-sm hover:text-blue-400 transition-colors">
                Whitelist
              </Link>
              <Link href="/team" className="text-sm hover:text-blue-400 transition-colors font-semibold">
                Tým
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h1 className="mb-4 text-5xl font-bold">Náš tým</h1>
              <p className="mb-2 text-xl text-slate-300">Seznamte se s MoonLightRP týmem</p>
              <p className="text-slate-400">Administrace, moderace i vývoj – tým, díky kterému to žije.</p>
            </div>

            {/* Leadership Section */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-blue-400">Vedení</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {["Sakky", "Matysekk"].map((member) => (
                  <div
                    key={member}
                    className="rounded-lg border border-slate-700 bg-slate-900/50 p-6 text-center hover:border-blue-500/50 transition-colors"
                  >
                    <div className="h-20 w-20 rounded-full bg-blue-500/20 mb-4 mx-auto"></div>
                    <h3 className="font-bold text-blue-400">{member}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Developers Section */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-blue-400">Developers</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {["Kazun", "Jank"].map((member) => (
                  <div
                    key={member}
                    className="rounded-lg border border-slate-700 bg-slate-900/50 p-6 text-center hover:border-blue-500/50 transition-colors"
                  >
                    <div className="h-20 w-20 rounded-full bg-blue-500/20 mb-4 mx-auto"></div>
                    <h3 className="font-bold text-slate-300">{member}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* A-Team Section */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-blue-400">A-Team</h2>
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
                    className="rounded-lg border border-slate-700 bg-slate-900/50 p-6 text-center hover:border-blue-500/50 transition-colors"
                  >
                    <div className="h-20 w-20 rounded-full bg-blue-500/20 mb-4 mx-auto"></div>
                    <h3 className="font-bold text-slate-300">{member}</h3>
                  </div>
                ))}
              </div>
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
