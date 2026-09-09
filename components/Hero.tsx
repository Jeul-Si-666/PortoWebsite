export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-black/10"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-6 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        
        {/* Left */}
        <div className="flex flex-col justify-center py-20 lg:pr-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a62b2b]" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/50">
              Hello, I'm Zelcy
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            BUILDING
            <br />
            THINGS FOR A
            <br />
            BETTER{" "}
            <span className="text-[#a62b2b]">
              TOMORROW.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg">
            Computer Engineering student focused on IoT,
            embedded systems, and software development.
            I enjoy turning ideas into real systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-6 bg-[#a62b2b] px-6 py-4 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-1"
            >
              VIEW PROJECTS

              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-black/30 px-6 py-4 text-sm font-medium transition-colors duration-200 hover:bg-black hover:text-white"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center py-10 lg:py-20">
          
          <div className="relative aspect-square w-full max-w-lg border border-black/10">
            
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #00000012 1px, transparent 1px),
                  linear-gradient(to bottom, #00000012 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-48 w-48 items-center justify-center border border-black/20 md:h-64 md:w-64">
                
                <div className="absolute h-32 w-32 border border-black/20 md:h-44 md:w-44" />

                <div className="h-4 w-4 rounded-full bg-[#a62b2b]" />
              </div>
            </div>

            {/* Labels */}
            <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-black/40">
              SYSTEM / 001
            </span>

            <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.2em] text-black/40">
              HARDWARE → SOFTWARE
            </span>

            <span className="absolute right-5 top-5 text-xs text-black/40">
              01
            </span>

            <span className="absolute bottom-5 right-5 text-[10px] text-black/40">
              2026
            </span>
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="border-t border-black/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-3 lg:px-10">
          
          <div className="border-b border-black/10 py-6 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
              Based In
            </p>

            <p className="mt-2 text-sm">
              Indonesia
            </p>
          </div>

          <div className="border-b border-black/10 py-6 sm:border-b-0 sm:px-8 sm:border-r">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
              Focus
            </p>

            <p className="mt-2 text-sm">
              IoT / Embedded / Software
            </p>
          </div>

          <div className="py-6 sm:pl-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
              Currently
            </p>

            <p className="mt-2 text-sm">
              Learning & Building
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}