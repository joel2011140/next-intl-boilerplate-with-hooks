// 🌐 This async function provides a strongly typed translation function,
// leveraging `ExtractRecursiveKeys` to ensure type-safe translation keys.
// It wraps `getTranslations` from next-intl, giving you IntelliSense for all nested keys
// and making your translations safer and easier to maintain.


import generalJson from "../general/en.json";
import { getTranslations } from "next-intl/server";
import { ExtractRecursiveKeys } from "../hooks/messages";

// Generate a type-safe union of all translation keys in the feed JSON
export type TranslationKeyPath = ExtractRecursiveKeys<typeof generalJson>;

// Async function for type-safe translations
export async function getInternationalizationsTranslations() {
  const t = await getTranslations();

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => t(path, props);

  return { translate };
}
