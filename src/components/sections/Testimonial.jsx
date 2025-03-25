import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Elaine Santos",
    title: "Event Organizer",
    email: "elaine.santos@example.com",
    message:
      "He turned our vision into an engaging website! The layout, color palette, and animations felt custom-made.",
  },
  {
    name: "Mark Dela Cruz",
    title: "Startup Founder",
    email: "mark.delacruz@startuphub.com",
    message:
      "Working with Leo was an amazing experience. He understood our brand and made everything come to life digitally!",
  },
  {
    name: "Janine Velasco",
    title: "Marketing Officer",
    email: "janine.velasco@hau.edu.ph",
    message:
      "From layout to design, everything was polished. Leo exceeded expectations and delivered on time.",
  },
  {
    name: "Janine Velasco",
    title: "Marketing Officer",
    email: "janine.velasco@hau.edu.ph",
    message:
      "From layout to design, everything was polished. Leo exceeded expectations and delivered on time.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#1a1a1a] text-[#ededed] py-20 px-6 md:px-16 lg:px-32"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What others say about me
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(193,68,14,0.3)] transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <p className="text-sm italic mb-4">&quot;{testimonial.message}&quot;</p>
            <div className="border-t border-[#444] pt-4">
              <h4 className="text-lg font-semibold text-[#c1440e]">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
              <a
                href={`mailto:${testimonial.email}`}
                className="text-sm text-[#ededed] underline hover:text-[#c1440e] transition"
              >
                {testimonial.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
