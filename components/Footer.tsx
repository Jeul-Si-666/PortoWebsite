export default function Footer() {
  return (
    <footer className="px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-black/40 md:flex-row md:items-center md:justify-between">

        <p>
          © {new Date().getFullYear()} Yang. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <span>
            Computer Engineering
          </span>

          <span className="h-1 w-1 rounded-full bg-[#a62b2b]" />

          <span>
            Indonesia
          </span>
        </div>

      </div>
    </footer>
  );
}