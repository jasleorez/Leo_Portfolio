import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function Me() {
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

                txt = isDeleting
                    ? fullTxt.substring(0, txt.length - 1)
                    : fullTxt.substring(0, txt.length + 1);
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
        <section
            id="me"
            className="bg-[#1a1a1a] text-[#ededed] py-20 px-6 md:px-16 lg:px-32 relative"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                {/* Profile Image with background shape */}
                <div className="relative hidden lg:flex justify-center items-center">
  {/* Decorative SVG shape (background accent) */}
  <svg
    className="absolute -top-16 -left-16 w-96 h-96 text-[#c1440e]/20 blur-3xl z-0"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M42.3,-71.4C56.2,-63.2,70.4,-56.2,73.1,-44.6C75.9,-33,67.3,-16.5,63.4,-1.1C59.4,14.4,60.2,28.9,53.7,40.2C47.2,51.6,33.4,59.9,19.6,65.4C5.8,70.8,-8.1,73.4,-22.3,69.5C-36.5,65.6,-51,55.2,-58.4,41.9C-65.9,28.6,-66.3,12.3,-66.7,-4.6C-67.1,-21.5,-67.5,-38.9,-58.4,-49.8C-49.3,-60.6,-30.7,-64.9,-13.3,-70.7C4.1,-76.6,20.5,-84,42.3,-71.4Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* Stylish Image Frame */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative z-10 w-[25rem] h-[35rem] rotate-6 rounded-2xl overflow-hidden shadow-2xl border-1 border-[#c1440e] bg-[#ededed] flex items-center justify-center"
  >
    {/* Replace with your actual image */}
    <img
      src="https://github.com/jasleorez/Leo_Portfolio/blob/main/assets/Leo.jpeg?raw=true"
      alt="Jasper Leonard Gutierrez"
      className="w-full h-full object-cover rotate-[-6]"
    />
  </motion.div>

  {/* Decorative SVG blob in corner */}
  <svg
    className="absolute bottom-[-4rem] right-[-3rem] w-48 h-48 text-[#0b3d25]/30 blur-2xl z-0"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M40.5,-68.3C54.7,-59.5,69.5,-53.7,74.4,-42.2C79.3,-30.7,74.4,-13.4,68.6,-0.3C62.8,12.9,56,25.7,47.1,36.8C38.2,47.8,27.2,57.1,13.6,64.8C0,72.6,-15.9,78.8,-30.3,74.6C-44.7,70.3,-57.6,55.6,-64.3,40C-71,24.4,-71.4,8,-70.4,-9.2C-69.4,-26.4,-67,-44.3,-56.9,-56.3C-46.8,-68.3,-29.1,-74.4,-11.4,-71.9C6.3,-69.4,12.5,-58.2,40.5,-68.3Z"
      transform="translate(100 100)"
    />
  </svg>
</div>




                {/* Text Content */}
                <div className="space-y-6 lg:-ml-28">
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-transparent bg-clip-text w-fit">
                        I am...
                    </h2>
                    <p className="leading-relaxed text-lg">
                        Hello! I’m{" "}
                        <span className="font-bold text-[#c1440e]">
                            Jasper Leonard Gutierrez
                        </span>
                        , though many know me as <span className="italic">Leo</span>. I’m a
                        self-taught graphic designer and aspiring front-end developer with a
                        deep interest in modern web design, branding, and immersive user
                        experiences. Currently, I’m pursuing a Bachelor of Science in
                        Information Technology at{" "}
                        <span className="font-semibold">Holy Angel University</span>, where
                        I specialize in Web Development.
                    </p>
                    <p className="leading-relaxed text-lg">
                        I’ve built a foundation through diverse hands-on roles—from
                        designing for university departments to collaborating on software
                        development projects for startups. My approach combines creativity
                        with structure, ensuring that my designs are not just visually
                        engaging but also purposeful and user-centered.
                    </p>
                    <p className="leading-relaxed text-lg">
                        <strong className="text-[#c1440e]">
                            I'm currently open to part-time or full-time junior opportunities
                            in:
                        </strong>
                    </p>
                    <ul className="list-disc list-inside pl-4 text-lg">
                        <li>Graphic Design</li>
                        <li>Web Design & Development</li>
                        <li>UX/UI Design</li>
                        <li>Brand Identity Design</li>
                    </ul>
                    <p className="leading-relaxed text-lg">
                        <strong className="text-[#c1440e]">Learning Goals:</strong> I’m
                        committed to growing my technical and creative skills. I’m currently
                        exploring the T3 Stack (TypeScript, Tailwind, tRPC), motion design,
                        3D web visuals, and deepening my fluency in tools like Adobe
                        Photoshop and Illustrator.
                    </p>
                </div>
            </motion.div>

            {/* Work Experience Section */}
            <div className="mt-20 space-y-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-transparent bg-clip-text w-fit">
                    💼 Work Experience
                </h3>
                <div className="space-y-6">
                    {[
                        {
                            title: "Front-end Developer Intern",
                            date: "January 2024",
                            desc: "Collaborated with a US-based startup to build and design a professional-grade landing page. Worked on UI/UX wireframes and implemented responsive components using modern front-end tools.",
                        },
                        {
                            title: "Graphic Designer – Marketing Office (HAU)",
                            date: "April - June 2024",
                            desc: "Worked as a Student Assistant, designing social media content for university campaigns and documenting events through photography and visual storytelling that aligned with the school’s brand.",
                        },
                        {
                            title: "Logo Designer – Startup Event Team",
                            date: "2024",
                            desc: "Developed a clean, concept-driven logo that reflected the brand identity of a local startup event team, focusing on symbolism and memorable design that reflects their story.",
                        },
                        {
                            title: "Lab Assistant – Computer Engineering Lab (HAU)",
                            date: "2023 – 2024",
                            desc: "Assisted in managing laboratory equipment, ensuring readiness and support for student activities. Gained technical familiarity with lab maintenance and provided basic tech troubleshooting assistance.",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="border-l-4 border-[#c1440e] pl-6 py-4 bg-[#1f1f1f] rounded-md shadow"
                        >
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <p className="text-sm italic text-[#c1440e]">{item.date}</p>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
  <a
    href="#contact"
    className="border border-[#c1440e] hover:bg-[#c1440e] hover:text-white text-[#c1440e] font-semibold py-2 px-6 rounded shadow transition duration-300"
  >
    Hire Me
  </a>
</div>

            </div>
        </section>
    );
}
