import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Join Now", href: "#join-now" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900"
        >
          <Image
            src="/logo.png"
            alt="Battle League logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span>Battle League</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}