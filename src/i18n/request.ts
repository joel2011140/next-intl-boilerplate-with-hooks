// 🌐 This file configures the i18n server-side message loading for the app.
// It dynamically imports translation files based on the active locale and merges them.
// 
// 🧩 Custom Modules:
// Instead of having one giant translation file per locale, the app splits translations
// into **separate modules** (e.g. "about-internationalization", "about-next").
// Each module corresponds to a logical section of the app, making it easier to:
//   - Organize translations by feature or page
//   - Maintain and update specific parts without touching everything
//   - Keep files smaller and more manageable
//
// 📦 Example folder structure:
// ├─ locales/
// │  ├─ about-internationalization/
// │  │  ├─ en.json
// │  │  ├─ pt.json
// │  ├─ about-next/
// │  │  ├─ en.json
// │  │  ├─ pt.json
//
// ✅ At runtime, all module messages are loaded and merged into a single object
//    so translations work just like they would with a single file.

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Load all translation messages for the given locale
async function loadMessages(locale: string) {
  const modules = ["about-internationalization", "about-next", "presentation", "general"];
  const messages = {};

  for (const moduleName of modules) {
    try {
      const moduleMessages = (
        await import(`../locales/${moduleName}/${locale}.json`)
      ).default;
      Object.assign(messages, moduleMessages);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (
        error.code !== "MODULE_NOT_FOUND" &&
        !/Cannot find module/.test(error.message)
      ) {
        throw error;
      }
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback to default locale if not supported
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
