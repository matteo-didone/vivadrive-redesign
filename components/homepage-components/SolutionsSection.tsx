import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Car, BatteryCharging, Shield, BarChart2, Users, MapPin } from "lucide-react";

const SolutionsSection = () => {
  const fleetElectrificationItems = [
    {
      title: "EV Selection",
      description: "Find the right vehicles for your needs",
      icon: Car,
    },
    {
      title: "TCO Analysis",
      description: "Calculate total cost of ownership",
      icon: (props) => (
        <div
          className="flex items-center justify-center w-full h-full font-bold text-primary"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          {...props}
        >
          zł
        </div>
      ),
    },
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
  ];

  const fleetManagementItems = [
    {
      title: "Comprehensive Dashboard",
      description: "Monitor all fleet metrics in real-time",
      icon: BarChart2,
    },
    {
      title: "Driver Management",
      description: "Track and optimize driver behavior",
      icon: Users,
    },
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
  ];

  const renderSolutionItems = (items) => (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-primary/5 rounded-full"></div>
      <div className="space-y-10">
        {items.map((item, i) => (
          <div key={i} className="relative pl-16 group">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="solutions"
      className="py-20 md:py-28 bg-white dark:bg-gray-950"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Our Solutions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            VivaDrive Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Comprehensive tools to manage your electric vehicle fleet
            efficiently.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Fleet Electrification */}
          <div className="space-y-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Fleet Electrification
            </h3>
            {renderSolutionItems(fleetElectrificationItems)}
          </div>

          {/* Fleet Management */}
          <div className="space-y-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Fleet Management
            </h3>
            {renderSolutionItems(fleetManagementItems)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;