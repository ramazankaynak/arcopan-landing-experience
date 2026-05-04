"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Award, Shield } from "lucide-react"

/* Rule 01 – H1 ≤5 words, bold 28–40px
   Rule 02 – Headline + icon + stat = instant value
   Rule 06 – Navy hero bg, Teal primary CTA, Amber persistent Quote CTA
   Rule 07 – CTA verbs: "Request Engineering Consultation" / "Download Datasheet"
   Rule 12 – EN/ISO nomenclature, spec tags in mono */

const stats = [
  { value: "500+",  label: "Projects Delivered" },
  { value: "30+",   label: "Years in EPC" },
  { value: "25",    label: "Export Markets" },
  { value: "−40°C", label: "Min. Design Temp." },
]

const proofPoints = [
  { text: "ISO 9001:2015 · CE Marking · EN 14509 certified" },
  { text: "Turnkey EPC — engineering, supply, erection" },
  { text: "24 h response to BOQ / drawing submissions" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[#0D2B45]">

      {/* Subtle engineering grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CBD5E1 1px, transparent 1px),
            linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Right-side accent – teal glow, Rule 06 */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[480px] h-[480px] rounded-full bg-[#0E7490]/10 blur-[120px]" />
      </div>

      {/* Left border accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0E7490]" />

      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_440px] gap-14 items-center">

          {/* ── Left column: copy ── */}
          <div className="space-y-7">

            {/* Eyebrow – Rule 02: icon + label = instant signal */}
            <div className="inline-flex items-center gap-2 rounded border border-[#0E7490]/40 bg-[#0E7490]/10 px-3 py-1">
              <Shield className="h-3.5 w-3.5 text-[#22D3EE]" />
              <span className="font-mono text-[11px] text-[#22D3EE] tracking-widest uppercase">
                EU EPC · ISO 9001:2015 · CE · EN 14509
              </span>
            </div>

            {/* H1 – Rule 01: ≤5 words, 28–40px bold */}
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] text-white text-balance">
              Cold Storage.
              <br />
              <span className="text-[#22D3EE]">Engineered to Spec.</span>
            </h1>

            {/* Sub – Rule 01: ≤30 words */}
            <p className="text-[15px] text-white/65 leading-relaxed max-w-[520px]">
              ARCOPAN delivers turnkey insulation panels, condensing units, and modular cold rooms
              to food, pharma, and logistics operators across Europe and the Middle East.
            </p>

            {/* Proof points – Rule 08: claim → proof */}
            <ul className="space-y-2">
              {proofPoints.map((p) => (
                <li key={p.text} className="flex items-start gap-2.5 text-[13px] text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] mt-0.5 shrink-0" />
                  {p.text}
                </li>
              ))}
            </ul>

            {/* CTAs – Rule 07: approved verbs only */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Amber – Rule 06: persistent Quote CTA */}
              <Link
                href="/get-a-quote"
                className="btn-quote flex items-center gap-2 px-5 py-2.5 text-[14px]"
              >
                Request Engineering Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              {/* Teal – Rule 06: secondary action */}
              <Link
                href="/products"
                className="flex items-center gap-2 rounded border border-white/20 px-5 py-2.5 text-[14px] font-semibold text-white/80 hover:border-white/40 hover:text-white transition-colors"
              >
                Download Datasheet
              </Link>
            </div>

            {/* Export terms badge – Rule 12: engineering language */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] text-white/40 font-mono uppercase tracking-wider">Export terms:</span>
              {["EXW", "FOB", "CIF", "DDP", "DAP"].map((term) => (
                <span key={term} className="spec-tag text-white/60 border-white/10 bg-white/5">
                  {term}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column: stat grid (Rule 02: stat = instant value) ── */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded border border-white/10 bg-white/5 p-5 flex flex-col gap-1 hover:bg-white/8 transition-colors"
              >
                <span className="text-[2rem] font-bold text-white leading-none font-mono">
                  {s.value}
                </span>
                <span className="text-[12px] text-white/50 leading-snug">{s.label}</span>
              </div>
            ))}

            {/* Cert strip */}
            <div className="col-span-2 rounded border border-white/10 bg-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#22D3EE]" />
                <span className="text-[12px] text-white/60 font-mono">Certified</span>
              </div>
              {["CE", "ISO 9001", "EN 14509"].map((c) => (
                <span key={c} className="text-[11px] font-mono font-semibold text-white/80 bg-white/10 px-2.5 py-1 rounded">
                  {c}
                </span>
              ))}
            </div>

            {/* Sticky WhatsApp hint – Rule 09 mobile first */}
            <div className="col-span-2 rounded border border-[#0E7490]/30 bg-[#0E7490]/10 p-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse shrink-0" />
              <p className="text-[12px] text-white/60 leading-snug">
                Engineering team online — respond within <span className="text-white font-semibold">24 business hours</span>
              </p>
              <Link
                href="/get-a-quote"
                className="ml-auto shrink-0 text-[12px] font-semibold text-[#22D3EE] hover:text-white transition-colors whitespace-nowrap"
              >
                Send RFQ →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom stat bar (mobile) ── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[1.5rem] font-bold font-mono text-white">{s.value}</p>
              <p className="text-[11px] text-white/50 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  )
}
