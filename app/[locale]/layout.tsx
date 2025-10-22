import { routing } from "@/src/i18n/routing";
import { TLocales } from "@/src/i18n/types";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as TLocales)) {
    notFound();
  }

  return <>{children}</>;
}