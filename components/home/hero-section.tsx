"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Award, Leaf } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDQwNjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium">
              <Shield className="h-4 w-4" />
              EU EPC Certified Company
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Engineering Excellence in{" "}
                <span className="text-primary">Cold Storage</span>{" "}
                Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                ARCOPAN delivers turnkey cold storage systems, insulated panels, and refrigeration 
                solutions for food, pharmaceutical, and logistics industries across Europe.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Watch Our Story
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">CE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl transform rotate-3">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTUwIDUwbDI1LTI1djUwTDUwIDUwek01MCA1MEwyNSAyNXY1MGwyNS0yNXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 rounded-3xl" />
              </div>
              <div className="absolute inset-4 bg-card rounded-2xl shadow-xl overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* Stats Grid */}
                  <div className="flex-1 grid grid-cols-2 gap-4 p-6">
                    <StatCard value="500+" label="Projects Completed" />
                    <StatCard value="30+" label="Years Experience" />
                    <StatCard value="25+" label="Countries Served" />
                    <StatCard value="99%" label="Client Satisfaction" />
                  </div>
                  {/* Bottom Image Area */}
                  <div className="h-32 bg-gradient-to-t from-primary/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">Trusted by Industry Leaders</p>
                      <p className="text-xs text-muted-foreground mt-1">Serving Europe&apos;s top brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-card rounded-xl shadow-lg p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Eco-Efficient</p>
                  <p className="text-xs text-muted-foreground">40% Energy Savings</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-8 bg-card rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Full Warranty</p>
                  <p className="text-xs text-muted-foreground">10 Year Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
      <span className="text-2xl font-bold text-primary">{value}</span>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  )
}
