'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    image: '/images/john.jpg',
    feedback:
      'This service was exceptional! The team went above and beyond to meet our needs.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, BrandX',
    image: '/images/jane.jpg',
    feedback:
      'Incredible experience! The quality of work exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Founder, Startup Inc.',
    image: '/images/alice.jpg',
    feedback: 'Professional, efficient, and highly skilled. Highly recommend!',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          What Our Clients Say
        </h2>
      </div>

      <Carousel className="max-w-2xl mx-auto">
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="flex justify-center">
              <motion.div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-md text-center relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* <FaQuoteLeft className="text-4xl text-gray-300 absolute top-4 left-4" /> */}
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
        />
        <CarouselNext
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          }
        />
      </Carousel>
    </section>
  );
}
