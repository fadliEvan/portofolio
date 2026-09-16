import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fadli Yurisman — Backend Engineer & Software Developer",
  description:
    "Backend Engineer specializing in high-performance REST APIs, database architecture, and AI-driven automation systems.",
  keywords: [
    "Fadli Yurisman",
    "Backend Engineer",
    "Software Developer",
    "Node.js",
    "FastAPI",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "REST API",
    "Portfolio",
  ],
  authors: [{ name: "Fadli Yurisman" }],
  openGraph: {
    title: "Fadli Yurisman — Backend Engineer & Software Developer",
    description:
      "Backend Engineer specializing in high-performance REST APIs, database architecture, and AI-driven automation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}