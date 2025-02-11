import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Portfolio = () => {
<<<<<<< HEAD
  const projects = [
    {
      title: "HAU School Department Accreditation Status",
      category: ["graphic-design"],
      image: "/Leo_Portfolio/src/assets/hauAccreditationStatus.jpeg",
      tech: ["Canva"],
    },
    {
      title: "Creo Sid Logo Design",
      category: ["logo-design", "graphic-design"],
      image: "../assets/creoSidLogo.jpg",
      tech: ["Canva"],
    },
    {
      title: "Hotel Booking App",
      category: ["web-development"],
      image: "/Leo_Portfolio/src/assets/hotelBookingApp.png",
      tech: ["ReactJS", "EthersJS", "Hardhat"],
    },
    {
      title: "Simple Projex",
      category: ["web-design", "web-development"],
      image: "/Leo_Portfolio/src/assets/simpleProjex.png",
      tech: ["React", "NextJS", "Canva", "TailwindCSS"],
    },
    {
      title: "Coffee Shop Website",
      category: ["web-design"],
      image: "/Leo_Portfolio/src/assets/coffeeShopWebsite.png",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Simple Projex Logo",
      category: ["logo-design", "graphic-design"],
      image: "/Leo_Portfolio/src/assets/simpleProjexLogo.png",
      tech: ["Canva"],
    },
  ];
=======
    const projects = [
        {
          title: "HAU School Department Accreditation Status",
          category: ["graphic-design"],
          image: "/assets/hauAccreditationStatus.jpeg", // Updated path
          tech: ["Canva"],
        },
        {
          title: "Creo Sid Logo Design",
          category: ["logo-design", "graphic-design"],
          image: "/assets/creoSidLogo.JPG", // Updated path
          tech: ["Canva"],
        },
        {
          title: "Hotel Booking App",
          category: ["web-development"],
          image: "/assets/hotelBookingApp.png",
          tech: ["ReactJS", "EthersJS", "Hardhat"],
        },
        {
          title: "Simple Projex",
          category: ["web-design", "web-development"],
          image: "/assets/simpleProjex.png",
          tech: ["React", "NextJS", "Canva", "TailwindCSS"],
        },
        {
          title: "Coffee Shop Website",
          category: ["web-design"],
          image: "/assets/coffeeShopWebsite.png",
          tech: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Simple Projex Logo",
          category: ["logo-design", "graphic-design"],
          image: "/assets/simpleProjexLogo.png",
          tech: ["Canva"],
        },
      ];
      
>>>>>>> 8d2a3f2 (Save local changes before pulling)

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (filter) => {
    setActiveFilter(filter);
    setFilteredProjects(
      filter === "all"
        ? projects
        : projects.filter((project) => project.category.includes(filter))
    );
  };

  return (
    <section id="portfolio" className="bg-[#1a1a1a] text-[#ededed] min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl font-spaceGrotesk text-center md:text-left text-[#ededed] mb-8 font-bold tracking-tight">
            port
            <span className="bg-gradient-to-r from-[#c1440e] to-orange-400 text-transparent bg-clip-text drop-shadow-lg font-extrabold">
              f
            </span>
            olio
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            {[
              { name: "All", filter: "all" },
              { name: "Graphic Design", filter: "graphic-design" },
              { name: "Logo Design", filter: "logo-design" },
              { name: "Web Design", filter: "web-design" },
              { name: "Web Development", filter: "web-development" },
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

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-white/10 bg-[#0b3d25]/40 hover:-translate-y-1 transition shadow-lg shadow-[#c1440e]/30"
              >
                <img
                  Leo_Portfolio={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg mb-4 transition-transform hover:scale-105"
                />
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{project.category.join(", ")}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#c1440e]/10 text-[#c1440e] py-1 px-3 rounded-full text-sm hover:bg-[#c1440e]/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* See More */}
          <div className="text-center mt-8">
            <a href="https://drive.google.com/drive/folders/1GIXnHk9HuN6WSb-1Vw69SykBGuYO-dx3?usp=sharing" className="text-[#c1440e] hover:text-orange-300 text-lg underline transition">
              See More
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};