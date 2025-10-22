// 🌐 This file configures multilingual routing and navigation for the app,
// providing locale-based URLs and navigation helpers using next-intl.
// It ensures users can switch between Portuguese, Spanish, French, English, and Japanese seamlessly.

import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// Define available locales and set the default language
export const routing = defineRouting({
  locales: ["pt", "es", "fr", "en", "ja"],
  defaultLocale: "en",
});

// Create navigation helpers for internationalized routing, when using next-intl , instead of using the built-in nextjs hooks and functions, because of the locale , next-intl provides those functions and hooks to preserve locale
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ ...routing });
