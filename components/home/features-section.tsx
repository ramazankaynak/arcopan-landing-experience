/* Rule 02 – icon + stat = instant value
   Rule 03 – 60-70% content density, B2B scan pattern
   Rule 06 – Navy authority, Teal CTA, Amber Quote
   Rule 12 – EN/ISO nomenclature */

import { Snowflake, Settings, Shield, Leaf, Clock, Wrench } from "lucide-react"

const features = [
  {
    icon: Snowflake,
    tag: "EN 14509",
    title: "PIR / PUR Insulation",
    description: "Polyisocyanurate and polyurethane core panels with λ ≤ 0.023 W/(m·K). Meets EN 14509 cold-room panel standard.",
    stat: "λ ≤ 0.023 W/(m·K)",
  },
  {
    icon: Settings,
    tag: "EPC Turnkey",
    title: "Full EPC Delivery",
    description: "Engineering, Procurement, Construction — single-source accountability from FEED to commissioning handover.",
    stat: "500+ projects",
  },
  {
    icon: Shield,
    tag: "ISO 9001:2015",
    title: "Quality & Compliance",
    description: "CE-marked products compliant with ISO 9001:2015, EN 14509, and HACCP design guidelines for food-grade facilities.",
    stat: "CE · ISO · EN",
  },
  {
    icon: Leaf,
    tag: "F-Gas Reg.",
    title: "Low-GWP Refrigerants",
    description: "R-448A, R-449A, R-290 — EU F-Gas Regulation compliant refrigerant selection with up to 40% energy reduction.",
    stat: "GWP < 1500",
  },
  {
    icon: Clock,
    tag: "SLA",
    title: "24 h BOQ Response",
    description: "Submit drawings or bill of quantities — technical and commercial proposal returned within one business day.",
    stat: "24 h turnaround",
  },
  {
    icon: Wrench,
    tag: "Lifecycle",
    title: "After-Sales & Spare Parts",
    description: "Preventive maintenance contracts, OEM spare parts, and remote monitoring available for all installed systems.",
    stat: "10-yr warranty",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white border-b border-[#E2E8F0]">
      <div className="container mx-auto px-6">

        {/* Section header – Rule 01: H2 short, Rule 05: Sub ≤30 words */}
        <div className="mb-10">
          <span className="font-mono text-[11px] text-[#0E7490] uppercase tracking-widest">
            Why ARCOPAN
          </span>
          <h2 className="mt-2 text-[#0D2B45]">
            EPC Expertise. Certified Quality.
          </h2>
          <p className="mt-2 text-[14px] text-[#64748B] max-w-xl leading-relaxed">
            Three decades of cold-chain engineering across food, pharma, and logistics infrastructure in 25 markets.
          </p>
        </div>

        {/* Feature grid – Rule 03: density; Rule 09: 4→2→1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0]">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 flex flex-col gap-3 hover:bg-[#F8FAFC] transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded bg-[#0E7490]/10 flex items-center justify-center group-hover:bg-[#0E7490]/20 transition-colors shrink-0">
                  <f.icon className="h-4.5 w-4.5 text-[#0E7490]" style={{ width: 18, height: 18 }} />
                </div>
                {/* Spec tag – Rule 12: mono, EN/ISO reference */}
                <span className="font-mono text-[10px] text-[#94A3B8] bg-[#F1F5F9] px-2 py-0.5 rounded border border-[#CBD5E1]">
                  {f.tag}
                </span>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold text-[#0D2B45] leading-snug">{f.title}</h3>
                <p className="mt-1 text-[13px] text-[#64748B] leading-relaxed">{f.description}</p>
              </div>

              {/* Rule 02: stat = instant value */}
              <div className="mt-auto pt-2 border-t border-[#F1F5F9]">
                <span className="font-mono text-[12px] font-semibold text-[#0E7490]">{f.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
