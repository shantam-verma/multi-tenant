import Link from "next/link";
import ThemeSelector from "../../ui/theme-selector";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { BellIcon } from "@/app/utils/icons";

export function Navbar() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-between">
      <Link href="/" className="text-base font-semibold tracking-tight">
        Overview
      </Link>

      <div className="flex items-center gap-2">
        <ThemeSelector />
        <Button size="icon" variant="ghost">
          <BellIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
