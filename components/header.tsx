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
import { Menu, Phone, Mail, Snowflake, Building2, Warehouse, Package, ChevronDown } from "lucide-react"

const productCategories = [
  {
    title: "Cold Storage & Insulation",
    items: [
      { title: "Insulated Cold Storage Panels", href: "/products/insulated-cold-storage-panels", description: "High-performance panels for cold rooms" },
      { title: "Insulated Wall & Roof Panels", href: "/products/insulated-wall-roof-panels", description: "Thermal insulation solutions" },
      { title: "Insulated Cold Room Doors", href: "/products/insulated-cold-room-doors", description: "Energy-efficient door systems" },
      { title: "Modular Cold Rooms", href: "/products/modular-cold-rooms", description: "Pre-fabricated cold room solutions" },
    ],
    icon: Snowflake,
  },
  {
    title: "Cooling & Refrigeration",
    items: [
      { title: "Industrial Cooling Systems", href: "/products/industrial-cooling-systems", description: "Complete cooling solutions" },
      { title: "Condensing Units", href: "/products/condensing-units", description: "High-efficiency condensers" },
      { title: "Evaporators", href: "/products/evaporators", description: "Industrial evaporator units" },
    ],
    icon: Building2,
  },
  {
    title: "Warehouse & Racking",
    items: [
      { title: "Warehouse Racking Systems", href: "/products/warehouse-racking-systems", description: "Heavy-duty storage solutions" },
      { title: "Market Racking Systems", href: "/products/market-racking-systems", description: "Retail display systems" },
      { title: "Industrial Door Systems", href: "/products/industrial-door-systems", description: "High-speed industrial doors" },
      { title: "Dock Leveller & Ramp Systems", href: "/products/dock-leveller-ramp-systems", description: "Loading dock equipment" },
    ],
    icon: Warehouse,
  },
  {
    title: "Components",
    items: [
      { title: "Profiles & Fixings", href: "/products/profiles-fixings", description: "Structural components" },
      { title: "PVC Strip Curtains", href: "/products/pvc-strip-curtains", description: "Temperature barrier solutions" },
      { title: "Safety Accessories", href: "/products/safety-accessories", description: "Industrial safety equipment" },
    ],
    icon: Package,
  },
]

const solutionsItems = [
  {
    category: "Cold Storage Systems",
    items: [
      { title: "Chilled Storage (0/+4°C)", href: "/solutions/chilled-storage" },
      { title: "Frozen Storage (-18/-25°C)", href: "/solutions/frozen-storage" },
      { title: "Shock/Blast Freezing", href: "/solutions/blast-freezing" },
      { title: "Food Logistics Cold Stores", href: "/solutions/food-logistics" },
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
  { title: "Food & Beverage", href: "/industries/food-beverage" },
  { title: "Meat & Poultry", href: "/industries/meat-poultry" },
  { title: "Dairy", href: "/industries/dairy" },
  { title: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
  { title: "Logistics & Cold Chain", href: "/industries/logistics" },
  { title: "Retail & Supermarkets", href: "/industries/retail" },
]

const companyItems = [
  { title: "About Arcopan", href: "/company/about" },
  { title: "Our Engineering Team", href: "/company/team" },
  { title: "Quality & Certifications", href: "/company/quality" },
  { title: "Sustainability", href: "/company/sustainability" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" 
        : "bg-transparent"
    )}>
      {/* Top Bar */}
      <div className={cn(
        "hidden lg:block border-b transition-colors",
        isScrolled ? "border-border bg-muted/50" : "border-white/10 bg-primary/5"
      )}>
        <div className="container mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+902123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+90 212 345 67 89</span>
            </a>
            <a href="mailto:info@arcopan.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@arcopan.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">EU EPC Certified</span>
            <div className="h-4 w-px bg-border" />
            <span className="text-muted-foreground">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Snowflake className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground">ARCOPAN</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Cold Storage Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {companyItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {productCategories.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <div className="flex items-center gap-2 pb-2 border-b border-border">
                            <category.icon className="h-4 w-4 text-primary" />
                            <h3 className="font-semibold text-sm text-foreground">{category.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.title}>
                                <Link 
                                  href={item.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <Link href="/products" className="text-sm text-primary hover:underline">
                        View All Products →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {solutionsItems.map((section) => (
                        <div key={section.category} className="space-y-3">
                          <h3 className="font-semibold text-sm text-foreground border-b border-border pb-2">
                            {section.category}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.title}>
                                <Link 
                                  href={item.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
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

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    {industriesItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="default" size="default" asChild>
              <Link href="/get-a-quote">Get a Quote &rarr;</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Snowflake className="h-5 w-5 text-primary" />
                  ARCOPAN
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6">
                <Link 
                  href="/" 
                  className="block text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <MobileMenuSection title="Company" items={companyItems} onClose={() => setMobileMenuOpen(false)} />
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Products</h3>
                  {productCategories.map((category) => (
                    <div key={category.title} className="pl-4 space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">{category.title}</h4>
                      {category.items.map((item) => (
                        <Link 
                          key={item.title}
                          href={item.href}
                          className="block text-sm text-muted-foreground hover:text-primary pl-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Solutions</h3>
                  {solutionsItems.map((section) => (
                    <div key={section.category} className="pl-4 space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">{section.category}</h4>
                      {section.items.map((item) => (
                        <Link 
                          key={item.title}
                          href={item.href}
                          className="block text-sm text-muted-foreground hover:text-primary pl-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <MobileMenuSection title="Industries" items={industriesItems} onClose={() => setMobileMenuOpen(false)} />

                <Link 
                  href="/projects" 
                  className="block text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>

                <div className="pt-6 border-t border-border space-y-4">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/get-a-quote" onClick={() => setMobileMenuOpen(false)}>Get a Quote &rarr;</Link>
                  </Button>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <a href="tel:+902123456789" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +90 212 345 67 89
                    </a>
                    <a href="mailto:info@arcopan.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      info@arcopan.com
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function MobileMenuSection({ 
  title, 
  items, 
  onClose 
}: { 
  title: string
  items: { title: string; href: string }[]
  onClose: () => void 
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="space-y-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-medium"
      >
        {title}
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2">
          {items.map((item) => (
            <Link 
              key={item.title}
              href={item.href}
              className="block text-sm text-muted-foreground hover:text-primary"
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
