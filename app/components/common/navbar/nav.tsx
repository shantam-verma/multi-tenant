"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-between">
      <Link href="/" className="text-base font-semibold tracking-tight">
        Dashboard
      </Link>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="hidden rounded-full md:inline-flex"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}
