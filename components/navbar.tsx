const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f4ef]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-bold tracking-[0.2em]"
        >
          Zelcy Wiluarta

          <span className="h-2 w-2 rounded-full bg-[#a62b2b]" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-black/60 transition-colors duration-200 hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          className="text-xs tracking-[0.15em] md:hidden"
          aria-label="Open menu"
        >
          MENU
        </button>

      </nav>
    </header>
  );
}