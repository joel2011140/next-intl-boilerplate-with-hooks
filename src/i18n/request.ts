// 🌐 This file configures the i18n server-side message loading for the app,
// dynamically importing translation files based on the active locale.
// It ensures that the correct language resources are available for each request.

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Load all translation messages for the given locale
async function loadMessages(locale: string) {
  try {
    const messages = (await import(`../locales/${locale}.json`)).default;
    return messages;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (
      error.code !== "MODULE_NOT_FOUND" &&
      !/Cannot find module/.test(error.message)
    ) {
      throw error;
    }
    return {};
  }
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
