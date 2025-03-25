import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "HAU School Department Accreditation Status",
    category: ["graphic-design"],
    image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/hauAccreditationStatus.jpeg?raw=true",
    tech: ["Canva"],
    description: "An informative visual representing the accreditation status of various HAU departments. Designed for clarity and school branding.",
  },
  {
    title: "Creo Sid Logo Design",
    category: ["logo-design", "graphic-design"],
    image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/creoSidLogo.JPG?raw=true",
    tech: ["Canva"],
    description: "Logo design crafted for a startup team named Creo Sid, reflecting creativity and a modern edge.",
  },
  {
    title: "Hotel Booking App",
    category: ["web-development"],
    image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/hotelBookingApp.png?raw=true",
    tech: ["ReactJS", "EthersJS", "Hardhat"],
    description: "A decentralized hotel booking web application utilizing blockchain technologies and smart contracts.",
  },
  {
    title: "Simple Projex",
    category: ["web-design", "web-development"],
    image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/simpleProjex.png?raw=true",
    tech: ["React", "NextJS", "Canva", "TailwindCSS"],
    description: "A portfolio project showcasing minimalist UI and responsive layouts with modern tech stacks.",
  },
  {
    title: "Coffee Shop Website",
    category: ["web-design"],
    image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/coffeeShopWebsite.png?raw=true",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Static website design for a fictional coffee shop with inviting aesthetics and smooth navigation.",
  },
  {
    title: "Simple Projex Logo",
    category: ["logo-design", "graphic-design"],
    image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/simpleProjexLogo.png?raw=true",
    tech: ["Canva"],
    description: "A bold and clean logo identity created for the Simple Projex branding initiative.",
  },
  {
    title: "My Sister went to TAIWAN!! (Day1)",
    category: ["video-editing"],
    video: "https://www.youtube.com/embed/sDn249_qNtk",
    tech: ["Capcut"],
    description: "A short video editing project about my sister's trip to Taiwan, using Capcut software.",
  },
  {
    title: "My Sister went to TAIWAN!! (Day2)",
    category: ["video-editing"],
    video: "https://www.youtube.com/embed/OJhA8r4SDnk",
    tech: ["Capcut"],
    description: "A short video editing project about my sister's trip to Taiwan, using Capcut software.",
  },
];

export function GallerySection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProjects = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section
      id="gallery"
      className="bg-[#1a1a1a] text-[#ededed] py-20 px-6 md:px-16 lg:px-32"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I have worked on...
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
        {[
          { name: "All", filter: "all" },
          { name: "Graphic Design", filter: "graphic-design" },
          { name: "Logo Design", filter: "logo-design" },
          { name: "Web Design", filter: "web-design" },
          { name: "Web Development", filter: "web-development" },
          { name: "Video Editing", filter: "video-editing" },
        ].map(({ name, filter }) => (
          <button
            key={filter}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition h-10 min-w-[120px] text-center
              ${
                activeFilter === filter
                  ? "bg-[#c1440e] text-white border-[#c1440e] shadow-md"
                  : "text-white border border-[#c1440e]/30 hover:bg-[#c1440e]/20"
              }`}
            onClick={() => filterProjects(filter)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-[#2a2a2a] rounded-xl overflow-hidden cursor-pointer shadow-lg"
            onClick={() => setSelectedProject(project)}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            )}
            {project.video && (
              <div className="w-full aspect-video">
                <iframe
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold text-center px-4">
                {project.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#1f1f1f] text-white p-6 rounded-xl max-w-xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-4 text-white text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold text-[#c1440e] mb-2">
                {selectedProject.title}
              </h3>

              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-md mb-4"
                />
              )}

              {selectedProject.video && (
                <div className="w-full aspect-video mb-4">
                  <iframe
                    src={selectedProject.video}
                    title={selectedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}

              <p className="mb-2">{selectedProject.description}</p>
              <p className="text-sm text-gray-400">
                <strong>Tech Used:</strong> {selectedProject.tech.join(", ")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
