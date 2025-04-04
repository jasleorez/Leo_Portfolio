import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate('/about#certifications', { state: { scrollToCerts: true } });
  };

  const projects = [
    {
      title: "HAU School Department Accreditation Status",
      category: ["graphic-design"],
      image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/hauAccreditationStatus.jpeg?raw=true",
      tech: ["Canva"],
    },
    {
      title: "Creo Sid Logo Design",
      category: ["logo-design", "graphic-design"],
      image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/creoSidLogo.JPG?raw=true",
      tech: ["Canva"],
    },
    {
      title: "Hotel Booking App",
      category: ["web-development"],
      image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/hotelBookingApp.png?raw=true",
      tech: ["ReactJS", "EthersJS", "Hardhat"],
    },
    {
      title: "Simple Projex",
      category: ["web-design", "web-development"],
      image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/simpleProjex.png?raw=true",
      tech: ["React", "NextJS", "Canva", "TailwindCSS"],
    },

    {
      title: "Coffee Shop Website",
      category: ["web-design"],
      image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/coffeeShopWebsite.png?raw=true",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Simple Projex Logo",
      category: ["logo-design", "graphic-design"],
      image: "https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/simpleProjexLogo.png?raw=true",
      tech: ["Canva"],
    },
    {
      title: "GLADLY, I GOT TO KNOW YOU MORE BAGUIO",
      category: ["video-editing"],
      video: "https://www.youtube.com/embed/TrtBCvmGbzc",
      tech: ["Capcut"],
    },
    {
      title: "My Sister went to TAIWAN!! (Day1)",
      category: ["video-editing"],
      video: "https://www.youtube.com/embed/sDn249_qNtk",
      tech: ["Capcut"],
    },
    {
      title: "My Sister went to TAIWAN!! (Day2)",
      category: ["video-editing"],
      video: "https://www.youtube.com/embed/OJhA8r4SDnk",
      tech: ["Capcut"],
    },
    {
      title: "My Sister went to TAIWAN!! (Day3)",
      category: ["video-editing"],
      video: "https://www.youtube.com/embed/eHmz5_KRTy8",
      tech: ["Capcut"],
    },
  ];

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
              { name: "Video Editing", filter: "video-editing" },
            ].map(({ name, filter }) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition h-10 min-w-[120px] text-center
                  ${activeFilter === filter
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
                {/* Image or Video */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg mb-4 transition-transform hover:scale-105"
                  />
                ) : project.video ? (
                  <div className="relative w-full h-0 mb-4" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={project.video}
                      title={project.title}
                      className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}

                <h3 className="text-xl font-bold text-white flex items-center">
                  {project.title}
                  {project.video && (
                    <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">Video</span>
                  )}
                </h3>
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
            <button
              onClick={handleSeeMoreClick}
              className="text-[#c1440e] hover:text-orange-300 text-lg underline transition"
            >
              See More
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
