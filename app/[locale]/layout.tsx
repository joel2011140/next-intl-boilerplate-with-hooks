import { routing } from "@/src/i18n/routing";
import { TLocales } from "@/src/i18n/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalizationsTranslations } from "@/src/locales/general/get-general-translate";

export async function generateMetadata(): Promise<Metadata> {
  const { translate } = await getInternationalizationsTranslations();

  return {
    title: translate("page-title")
  }

}

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