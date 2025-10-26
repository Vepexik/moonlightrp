"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/app/providers"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart()

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
              <Link href="/team" className="text-sm hover:text-blue-400 transition-colors">
                Tým
              </Link>
            </div>
            <Link href="/cart" className="text-sm hover:text-blue-400 transition-colors font-semibold">
              Košík
            </Link>
          </div>
        </nav>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-5xl font-bold">Nákupní Košík</h1>

            {items.length === 0 ? (
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-8 text-center">
                <p className="mb-6 text-slate-300">Váš košík je prázdný</p>
                <a href="https://sakky.tebex.io/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700">Pokračovat v nákupu</Button>
                </a>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-slate-700 bg-slate-900/50 p-6 flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-400">{item.name}</h3>
                        <p className="text-slate-300">{item.price} Kč</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded"
                          >
                            +
                          </button>
                        </div>
                        <p className="w-24 text-right font-bold">{item.price * item.quantity} Kč</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
                        >
                          Odebrat
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-bold">Celkem:</span>
                    <span className="text-3xl font-bold text-blue-400">{total} Kč</span>
                  </div>
                  <Link href="/payment">
                    <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">Pokračovat k platbě</Button>
                  </Link>
                  <Button onClick={clearCart} className="w-full bg-slate-700 hover:bg-slate-600">
                    Vyprázdnit košík
                  </Button>
                </div>
              </>
            )}

            <div>
              <a href="https://sakky.tebex.io/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">← Zpět do obchodu</Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
