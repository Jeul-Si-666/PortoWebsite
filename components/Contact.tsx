    export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-black/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-black/40">
            05
          </span>

          <span className="h-px w-10 bg-[#a62b2b]" />

          <p className="text-xs uppercase tracking-[0.25em] text-black/50">
            Contact
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[1.5fr_1fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/40">
              Have a project in mind?
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              LET&apos;S
              <br />
              BUILD
              <br />
              SOMETHING.
            </h2>
          </div>

          <div className="flex flex-col justify-end">

            <p className="max-w-md text-base leading-7 text-black/55">
              I&apos;m always interested in learning,
              building new things, and collaborating
              on interesting engineering projects.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="group mt-10 flex w-fit items-center gap-6 border-b border-black pb-3 text-sm font-medium"
            >
              your.email@example.com

              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="mt-12 flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-black"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-black"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}