"use client"
import { useState } from "react";
import { usePresentationTranslations } from "../locales/hooks/use-presentation-translations";

export function SayHi() {
  const [name, setName] = useState<string>("John Doe")
  const { translate } = usePresentationTranslations()

  return (
    <div className="w-full flex flex-col gap-2">
      <input placeholder="John Doe" className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{translate("say-hi", { name })}</p>
    </div>
  )
}