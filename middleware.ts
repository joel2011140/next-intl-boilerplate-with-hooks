// 🌐 This file sets up a global middleware to handle internationalized routing.
// It ensures all incoming requests are processed through `next-intl`,
// enabling localized URLs and language detection before rendering pages.

import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

// Create the i18n middleware using the app's routing configuration
const intlMiddleware = createMiddleware(routing);

// Apply the i18n middleware to all matching routes
export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

// Define which routes this middleware will apply to
export const config = {
  matcher: ["/", "/(pt|es|fr|en|ja)/:path*"],
};
