"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <>
      <nav id="scrollspy-scrollable-parent-example" className="flex items-center justify-between md:px-28 px-4 py-4 bg-white shadow">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          PortFolio
        </Link>

        <div className="flex gap-4 items-center">
          {/* Links */}
          <div className="flex gap-4 pr-4">
            <Link href="#skills">Skills</Link>
            <Link href="#exp">Experience</Link>
            <Link href="/blog">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Call-to-action */}
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>
    </>
  );
}
