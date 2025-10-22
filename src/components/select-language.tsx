"use client"

import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from "../i18n/routing";
import { ChangeEvent, useTransition } from "react";
import { useParams } from "next/navigation";
import { TLocales } from "../i18n/types";

export function SelectLanguage() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as TLocales;
    
    // Remove the current locale from the pathname to get the path without locale
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname: pathnameWithoutLocale, params },
        { locale: nextLocale }
      );
    });
    
    // Force reload to ensure all content is properly translated
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
    <select
      defaultValue={locale}
      onChange={onSelectChange}
      disabled={isPending}
      className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </select>
  );
}