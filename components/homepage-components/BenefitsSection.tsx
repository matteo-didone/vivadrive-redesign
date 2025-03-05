import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Leaf, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Comply with Regulations",
      description: "Meet environmental regulations and avoid penalties",
      icon: Shield,
      gradient: "from-green-400 to-primary",
    },
    {
      title: "Save Fleet Costs",
      description: "Reduce operational and maintenance expenses",
      icon: function ZlotyIcon() {
        return (
          <div className="flex items-center justify-center h-7 w-7 text-center">
            <span className="font-bold text-lg">zł</span>
          </div>
        );
      },
      gradient: "from-blue-400 to-primary",
    },
    {
      title: "Reduce CO2 Emissions",
      description: "Lower your carbon footprint and environmental impact",
      icon: Leaf,
      gradient: "from-green-500 to-green-400",
    },
    {
      title: "Enhance Corporate Image",
      description: "Strengthen your brand as environmentally responsible",
      icon: Users,
      gradient: "from-blue-500 to-blue-400",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Benefits of Fleet Electrification
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover how transitioning to electric vehicles can transform
            your business.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <Card
              key={i}
              className="bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${item.gradient}`}></div>
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;