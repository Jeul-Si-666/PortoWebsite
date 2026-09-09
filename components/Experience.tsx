const experiences = [
  {
    year: "2026",
    role: "Computer Engineering Student",
    organization: "University",
    description:
      "Studying computer engineering with a focus on embedded systems, IoT, computer systems, and software development.",
  },
  {
    year: "2026",
    role: "IoT / Software Development",
    organization: "Academic Projects",
    description:
      "Developing IoT and software projects involving telemetry, REST APIs, embedded systems, and web applications.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-black/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-black/40">
            04
          </span>

          <span className="h-px w-10 bg-[#a62b2b]" />

          <p className="text-xs uppercase tracking-[0.25em] text-black/50">
            Experience
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            EXPERIENCE
          </h2>
        </div>

        {/* Experience list */}
        <div className="mt-16 border-t border-black/10">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.year}-${index}`}
              className="grid gap-6 border-b border-black/10 py-10 md:grid-cols-[120px_1fr_1.5fr]"
            >
              <div>
                <p className="text-sm text-black/40">
                  {experience.year}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm text-[#a62b2b]">
                  {experience.organization}
                </p>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-7 text-black/55">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}