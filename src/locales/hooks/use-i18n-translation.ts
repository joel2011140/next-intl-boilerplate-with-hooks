// 🌐 This hook provides a strongly typed translation function for the feed module,
// leveraging `ExtractRecursiveKeys` to ensure type-safe translation keys.
// It wraps `useTranslations` from next-intl, giving you IntelliSense for all nested keys
// and making your translations safer and easier to maintain.

import { ExtractRecursiveKeys } from "./messages";
import internalizionalizationJson from "../about-internationalization/en.json";
import { useTranslations } from "next-intl";

// Generate a type-safe union of all translation keys in the feed JSON
export type TranslationKeyPath = ExtractRecursiveKeys<typeof internalizionalizationJson>;

// Custom hook for type-safe translations
export function useInternationalizationsTranslations() {
  const translation = useTranslations();

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
