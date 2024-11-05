import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Mini-App-SandBox",
  description:
    "A mini-app sandbox built on NextJS with radixUI components and TailwindCSS.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-900 via-black to-cyan-900" />
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main className="flex min-h-[80%] w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
