import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import imgWarehouse from "@/assets/arcopan-web/a-large-cold-storage-warehouse.jpg";
import imgPanelConstruction from "@/assets/arcopan-web/cold-room-panel-construction.jpg";
import imgPnlSystems from "@/assets/arcopan-web/pnl-systems.jpg";
import imgProfessionalColdRoom from "@/assets/arcopan-web/professional-cold-room.jpg";
import imgColdRoom from "@/assets/arcopan-web/Cold-room.jpg";
import imgColRoomBuild from "@/assets/arcopan-web/Col-Room-Build.jpg";

/* ─── Types ───────────────────────────────── */
type ValueItem = {
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

/* ─── Data ───────────────────────────────── */
const values: ValueItem[] = [
  {
    number: "01",
    icon: Globe,
    title: "End-to-End Cold Chain Coordination",
    desc: "Single point of accountability from feasibility to commissioning.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Engineering Authority",
    desc: "30+ years of expertise with EU compliance and technical depth.",
  },
  {
    number: "03",
    icon: Globe,
    title: "International Experience",
    desc: "Projects delivered across EMEA with strong logistics capability.",
  },
  {
    number: "04",
    icon: Clock,
    title: "Fast RFQ Response",
    desc: "48-hour quotation turnaround with full traceability.",
  },
  {
    number: "05",
    icon: Zap,
    title: "Integrated Solutions",
    desc: "Cooling, insulation and structure in one coordinated system.",
  },
];

const statPills = [
  { value: "500+", label: "Projects" },
  { value: "25+", label: "Countries" },
  { value: "30+", label: "Years" },
];

const featureCards = [
  {
    title: "Industrial Experience",
    desc: "Deep understanding of EPC and cold chain markets.",
    image: imgProfessionalColdRoom,
  },
  {
    title: "Engineering Team",
    desc: "Expert engineers delivering high-quality solutions.",
    image: imgPnlSystems,
  },
  {
    title: "Speed & Flexibility",
    desc: "Fast execution with competitive pricing.",
    image: imgColRoomBuild,
  },
];

/* ─── ValueCard ───────────────────────────── */
const ValueCard = ({ value }: { value: ValueItem }) => {
  const Icon = value.icon;
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <span className="text-primary text-3xl font-bold">{value.number}</span>
      <Icon className="w-5 h-5 text-primary mt-2" />
      <h3 className="text-white font-bold mt-3">{value.title}</h3>
      <p className="text-white/60 text-sm mt-2">{value.desc}</p>
    </div>
  );
};

/* ─── Component ───────────────────────────── */
const WhyArcopan = () => {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            Why ARCOPAN
          </h2>
          <p className="text-white/60 mt-4 max-w-xl">
            Engineering-driven cold chain solutions for EPC and industrial clients.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-10">
          {statPills.map((s) => (
            <div key={s.label}>
              <div className="text-primary text-2xl font-bold">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((v) => (
            <ValueCard key={v.number} value={v} />
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-xl overflow-hidden">
              <img src={card.image} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white/5">
                <h3 className="text-white font-bold">{card.title}</h3>
                <p className="text-white/60 text-sm mt-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyArcopan;