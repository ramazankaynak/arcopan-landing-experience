import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  {
    image: heroBg,
    sector: "Food & Beverage",
    name: "İstanbul Cold Chain Distribution Hub",
    location: "İstanbul, Turkey",
    year: "2025",
  },
  {
    image: heroBg,
    sector: "Meat & Poultry",
    name: "Bucharest Blast Freezing Facility",
    location: "Bucharest, Romania",
    year: "2024",
  },
  {
    image: heroBg,
    sector: "Pharmaceuticals",
    name: "Algiers GDP-Compliant Cold Store",
    location: "Algiers, Algeria",
    year: "2024",
  },
];

const ProjectsSection = () => {
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
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Delivered Across Industries
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm font-semibold text-primary hover:underline"
          >
            View All Projects →
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
