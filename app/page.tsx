import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ChevronRight,
  Leaf,
  DollarSign,
  BarChart2,
  Users,
  MapPin,
  Car,
  BatteryCharging,
  FileText,
  Settings,
  Shield,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">VivaDrive</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Solutions
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Benefits
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                How It Works
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>Contact Us</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
          <div className="container grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="px-3 py-1 text-sm" variant="outline">
                Fleet Management
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Deploy and Manage <span className="text-primary">Electric Vehicles</span> in your Fleet
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Drive your fleet's electrification seamlessly, reduce costs & CO₂ emissions, and optimize your
                operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Explore Now
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Fleet management dashboard showing electric vehicle statistics"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              </div>
              <div className="absolute -z-10 top-1/2 right-1/2 w-[200%] aspect-square -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent"></div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="container mt-16 md:mt-24">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center gap-8 grayscale opacity-70">
              {["MIT", "export", "mapbox", "WBCSD", "TÜV"].map((logo, i) => (
                <div key={i} className="flex items-center justify-center">
                  <span className="text-xl font-bold">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Fleet Electrification in 4 Steps</h2>
              <p className="text-muted-foreground text-lg">
                Our comprehensive approach ensures a smooth transition to electric vehicles with minimal disruption to
                your operations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Fleet Analysis",
                  description: "We analyze your current fleet usage patterns and requirements.",
                  icon: BarChart2,
                },
                {
                  step: 2,
                  title: "Charging Infrastructure",
                  description: "Plan and implement the optimal charging solution for your needs.",
                  icon: BatteryCharging,
                },
                {
                  step: 3,
                  title: "Deployment Plan",
                  description: "Create a phased approach to introduce EVs into your fleet.",
                  icon: FileText,
                },
                {
                  step: 4,
                  title: "EV Management",
                  description: "Ongoing support and optimization of your electric fleet.",
                  icon: Settings,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="relative overflow-hidden group border-muted/50 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <CardContent className="p-6 pt-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-medium text-sm">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/10">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-lg">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to go electric?</h3>
                <p className="text-muted-foreground">
                  Get started with a free consultation to assess your fleet's electrification potential.
                </p>
              </div>
              <Button size="lg" className="whitespace-nowrap">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">VivaDrive Solutions</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive tools to manage your electric vehicle fleet efficiently.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Fleet Electrification */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Fleet Electrification</h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
                  <div className="space-y-8">
                    {[
                      { title: "EV Selection", description: "Find the right vehicles for your needs", icon: Car },
                      { title: "TCO Analysis", description: "Calculate total cost of ownership", icon: DollarSign },
                      {
                        title: "Infrastructure Planning",
                        description: "Design optimal charging setup",
                        icon: BatteryCharging,
                      },
                      {
                        title: "Permissions and Compliance",
                        description: "Navigate regulatory requirements",
                        icon: Shield,
                      },
                    ].map((item, i) => (
                      <div key={i} className="relative pl-12">
                        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fleet Management */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Fleet Management</h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Comprehensive Dashboard",
                        description: "Monitor all fleet metrics in real-time",
                        icon: BarChart2,
                      },
                      { title: "Driver Management", description: "Track and optimize driver behavior", icon: Users },
                      {
                        title: "Route Optimization",
                        description: "Plan efficient routes with charging stops",
                        icon: MapPin,
                      },
                      {
                        title: "EV Health & Charging",
                        description: "Monitor vehicle health and charging status",
                        icon: BatteryCharging,
                      },
                    ].map((item, i) => (
                      <div key={i} className="relative pl-12">
                        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Benefits of Fleet Electrification</h2>
              <p className="text-muted-foreground text-lg">
                Discover how transitioning to electric vehicles can transform your business.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Comply with Regulations",
                  description: "Meet environmental regulations and avoid penalties",
                  icon: Shield,
                },
                {
                  title: "Save Fleet Costs",
                  description: "Reduce operational and maintenance expenses",
                  icon: DollarSign,
                },
                {
                  title: "Reduce CO2 Emissions",
                  description: "Lower your carbon footprint and environmental impact",
                  icon: Leaf,
                },
                {
                  title: "Enhance Corporate Image",
                  description: "Strengthen your brand as environmentally responsible",
                  icon: Users,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-background border-muted/50 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Steps Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Start Electrifying Your Fleet Today
              </h2>
              <p className="text-muted-foreground text-lg">
                Our proven 4-step process ensures a smooth transition to electric vehicles.
              </p>
            </div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Fleet Analysis</h3>
                  <p className="text-muted-foreground mb-6">
                    We conduct a comprehensive analysis of your current fleet operations, including vehicle usage
                    patterns, mileage, routes, and energy requirements. This data-driven approach allows us to identify
                    the optimal vehicles for electrification and create a tailored transition plan.
                  </p>
                  <ul className="space-y-2">
                    {["Vehicle usage analysis", "Route pattern identification", "Energy requirement calculation"].map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=500&width=700"
                      width={700}
                      height={500}
                      alt="Fleet analysis dashboard showing vehicle usage patterns"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=500&width=700"
                      width={700}
                      height={500}
                      alt="Map showing charging infrastructure planning"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Charging Infrastructure</h3>
                  <p className="text-muted-foreground mb-6">
                    We design and implement the optimal charging infrastructure for your fleet, considering your
                    operational needs, facility constraints, and budget. Our solution includes hardware selection,
                    installation planning, and integration with your energy management systems.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Site assessment and planning",
                      "Charger selection and installation",
                      "Energy management integration",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Deployment Plan</h3>
                  <p className="text-muted-foreground mb-6">
                    We create a phased deployment plan that minimizes disruption to your operations while maximizing the
                    benefits of electrification. This includes vehicle procurement, driver training, and operational
                    adjustments to accommodate the unique characteristics of electric vehicles.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Phased vehicle replacement strategy",
                      "Driver training and education",
                      "Operational process adaptation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=500&width=700"
                      width={700}
                      height={500}
                      alt="Electric vehicle deployment plan illustration"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=500&width=700"
                      width={700}
                      height={500}
                      alt="EV management dashboard on laptop"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4">
                    Step 4
                  </div>
                  <h3 className="text-2xl font-bold mb-4">EV Management</h3>
                  <p className="text-muted-foreground mb-6">
                    Our comprehensive management platform provides real-time visibility into your electric fleet's
                    performance, charging status, and energy consumption. This enables ongoing optimization of routes,
                    charging schedules, and vehicle utilization to maximize efficiency and ROI.
                  </p>
                  <ul className="space-y-2">
                    {["Real-time fleet monitoring", "Charging optimization", "Performance analytics and reporting"].map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to go electric?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join the growing number of businesses transforming their fleets with VivaDrive. Our experts are ready to
                guide you through every step of the electrification journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-primary">VivaDrive</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Empowering businesses to transition to sustainable electric vehicle fleets with comprehensive management
                solutions.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Fleet Electrification
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Fleet Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Charging Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sustainability Reporting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} VivaDrive. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

