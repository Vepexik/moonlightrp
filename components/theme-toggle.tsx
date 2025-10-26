"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-300"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-purple-400" /> : <Moon className="h-5 w-5 text-purple-400" />}
      <span className="sr-only">Přepnout téma</span>
    </Button>
  )
}
