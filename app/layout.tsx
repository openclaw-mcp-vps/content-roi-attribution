import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContentROI — Track Which Content Drives Real Revenue",
  description: "Connect your blog posts and content to actual customer conversions and revenue. See exactly which content pieces drive growth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c273f7a5-0be6-44b1-8a3a-c6080ab91f67"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
