import Link from "next/link";
import ThemeSelector from "../../ui/theme-selector";

export function Navbar() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-between">
      <Link href="/" className="text-base font-semibold tracking-tight">
        Overview
      </Link>

      <div className="flex items-center gap-2">
        <ThemeSelector />
      </div>
    </div>
  );
}
