const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    number: "02",
    title: "Embedded Systems",
    skills: ["STM32", "UART", "GPIO", "PWM", "I2C", "SPI"],
  },
  {
    number: "03",
    title: "Web Development",
    skills: ["Next.js", "React", "Node.js", "REST API", "HTML", "CSS"],
  },
  {
    number: "04",
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Linux",
      "STM32CubeIDE",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-black/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-black/40">
            03
          </span>

          <span className="h-px w-10 bg-[#a62b2b]" />

          <p className="text-xs uppercase tracking-[0.25em] text-black/50">
            Technical Skills
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            SKILLS
          </h2>

          <p className="max-w-md text-sm leading-6 text-black/50">
            Technologies and tools I use to build,
            experiment, and solve engineering problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid border-t border-black/10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="border-b border-black/10 py-10 md:px-8 md:first:pl-0 md:odd:border-r md:even:pr-0"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-black/30">
                    {group.number}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                    {group.title}
                  </h3>
                </div>

                <span className="text-xs text-black/30">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-black/55 transition-colors duration-200 hover:text-[#a62b2b]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}