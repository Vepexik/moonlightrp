"use client"

import { useState } from "react"

interface ShopItem {
  id: string
  name: string
  category: "vip" | "yacht" | "vehicle"
  description: string
  details: string
  price: number
  features: string[]
}

const shopItems: ShopItem[] = [
  {
    id: "vip-basic",
    name: "VIP Basic",
    category: "vip",
    description: "Základní VIP balíček",
    details: "Získejte přístup k základním VIP výhodám a speciálním privilegiím na serveru.",
    price: 299,
    features: ["Speciální tag v chatu", "Zvýšený limit peněz", "Prioritní přístup na server"],
  },
  {
    id: "vip-legendary",
    name: "VIP Legendary",
    category: "vip",
    description: "Legendární VIP balíček",
    details: "Maximální VIP výhody s exkluzivními benefity a speciálními právy.",
    price: 599,
    features: ["Zlatý tag v chatu", "Neomezený limit peněz", "VIP místnost", "Speciální vozidla"],
  },
  {
    id: "yacht-1",
    name: "Yacht 1",
    category: "yacht",
    description: "Luxusní jachta",
    details: "Vlastněte svou vlastní luxusní jachtu s úžasným výhledem na moře.",
    price: 450,
    features: ["Parkování v přístavu", "Interní vybavení", "Bezpečnostní systém"],
  },
  {
    id: "yacht-2",
    name: "Yacht 2",
    category: "yacht",
    description: "Mega jachta",
    details: "Nejluxusnější jachta na serveru s prémiovým vybavením.",
    price: 899,
    features: ["Helipad", "Bazén", "Kino", "Restaurace"],
  },
  {
    id: "vehicle-lambo",
    name: "Lamborghini",
    category: "vehicle",
    description: "Sportovní vůz",
    details: "Rychlý a stylový sportovní vůz pro ty, kteří milují rychlost.",
    price: 199,
    features: ["Vysoká rychlost", "Sportovní design", "Tuning možnosti"],
  },
  {
    id: "vehicle-ferrari",
    name: "Ferrari",
    category: "vehicle",
    description: "Prémiový sportovní vůz",
    details: "Ikonický italský sportovní vůz s výjimečným výkonem.",
    price: 349,
    features: ["Extrémní zrychlení", "Luxusní interiér", "Speciální barvy"],
  },
]

export function ShopItems() {
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null)

  const categories = ["vip", "yacht", "vehicle"] as const
  const categoryLabels = {
    vip: "VIP Balíčky",
    yacht: "Jachty",
    vehicle: "Vozidla",
  }

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = shopItems.filter((item) => item.category === category)
        return (
          <div key={category}>
            <h2 className="mb-6 text-3xl font-bold text-blue-400">{categoryLabels[category]}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`rounded-lg border-2 p-6 text-left transition-all duration-300 ${
                    selectedItem?.id === item.id
                      ? "border-blue-500 bg-blue-900/30"
                      : "border-slate-700 bg-slate-900/50 hover:border-blue-400"
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-blue-400">{item.name}</h3>
                  <p className="mb-3 text-sm text-slate-300">{item.description}</p>
                  <p className="text-lg font-bold text-blue-300">{item.price} Kč</p>
                </button>
              ))}
            </div>
          </div>
        )
      })}

      {/* Info Section */}
      {selectedItem && (
        <div className="rounded-lg border border-blue-500 bg-blue-900/20 p-8">
          <h3 className="mb-4 text-2xl font-bold text-blue-400">{selectedItem.name}</h3>
          <p className="mb-6 text-slate-300">{selectedItem.details}</p>

          <div className="mb-6">
            <h4 className="mb-3 font-bold text-blue-300">Vlastnosti:</h4>
            <ul className="space-y-2">
              {selectedItem.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-400">{selectedItem.price} Kč</p>
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-bold hover:bg-blue-700 transition-colors">
              Koupit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
