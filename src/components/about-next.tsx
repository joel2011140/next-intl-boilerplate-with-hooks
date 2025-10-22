"use client"

import { useNextJsTranslations } from "../locales/hooks/use-next-js-translation"

export function AboutNext() {
  const { translate } = useNextJsTranslations()

  return (
    <p className="text-foreground leading-relaxed">
      {translate('intro-next')}
    </p>
  )
}