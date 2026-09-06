import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Karan Sasane — Engineering Portfolio",
  description:
    "Personal digital experience and engineering portfolio of Karan Sasane. Systems thinker, problem solver, technical builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
