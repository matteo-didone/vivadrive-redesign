import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: "Fleet Analysis",
      description: "Discover your fleet's potential for electrification through our AI-driven data analysis.",
      image: "/process-section/car-service.png",
    },
    {
      step: 2,
      title: "Charging Infrastructure",
      description: "Find the ideal charging locations and specifications customized for your fleet's requirements.",
      image: "/process-section/charging-infrastructure.png",
    },
    {
      step: 3,
      title: "Deployment Plan",
      description: "Get a personalized plan and cost analysis for EV implementation.",
      image: "/process-section/deployment-plan.png",
    },
    {
      step: 4,
      title: "EV Fleet Management",
      description: "Manage and optimize your electric and hybrid fleet with our advanced system.",
      image: "/process-section/ev-fleet-management.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-white dark:bg-gray-950"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-3 py-1.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
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

        {/* Added connecting lines between steps for desktop */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {processSteps.map((item, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Step number with improved visibility */}
              <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full bg-primary/15 text-primary font-medium group-hover:bg-primary group-hover:text-white transition-all">
                {item.step}
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-6 w-full flex justify-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={110}
                      height={110}
                      className="w-auto h-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                  <span className="text-primary mr-2">{item.step}.</span> {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;