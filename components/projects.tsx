import Link from "next/link";
const projects = [
  {
    number: "01",
    title: "IoT Telemetry System",
    category: "IoT / Web Application",
    description:
      "A system for transmitting and visualizing telemetry data from IoT devices through a web application.",
    technologies: ["Next.js", "TypeScript", "REST API", "IoT"],
    image: "/image/IoT DashBoard.png",
    slug: "IoT-Telemetry",
  },
  {
    number: "02",
    title: "STM32 UART Communication",
    category: "Embedded Systems",
    description:
      "Serial communication between STM32F4 and PC using UART, implemented with polling and interrupt-based methods.",
    technologies: ["STM32", "C", "UART", "Interrupt"],
    image: "/image/stm32-uart.png",
    slug: "STM32-UART-Communication",
  },
  {
    number: "03",
    title: "Smart Campus",
    category: "IoT / System Design",
    description:
      "An academic project exploring the application of IoT technology to support monitoring and automation in a smart campus environment.",
    technologies: ["IoT", "Embedded", "System Design"],
    image: "/image/smart-campus.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-black/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-black/40">
            02
          </span>

          <span className="h-px w-10 bg-[#a62b2b]" />

          <p className="text-xs uppercase tracking-[0.25em] text-black/50">
            Selected Projects
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            PROJECTS
          </h2>

          <p className="max-w-md text-sm leading-6 text-black/50">
            A collection of engineering projects involving
            hardware, embedded systems, IoT, and software.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-20">
          {projects.map((project) => (
            <article key={project.number} className="group">

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden border border-black/10 bg-[#e9e7e0]">

                <div className="absolute left-5 top-5 z-10">
                  <span className="bg-[#f5f4ef] px-3 py-2 text-xs tracking-[0.15em]">
                    {project.number}
                  </span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
              </div>

              {/* Information */}
              <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.2fr_auto] md:items-start">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#a62b2b]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-7 text-black/55">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-black/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center gap-4 border-b border-black pb-2 text-xs font-medium tracking-[0.12em]"
                    >
                    VIEW PROJECT

                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                    </span>
                    </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}