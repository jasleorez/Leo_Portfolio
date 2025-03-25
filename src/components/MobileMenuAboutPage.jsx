import { useEffect } from "react";

export const MobileMenuAboutPage = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(26,26,26,0.95)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#ededed] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["Home", "Me", "Certifications", "Works", "Skills", "Gallery", "Testimonials", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#ededed] my-4 transform transition-transform duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-[#c1440e]`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
