import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a]">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-spaceGrotesk text-center text-[#ededed] mb-8 font-bold tracking-tight">
            about<span className="text-[#c1440e] font-bold">m</span>e
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section - About Content */}
            <div>
              <p className="text-[#ededed] mb-4">
                Hi! I'm <b>Jasper Leonard Gutierrez</b>, also known as 
                <span className="text-[#c1440e] font-semibold"> Leo</span>. I'm a self-taught graphic designer and aspiring front-end developer with a passion for UX/UI design. 
                I’m currently pursuing a <b>B.S. in Information Technology</b> at Holy Angel University, specializing in Web Development.
              </p>
              <p className="text-[#ededed] mb-4">
                Though still a junior, I’m detail-oriented, hardworking, and always eager to learn. I thrive on creativity and problem-solving, whether designing interfaces or developing engaging web experiences.
              </p>
              <p className="text-[#ededed] mb-4">
                I'm open to part-time and full-time junior positions in:
              </p>
              <ul className="list-disc pl-5 text-[#ededed] mb-6">
                <li><strong>Graphic Design</strong></li>
                <li><strong>Web Design & Development</strong></li>
                <li><strong>UX/UI Design</strong></li>
                <li><strong>Brand Design</strong></li>
              </ul>

              <h3 className="text-2xl text-[#c1440e] font-semibold">My Learning Goals</h3>
              <p className="text-[#ededed] mt-2">
                I’m eager to expand my skills in T3 Stack, 3D rendering, motion design, Adobe Photoshop & Illustrator, and content strategy.
              </p>
            </div>

            {/* Right Section - Profile Picture */}
            <div className="text-center">
              <img src="./src/assets/Leo.jpeg" alt="Leo's Profile Picture" className="rounded-3 w-full max-w-xs mx-auto shadow-lg shadow-[#0b3d25]" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center mt-5 text-[#ededed]">💼 Work Experience</h3>
          </div>

          {/* Work Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-[#c1440e] hover:-translate-y-1 transition-all">
              <div className="space-y-4 text-[#ededed]">
                <div>
                  <h4 className="font-semibold text-[#c1440e]">Internship as Front-end Developer <br/>(January 2024)</h4>
                  <p>Contributed to the development of a landing page and designed the UI/UX for a construction contract management software for a U.S.-based startup.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#c1440e]">Graphic Designer - Marketing Office (HAU) <br/>(April-June 2024)</h4>
                  <p>Assisted as a Student Assistant in managing university social media posts and capturing photo documentation.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#c1440e] hover:-translate-y-1 transition-all">
              <div className="space-y-4 text-[#ededed]">
                <div>
                  <h4 className="font-semibold text-[#c1440e]">Logo Design - Startup Event Team <br/>(2024)</h4>
                  <p>Designed a logo for an event team, incorporating a professional aesthetic while thoughtfully integrating the team's story and identity into the design.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c1440e]">Lab Custodian - Computer Engineering Lab (HAU) <br/>(2023-2024)</h4>
                  <p>Supported the lab custodian as a Student Assistant of Computer Engineering laboratory. Responsibilities include equipment management and providing support for students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
