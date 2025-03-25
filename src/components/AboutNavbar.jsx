import { useEffect } from "react";
import { MobileMenuAboutPage } from "./MobileMenuAboutPage"; // Import the new mobile menu component

const AboutNavbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[#ededed]/40 backdrop-blur-md border-b border-[#c1440e] shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
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
              <a href="https://leoportfolio-tau.vercel.app/" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Home
              </a>
              <a href="#me" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Me
              </a>
              <a href="#certifications" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Certifications
              </a>
              <a href="#works" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Works
              </a>
              <a href="#skillsabout" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Skills
              </a>
              <a href="#gallery" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Gallery
              </a>
              <a href="#testimonials" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-[#1a1a1a] hover:text-[#c1440e] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AboutNavbar;
