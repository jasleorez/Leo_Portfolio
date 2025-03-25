import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileMenuAboutPage = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(26,26,26,0.95)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                  px-6 py-8`}  {/* Increased padding */}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#ededed] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["Home", "Me", "Certifications", "Works", "Skills", "Gallery", "Testimonials", "Contact"].map((item) => (
        <div key={item}>
          {item === "Home" ? (
            // For Home, use react-router Link for page navigation
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#ededed] my-8 transform transition-transform duration-300
                          hover:text-[#c1440e] menu-item"  {/* Added custom class */}
            >
              {item}
            </Link>
          ) : (
            // For other items, use anchor links with section IDs
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#ededed] my-8 transform transition-transform duration-300
                          opacity-100 translate-y-0 hover:text-[#c1440e] menu-item"  {/* Added custom class */}
            >
              {item}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
