import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { CartProvider } from "./providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MoonLightRP - Největší CZ/SK FiveM Roleplay Server",
  description:
    "Připoj se k největšímu českému a slovenskému FiveM roleplay serveru. Autentický roleplay, stabilní infrastruktura, unikátní skripty a aktivní komunita 500+ hráčů. MoonLightRP - Tvůj příběh začíná zde.",
  keywords: [
    "FiveM",
    "roleplay",
    "CZ/SK server",
    "GTA roleplay",
    "MoonLightRP",
    "český FiveM server",
    "slovenský FiveM server",
    "roleplay server",
    "GTA V roleplay",
  ],
  authors: [{ name: "MoonLightRP Team" }],
  creator: "Vepexik_",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://moonlightrp.cz",
    title: "MoonLightRP - Největší CZ/SK FiveM Roleplay Server",
    description: "Připoj se k největšímu českému a slovenskému FiveM roleplay serveru s 500+ aktivními hráči.",
    siteName: "MoonLightRP",
    images: [
      {
        url: "/moonlight-logo.png",
        width: 1200,
        height: 630,
        alt: "MoonLightRP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonLightRP - Největší CZ/SK FiveM Roleplay Server",
    description: "Připoj se k největšímu českému a slovenskému FiveM roleplay serveru.",
    images: ["/moonlight-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/moonlight-logo.png" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body className={`font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
