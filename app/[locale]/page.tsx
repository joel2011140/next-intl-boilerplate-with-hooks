"use client"

import { AboutInternationalization } from "@/src/components/about-internationalization"
import { AboutNext } from "@/src/components/about-next"
import { SayHi } from "@/src/components/say-hi"
import { SelectLanguage } from "@/src/components/select-language"

export default function LocalePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <SelectLanguage />
      <AboutNext />
      <AboutInternationalization />
      <SayHi />
    </div>
  )
}