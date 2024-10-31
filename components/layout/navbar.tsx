"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { Home } from "lucide-react";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-end">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Home color="white"/>
          </Link>
        </div>
      </div>
    </>
  );
}
