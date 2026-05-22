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
        <a
          href="/"
          className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900"
        >
          <img
            src="/logo.png"
            alt="Battle League logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>Battle League</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}