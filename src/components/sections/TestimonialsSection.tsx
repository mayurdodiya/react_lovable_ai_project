
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Smith Enterprises",
    content: "BuildMaster transformed our office space beyond our expectations. Their attention to detail and commitment to quality is unmatched. The project was completed ahead of schedule and within budget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Homeowner",
    content: "We hired BuildMaster for our home renovation and were incredibly impressed with their professionalism and craftmanship. They turned our outdated house into a modern dream home.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Williams",
    position: "Project Manager, CityDev",
    content: "Working with BuildMaster on our commercial project was a seamless experience. Their team was responsive, skilled, and solution-oriented throughout the entire process.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Director, Brown Real Estate",
    content: "BuildMaster has been our go-to construction partner for years. They consistently deliver high-quality results and make even the most complex projects seem effortless.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Lee",
    position: "School Principal",
    content: "The school renovation by BuildMaster exceeded our expectations. They worked around our schedule to minimize disruption and created beautiful, functional spaces for our students.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />);
    }
    return stars;
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-construction-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-construction-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read what our satisfied clients have to say about their experience working with BuildMaster Construction.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-navy-500">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-construction-400 text-white hover:bg-construction-500 hover:text-white" />
            <CarouselNext className="relative inset-0 translate-y-0 bg-construction-400 text-white hover:bg-construction-500 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
