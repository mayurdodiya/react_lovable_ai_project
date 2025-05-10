
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Building, Hammer, Wrench, Construction, Shovel } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Residential Construction",
    description: "Custom home building with attention to detail, quality materials, and expert craftsmanship for your dream home.",
    icon: HardHat,
  },
  {
    id: 2,
    title: "Commercial Construction",
    description: "End-to-end commercial building solutions from office spaces to retail centers with focus on functionality and aesthetics.",
    icon: Building,
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    description: "Transform existing structures with our renovation expertise to breathe new life into your property.",
    icon: Hammer,
  },
  {
    id: 4,
    title: "Infrastructure Development",
    description: "Roads, bridges, and utility systems built to the highest standards of safety and durability.",
    icon: Construction,
  },
  {
    id: 5,
    title: "Project Management",
    description: "Comprehensive oversight of your construction project, ensuring timely completion within budget.",
    icon: Wrench,
  },
  {
    id: 6,
    title: "Design & Planning",
    description: "Architectural design and strategic planning services to turn your vision into a feasible construction plan.",
    icon: Shovel,
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-construction-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-construction-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive construction services tailored to meet your specific needs,
            whether residential, commercial, or industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="service-card hover-scale">
              <CardContent className="p-6">
                <div className="mb-6 text-construction-500">
                  <service.icon size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
