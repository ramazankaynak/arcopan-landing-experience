import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import completedProject1 from "@/assets/arcopan-web/Completed-projects1.png";
import completedProject2 from "@/assets/arcopan-web/Completed-projects2.png";
import completedProject3 from "@/assets/arcopan-web/Completed-projects3.png";

const projects = [
  {
    image: completedProject1,
    sector: "Food & Beverage",
    name: "İstanbul Cold Chain Distribution Hub",
    location: "İstanbul, Turkey",
    year: "2025",
    scope: "12,000 m² • PUR panels • Cooling systems",
  },
  {
    image: completedProject2,
    sector: "Meat & Poultry",
    name: "Bucharest Blast Freezing Facility",
    location: "Bucharest, Romania",
    year: "2024",
    scope: "Cold room panels • Blast tunnels • Doors",
  },
  {
    image: completedProject3,
    sector: "Pharmaceuticals",
    name: "Algiers GDP-Compliant Cold Store",
    location: "Algiers, Algeria",
    year: "2024",
    scope: "GDP certified • Temperature monitoring",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
              {t("projects_section.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("projects_section.title")}
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm font-semibold text-primary hover:underline"
          >
            {t("projects_section.view_all")} →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg mb-4 aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-primary">
                {project.sector}
              </span>
              <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {project.location} · {project.year}
              </p>
              <p className="text-[11px] text-primary/70 font-mono mt-1">
                {project.scope}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
