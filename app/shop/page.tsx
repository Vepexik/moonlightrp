"use client"

import Link from "next/link"
import { ShopItems } from "@/components/shop-items"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-800 px-4 py-4 sticky top-0 bg-black/95 backdrop-blur">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              <span className="font-bold">MoonLightRP</span>
            </Link>
            <div className="hidden gap-8 md:flex">
              <Link href="/rules" className="text-sm hover:text-blue-400 transition-colors">
                Pravidla
              </Link>
              <Link href="/shop" className="text-sm hover:text-blue-400 transition-colors font-semibold">
                Obchod
              </Link>
              <Link href="/whitelist" className="text-sm hover:text-blue-400 transition-colors">
                Whitelist
              </Link>
              <Link href="/team" className="text-sm hover:text-blue-400 transition-colors">
                Tým
              </Link>
            </div>
            <Link href="/cart" className="text-sm hover:text-blue-400 transition-colors">
              Košík
            </Link>
          </div>
        </nav>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-8 text-5xl font-bold">Obchod</h1>

            <div className="mb-16">
              <ShopItems />
            </div>

            <div className="mt-12">
              <Link href="/">
                <button className="rounded-lg bg-blue-600 px-6 py-2 font-bold hover:bg-blue-700 transition-colors">
                  ← Zpět na domů
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
