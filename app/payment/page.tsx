"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/app/providers"

export default function PaymentPage() {
  const { total } = useCart()

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
            <Link href="/cart" className="text-sm hover:text-blue-400 transition-colors font-semibold">
              Košík
            </Link>
          </div>
        </nav>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-8 text-5xl font-bold">Výběr Způsobu Platby</h1>

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-8 mb-8">
              <p className="text-slate-300 mb-6">
                Celková částka: <span className="text-3xl font-bold text-blue-400">{total} Kč</span>
              </p>

              <div className="space-y-4">
                <Link href="/payment/paypal">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-16 text-lg">PayPal</Button>
                </Link>
              </div>
            </div>

            <Link href="/cart">
              <Button className="bg-slate-700 hover:bg-slate-600">← Zpět do košíku</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
