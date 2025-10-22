// 🌐 This file configures Next.js to use the next-intl plugin,
// enabling internationalization features such as localized routing
// and automatic language handling across the application.

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Initialize the next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Export the Next.js configuration wrapped with next-intl
const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
