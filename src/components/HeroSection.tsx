import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Endüstriyel soğuk hava deposu"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/80 via-hero/70 to-hero/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary-foreground text-glow mb-6"
        >
          ARCOPAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-light"
        >
          Geleceğin Soğutma Teknolojileri, Bugünün Standartları.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#products"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors box-glow"
        >
          Çözümlerimizi Keşfedin
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
