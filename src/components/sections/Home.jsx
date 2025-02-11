import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".typewrite");
    elements.forEach((el) => {
      let toRotate = JSON.parse(el.getAttribute("data-type"));
      let period = parseInt(el.getAttribute("data-period"), 10) || 2000;
      let loopNum = 0;
      let txt = "";
      let isDeleting = false;
      
      function tick() {
        let i = loopNum % toRotate.length;
        let fullTxt = toRotate[i];
        
        txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
        el.innerHTML = `<span class="fst-italic">${txt}</span>`;
        
        let delta = isDeleting ? 100 : 150;
        
        if (!isDeleting && txt === fullTxt) {
          delta = period;
          isDeleting = true;
        } else if (isDeleting && txt === "") {
          isDeleting = false;
          loopNum++;
          delta = 300;
        }
        
        setTimeout(tick, delta);
      }
      
      tick();
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#1a1a1a]">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h3 className="mb-3 md:text-3xl font-bold text-[#ededed]">
            Hi, I'm Leo
          </h3>
          <h1 className="font-serif pb-4 mt-0 text-xl md:text-6xl mb-6 bg-gradient-to-r from-[#c1440e] to-[#0b3d25] bg-clip-text text-transparent leading-right">
            an enthusiastic <span className="typewrite" data-period="2000" data-type='["Graphic Designer", "Web Developer", "Web Designer", "UI/UX Designer"]'>
              <span className="cursor">Graphic Design</span>
            </span>
            <span className="cursor"></span>
          </h1>
          <p className="text-[#ededed] text-lg mb-8 max-w-lg mx-auto">
            I'm eager to learn and push the boundaries of creative design!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#portfolio" className="bg-[#c1440e] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(193,68,14,0.4)]">
              View Portfolio
            </a>
            <a href="#contact" className="border border-[#c1440e]/50 text-[#c1440e] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(193,68,14,0.2)] hover:bg-[#c1440e]/10">
              Work with me?
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
