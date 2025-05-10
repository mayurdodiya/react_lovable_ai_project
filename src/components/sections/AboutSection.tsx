
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Expert Workers" },
    { number: "15+", label: "Awards Won" }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction team" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-construction-400 rounded-lg p-8 shadow-xl hidden md:block">
              <div className="text-center text-white">
                <p className="text-5xl font-bold">25+</p>
                <p className="uppercase font-medium">Years of Experience</p>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              We Are Leaders In The <br /><span className="text-construction-400">Construction Industry</span>
            </h2>
            <div className="w-24 h-1 bg-construction-400 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Since 2000, BuildMaster has been providing top-quality construction services 
              to clients across the country. Our team of skilled professionals is dedicated 
              to delivering exceptional results on every project, no matter the size or complexity.
            </p>
            <p className="text-gray-600 mb-8">
              We pride ourselves on our commitment to safety, quality, and innovation. 
              Our approach combines traditional craftsmanship with modern techniques and 
              technologies to ensure the best outcomes for our clients.
            </p>
            
            {/* Key Points */}
            <ul className="space-y-3 mb-8">
              {[
                "Professionally trained team of experts",
                "High-quality materials and equipment",
                "Safety-first approach on all projects",
                "Timely completion and transparent communication"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-construction-400 h-6 w-6 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg hover-scale border-t-4 border-construction-400">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-navy-500">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
