import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, BatteryCharging, FileText, Settings } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
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
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-white dark:bg-gray-950"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Fleet Electrification in 4 Steps
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Our comprehensive approach ensures a smooth transition to
            electric vehicles with minimal disruption to your operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <Card
              key={i}
              className="relative overflow-hidden group border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  {item.step}
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

export default ProcessSection;