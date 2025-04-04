import { RevealOnScroll } from "../RevealOnScroll";

const skills = [
  { name: "Figma", proficiency: "80%", icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
  { name: "Canva", proficiency: "95%", icon: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" },
  { name: "Capcut", proficiency: "85%", icon: "https://images.seeklogo.com/logo-png/43/2/capcut-logo-png_seeklogo-437025.png" },
  { name: "HTML", proficiency: "90%", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
  { name: "CSS", proficiency: "80%", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
  { name: "JavaScript", proficiency: "60%", icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" },
  { name: "React", proficiency: "85%", icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
  { name: "Next.js", proficiency: "50%", icon: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" },
  { name: "WordPress", proficiency: "75%", icon: "https://img.icons8.com/?size=100&id=13664&format=png&color=000000" },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-[#1a1a1a] text-[#ededed] min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl w-full px-6 md:px-12 mx-auto text-center">
          <h1 className="text-5xl font-spaceGrotesk text-center text-[#ededed] mb-8 font-bold tracking-tight">
            ski<span className="text-[#c1440e] font-bold">l</span>ls
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            I have a diverse skill set in programming and design, allowing me to create both functional and visually compelling projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-[#0b3d25] rounded-xl shadow-lg hover:scale-105 transition transform shadow-[#c1440e]/30"
              >
                <div className="flex flex-col items-center">
                  <img src={skill.icon} alt={`${skill.name} Icon`} className="w-16 h-16 mb-4" />
                  <p className="text-xl font-semibold">{skill.name}</p>
                </div>
                <div className="mt-4 w-full">
                  <div className="h-2 bg-gray-700 rounded-full w-full">
                    <div className="h-2 bg-[#c1440e] rounded-full transition-all duration-500 ease-in-out" style={{ width: skill.proficiency }}></div>
                  </div>
                  <p className="text-right text-sm text-gray-300 mt-1">{skill.proficiency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
