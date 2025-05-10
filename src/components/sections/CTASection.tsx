
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-navy-500 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-construction-400">Construction Project</span>?
            </h2>
            <p className="text-gray-300 text-lg">
              Contact us today for a free consultation and estimate. Let's build something great together.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-construction-400 hover:bg-construction-500 text-white px-8 py-6 text-lg">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
