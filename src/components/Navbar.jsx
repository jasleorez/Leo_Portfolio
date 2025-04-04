import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#ededed]/40 backdrop-blur-md border-b border-[#c1440e] shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2">
            <img
              src="https://raw.githubusercontent.com/jasleorez/Leo_Portfolio/0614cb8fc5baedc28fb650ec3321326cfba44fea/assets/LEO.svg"
              alt="Logo"
              className="h-10 w-10"
            />
            <span className="font-mono text-xl font-bold text-[#1a1a1a]">
              <span className="text-[#c1440e]">Leo</span>
            </span>
          </a>

          <div
            className="w-7 text-[#1a1a1a] h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              Home
            </a>
            <a href="#about" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              About
            </a>
            <a href="#skills" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              Skills
            </a>
            <a href="#services" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              Testimonial
            </a>
            <a href="#contact" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
