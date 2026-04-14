import type { B2BProductDetail } from "./b2bProductTypes";
import productPanels from "@/assets/product-panels.jpg";
import productCooling from "@/assets/product-cooling.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productRacking from "@/assets/product-racking.jpg";
import solChilled from "@/assets/solution-chilled.jpg";
import solFrozen from "@/assets/solution-frozen.jpg";
import solBlast from "@/assets/solution-blast.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryPharma from "@/assets/industry-pharma.jpg";
import industryLogistics from "@/assets/industry-logistics.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const euCompliance = [
  "Declaration of Performance (DoP) and CE marking supplied in line with EU CPR expectations for construction products — project-specific documentation issued with your order.",
  "Material traceability and mill certificates available for EPC quality dossiers and owner handover packages.",
  "Technical datasheets and installation guidance provided in English (additional EU languages on request for framework contracts).",
];

/** Canonical panel sub-product pages (hub cards use these slugs). */
export const panelProductDetails: Record<string, B2BProductDetail> = {
  "roof-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Roof systems",
    title: "Roof sandwich panels",
    heroImage: productPanels,
    heroAlt: "Industrial roof sandwich panel installation",
    lead:
      "Trapezoidal and secret-fix roof sandwich panels with PUR/PIR core for long-span industrial and logistics buildings — specified for thermal performance, weathertightness and rapid enclosure.",
    body: [
      "Designed for EPC and principal contractor workflows: early RFI support, coordinated panel layouts and interface details with secondary steel and drainage.",
      "Compatible with conventional purlin grids; concealed fastening options support architectural and food-sector projects where penetration control matters.",
    ],
    keyBenefits: [
      "High spanning capability with engineered connection details",
      "Predictable U-values and airtight laps for energy modelling",
      "Fast enclosure to support critical path on greenfield and brownfield sites",
    ],
    specifications: [
      { parameter: "Typical core", value: "PUR / PIR (project-specific lambda values)" },
      { parameter: "Facing options", value: "Prepainted steel, PET coated, aluminium (specification dependent)" },
      { parameter: "Thickness range", value: "40–200 mm (region and load dependent)" },
      { parameter: "Design context", value: "Snow, wind and imposed loads per EN 1991 / national annex — verified per project" },
    ],
    applications: ["Distribution centres", "Manufacturing", "Cold chain envelopes", "Agricultural & agri-food"],
    complianceNotes: euCompliance,
    relatedInternal: [
      { label: "Wall & facade panels", to: "/products/panels/wall-facade-panels" },
      { label: "Cold room & hygienic panels", to: "/products/panels/coldroom-hygienic-panels" },
      { label: "All insulated panels", to: "/products/panels" },
    ],
  },
  "wall-facade-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Envelope systems",
    title: "Wall & facade sandwich panels",
    heroImage: industryLogistics,
    heroAlt: "Modern logistics building facade with insulated panels",
    lead:
      "Micro-ribbed, linear and flat architectural profiles for industrial envelopes — engineered for wind load, air permeability targets and coordinated window/door interfaces.",
    body: [
      "Suitable for B2B EPC packages where design responsibility is split between envelope specialist and civil/steel contractor — we provide interface drawings and fixing schedules.",
      "Horizontal and vertical installation schemes supported; joint treatments aligned to project airtightness and condensation risk analysis.",
    ],
    keyBenefits: [
      "Clean sightlines for logistics and manufacturing campuses",
      "Coordinated flashings and transitions to reduce site rework",
      "Optional enhanced coatings for coastal or aggressive environments",
    ],
    specifications: [
      { parameter: "Profile families", value: "Micro-rib, trapezoid, secret-fix flat (range dependent)" },
      { parameter: "Core options", value: "PUR / PIR / mineral wool (fire strategy dependent)" },
      { parameter: "Acoustics", value: "Rw options via core/thickness — project-specific test evidence where required" },
      { parameter: "Fire strategy", value: "Reaction to fire and structural fire design per national regulations — mineral wool routes available" },
    ],
    applications: ["Warehousing", "Production plants", "Food & beverage", "Pharma support buildings"],
    complianceNotes: euCompliance,
    relatedInternal: [
      { label: "Roof panels", to: "/products/panels/roof-panels" },
      { label: "Fire & performance panels", to: "/products/panels/fire-performance-panels" },
      { label: "All insulated panels", to: "/products/panels" },
    ],
  },
  "coldroom-hygienic-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Controlled environment",
    title: "Cold room & hygienic sandwich panels",
    heroImage: productCooling,
    heroAlt: "Hygienic cold room insulated panel system",
    lead:
      "Food-grade and pharma-grade insulated panels for temperature-controlled rooms, clean corridors and hygienic envelopes — cam-lock and overlapping joint systems for validated environments.",
    body: [
      "EPC-relevant scope: room layout optimisation, door coordination, floor/wall transitions and HACCP-conscious detailing without compromising thermal bridges.",
      "Surface finishes selected for cleanability and chemical resistance; joint philosophy aligned to your qualification approach (IQ/OQ support documentation on request).",
    ],
    keyBenefits: [
      "HACCP- and GDP-aware surface options for EU food and pharma investors",
      "Tight thermal performance for blast, chill and frozen regimes",
      "Modular installation compatible with OEM equipment interfaces",
    ],
    specifications: [
      { parameter: "Joint systems", value: "Cam-lock / overlap (project-specific)" },
      { parameter: "Facing options", value: "Stainless, polyester, antibacterial coatings — specification led" },
      { parameter: "Temperature classes", value: "Chill, frozen, blast — design verified per room load calculation" },
      { parameter: "Vapour control", value: "Integrated vapour barrier concepts coordinated with MEP dew point checks" },
    ],
    applications: ["Cold storage", "Food processing", "Pharma & life science", "Catering & central kitchens"],
    complianceNotes: [
      ...euCompliance,
      "Hygienic performance is specification-dependent; recommend early alignment with your food safety / QA team and cleaning chemistry.",
    ],
    relatedInternal: [
      { label: "Cold room doors", to: "/products/cold-room/doors" },
      { label: "Turnkey cold room solutions", to: "/products/cold-room/turnkey" },
      { label: "All insulated panels", to: "/products/panels" },
    ],
  },
  "fire-performance-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Fire & acoustic",
    title: "Fire-rated & performance sandwich panels",
    heroImage: solBlast,
    heroAlt: "Industrial building with enhanced fire performance envelope",
    lead:
      "Mineral wool and enhanced-performance cores for fire resistance, compartmentation and acoustic targets — specified where reaction to fire and structural fire behaviour must align with EU national regulations.",
    body: [
      "For EPC tender stages we support performance schedules, not generic marketing claims: fire rating targets, deflection criteria, and boundary conditions for test extrapolation.",
      "Coordination with MEP penetrations and fire stopping is documented to reduce site non-conformities during handover.",
    ],
    keyBenefits: [
      "Non-combustible core routes aligned to stricter investor requirements",
      "Acoustic improvement vs standard PUR/PIR where Rw/Ra targets apply",
      "Documented interfaces for passive fire strategy workshops",
    ],
    specifications: [
      { parameter: "Core", value: "Stone wool / mineral wool (density by performance level)" },
      { parameter: "Fire design", value: "EI/E definitions per project statutory guidance — third-party assessments as required" },
      { parameter: "Thickness", value: "Driven by fire, thermal and span criteria" },
      { parameter: "Testing philosophy", value: "Project-specific test and assessment evidence; no substitute for engineer-of-record sign-off" },
    ],
    applications: ["High-bay logistics", "Battery & technical buildings", "Chemical & process enclosures", "Public infrastructure support"],
    complianceNotes: euCompliance,
    relatedInternal: [
      { label: "Wall & facade panels", to: "/products/panels/wall-facade-panels" },
      { label: "Technical documents", to: "/products/support/technical-documents" },
      { label: "All insulated panels", to: "/products/panels" },
    ],
  },
};

/** URL slug aliases → canonical panel detail slug */
export const panelSlugAliases: Record<string, string> = {
  "wall-panels": "wall-facade-panels",
  "cold-room-panels": "coldroom-hygienic-panels",
};

export function resolvePanelSlug(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  return panelSlugAliases[raw] ?? raw;
}

export type ProductLineId =
  | "cold-room"
  | "industrial-doors"
  | "racking"
  | "accessories"
  | "support";

export const lineProductDetails: Record<ProductLineId, Record<string, B2BProductDetail>> = {
  "cold-room": {
    doors: {
      familyLabel: "Cold room systems",
      eyebrow: "Access & hygiene",
      title: "Cold room doors",
      heroImage: productDoors,
      heroAlt: "Industrial cold room door system",
      lead:
        "Hinged, sliding and vertical-lift cold room doors engineered for temperature integrity, traffic flow and food-safety conscious operations — sized for forklift and pallet jack regimes.",
      body: [
        "EPC packages benefit from a single envelope partner: door frames coordinated with panel joints, heater tapes and safety systems aligned to EU machinery directive expectations for supplied equipment.",
        "Hardware, safety edges and activation devices selected to match your traffic and maintenance strategy.",
      ],
      keyBenefits: [
        "Thermal break frames to limit frost and condensation at openings",
        "Durable closures for high-cycle logistics and production corridors",
        "Documentation pack suitable for facility QA and maintenance manuals",
      ],
      specifications: [
        { parameter: "Door types", value: "Hinged, sliding, vertical (application dependent)" },
        { parameter: "Climate classes", value: "Chill, frozen, blast — coordinated with room design" },
        { parameter: "Surface finishes", value: "Stainless, plasticol, specialist coatings" },
        { parameter: "Options", value: "Windows, air curtains, radar activation, emergency egress layouts" },
      ],
      applications: ["Cold storage", "Processing plants", "Last-mile hubs", "Pharma cold chain"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room panels", to: "/products/panels/coldroom-hygienic-panels" },
        { label: "Cold room accessories", to: "/products/cold-room/accessories" },
        { label: "Turnkey cold rooms", to: "/products/cold-room/turnkey" },
      ],
    },
    accessories: {
      familyLabel: "Cold room systems",
      eyebrow: "Installation & uptime",
      title: "Cold room accessories",
      heroImage: solChilled,
      heroAlt: "Cold room interior accessories and fittings",
      lead:
        "Angles, covings, protection rails, ramps, drainage details and room hardware that complete a hygienic, maintainable envelope — specified so EPC teams close out snagging faster.",
      body: [
        "Accessory schedules are often where projects lose time; we bundle typical BOMs with panel orders to align procurement and avoid orphan specifications.",
      ],
      keyBenefits: [
        "Hygienic corners and protection aligned to HACCP walk lines",
        "Coordinated stainless and PVC solutions for wash-down regimes",
        "Fewer site-generated details at panel-to-floor transitions",
      ],
      specifications: [
        { parameter: "Typical scope", value: "Flashings, covings, kerbs, protection, hangers" },
        { parameter: "Materials", value: "Stainless, aluminium, food-safe plastics" },
        { parameter: "Delivery", value: "Kit lists per room or per zone" },
      ],
      applications: ["Food factories", "Central kitchens", "Cold chain", "Clean corridors"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        { label: "Hygienic panels", to: "/products/panels/coldroom-hygienic-panels" },
      ],
    },
    turnkey: {
      familyLabel: "Cold room systems",
      eyebrow: "Design-build",
      title: "Turnkey cold room solutions",
      heroImage: industryFood,
      heroAlt: "Food production facility cold rooms",
      lead:
        "Room-in-room cold and hygienic envelopes delivered as a managed package — layout, thermal calculation, panel and door specification, and installation supervision for investor-grade handover.",
      body: [
        "Structured for EU EPC frameworks: clear design splits, milestone documentation, and commissioning support aligned to your validation strategy (where applicable).",
      ],
      keyBenefits: [
        "Single point of coordination for envelope performance",
        "Schedule certainty through prefabricated panel systems",
        "Executive reporting suitable for lender / owner technical advisors",
      ],
      specifications: [
        { parameter: "Typical deliverables", value: "Layout, thermal model inputs, BOM, installation method statements" },
        { parameter: "Interfaces", value: "MEP, refrigeration, flooring, drainage — workshop-led" },
        { parameter: "Geography", value: "EU and neighbouring markets — logistics plan per project" },
      ],
      applications: ["Greenfield food plants", "Cold store expansion", "Pharma support", "3PL retrofit"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        { label: "Request consultation", to: "/products/support/request-consultation" },
      ],
    },
  },
  "industrial-doors": {
    sectional: {
      familyLabel: "Industrial doors",
      eyebrow: "Logistics openings",
      title: "Sectional overhead doors",
      heroImage: industryLogistics,
      heroAlt: "Sectional door on logistics building",
      lead:
        "Insulated sectional doors for high-traffic logistics and manufacturing bays — wind load rated options, vision panels and activation packages for safety and throughput.",
      body: [
        "EPC coordination includes structural openings, deflection limits, and electrical provisions for interlocks — reducing RFIs during civil finishing trades.",
      ],
      keyBenefits: [
        "Thermal insulation options aligned to building energy strategy",
        "Safety devices and signalling integrated with site logistics plan",
        "Service-friendly hardware for24/7 operations",
      ],
      specifications: [
        { parameter: "Sizes", value: "Custom — manufactured to opening schedule" },
        { parameter: "Wind class", value: "Project-specific — documented in tender pack" },
        { parameter: "Controls", value: "Push button, radar, induction loop — interlocked with fire strategy" },
      ],
      applications: ["Warehousing", "Manufacturing", "Cold chain hubs", "Service yards"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Sliding doors", to: "/products/industrial-doors/sliding" },
        { label: "Rapid doors", to: "/products/industrial-doors/rapid" },
      ],
    },
    sliding: {
      familyLabel: "Industrial doors",
      eyebrow: "Wide openings",
      title: "Industrial sliding doors",
      heroImage: heroBg,
      heroAlt: "Large industrial sliding door",
      lead:
        "Manual and motorised sliding door systems for wide openings where sectional doors are impractical — heavy-duty hardware for industrial environments.",
      body: [
        "Designed for coordination with floor rails, guide steel and building movement; shop drawings issued for embed and secondary steel approval.",
      ],
      keyBenefits: [
        "High clear openings for abnormal loads and equipment",
        "Robust running gear for harsh environments",
        "Optional insulated cores where climate separation matters",
      ],
      specifications: [
        { parameter: "Configuration", value: "Single leaf, bi-parting, telescopic (project dependent)" },
        { parameter: "Drive", value: "Manual / motorised — safety category per risk assessment" },
      ],
      applications: ["Aircraft hangars", "Heavy industry", "Agriculture", "Recycling & waste"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Sectional doors", to: "/products/industrial-doors/sectional" },
        { label: "Rapid doors", to: "/products/industrial-doors/rapid" },
      ],
    },
    rapid: {
      familyLabel: "Industrial doors",
      eyebrow: "High-cycle",
      title: "High-speed rapid roll doors",
      heroImage: productRacking,
      heroAlt: "High speed door in warehouse",
      lead:
        "High-cycle fabric rapid doors for clean zones, temperature separation and dust control — self-repairing options to minimise downtime in24/7 operations.",
      body: [
        "Ideal for EPC logistics buildings where airlock philosophy and energy loss must be balanced with truck turnaround times.",
      ],
      keyBenefits: [
        "Fast opening cycles to protect cold chain and clean processes",
        "Safety light curtains and radar options",
        "Low maintenance self-repairing curtains where applicable",
      ],
      specifications: [
        { parameter: "Opening speed", value: "Model dependent — stated in submittal" },
        { parameter: "Wind resistance", value: "Project-specific classification" },
        { parameter: "Controls", value: "Integrated with building management and fire strategy as required" },
      ],
      applications: ["Cold rooms", "Clean production", "Automotive", "Food distribution"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        { label: "Sectional doors", to: "/products/industrial-doors/sectional" },
      ],
    },
  },
  racking: {
    "pallet-racking": {
      familyLabel: "Racking & storage",
      eyebrow: "Warehouse skeleton",
      title: "Pallet racking systems",
      heroImage: productRacking,
      heroAlt: "Warehouse pallet racking installation",
      lead:
        "Adjustable pallet racking and frame systems engineered for seismic/wind loads per site, forklift aisle strategy and future flexibility — documentation suitable for investor technical due diligence.",
      body: [
        "We align rack layout with fire sprinkler philosophy, slab loadings and panel envelope interfaces — reducing late-stage redesign when MEP and racking clash.",
      ],
      keyBenefits: [
        "Clear load declarations for civil engineer review",
        "Modular expansion for 3PL tenants",
        "Accessory integration: nets, guards, signage channels",
      ],
      specifications: [
        { parameter: "Standards context", value: "Design per EN 15512 philosophy — national annexes respected" },
        { parameter: "Load cases", value: "Uniform loads, pick paths, impact factors — project-specific" },
        { parameter: "Finishes", value: "Galvanised / powder coated — environment dependent" },
      ],
      applications: ["3PL", "Retail DCs", "Manufacturing stores", "Cold stores"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Shelving systems", to: "/products/racking/shelving" },
        { label: "Warehouse planning", to: "/products/racking/warehouse-planning" },
      ],
    },
    shelving: {
      familyLabel: "Racking & storage",
      eyebrow: "Small goods",
      title: "Shelving & light storage",
      heroImage: solFrozen,
      heroAlt: "Industrial shelving in warehouse",
      lead:
        "Multi-tier shelving and mezzanine-friendly light storage for picking operations, spare parts and production supermarkets — coordinated with safety barriers and egress.",
      body: [
        "EPC buyers receive coordinated GA drawings and kick-off clash checks against MEP and fire escape routes.",
      ],
      keyBenefits: [
        "Pick-path efficiency for e-commerce and pharma spare parts",
        "Scalable bays for changing SKU profiles",
        "Compatible with catwalk and stair modules where applicable",
      ],
      specifications: [
        { parameter: "Bay loads", value: "Declared per configuration in submittal" },
        { parameter: "Finishes", value: "Galvanised / powder coated" },
      ],
      applications: ["Spare parts", "Retail back-of-house", "Workshop stores", "Pharma support"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Pallet racking", to: "/products/racking/pallet-racking" },
        { label: "Warehouse planning", to: "/products/racking/warehouse-planning" },
      ],
    },
    "warehouse-planning": {
      familyLabel: "Racking & storage",
      eyebrow: "Consulting",
      title: "Warehouse planning & layout",
      heroImage: industryPharma,
      heroAlt: "Warehouse planning and layout concept",
      lead:
        "Data-led layout studies: aisle width optimisation, throughput scenarios, future expansion bands and envelope coordination — output formatted for EPC gate reviews.",
      body: [
        "We translate owner requirements into concept layouts and ROM bills of materials, so capex decisions are grounded in defensible assumptions.",
      ],
      keyBenefits: [
        "Reduces client-led iteration between architect, MEP and operations",
        "Supports lender technical advisor scrutiny with traceable assumptions",
        "Aligns cold chain buildings with panel and door packages early",
      ],
      specifications: [
        { parameter: "Deliverables", value: "Concept GA, capacity models, phasing narratives" },
        { parameter: "Tools", value: "CAD / BIM-ready exports on request" },
      ],
      applications: ["New DCs", "Cold chain expansion", "Plant modernisation", "Tenant fit-out"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Pallet racking", to: "/products/racking/pallet-racking" },
        { label: "Request consultation", to: "/products/support/request-consultation" },
      ],
    },
  },
  accessories: {
    fasteners: {
      familyLabel: "Accessories",
      eyebrow: "Structural interface",
      title: "Panel fasteners & fixings",
      heroImage: productPanels,
      heroAlt: "Construction fasteners detail",
      lead:
        "Corrosion-resistant fasteners and fixing systems matched to panel pull-out requirements, substrate types and environmental exposure — issued with calculation notes for site QA.",
      body: [
        "Generic screw schedules are a common source of non-conformance; we align fixings to manufacturer pull-out data and your structural engineer’s assumptions.",
      ],
      keyBenefits: [
        "Traceable batches and certificates for quality plans",
        "Coordinated with wind suction zones on large envelopes",
        "Less rework at final inspection",
      ],
      specifications: [
        { parameter: "Materials", value: "Stainless / coated carbon steel — environment dependent" },
        { parameter: "Documentation", value: "DoP-linked accessories where applicable" },
      ],
      applications: ["Envelope installation", "Retrofit overlays", "Coastal sites"],
      complianceNotes: euCompliance,
      relatedInternal: [{ label: "Sealants", to: "/products/accessories/sealants" }],
    },
    sealants: {
      familyLabel: "Accessories",
      eyebrow: "Airtightness",
      title: "Sealants & tapes",
      heroImage: solChilled,
      heroAlt: "Sealant application on building joint",
      lead:
        "Movement-capable sealants, foams and tapes for panel joints, penetrations and window interfaces — selected for compatibility with coatings and cleaning chemicals.",
      body: [
        "Supports EU energy performance compliance narratives by protecting airtightness targets through seasonal cycles.",
      ],
      keyBenefits: [
        "Compatibility checks with facings and coatings",
        "Joint designs aligned to wind and moisture modelling",
        "Clear colour and tooling guidance for uniform site finish",
      ],
      specifications: [
        { parameter: "Chemistries", value: "MS polymer, silicone, PU — specification dependent" },
        { parameter: "Movement capability", value: "Stated per joint detail drawing" },
      ],
      applications: ["Food plants", "Cold rooms", "Facades", "Process buildings"],
      complianceNotes: euCompliance,
      relatedInternal: [{ label: "Flashings", to: "/products/accessories/flashings" }],
    },
    flashings: {
      familyLabel: "Accessories",
      eyebrow: "Weathering",
      title: "Flashings & sheet metal",
      heroImage: solBlast,
      heroAlt: "Roof flashing detail",
      lead:
        "Prefabricated flashings, gutters and transitions in coordinated gauges and finishes — shop drawings issued for approval to protect weathertightness warranties.",
      body: [
        "EPC teams receive numbered pieces and installation maps to reduce interpretation on site.",
      ],
      keyBenefits: [
        "Consistent aesthetic with panel coatings",
        "Controlled thermal bridges at eaves and ridges",
        "Less reliance on site-fabricated pieces",
      ],
      specifications: [
        { parameter: "Materials", value: "Prepainted steel, aluminium, stainless" },
        { parameter: "Fabrication", value: "CNC formed where volume justifies" },
      ],
      applications: ["Roof edges", "Wall terminations", "Door canopies", "Equipment penetrations"],
      complianceNotes: euCompliance,
      relatedInternal: [{ label: "Technical documents", to: "/products/support/technical-documents" }],
    },
  },
  support: {
    "technical-documents": {
      familyLabel: "Support",
      eyebrow: "Submittals",
      title: "Technical documents & submittals",
      heroImage: industryPharma,
      heroAlt: "Technical documentation and project files",
      lead:
        "Structured technical submittals for EPC review: datasheets, CAD/BIM-ready details, fixings schedules, and performance declarations aligned to EU market expectations.",
      body: [
        "We organise documentation for gate reviews (IFC, AFC) so discipline engineers can sign off without reformatting vendor PDFs.",
      ],
      keyBenefits: [
        "Single document index per package",
        "Revision control for fast-moving tender iterations",
        "Traceability from test evidence to declared performance",
      ],
      specifications: [
        { parameter: "Typical pack", value: "Datasheets, details, certificates, installation manuals" },
        { parameter: "Formats", value: "PDF, DWG/DXF, Revit on request" },
      ],
      applications: ["Tender", "Design development", "Construction", "Handover"],
      complianceNotes: euCompliance,
      relatedInternal: [{ label: "Installation guides", to: "/products/support/installation-guides" }],
    },
    "installation-guides": {
      familyLabel: "Support",
      eyebrow: "Site execution",
      title: "Installation guides & training",
      heroImage: heroBg,
      heroAlt: "Construction site installation",
      lead:
        "Method statements, sequencing guidance and supervisor training to protect panel warranties and programme — aligned to EU site health and safety culture.",
      body: [
        "Reduces anchor errors, improper torques and moisture ingress from premature exposure.",
      ],
      keyBenefits: [
        "Fewer NCRs during envelope inspections",
        "Faster crew onboarding for multinational contractors",
        "Clear weathering and lifting guidance",
      ],
      specifications: [
        { parameter: "Deliverables", value: "IMS, lift plans, torque schedules, inspection checklists" },
        { parameter: "Training", value: "On-site or remote — framework agreement dependent" },
      ],
      applications: ["First-time installers", "Fast-track programmes", "Remote sites"],
      complianceNotes: euCompliance,
      relatedInternal: [{ label: "Request consultation", to: "/products/support/request-consultation" }],
    },
    "request-consultation": {
      familyLabel: "Support",
      eyebrow: "Engineering",
      title: "Request a consultation",
      heroImage: productCooling,
      heroAlt: "Engineering consultation meeting",
      lead:
        "Book a structured consultation with ARCOPAN engineering: performance brief, risk register, and recommended envelope strategy — suitable for early contractor involvement (ECI) and design-build tenders.",
      body: [
        "Typical output: outline specification, indicative BOM, programme risks, and documentation roadmap for EU investor handover.",
      ],
      keyBenefits: [
        "Early alignment between operations, QA and engineering",
        "Transparent assumptions for capex governance",
        "Path to formal quotation and shop drawings",
      ],
      specifications: [
        { parameter: "Response target", value: "Within 2 business days for qualified industrial enquiries" },
        { parameter: "Information needed", value: "Location, use class, temperature regime, programme, contract form" },
      ],
      applications: ["Feasibility", "Pre-tender", "Value engineering", "Claims mitigation"],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "All products", to: "/products" },
        { label: "Insulated panels hub", to: "/products/panels" },
      ],
    },
  },
};
