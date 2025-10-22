"use client"

import { AboutInternationalization } from "@/src/components/about-internationalization"
import { AboutNext } from "@/src/components/about-next"

export default function LocalePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <AboutNext />
      <AboutInternationalization />
    </div>
  )
}