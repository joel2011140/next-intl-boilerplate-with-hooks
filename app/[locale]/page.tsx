"use client"

import { useSimpleTranslation } from "@/src/locales/hooks/use-simple-translation"

export default function LocalePage() {
  const { translate } = useSimpleTranslation()

  return (
    <div className="w-full flex h-screen flex-col items-center justify-center">
      <p>{translate("hello")}</p>
    </div>
  )
}