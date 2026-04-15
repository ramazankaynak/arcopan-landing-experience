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
import arcopanColdSandwichPanels from "@/assets/arcopan-web/Cold-Room-Sandwich-Panels.jpg";
import arcopanColdFloor from "@/assets/arcopan-web/arcopan-plywood-floor.jpg";
import arcopanModularColdBuild from "@/assets/arcopan-web/Col-Room-Build.jpg";
import arcopanColdRoomDoors from "@/assets/arcopan-web/cold-room-doors-4.jpg";
import coolingUnits1 from "@/assets/arcopan-web/CoolingUnits1.png";
import coolingCondensingUnits from "@/assets/arcopan-web/CoolingUnits1_CondensingUnits.png";
import coolingEvaporators from "@/assets/arcopan-web/CoolingUnits1_Evoperators.png";
import coolingMonoblock from "@/assets/arcopan-web/CoolingUnits1_MonoblockUnits.png";
import storageSystems from "@/assets/arcopan-web/storage-systems.jpg";
import industrialWarehouse from "@/assets/arcopan-web/Industrial Warehouse.jpg";
import coldRoomDoorsWebp from "@/assets/arcopan-web/cold-room-doors.webp";
import accessories1 from "@/assets/arcopan-web/Accessories-1.png";

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
    lead: "Trapezoidal and secret-fix roof sandwich panels with PUR/PIR core for long-span industrial and logistics buildings — specified for thermal performance, weathertightness and rapid enclosure.",
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
      {
        parameter: "Typical core",
        value: "PUR / PIR (project-specific lambda values)",
      },
      {
        parameter: "Facing options",
        value:
          "Prepainted steel, PET coated, aluminium (specification dependent)",
      },
      {
        parameter: "Thickness range",
        value: "40–200 mm (region and load dependent)",
      },
      {
        parameter: "Design context",
        value:
          "Snow, wind and imposed loads per EN 1991 / national annex — verified per project",
      },
    ],
    applications: [
      "Distribution centres",
      "Manufacturing",
      "Cold chain envelopes",
      "Agricultural & agri-food",
    ],
    complianceNotes: euCompliance,
    relatedInternal: [
      {
        label: "Wall & facade panels",
        to: "/products/panels/wall-facade-panels",
      },
      {
        label: "Cold room & hygienic panels",
        to: "/products/panels/coldroom-hygienic-panels",
      },
      { label: "All insulated panels", to: "/products/panels" },
    ],
  },
  "wall-facade-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Envelope systems",
    title: "Wall & facade sandwich panels",
    heroImage: industryLogistics,
    heroAlt: "Modern logistics building facade with insulated panels",
    lead: "Micro-ribbed, linear and flat architectural profiles for industrial envelopes — engineered for wind load, air permeability targets and coordinated window/door interfaces.",
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
      {
        parameter: "Profile families",
        value: "Micro-rib, trapezoid, secret-fix flat (range dependent)",
      },
      {
        parameter: "Core options",
        value: "PUR / PIR / mineral wool (fire strategy dependent)",
      },
      {
        parameter: "Acoustics",
        value:
          "Rw options via core/thickness — project-specific test evidence where required",
      },
      {
        parameter: "Fire strategy",
        value:
          "Reaction to fire and structural fire design per national regulations — mineral wool routes available",
      },
    ],
    applications: [
      "Warehousing",
      "Production plants",
      "Food & beverage",
      "Pharma support buildings",
    ],
    complianceNotes: euCompliance,
    relatedInternal: [
      { label: "Roof panels", to: "/products/panels/roof-panels" },
      {
        label: "Fire & performance panels",
        to: "/products/panels/fire-performance-panels",
      },
      { label: "All insulated panels", to: "/products/panels" },
    ],
  },
  "coldroom-hygienic-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Cold storage envelope",
    title: "Cold storage & hygienic sandwich panel systems",
    heroImage: arcopanColdSandwichPanels,
    heroAlt: "Cold storage and hygienic insulated sandwich panels",
    lead: "Complete cold-chain envelope solutions: PUR/PIR cold storage sandwich panels with food-safe facings, engineered for negative-temperature regimes, vapour control and rapid fit-out — including cam-lock vertical systems, matching floor panels and integration paths toward modular cold rooms.",
    body: [
      "Cold storage panel systems combine structural skin, insulation core and factory-controlled joint geometry so thermal bridges, air leakage and condensation risk can be managed consistently across EU projects — from distribution hubs to food factories and pharma support spaces.",
      "For EPC and design-build contractors we deliver coordinated shop drawings: wall and ceiling runs, door openings, floor–wall transitions, refrigeration penetrations and drainage kerbs, so refrigeration and MEP contractors can freeze designs earlier in the programme.",
      "Surface specifications (stainless, coated steel, antibacterial or food-grade finishes) are selected against your HACCP walk routes, cleaning chemistry and GDP expectations — documentation structured for QA review, not generic marketing sheets.",
    ],
    keyBenefits: [
      "Cam-lock and precision joint options for repeatable airtightness on vertical surfaces",
      "Compatible specification routes for wall/ceiling and floor panels within the same cold room family",
      "Modular, demount-friendly logic for expansion bays and future line changes",
      "EU-oriented technical packs: DoP/CE context, traceability and installation method statements",
    ],
    specifications: [
      {
        parameter: "System families",
        value:
          "Cold storage sandwich panels; cam-lock wall/ceiling; matching cam-lock floor panels (see dedicated floor product page)",
      },
      {
        parameter: "Joint types",
        value:
          "Cam-lock / tongue-and-groove with gasket; overlap variants where structural or hygiene detail requires",
      },
      {
        parameter: "Core",
        value:
          "PUR / PIR — lambda and thickness per U-value target and deflection criteria",
      },
      {
        parameter: "Facings",
        value:
          "Prepainted steel, PET/food-grade coatings, stainless — project-specific",
      },
      {
        parameter: "Temperature scope",
        value:
          "Chill, frozen, blast — aligned to room load calculation and refrigeration duty",
      },
      {
        parameter: "Floor interface",
        value:
          "Coordinated with insulated floor panels, kerbs, drains and racking post loads",
      },
      {
        parameter: "Modular cold rooms",
        value:
          "Kit-based rooms: panels + floor + doors + accessories — see turnkey cold room scope",
      },
    ],
    applications: [
      "Cold storage & deep-freeze",
      "Food processing & packaging",
      "Pharma & life science",
      "Catering, central kitchens & 3PL",
    ],
    complianceNotes: [
      ...euCompliance,
      "Hygienic and food-contact suitability is always specification-dependent: align facings, joints and cleaning agents with your food safety plan early.",
      "Structural and fire requirements vary by EU member state — national annexes and notified body routes are confirmed per project, not assumed from generic panel marketing.",
    ],
    relatedInternal: [
      {
        label: "Cam-lock cold storage floor panels",
        to: "/products/panels/cold-storage-floor-panels",
      },
      {
        label: "Modular / turnkey cold rooms",
        to: "/products/cold-room/turnkey",
      },
      { label: "Cold room doors", to: "/products/cold-room/doors" },
      { label: "All insulated panels", to: "/products/panels" },
    ],
    technicalSections: [
      {
        heading: "Cold storage panel systems",
        paragraphs: [
          "Cold storage sandwich panels are specified as the primary thermal envelope for controlled-temperature buildings: the outer and inner skins protect the core, while the core thickness and lambda value deliver the declared U-value used in energy and refrigeration load models.",
          "Typical investor and EPC review points include: declared thermal performance under installed conditions (including fasteners and details), air permeability of joints, behaviour under negative pressure or blast freezing, and coordination with vapour barriers on the warm side of the envelope.",
          "ARCOPAN supports tender-stage comparison matrices (core type, thickness, spanning assumptions, joint treatment) so owners can compare envelopes on a like-for-like basis before down-select.",
        ],
      },
      {
        heading: "Cam-lock wall & ceiling sandwich panels",
        paragraphs: [
          "Cam-lock (lever-lock) and similar mechanical locking profiles connect adjacent panels without exposing continuous through-metal paths at the primary joint. Gasketed seating surfaces help control air migration and moisture ingress at vertical joints — critical when rooms operate below dew point of adjacent spaces.",
          "Wall and ceiling panels are sequenced from corners and openings toward field panels; door bucks, curtain rails and equipment hangers are coordinated so penetrations do not compromise the joint pattern or void warranty conditions.",
          "Where cleanability audits apply, joint lines are reviewed against HACCP zoning — transitions to covings, kerbs and floor systems are detailed to avoid dirt traps and uncleanable recesses.",
        ],
      },
      {
        heading: "Cam-lock cold storage floor panels",
        paragraphs: [
          "Floor panels in cold rooms must resolve mechanical loads (forklifts, racking legs, point loads), thermal continuity with wall panels, slip resistance, drainage falls and sometimes heated perimeters or expansion joints.",
          "Factory-formed cam-lock or matching tongue-and-groove floor panels allow the horizontal insulation layer to integrate with vertical panels, reducing ad hoc site detailing at the skirting zone — a frequent source of thermal bridge claims in cold store handover.",
          "A dedicated product page covers load assumptions, facing options for heavy traffic, and typical interface details to drains and door thresholds.",
        ],
      },
      {
        heading: "Modular cold room systems",
        paragraphs: [
          "Modular cold rooms assemble pre-cut panels, floors, doors and accessory kits into defined volumes — suitable for phased capex, tenant fit-out inside a shell, or repeatable cell layouts in food and pharma.",
          "Successful modular delivery depends on accurate survey, refrigeration set-point clarity, and MEP penetration schedules issued before panel fabrication — we align these inputs with EPC programme milestones.",
          "For design-build scope, see turnkey cold room solutions: single coordination path for envelope performance, installation supervision and handover documentation.",
        ],
      },
    ],
  },
  "cold-storage-floor-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Cold room floor",
    title: "Cam-lock cold storage floor sandwich panels",
    heroImage: arcopanColdFloor,
    heroAlt: "Insulated cold storage floor panel system",
    lead: "Structural insulated floor panels for cold rooms and freezer cells — cam-lock or matching joint philosophy aligned to wall panels, with facings selected for forklift traffic, hygiene and drainage coordination.",
    body: [
      "Cold store floors must bridge conflicting requirements: high insulation value, structural capacity, durable and cleanable wear surface, integration with door thresholds, and falls to drains without puncturing the vapour control strategy.",
      "EPC teams benefit from a single envelope partner for wall, ceiling and floor panels: aligned core types, consistent joint language, and shop drawings that show how the horizontal insulation meets vertical corners, kerbs and expansion joints.",
    ],
    keyBenefits: [
      "Thermal continuity with wall cam-lock systems at the skirting / coving zone",
      "Facing options for heavy pallet and forklift traffic (subject to specification)",
      "Coordinated details for drains, heating cables at openings and racking post reactions",
      "Documentation suitable for cold store QA and maintenance manuals",
    ],
    specifications: [
      {
        parameter: "Joint system",
        value:
          "Cam-lock / matching tongue-and-groove to align with wall panel family",
      },
      {
        parameter: "Structural design",
        value:
          "Imposed loads, racking reactions and forklift classes — verified per project",
      },
      {
        parameter: "Wear surface",
        value:
          "Anti-slip steel, stainless or specified food-grade finish — application dependent",
      },
      {
        parameter: "Core",
        value: "PUR / PIR — thickness driven by U-value and load span",
      },
      {
        parameter: "Drainage",
        value:
          "Falls, channel drains and kerb interfaces — coordinated with civil slab design",
      },
      {
        parameter: "Thresholds",
        value:
          "Door rail, heater tape and airlock geometry coordinated with cold room doors",
      },
    ],
    applications: [
      "Deep-freeze stores",
      "Chilled distribution",
      "Food processing cells",
      "Blast tunnels & ante-rooms",
    ],
    complianceNotes: [
      ...euCompliance,
      "Slip resistance and cleanability claims must match your operational and cleaning SOPs — specify test methods and acceptance criteria in the employer’s requirements.",
    ],
    relatedInternal: [
      {
        label: "Cold storage & hygienic wall/ceiling panels",
        to: "/products/panels/coldroom-hygienic-panels",
      },
      { label: "Cold room doors", to: "/products/cold-room/doors" },
      {
        label: "Turnkey modular cold rooms",
        to: "/products/cold-room/turnkey",
      },
    ],
    technicalSections: [
      {
        heading: "Why insulated floor panels in cold storage",
        paragraphs: [
          "A continuous insulated floor slab reduces frost heave risk, limits heat ingress from the ground or structural slab below, and provides a defined surface for hygiene and traffic loads.",
          "Panelised floors can accelerate the critical path versus cast-in-place insulated slabs when room volumes are repetitive and tolerances are controlled in the factory.",
        ],
      },
      {
        heading: "Coordination with wall systems",
        paragraphs: [
          "The horizontal joint pattern should mate cleanly with vertical panel locks and corner pieces; mismatched systems often force site-built transitions that increase heat flow and cleaning risk.",
          "ARCOPAN issues junction details for internal corners, external corners, door pockets and expansion joints as part of the envelope submittal — not as afterthought sketches on site.",
        ],
      },
    ],
  },
  "fire-performance-panels": {
    familyLabel: "Insulated Panels",
    eyebrow: "Fire & acoustic",
    title: "Fire-rated & performance sandwich panels",
    heroImage: solBlast,
    heroAlt: "Industrial building with enhanced fire performance envelope",
    lead: "Mineral wool and enhanced-performance cores for fire resistance, compartmentation and acoustic targets — specified where reaction to fire and structural fire behaviour must align with EU national regulations.",
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
      {
        parameter: "Core",
        value: "Stone wool / mineral wool (density by performance level)",
      },
      {
        parameter: "Fire design",
        value:
          "EI/E definitions per project statutory guidance — third-party assessments as required",
      },
      {
        parameter: "Thickness",
        value: "Driven by fire, thermal and span criteria",
      },
      {
        parameter: "Testing philosophy",
        value:
          "Project-specific test and assessment evidence; no substitute for engineer-of-record sign-off",
      },
    ],
    applications: [
      "High-bay logistics",
      "Battery & technical buildings",
      "Chemical & process enclosures",
      "Public infrastructure support",
    ],
    complianceNotes: euCompliance,
    relatedInternal: [
      {
        label: "Wall & facade panels",
        to: "/products/panels/wall-facade-panels",
      },
      {
        label: "Technical documents",
        to: "/products/support/technical-documents",
      },
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
  | "support"
  | "cooling";

export const lineProductDetails: Record<
  ProductLineId,
  Record<string, B2BProductDetail>
> = {
  "cold-room": {
    doors: {
      familyLabel: "Cold room systems",
      eyebrow: "Access & hygiene",
      title: "Cold room doors",
      heroImage: arcopanColdRoomDoors,
      heroAlt: "Industrial cold room door system",
      lead: "Hinged, sliding and vertical-lift cold room doors engineered for temperature integrity, traffic flow and food-safety conscious operations — sized for forklift and pallet jack regimes.",
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
        {
          parameter: "Door types",
          value: "Hinged, sliding, vertical (application dependent)",
        },
        {
          parameter: "Climate classes",
          value: "Chill, frozen, blast — coordinated with room design",
        },
        {
          parameter: "Surface finishes",
          value: "Stainless, plasticol, specialist coatings",
        },
        {
          parameter: "Options",
          value:
            "Windows, air curtains, radar activation, emergency egress layouts",
        },
      ],
      applications: [
        "Cold storage",
        "Processing plants",
        "Last-mile hubs",
        "Pharma cold chain",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Cold storage & hygienic panels",
          to: "/products/panels/coldroom-hygienic-panels",
        },
        {
          label: "Cam-lock floor panels",
          to: "/products/panels/cold-storage-floor-panels",
        },
        {
          label: "Cold room accessories",
          to: "/products/cold-room/accessories",
        },
        { label: "Turnkey cold rooms", to: "/products/cold-room/turnkey" },
      ],
    },
    accessories: {
      familyLabel: "Cold room systems",
      eyebrow: "Installation & uptime",
      title: "Cold room accessories",
      heroImage: solChilled,
      heroAlt: "Cold room interior accessories and fittings",
      lead: "Angles, covings, protection rails, ramps, drainage details and room hardware that complete a hygienic, maintainable envelope — specified so EPC teams close out snagging faster.",
      body: [
        "Accessory schedules are often where projects lose time; we bundle typical BOMs with panel orders to align procurement and avoid orphan specifications.",
      ],
      keyBenefits: [
        "Hygienic corners and protection aligned to HACCP walk lines",
        "Coordinated stainless and PVC solutions for wash-down regimes",
        "Fewer site-generated details at panel-to-floor transitions",
      ],
      specifications: [
        {
          parameter: "Typical scope",
          value: "Flashings, covings, kerbs, protection, hangers",
        },
        {
          parameter: "Materials",
          value: "Stainless, aluminium, food-safe plastics",
        },
        { parameter: "Delivery", value: "Kit lists per room or per zone" },
      ],
      applications: [
        "Food factories",
        "Central kitchens",
        "Cold chain",
        "Clean corridors",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        {
          label: "Hygienic & cold storage panels",
          to: "/products/panels/coldroom-hygienic-panels",
        },
        {
          label: "Cam-lock floor panels",
          to: "/products/panels/cold-storage-floor-panels",
        },
      ],
    },
    turnkey: {
      familyLabel: "Cold room systems",
      eyebrow: "Modular cold rooms",
      title: "Turnkey & modular cold room systems",
      heroImage: arcopanModularColdBuild,
      heroAlt: "Modular cold room construction and envelope",
      lead: "Modular cold room programmes combining cam-lock wall and ceiling panels, insulated floor panels, cold room doors and accessory kits — delivered as a coordinated envelope package with layout, thermal inputs, fabrication sequencing and site supervision aligned to EU EPC and investor handover standards.",
      body: [
        "Modular cold rooms reduce site risk when room counts, sizes and refrigeration classes are known early: panel kits are produced against frozen MEP penetration schedules and door schedules, limiting late changes that drive cost and programme.",
        "Structured for EU EPC frameworks: clear design splits (employer vs contractor design), milestone submittals, O&M-oriented documentation and commissioning support aligned to your validation strategy where GxP applies.",
        "Typical scope includes internal volumes for chill, frozen or blast regimes; ante-rooms and airlocks; hygienic transitions to production corridors; and coordination with racking, drainage and floor heating at openings.",
      ],
      keyBenefits: [
        "Single envelope partner for vertical panels, floor panels, doors and flashings",
        "Repeatable room kits for multi-bay or phased rollout strategies",
        "Executive reporting and document indices suitable for lender technical advisors",
        "Less field fabrication at joints — improved predictability of U-value and airtightness testing",
      ],
      specifications: [
        {
          parameter: "Modular kit scope",
          value:
            "Wall/ceiling panels, floor panels, doors, covings, flashings — per room matrix",
        },
        {
          parameter: "Typical deliverables",
          value:
            "GA layouts, thermal model inputs, BOM, method statements, O&M binders",
        },
        {
          parameter: "Interfaces",
          value:
            "Refrigeration, MEP, civil slab falls, drainage, racking — workshop-led",
        },
        {
          parameter: "Geography",
          value:
            "EU and neighbouring markets — logistics and incoterms per contract",
        },
      ],
      applications: [
        "Greenfield food plants",
        "Cold store expansion",
        "Pharma & life science",
        "3PL retrofit & mezzanine cold cells",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Cold storage & hygienic panels",
          to: "/products/panels/coldroom-hygienic-panels",
        },
        {
          label: "Cam-lock floor panels",
          to: "/products/panels/cold-storage-floor-panels",
        },
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        {
          label: "Request consultation",
          to: "/products/support/request-consultation",
        },
      ],
      technicalSections: [
        {
          heading: "Modular cold room delivery model",
          paragraphs: [
            "Modular delivery starts from a room data sheet: dimensions, target temperature, pull-down assumptions, traffic type, hygiene class and future expansion intent. Those inputs drive panel thickness, core type, joint selection and door classes.",
            "Fabrication batches are released against approved shop drawings; site receives numbered components and installation maps to reduce interpretation errors during critical path enclosure.",
          ],
        },
        {
          heading: "EPC integration",
          paragraphs: [
            "We align with your contract programme: long-lead panel releases, door deliveries, and soft-cut dates for refrigeration commissioning. RFIs are tracked against design freeze milestones so refrigeration contractors are not held by envelope ambiguity.",
            "For brownfield sites, laser survey and as-built reconciliation are scheduled before final fabrication to avoid field cutting that voids performance assumptions.",
          ],
        },
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
      lead: "Insulated sectional doors for high-traffic logistics and manufacturing bays — wind load rated options, vision panels and activation packages for safety and throughput.",
      body: [
        "EPC coordination includes structural openings, deflection limits, and electrical provisions for interlocks — reducing RFIs during civil finishing trades.",
      ],
      keyBenefits: [
        "Thermal insulation options aligned to building energy strategy",
        "Safety devices and signalling integrated with site logistics plan",
        "Service-friendly hardware for24/7 operations",
      ],
      specifications: [
        {
          parameter: "Sizes",
          value: "Custom — manufactured to opening schedule",
        },
        {
          parameter: "Wind class",
          value: "Project-specific — documented in tender pack",
        },
        {
          parameter: "Controls",
          value:
            "Push button, radar, induction loop — interlocked with fire strategy",
        },
      ],
      applications: [
        "Warehousing",
        "Manufacturing",
        "Cold chain hubs",
        "Service yards",
      ],
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
      lead: "Manual and motorised sliding door systems for wide openings where sectional doors are impractical — heavy-duty hardware for industrial environments.",
      body: [
        "Designed for coordination with floor rails, guide steel and building movement; shop drawings issued for embed and secondary steel approval.",
      ],
      keyBenefits: [
        "High clear openings for abnormal loads and equipment",
        "Robust running gear for harsh environments",
        "Optional insulated cores where climate separation matters",
      ],
      specifications: [
        {
          parameter: "Configuration",
          value: "Single leaf, bi-parting, telescopic (project dependent)",
        },
        {
          parameter: "Drive",
          value: "Manual / motorised — safety category per risk assessment",
        },
      ],
      applications: [
        "Aircraft hangars",
        "Heavy industry",
        "Agriculture",
        "Recycling & waste",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Sectional doors",
          to: "/products/industrial-doors/sectional",
        },
        { label: "Rapid doors", to: "/products/industrial-doors/rapid" },
      ],
    },
    rapid: {
      familyLabel: "Industrial doors",
      eyebrow: "High-cycle",
      title: "High-speed rapid roll doors",
      heroImage: productRacking,
      heroAlt: "High speed door in warehouse",
      lead: "High-cycle fabric rapid doors for clean zones, temperature separation and dust control — self-repairing options to minimise downtime in24/7 operations.",
      body: [
        "Ideal for EPC logistics buildings where airlock philosophy and energy loss must be balanced with truck turnaround times.",
      ],
      keyBenefits: [
        "Fast opening cycles to protect cold chain and clean processes",
        "Safety light curtains and radar options",
        "Low maintenance self-repairing curtains where applicable",
      ],
      specifications: [
        {
          parameter: "Opening speed",
          value: "Model dependent — stated in submittal",
        },
        {
          parameter: "Wind resistance",
          value: "Project-specific classification",
        },
        {
          parameter: "Controls",
          value:
            "Integrated with building management and fire strategy as required",
        },
      ],
      applications: [
        "Cold rooms",
        "Clean production",
        "Automotive",
        "Food distribution",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        {
          label: "Sectional doors",
          to: "/products/industrial-doors/sectional",
        },
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
      lead: "Adjustable pallet racking and frame systems engineered for seismic/wind loads per site, forklift aisle strategy and future flexibility — documentation suitable for investor technical due diligence.",
      body: [
        "We align rack layout with fire sprinkler philosophy, slab loadings and panel envelope interfaces — reducing late-stage redesign when MEP and racking clash.",
      ],
      keyBenefits: [
        "Clear load declarations for civil engineer review",
        "Modular expansion for 3PL tenants",
        "Accessory integration: nets, guards, signage channels",
      ],
      specifications: [
        {
          parameter: "Standards context",
          value: "Design per EN 15512 philosophy — national annexes respected",
        },
        {
          parameter: "Load cases",
          value: "Uniform loads, pick paths, impact factors — project-specific",
        },
        {
          parameter: "Finishes",
          value: "Galvanised / powder coated — environment dependent",
        },
      ],
      applications: [
        "3PL",
        "Retail DCs",
        "Manufacturing stores",
        "Cold stores",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Shelving systems", to: "/products/racking/shelving" },
        {
          label: "Warehouse planning",
          to: "/products/racking/warehouse-planning",
        },
      ],
    },
    shelving: {
      familyLabel: "Racking & storage",
      eyebrow: "Small goods",
      title: "Shelving & light storage",
      heroImage: solFrozen,
      heroAlt: "Industrial shelving in warehouse",
      lead: "Multi-tier shelving and mezzanine-friendly light storage for picking operations, spare parts and production supermarkets — coordinated with safety barriers and egress.",
      body: [
        "EPC buyers receive coordinated GA drawings and kick-off clash checks against MEP and fire escape routes.",
      ],
      keyBenefits: [
        "Pick-path efficiency for e-commerce and pharma spare parts",
        "Scalable bays for changing SKU profiles",
        "Compatible with catwalk and stair modules where applicable",
      ],
      specifications: [
        {
          parameter: "Bay loads",
          value: "Declared per configuration in submittal",
        },
        { parameter: "Finishes", value: "Galvanised / powder coated" },
      ],
      applications: [
        "Spare parts",
        "Retail back-of-house",
        "Workshop stores",
        "Pharma support",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Pallet racking", to: "/products/racking/pallet-racking" },
        {
          label: "Warehouse planning",
          to: "/products/racking/warehouse-planning",
        },
      ],
    },
    "warehouse-planning": {
      familyLabel: "Racking & storage",
      eyebrow: "Consulting",
      title: "Warehouse planning & layout",
      heroImage: industryPharma,
      heroAlt: "Warehouse planning and layout concept",
      lead: "Data-led layout studies: aisle width optimisation, throughput scenarios, future expansion bands and envelope coordination — output formatted for EPC gate reviews.",
      body: [
        "We translate owner requirements into concept layouts and ROM bills of materials, so capex decisions are grounded in defensible assumptions.",
      ],
      keyBenefits: [
        "Reduces client-led iteration between architect, MEP and operations",
        "Supports lender technical advisor scrutiny with traceable assumptions",
        "Aligns cold chain buildings with panel and door packages early",
      ],
      specifications: [
        {
          parameter: "Deliverables",
          value: "Concept GA, capacity models, phasing narratives",
        },
        { parameter: "Tools", value: "CAD / BIM-ready exports on request" },
      ],
      applications: [
        "New DCs",
        "Cold chain expansion",
        "Plant modernisation",
        "Tenant fit-out",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Pallet racking", to: "/products/racking/pallet-racking" },
        {
          label: "Request consultation",
          to: "/products/support/request-consultation",
        },
      ],
    },
    "market-racking": {
      familyLabel: "Racking & storage",
      eyebrow: "Retail & market",
      title: "Market & retail racking systems",
      heroImage: storageSystems,
      heroAlt: "Market and retail shelving racking systems",
      lead: "Purpose-built shelving and racking systems for supermarkets, food retail and market environments — optimised for product visibility, restocking speed and compliance with hygiene and load standards.",
      body: [
        "Market racking combines structural integrity with aesthetic presentation requirements: adjustable shelves, hygienic surfaces and modular bays that adapt to changing product mixes without structural redesign.",
        "For EPC food retail projects, we coordinate shelf loads with civil slab design, fire sprinkler clearances and aisle width optimisation — reducing redesign iterations late in the project.",
      ],
      keyBenefits: [
        "Adjustable shelf pitch for variable product heights and weights",
        "Food-safe coatings and stainless options for wet or chilled areas",
        "Fast-fit systems to support phased retail rollouts",
        "Compatible with standard retail gondola accessories and signage rails",
      ],
      specifications: [
        {
          parameter: "Shelf load",
          value: "Up to 150 kg per shelf (configuration dependent)",
        },
        {
          parameter: "Bay sizes",
          value: "Standard 900–1,800 mm wide; heights to 2,400 mm",
        },
        {
          parameter: "Finishes",
          value: "Epoxy powder coat, galvanised, stainless (hygienic zones)",
        },
        {
          parameter: "Accessories",
          value: "Dividers, price strip rails, anti-tip devices, end panels",
        },
        {
          parameter: "Standards",
          value: "EN 15512 philosophy; load labelling per installation",
        },
      ],
      applications: [
        "Supermarkets",
        "Hypermarkets",
        "Convenience stores",
        "Food retail fit-outs",
        "Chilled & frozen display back-of-house",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Pallet racking", to: "/products/racking/pallet-racking" },
        { label: "Shelving systems", to: "/products/racking/shelving" },
        {
          label: "Warehouse planning",
          to: "/products/racking/warehouse-planning",
        },
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
      lead: "Corrosion-resistant fasteners and fixing systems matched to panel pull-out requirements, substrate types and environmental exposure — issued with calculation notes for site QA.",
      body: [
        "Generic screw schedules are a common source of non-conformance; we align fixings to manufacturer pull-out data and your structural engineer’s assumptions.",
      ],
      keyBenefits: [
        "Traceable batches and certificates for quality plans",
        "Coordinated with wind suction zones on large envelopes",
        "Less rework at final inspection",
      ],
      specifications: [
        {
          parameter: "Materials",
          value: "Stainless / coated carbon steel — environment dependent",
        },
        {
          parameter: "Documentation",
          value: "DoP-linked accessories where applicable",
        },
      ],
      applications: [
        "Envelope installation",
        "Retrofit overlays",
        "Coastal sites",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Sealants", to: "/products/accessories/sealants" },
      ],
    },
    sealants: {
      familyLabel: "Accessories",
      eyebrow: "Airtightness",
      title: "Sealants & tapes",
      heroImage: solChilled,
      heroAlt: "Sealant application on building joint",
      lead: "Movement-capable sealants, foams and tapes for panel joints, penetrations and window interfaces — selected for compatibility with coatings and cleaning chemicals.",
      body: [
        "Supports EU energy performance compliance narratives by protecting airtightness targets through seasonal cycles.",
      ],
      keyBenefits: [
        "Compatibility checks with facings and coatings",
        "Joint designs aligned to wind and moisture modelling",
        "Clear colour and tooling guidance for uniform site finish",
      ],
      specifications: [
        {
          parameter: "Chemistries",
          value: "MS polymer, silicone, PU — specification dependent",
        },
        {
          parameter: "Movement capability",
          value: "Stated per joint detail drawing",
        },
      ],
      applications: [
        "Food plants",
        "Cold rooms",
        "Facades",
        "Process buildings",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Flashings", to: "/products/accessories/flashings" },
      ],
    },
    flashings: {
      familyLabel: "Accessories",
      eyebrow: "Weathering",
      title: "Flashings & sheet metal",
      heroImage: solBlast,
      heroAlt: "Roof flashing detail",
      lead: "Prefabricated flashings, gutters and transitions in coordinated gauges and finishes — shop drawings issued for approval to protect weathertightness warranties.",
      body: [
        "EPC teams receive numbered pieces and installation maps to reduce interpretation on site.",
      ],
      keyBenefits: [
        "Consistent aesthetic with panel coatings",
        "Controlled thermal bridges at eaves and ridges",
        "Less reliance on site-fabricated pieces",
      ],
      specifications: [
        {
          parameter: "Materials",
          value: "Prepainted steel, aluminium, stainless",
        },
        {
          parameter: "Fabrication",
          value: "CNC formed where volume justifies",
        },
      ],
      applications: [
        "Roof edges",
        "Wall terminations",
        "Door canopies",
        "Equipment penetrations",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Technical documents",
          to: "/products/support/technical-documents",
        },
      ],
    },
    "dock-levellers": {
      familyLabel: "Accessories",
      eyebrow: "Loading operations",
      title: "Dock levellers & loading ramp systems",
      heroImage: industrialWarehouse,
      heroAlt: "Hydraulic dock leveller on industrial loading bay",
      lead: "Hydraulic and mechanical dock levellers, dock shelters and vehicle restraints for safe, efficient lorry loading — specified for throughput targets, truck fleet mix and site health & safety requirements.",
      body: [
        "Dock equipment is the critical interface between building and logistics operation; poorly specified levellers create throughput bottlenecks, damage to goods and injury risk — we specify to your trailer height range, forklift capacity and dock frequency.",
        "EU EPC projects receive full dock schedules: leveller duty class, shelter type, vehicle restraint category and drainage provisions — integrated with civil slab and panel openings from early design.",
      ],
      keyBenefits: [
        "Duty-class selection matched to daily cycle counts and forklift weight",
        "Integrated vehicle restraints to prevent trailer walk during loading",
        "Insulated dock shelters to minimise cold chain break at the bay",
        "Safe working load calculations issued for EPC QA packages",
      ],
      specifications: [
        {
          parameter: "Types",
          value: "Hydraulic (powered) / mechanical (spring-assisted)",
        },
        {
          parameter: "Platform capacity",
          value: "6,000–9,000 kg (model dependent)",
        },
        {
          parameter: "Lip length",
          value: "400–600 mm standard; extended options available",
        },
        { parameter: "Working range", value: "±250–350 mm from dock height" },
        {
          parameter: "Shelter types",
          value:
            "Inflatable, foam-pad, retractable — trailer profile dependent",
        },
        {
          parameter: "Vehicle restraint",
          value:
            "RIG (Rear Impact Guard) hooks; ICC bar hooks — project specific",
        },
      ],
      applications: [
        "Distribution centres",
        "Cold chain hubs",
        "Food manufacturing",
        "3PL cross-docking",
        "Retail DCs",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Industrial door systems",
          to: "/products/industrial-doors/sectional",
        },
        { label: "Warehouse racking", to: "/products/racking/pallet-racking" },
        {
          label: "Safety accessories",
          to: "/products/accessories/safety-accessories",
        },
      ],
    },
    "pvc-strip-curtains": {
      familyLabel: "Accessories",
      eyebrow: "Thermal separation",
      title: "PVC strip curtains & soft barriers",
      heroImage: coldRoomDoorsWebp,
      heroAlt: "PVC strip curtain on cold room entrance",
      lead: "Industrial PVC strip curtains for cold room entrances, clean-room separation and forklift throughput zones — specifiable for temperature, UV resistance, antistatic and food-contact requirements.",
      body: [
        "Strip curtains reduce cold air loss at high-traffic openings where solid doors are impractical — they extend the thermal envelope into forklift lanes without impeding throughput.",
        "Strip selection depends on operating temperature (standard, polar or deep-freeze grades), traffic type, strip overlap and suspension system compatibility with your door or panel frame.",
      ],
      keyBenefits: [
        "Significant reduction in cold air loss at open doorways",
        "Food-contact grades for HACCP-critical zones",
        "Antistatic options for electronics and cleanroom separation",
        "Easy strip replacement without tools — minimises maintenance downtime",
      ],
      specifications: [
        {
          parameter: "Strip widths",
          value: "100 mm / 200 mm / 300 mm standard",
        },
        {
          parameter: "Strip thickness",
          value: "2 mm / 3 mm (traffic and wind resistance dependent)",
        },
        {
          parameter: "Temperature range",
          value:
            "Standard: -10°C to +50°C; Polar: down to -30°C; Deep freeze: to -50°C",
        },
        { parameter: "Overlap", value: "50–100% (application dependent)" },
        {
          parameter: "Special grades",
          value:
            "UV-stabilised, antistatic, transparent tinted, food-contact certified",
        },
        {
          parameter: "Suspension",
          value:
            "Fixed rail, sliding rail, wall-mounted or door-frame brackets",
        },
      ],
      applications: [
        "Cold room entrances",
        "Blast freezer access",
        "Production area separation",
        "Clean-room airlocks",
        "Forklift corridors",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Cold room doors", to: "/products/cold-room/doors" },
        {
          label: "Safety accessories",
          to: "/products/accessories/safety-accessories",
        },
        {
          label: "Cold room accessories",
          to: "/products/cold-room/accessories",
        },
      ],
    },
    "safety-accessories": {
      familyLabel: "Accessories",
      eyebrow: "Site protection",
      title: "Safety accessories & protection systems",
      heroImage: accessories1,
      heroAlt: "Industrial safety barriers and protection systems in warehouse",
      lead: "Impact protection barriers, column guards, safety bollards, wheel stops and anti-collapse nets for industrial environments — specified to EU machinery and workplace safety directive expectations.",
      body: [
        "Safety accessories protect people, equipment and building fabric in forklift and pedestrian shared spaces — often the last item specified and the first cause of site accidents when omitted.",
        "We coordinate safety accessory schedules with rack layouts, door positions and pedestrian routes — issuing a composite drawing for H&S review and client sign-off before delivery.",
      ],
      keyBenefits: [
        "Impact-rated barriers with declared energy absorption values",
        "Racking end-frame protectors to prevent progressive collapse",
        "Segregated pedestrian route delineation for EU workplace compliance",
        "Coordinated with rack layout for single-package delivery",
      ],
      specifications: [
        {
          parameter: "Barrier types",
          value:
            "Steel safety barriers, polymer bumpers, column protectors, safety bollards",
        },
        {
          parameter: "Impact rating",
          value:
            "Declared absorption energy (kJ) per product — project specific",
        },
        {
          parameter: "Racking guards",
          value: "Upright protectors, row spacers, end-of-aisle guards",
        },
        {
          parameter: "Floor fixing",
          value:
            "Anchor bolt patterns and min. slab thickness stated per product",
        },
        {
          parameter: "Finishes",
          value: "RAL 1023 (safety yellow) standard; custom on request",
        },
        {
          parameter: "Pedestrian",
          value:
            "Guardrails, handrails, anti-slip nosings, safety netting for mezzanines",
        },
      ],
      applications: [
        "Warehouses with forklift traffic",
        "Cold stores",
        "Production facilities",
        "Mezzanine levels",
        "Dock areas",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Dock levellers & ramps",
          to: "/products/accessories/dock-levellers",
        },
        { label: "Pallet racking", to: "/products/racking/pallet-racking" },
        {
          label: "Installation accessories",
          to: "/products/accessories/installation-accessories",
        },
      ],
    },
    "installation-accessories": {
      familyLabel: "Accessories",
      eyebrow: "Panel fit-out",
      title: "Panel installation accessories",
      heroImage: accessories1,
      heroAlt: "Panel installation tools and accessories",
      lead: "Lifting beams, panel trolleys, alignment clamps, edge trims and installation aids that protect panel facings and reduce on-site labour — supplied with method statements for EPC quality plans.",
      body: [
        "Panel installation accessories reduce facing damage, alignment errors and off-programme rework — critical when panel deliveries arrive on a compressed critical path and the receiving contractor has limited prior experience with the system.",
        "We compile accessory kits matched to panel type, building height and crane access strategy — issued with illustrated method statements that site supervisors can follow without additional training.",
      ],
      keyBenefits: [
        "Fewer facing scratches and dents during handling and lifting",
        "Correct alignment of cam-lock and overlap joints first time",
        "Edge and corner protection for transport and temporary storage on site",
        "Illustrated method statements reduce training time for multinational crews",
      ],
      specifications: [
        {
          parameter: "Lifting aids",
          value:
            "Vacuum lifting beams, spreader bars, suction cups — panel size matched",
        },
        {
          parameter: "Alignment tools",
          value: "Cam-lock alignment clamps, joint gauges",
        },
        {
          parameter: "Protection",
          value:
            "Edge protectors, corner guards, interleave foam — reusable where possible",
        },
        {
          parameter: "Fastening aids",
          value: "Torque-limited drivers, screw guides for fixing schedules",
        },
        {
          parameter: "Documentation",
          value:
            "Illustrated method statement, torque log, inspection checklist",
        },
      ],
      applications: [
        "Cold room panel installation",
        "Roof panel erection",
        "Wall panel cladding",
        "Modular cold room fit-out",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Panel fasteners & fixings",
          to: "/products/accessories/fasteners",
        },
        {
          label: "Installation guides",
          to: "/products/support/installation-guides",
        },
        {
          label: "Technical documents",
          to: "/products/support/technical-documents",
        },
      ],
    },
  },
  support: {
    "technical-documents": {
      familyLabel: "Support",
      eyebrow: "Submittals",
      title: "Technical documents & submittals",
      heroImage: industryPharma,
      heroAlt: "Technical documentation and project files",
      lead: "Structured technical submittals for EPC review: datasheets, CAD/BIM-ready details, fixings schedules, and performance declarations aligned to EU market expectations.",
      body: [
        "We organise documentation for gate reviews (IFC, AFC) so discipline engineers can sign off without reformatting vendor PDFs.",
      ],
      keyBenefits: [
        "Single document index per package",
        "Revision control for fast-moving tender iterations",
        "Traceability from test evidence to declared performance",
      ],
      specifications: [
        {
          parameter: "Typical pack",
          value: "Datasheets, details, certificates, installation manuals",
        },
        { parameter: "Formats", value: "PDF, DWG/DXF, Revit on request" },
      ],
      applications: [
        "Tender",
        "Design development",
        "Construction",
        "Handover",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Installation guides",
          to: "/products/support/installation-guides",
        },
      ],
    },
    "installation-guides": {
      familyLabel: "Support",
      eyebrow: "Site execution",
      title: "Installation guides & training",
      heroImage: heroBg,
      heroAlt: "Construction site installation",
      lead: "Method statements, sequencing guidance and supervisor training to protect panel warranties and programme — aligned to EU site health and safety culture.",
      body: [
        "Reduces anchor errors, improper torques and moisture ingress from premature exposure.",
      ],
      keyBenefits: [
        "Fewer NCRs during envelope inspections",
        "Faster crew onboarding for multinational contractors",
        "Clear weathering and lifting guidance",
      ],
      specifications: [
        {
          parameter: "Deliverables",
          value: "IMS, lift plans, torque schedules, inspection checklists",
        },
        {
          parameter: "Training",
          value: "On-site or remote — framework agreement dependent",
        },
      ],
      applications: [
        "First-time installers",
        "Fast-track programmes",
        "Remote sites",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        {
          label: "Request consultation",
          to: "/products/support/request-consultation",
        },
      ],
    },
    "request-consultation": {
      familyLabel: "Support",
      eyebrow: "Engineering",
      title: "Request a consultation",
      heroImage: productCooling,
      heroAlt: "Engineering consultation meeting",
      lead: "Book a structured consultation with ARCOPAN engineering: performance brief, risk register, and recommended envelope strategy — suitable for early contractor involvement (ECI) and design-build tenders.",
      body: [
        "Typical output: outline specification, indicative BOM, programme risks, and documentation roadmap for EU investor handover.",
      ],
      keyBenefits: [
        "Early alignment between operations, QA and engineering",
        "Transparent assumptions for capex governance",
        "Path to formal quotation and shop drawings",
      ],
      specifications: [
        {
          parameter: "Response target",
          value: "Within 2 business days for qualified industrial enquiries",
        },
        {
          parameter: "Information needed",
          value:
            "Location, use class, temperature regime, programme, contract form",
        },
      ],
      applications: [
        "Feasibility",
        "Pre-tender",
        "Value engineering",
        "Claims mitigation",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "All products", to: "/products" },
        { label: "Insulated panels hub", to: "/products/panels" },
      ],
    },
  },
  cooling: {
    "industrial-cooling-systems": {
      familyLabel: "Cooling systems",
      eyebrow: "Refrigeration engineering",
      title: "Industrial cooling & refrigeration systems",
      heroImage: coolingUnits1,
      heroAlt: "Industrial refrigeration and cooling unit systems",
      lead: "End-to-end industrial cooling and refrigeration systems for cold storage, food processing, pharmaceutical and logistics applications — from single condensing units to central machine room packages coordinated with cold room envelopes.",
      body: [
        "Industrial cooling systems must be matched to the envelope they serve: room volume, infiltration assumptions, product load and pull-down duty are all inputs that determine equipment selection, refrigerant circuit design and energy consumption at steady state.",
        "ARCOPAN coordinates cooling systems with the panel, door and floor envelope so thermal modelling assumptions, penetration locations and electrical provisions are aligned from feasibility through commissioning — a single-accountability path that reduces interface risk for EPC contractors and investors.",
        "System scope can range from self-contained monoblock and split units for modular cold rooms to centralised machine room packages for multi-zone facilities with ammonia, CO₂ or HFC/HFO refrigerant strategies.",
      ],
      keyBenefits: [
        "Cooling capacity matched to envelope and product thermal load calculations",
        "Refrigerant selection aligned to EU F-gas regulations and future phase-down trajectories",
        "Single coordination path for envelope and cooling — fewer interface RFIs on EPC projects",
        "Energy performance data suitable for investor and lender ESG reviews",
      ],
      specifications: [
        {
          parameter: "System types",
          value:
            "Monoblock, split, condensing unit + evaporator, centralised machine room",
        },
        {
          parameter: "Temperature range",
          value: "+15°C to -40°C (application dependent)",
        },
        {
          parameter: "Refrigerants",
          value:
            "HFC (R404A, R134a), HFO (R449A, R452A), CO₂ (R744), NH₃ (R717) — project specific",
        },
        {
          parameter: "Cooling capacity",
          value: "Project-matched — stated in heat load calculation outputs",
        },
        {
          parameter: "Control",
          value:
            "Electronic controllers, BMS integration, remote monitoring options",
        },
        {
          parameter: "Standards",
          value:
            "EU F-gas Regulation compliance; EN 378 pressure system safety",
        },
      ],
      applications: [
        "Cold storage warehouses",
        "Food processing & packaging",
        "Pharmaceutical cold chain",
        "Blast freezing tunnels",
        "Multi-temperature logistics hubs",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Condensing units", to: "/products/cooling/condensing-units" },
        { label: "Evaporators", to: "/products/cooling/evaporators" },
        {
          label: "Refrigeration accessories",
          to: "/products/cooling/refrigeration-accessories",
        },
        { label: "Turnkey cold rooms", to: "/products/cold-room/turnkey" },
      ],
    },
    "condensing-units": {
      familyLabel: "Cooling systems",
      eyebrow: "Heat rejection",
      title: "Condensing units",
      heroImage: coolingCondensingUnits,
      heroAlt: "Industrial condensing unit for cold storage refrigeration",
      lead: "Air-cooled and water-cooled condensing units for cold room and process cooling applications — selected against ambient conditions, refrigerant strategy and EU F-gas compliance requirements.",
      body: [
        "Condensing unit selection determines long-term operating cost: oversized units short-cycle and consume disproportionate energy; undersized units fail to maintain room temperature during peak ambient or pull-down. We size against your verified heat load, not rule-of-thumb estimates.",
        "For EPC projects, condensing unit schedules include foundation and fixing details, electrical loads, sound power levels for planning submissions, and refrigerant circuit data for pressure system safety files.",
      ],
      keyBenefits: [
        "Ambient-corrected capacity selection to avoid under-performance in summer peaks",
        "Low-GWP and natural refrigerant options for EU F-gas phase-down compliance",
        "Sound power data supplied for noise-sensitive planning conditions",
        "Documented refrigerant charge records for EU F-gas leak check schedules",
      ],
      specifications: [
        {
          parameter: "Compressor types",
          value:
            "Hermetic scroll, semi-hermetic reciprocating, screw (capacity dependent)",
        },
        {
          parameter: "Refrigerants",
          value: "R449A, R452A, R404A, R134a, R744 (CO₂) — project specific",
        },
        {
          parameter: "Ambient range",
          value: "-20°C to +45°C operating ambient (model dependent)",
        },
        {
          parameter: "Evaporating temp",
          value: "-40°C to +10°C (LT / MT / HT classifications)",
        },
        {
          parameter: "Capacity range",
          value: "1 kW to 300+ kW (central plant configurations)",
        },
        {
          parameter: "Electrical",
          value: "400V / 3-phase / 50 Hz standard EU supply",
        },
      ],
      applications: [
        "Cold storage rooms",
        "Blast freezers",
        "Process cooling",
        "Food retail back-of-house",
        "Pharmaceutical stores",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Evaporators", to: "/products/cooling/evaporators" },
        {
          label: "Industrial cooling systems",
          to: "/products/cooling/industrial-cooling-systems",
        },
        {
          label: "Refrigeration accessories",
          to: "/products/cooling/refrigeration-accessories",
        },
      ],
    },
    evaporators: {
      familyLabel: "Cooling systems",
      eyebrow: "Air cooling",
      title: "Evaporators & air coolers",
      heroImage: coolingEvaporators,
      heroAlt: "Industrial evaporator unit inside cold storage room",
      lead: "Ceiling-mounted and floor-standing evaporators and air coolers for cold rooms, blast freezers and process cooling environments — selected for air distribution pattern, defrost strategy and product sensitivity.",
      body: [
        "Evaporator selection is as critical as condensing unit selection: poor air distribution creates warm spots and product quality failures; incorrect defrost strategy wastes energy and creates ice build-up on product.",
        "We specify evaporators against room geometry, product stack heights, required air velocity at product level and defrost frequency — issuing capacity correction factors for temperature difference and fouling conditions in the handover pack.",
      ],
      keyBenefits: [
        "Air pattern modelling for uniform temperature distribution across room volume",
        "Electric, hot-gas or water defrost options matched to operating regime",
        "Low-noise fan options for noise-sensitive processing or pharmaceutical environments",
        "Coil materials specified for corrosive or ammonia-compatible applications",
      ],
      specifications: [
        {
          parameter: "Types",
          value:
            "Ceiling-mounted unit coolers, floor-standing air coolers, penthouse units",
        },
        {
          parameter: "Temperature range",
          value:
            "High-temp (HT): 0°C to +10°C; Medium-temp (MT): -10°C to 0°C; Low-temp (LT): -35°C to -10°C",
        },
        {
          parameter: "Defrost method",
          value:
            "Electric element, hot-gas (reverse cycle), water/brine — regime dependent",
        },
        {
          parameter: "Coil materials",
          value:
            "Aluminium fins / copper tube standard; stainless, epoxy or grooved for aggressive environments",
        },
        {
          parameter: "Fan drive",
          value:
            "Axial fans; EC motor options for variable speed energy management",
        },
        {
          parameter: "Airflow",
          value:
            "Stated per unit in capacity selection — room air change rate documented",
        },
      ],
      applications: [
        "Cold storage rooms",
        "Blast freeze tunnels",
        "Controlled atmosphere stores",
        "Process cooling",
        "Hygienic food environments",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Condensing units", to: "/products/cooling/condensing-units" },
        {
          label: "Industrial cooling systems",
          to: "/products/cooling/industrial-cooling-systems",
        },
        {
          label: "Refrigeration accessories",
          to: "/products/cooling/refrigeration-accessories",
        },
      ],
    },
    "refrigeration-accessories": {
      familyLabel: "Cooling systems",
      eyebrow: "System components",
      title: "Refrigeration accessories & components",
      heroImage: coolingMonoblock,
      heroAlt: "Refrigeration system components and accessories",
      lead: "Expansion valves, electronic controllers, pressure switches, sight glasses, filter driers and ancillary refrigeration components for system assembly, commissioning and ongoing maintenance — sourced to EU F-gas compliance requirements.",
      body: [
        "Refrigeration accessory specification is where budget is frequently lost through under-specification: incorrect expansion valve sizing causes hunting and energy waste; missing sight glasses and moisture indicators extend commissioning time; unbranded filter driers void equipment warranties.",
        "For EPC projects, we compile accessory BOMs against the refrigerant circuit design, issuing component data sheets, pressure ratings and compatibility notes for the mechanical contractor's quality plan.",
      ],
      keyBenefits: [
        "Components matched to refrigerant type and operating pressure class",
        "Electronic controllers with BMS-ready outputs for facility management systems",
        "Full component data sheets for pressure system safety file",
        "EU F-gas compliant documentation for refrigerant handling records",
      ],
      specifications: [
        {
          parameter: "Expansion devices",
          value:
            "Thermostatic expansion valves (TEV), electronic expansion valves (EEV) — capacity matched",
        },
        {
          parameter: "Controllers",
          value:
            "Electronic temperature controllers, defrost timers, alarm modules, BMS gateways",
        },
        {
          parameter: "Safety devices",
          value: "High/low pressure switches, relief valves, solenoid valves",
        },
        {
          parameter: "Filtration",
          value:
            "Filter driers, moisture indicators, sight glasses — refrigerant specific",
        },
        {
          parameter: "Pipework",
          value:
            "Copper, carbon steel or stainless fittings; pipe insulation systems",
        },
        {
          parameter: "F-gas compliance",
          value:
            "Leak detection devices, refrigerant records, operator certification tracking",
        },
      ],
      applications: [
        "Cold storage",
        "Food processing",
        "Pharmaceutical cold chain",
        "System retrofit & upgrade",
        "Maintenance contracts",
      ],
      complianceNotes: euCompliance,
      relatedInternal: [
        { label: "Condensing units", to: "/products/cooling/condensing-units" },
        { label: "Evaporators", to: "/products/cooling/evaporators" },
        {
          label: "Industrial cooling systems",
          to: "/products/cooling/industrial-cooling-systems",
        },
      ],
    },
  },
};
