"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/app/providers"
import { useState, useEffect } from "react"

const wordsStartingWithA = [
  "Abacus",
  "Abandon",
  "Ability",
  "Ablaze",
  "Aboard",
  "Absence",
  "Absolute",
  "Absorb",
  "Abstract",
  "Abundant",
  "Academy",
  "Accent",
  "Accept",
  "Access",
  "Accident",
  "Account",
  "Accuse",
  "Achieve",
  "Acid",
  "Acoustic",
  "Acquire",
  "Across",
  "Act",
  "Action",
  "Activate",
  "Activity",
  "Actor",
  "Actual",
  "Acuate",
  "Adapt",
  "Add",
  "Addict",
  "Address",
  "Adjust",
  "Admit",
  "Adopt",
  "Adore",
  "Adorn",
  "Adult",
  "Advance",
  "Advent",
  "Adverse",
  "Advertise",
  "Advice",
  "Advise",
  "Advocate",
  "Affair",
  "Afford",
  "Afraid",
  "Africa",
  "After",
  "Again",
  "Against",
  "Age",
  "Agent",
  "Agenda",
  "Aggregate",
  "Aggression",
  "Agile",
  "Agitate",
  "Ago",
  "Agony",
  "Agree",
  "Agreement",
  "Ahead",
  "Aid",
  "Aim",
  "Air",
  "Aisle",
  "Alarm",
  "Album",
  "Alcohol",
  "Alert",
  "Alien",
  "Align",
  "Alike",
  "Alive",
  "All",
  "Allay",
  "Allege",
  "Alley",
  "Alliance",
  "Allied",
  "Allocate",
  "Allot",
  "Allow",
  "Alloy",
  "Allude",
  "Allure",
  "Ally",
  "Almanac",
  "Almighty",
  "Almost",
  "Alms",
  "Aloft",
  "Alone",
  "Along",
  "Aloof",
  "Aloud",
  "Alphabet",
  "Already",
  "Also",
  "Altar",
  "Alter",
  "Alteration",
  "Alternate",
  "Alternative",
  "Although",
  "Altitude",
  "Alto",
  "Altogether",
  "Altruism",
  "Aluminum",
  "Always",
  "Amalgam",
  "Amass",
  "Amateur",
  "Amaze",
  "Amazement",
  "Amazing",
  "Amazon",
  "Ambiance",
  "Ambidextrous",
  "Ambience",
  "Ambient",
  "Ambiguity",
  "Ambiguous",
  "Ambition",
  "Ambitious",
  "Ambivalence",
  "Ambivalent",
  "Amble",
  "Ambrose",
  "Ambush",
  "Ameliorate",
  "Amen",
  "Amenable",
  "Amend",
  "Amendment",
  "Amenity",
  "America",
  "American",
  "Amethyst",
  "Amiable",
  "Amicable",
  "Amid",
  "Amidst",
  "Amigo",
  "Amine",
  "Amino",
  "Amiss",
  "Amity",
  "Ammonia",
  "Ammunition",
  "Amnesia",
  "Amnesty",
  "Amoeba",
  "Among",
  "Amongst",
  "Amorous",
  "Amorphous",
  "Amortize",
  "Amount",
  "Ampere",
  "Ampersand",
  "Amphibian",
  "Amphibious",
  "Amphitheater",
  "Ample",
  "Amplification",
  "Amplifier",
  "Amplify",
  "Amply",
  "Amputate",
  "Amputation",
  "Amuck",
  "Amulet",
  "Amuse",
  "Amusement",
  "Amusing",
  "An",
  "Anaconda",
  "Anachronism",
  "Anachronistic",
  "Anaconda",
  "Anaemia",
  "Anaemic",
  "Anaesthesia",
  "Anaesthetic",
  "Anagram",
  "Anal",
  "Analgesia",
  "Analgesic",
  "Analogous",
  "Analogue",
  "Analogy",
  "Analyse",
  "Analysis",
  "Analyst",
  "Analytic",
  "Analytical",
  "Analyze",
  "Anarchic",
  "Anarchism",
  "Anarchist",
  "Anarchy",
  "Anathema",
  "Anatomical",
  "Anatomist",
  "Anatomy",
  "Ancestor",
  "Ancestral",
  "Ancestry",
  "Anchor",
  "Anchorman",
  "Anchovy",
  "Ancient",
  "Ancillary",
  "And",
  "Andante",
  "Andiron",
  "Androgynous",
  "Androgyny",
  "Anecdotal",
  "Anecdote",
  "Anemia",
  "Anemic",
  "Anemone",
  "Anesthesia",
  "Anesthetic",
  "Anesthetist",
  "Anesthetize",
  "Anew",
  "Angel",
  "Angelic",
  "Angelica",
  "Angelus",
  "Anger",
  "Angina",
  "Angle",
  "Angler",
  "Anglian",
  "Anglican",
  "Anglicism",
  "Anglicize",
  "Angling",
  "Anglo",
  "Anglophile",
  "Anglophobe",
  "Anglophobia",
  "Angora",
  "Angry",
  "Angst",
  "Anguish",
  "Angular",
  "Angularity",
  "Aniline",
  "Animal",
  "Animalcule",
  "Animalism",
  "Animality",
  "Animate",
  "Animated",
  "Animation",
  "Animator",
  "Animism",
  "Animist",
  "Animistic",
  "Animosity",
  "Animus",
  "Anion",
  "Anise",
  "Aniseed",
  "Anisette",
  "Anisotropic",
  "Anisotropy",
  "Anisotrope",
  "Anisotropic",
  "Anisotropy",
  "Anisotrope",
]

function getRandomWord() {
  return wordsStartingWithA[Math.floor(Math.random() * wordsStartingWithA.length)]
}

export default function PayPalPage() {
  const { total } = useCart()
  const [referenceWord, setReferenceWord] = useState("")

  useEffect(() => {
    setReferenceWord(getRandomWord())
  }, [])

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
            <h1 className="mb-8 text-5xl font-bold">PayPal Platba</h1>

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-8 mb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Pro nákup produktu pošlete peníze zde:</h2>

                <div className="bg-slate-800/50 rounded-lg p-6 mb-6 border border-blue-500/30">
                  <p className="text-slate-300 mb-2">Částka k zaplacení:</p>
                  <p className="text-4xl font-bold text-blue-400 mb-6">{total} Kč</p>

                  <p className="text-slate-300 mb-2">Email:</p>
                  <p className="text-xl font-mono bg-slate-900 p-3 rounded mb-6 break-all">slehofertomas22@gmail.com</p>

                  <p className="text-slate-300 mb-2">Referenční kód:</p>
                  <p className="text-2xl font-bold text-green-400 bg-slate-900 p-3 rounded font-mono">
                    {referenceWord}
                  </p>
                </div>

                <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-6 mb-8">
                  <p className="text-slate-300 mb-2">Poznámka:</p>
                  <p className="text-slate-200">
                    Při odesílání platby uveďte referenční kód{" "}
                    <span className="font-bold text-green-400">{referenceWord}</span> do poznámky nebo popisu platby.
                  </p>
                </div>

                <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6">
                  <p className="text-slate-300 mb-4">Po odeslání platby:</p>
                  <ol className="space-y-3 text-slate-200">
                    <li className="flex gap-3">
                      <span className="text-green-400 font-bold">1.</span>
                      <span>
                        Připojte se na náš Discord:{" "}
                        <a
                          href="https://discord.gg/luminara"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-bold"
                        >
                          discord.gg/luminara
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-400 font-bold">2.</span>
                      <span>
                        Otevřete support ticket s vaším referenčním kódem{" "}
                        <span className="font-bold text-green-400">{referenceWord}</span>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-400 font-bold">3.</span>
                      <span>Náš tým vám potvrdí platbu a aktivuje váš nákup</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/payment" className="flex-1">
                  <Button className="w-full bg-slate-700 hover:bg-slate-600">← Zpět</Button>
                </Link>
                <a href="https://sakky.tebex.io/" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Pokračovat v nákupu</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
