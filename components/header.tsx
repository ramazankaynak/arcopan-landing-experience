"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail, Snowflake, Building2, Warehouse, Package, ChevronDown, ArrowRight } from "lucide-react"

/* ── Mega-menu data ─────────────────────────────────────── */
const productCategories = [
  {
    title: "Cold Storage & Insulation",
    items: [
      { title: "Insulated Cold Storage Panels", href: "/products/insulated-cold-storage-panels" },
      { title: "Insulated Wall & Roof Panels",  href: "/products/insulated-wall-roof-panels" },
      { title: "Insulated Cold Room Doors",     href: "/products/insulated-cold-room-doors" },
      { title: "Modular Cold Rooms",            href: "/products/modular-cold-rooms" },
    ],
    icon: Snowflake,
  },
  {
    title: "Cooling & Refrigeration",
    items: [
      { title: "Industrial Cooling Systems", href: "/products/industrial-cooling-systems" },
      { title: "Condensing Units",           href: "/products/condensing-units" },
      { title: "Evaporators",               href: "/products/evaporators" },
    ],
    icon: Building2,
  },
  {
    title: "Warehouse & Racking",
    items: [
      { title: "Warehouse Racking Systems",   href: "/products/warehouse-racking-systems" },
      { title: "Market Racking Systems",      href: "/products/market-racking-systems" },
      { title: "Industrial Door Systems",     href: "/products/industrial-door-systems" },
      { title: "Dock Leveller & Ramp Systems",href: "/products/dock-leveller-ramp-systems" },
    ],
    icon: Warehouse,
  },
  {
    title: "Components",
    items: [
      { title: "Profiles & Fixings",   href: "/products/profiles-fixings" },
      { title: "PVC Strip Curtains",   href: "/products/pvc-strip-curtains" },
      { title: "Safety Accessories",   href: "/products/safety-accessories" },
    ],
    icon: Package,
  },
]

const solutionsItems = [
  {
    category: "Cold Storage Systems",
    items: [
      { title: "Chilled Storage (0 / +4 °C)",  href: "/solutions/chilled-storage" },
      { title: "Frozen Storage (−18 / −25 °C)", href: "/solutions/frozen-storage" },
      { title: "Shock / Blast Freezing",        href: "/solutions/blast-freezing" },
      { title: "Food-Logistics Cold Stores",    href: "/solutions/food-logistics" },
    ],
  },
  {
    category: "Custom Solutions",
    items: [
      { title: "Project-Based Systems", href: "/solutions/project-based" },
      { title: "Tailor-Made Solutions", href: "/solutions/tailor-made" },
    ],
  },
]

const industriesItems = [
  { title: "Food & Beverage",        href: "/industries/food-beverage" },
  { title: "Meat & Poultry",         href: "/industries/meat-poultry" },
  { title: "Dairy",                  href: "/industries/dairy" },
  { title: "Pharmaceuticals",        href: "/industries/pharmaceuticals" },
  { title: "Logistics & Cold Chain", href: "/industries/logistics" },
  { title: "Retail & Supermarkets",  href: "/industries/retail" },
]

const companyItems = [
  { title: "About Arcopan",          href: "/company/about" },
  { title: "Our Engineering Team",   href: "/company/team" },
  { title: "Quality & Certifications",href: "/company/quality" },
  { title: "Sustainability",         href: "/company/sustainability" },
]

/* ── Component ──────────────────────────────────────────── */
export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-white/97 backdrop-blur-sm shadow-[0_1px_0_0_#CBD5E1]"
          : "bg-[#0D2B45]",
      )}
    >
      {/* ── Top utility bar ── */}
      <div
        className={cn(
          "hidden lg:block border-b text-[13px] transition-colors",
          isScrolled
            ? "border-[#CBD5E1] bg-[#F1F5F9] text-[#64748B]"
            : "border-white/10 bg-[#091D30] text-white/60",
        )}
      >
        <div className="container mx-auto px-6 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+902123456789"
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                isScrolled ? "hover:text-[#0E7490]" : "hover:text-white",
              )}
            >
              <Phone className="h-3 w-3" />
              +90 212 345 67 89
            </a>
            <a
              href="mailto:info@arcopan.com"
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                isScrolled ? "hover:text-[#0E7490]" : "hover:text-white",
              )}
            >
              <Mail className="h-3 w-3" />
              info@arcopan.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-wide">ISO 9001:2015</span>
            <span className="text-current/30">·</span>
            <span className="font-mono text-[11px] tracking-wide">CE Marking</span>
            <span className="text-current/30">·</span>
            <span className="font-mono text-[11px] tracking-wide">EN 14509</span>
          </div>
        </div>
      </div>

      {/* ── Main navigation ── */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className={cn(
              "w-9 h-9 rounded flex items-center justify-center transition-colors",
              isScrolled ? "bg-[#0E7490]" : "bg-white/10",
            )}>
              <Snowflake className={cn("h-5 w-5", isScrolled ? "text-white" : "text-white")} />
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                "text-[17px] font-bold tracking-[0.08em] uppercase transition-colors",
                isScrolled ? "text-[#0D2B45]" : "text-white",
              )}>
                ARCOPAN
              </span>
              <span className={cn(
                "text-[9px] font-mono tracking-[0.25em] uppercase transition-colors",
                isScrolled ? "text-[#64748B]" : "text-white/50",
              )}>
                COOLING PARTNER
              </span>
            </div>
          </Link>

          {/* Desktop Nav — Rule 06: Steel for nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>

              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-[13px] font-medium transition-colors bg-transparent hover:bg-transparent",
                      isScrolled
                        ? "text-[#1E3A5F] hover:text-[#0E7490]"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-[13px] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                    isScrolled
                      ? "text-[#1E3A5F] hover:text-[#0E7490]"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] p-2">
                    {companyItems.map((item) => (
                      <NavItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products – 4-column mega menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-[13px] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                    isScrolled
                      ? "text-[#1E3A5F] hover:text-[#0E7490]"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[860px] p-5">
                    <div className="grid grid-cols-4 gap-5">
                      {productCategories.map((cat) => (
                        <div key={cat.title}>
                          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-[#E2E8F0]">
                            <cat.icon className="h-3.5 w-3.5 text-[#0E7490]" />
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E3A5F]">
                              {cat.title}
                            </span>
                          </div>
                          <ul className="space-y-1.5">
                            {cat.items.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="block text-[13px] text-[#64748B] hover:text-[#0E7490] transition-colors py-0.5"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                      <Link
                        href="/products"
                        className="text-[13px] text-[#0E7490] font-medium hover:underline flex items-center gap-1"
                      >
                        View all products <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {/* Rule 06 – Amber: persistent Quote CTA */}
                      <Link
                        href="/get-a-quote"
                        className="btn-quote flex items-center gap-1.5 text-[13px]"
                      >
                        Request Engineering Consultation
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-[13px] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                    isScrolled
                      ? "text-[#1E3A5F] hover:text-[#0E7490]"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[480px] p-5">
                    <div className="grid grid-cols-2 gap-5">
                      {solutionsItems.map((section) => (
                        <div key={section.category}>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1E3A5F] mb-2.5 pb-2 border-b border-[#E2E8F0]">
                            {section.category}
                          </p>
                          <ul className="space-y-1.5">
                            {section.items.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="block text-[13px] text-[#64748B] hover:text-[#0E7490] transition-colors py-0.5"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-[13px] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                    isScrolled
                      ? "text-[#1E3A5F] hover:text-[#0E7490]"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[380px] p-2 grid grid-cols-2">
                    {industriesItems.map((item) => (
                      <NavItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Projects */}
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-[13px] font-medium bg-transparent hover:bg-transparent",
                      isScrolled
                        ? "text-[#1E3A5F] hover:text-[#0E7490]"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Right: Amber Quote CTA (Rule 06 – persistent) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-a-quote"
              className="btn-quote flex items-center gap-1.5"
            >
              Get a Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-[#0D2B45]" : "text-white"}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[360px] overflow-y-auto bg-white">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-[#0D2B45]">
                  <div className="w-7 h-7 rounded bg-[#0E7490] flex items-center justify-center">
                    <Snowflake className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[15px] font-bold tracking-wide">ARCOPAN</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-5">
                <Link href="/" className="block text-[15px] font-medium text-[#0D2B45]" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>

                <MobileSection title="Company" items={companyItems} onClose={() => setMobileMenuOpen(false)} />

                <div className="space-y-2">
                  <p className="text-[15px] font-medium text-[#0D2B45]">Products</p>
                  {productCategories.map((cat) => (
                    <div key={cat.title} className="pl-3 space-y-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1E3A5F]">{cat.title}</p>
                      {cat.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block text-[13px] text-[#64748B] hover:text-[#0E7490] pl-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-[15px] font-medium text-[#0D2B45]">Solutions</p>
                  {solutionsItems.map((sec) => (
                    <div key={sec.category} className="pl-3 space-y-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1E3A5F]">{sec.category}</p>
                      {sec.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block text-[13px] text-[#64748B] hover:text-[#0E7490] pl-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <MobileSection title="Industries" items={industriesItems} onClose={() => setMobileMenuOpen(false)} />

                <Link href="/projects" className="block text-[15px] font-medium text-[#0D2B45]" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </Link>

                <div className="pt-5 border-t border-[#E2E8F0] space-y-3">
                  {/* Amber CTA – Rule 06 */}
                  <Link
                    href="/get-a-quote"
                    className="btn-quote flex items-center justify-center gap-2 w-full py-2.5 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Engineering Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="space-y-2 text-[13px] text-[#64748B]">
                    <a href="tel:+902123456789" className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5" /> +90 212 345 67 89
                    </a>
                    <a href="mailto:info@arcopan.com" className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5" /> info@arcopan.com
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

/* ── Sub-components ──────────────────────────────────────── */
const NavItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ title, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href || "#"}
        className="block select-none rounded px-3 py-2 text-[13px] text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0E7490] transition-colors leading-none no-underline outline-none"
        {...props}
      >
        {title}
      </Link>
    </NavigationMenuLink>
  </li>
))
NavItem.displayName = "NavItem"

function MobileSection({
  title,
  items,
  onClose,
}: {
  title: string
  items: { title: string; href: string }[]
  onClose: () => void
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="space-y-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-[15px] font-medium text-[#0D2B45]"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform text-[#64748B]", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pl-3 space-y-1.5">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block text-[13px] text-[#64748B] hover:text-[#0E7490]"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
