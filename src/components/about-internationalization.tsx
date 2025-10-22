"use client"

import { useInternationalizationsTranslations } from "../locales/hooks/use-i18n-translation"

export function AboutInternationalization() {
  const { translate } = useInternationalizationsTranslations()

  return (
    <p className="text-foreground leading-relaxed">
      {translate("intro")}
    </p>
  )
}