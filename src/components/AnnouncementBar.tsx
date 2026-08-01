import Link from "next/link";

export function AnnouncementBar() {
  return (
    <Link
      href="#contact"
      className="block bg-lime px-4 py-2.5 text-center text-[0.6875rem] font-medium leading-snug text-midnight transition-colors hover:bg-[#e4ff7a] sm:py-3 sm:text-sm"
    >
      <span className="sm:hidden">
        $80k quote? Your first tool ships in a week →
      </span>
      <span className="hidden sm:inline">
        Death to the $80k quote. Your first internal tool ships inside a week →
      </span>
    </Link>
  );
}
