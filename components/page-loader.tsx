"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping">
            <div className="w-32 h-32 mx-auto rounded-full bg-purple-500/20"></div>
          </div>
          <Image
            src="/moonlight-logo.png"
            alt="MoonLightRP"
            width={128}
            height={128}
            className="relative z-10 animate-pulse"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
        <p className="mt-4 text-purple-300 font-medium">Načítání...</p>
      </div>
    </div>
  )
}
