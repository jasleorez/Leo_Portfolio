import React from "react";

const services = [
  {
    title: "Graphic Design",
    description:
      "Enhance your brand's visual impact with professional designs. From logos to packaging, we create compelling visuals that resonate with your audience.",
    icon: "https://img.icons8.com/?size=100&id=u7sIEccWIwzD&format=png&color=C1440E",
  },
  {
    title: "Web Design",
    description:
      "Create stunning, user-friendly websites tailored to your business needs, ensuring seamless experiences and strong brand presence.",
    icon: "https://img.icons8.com/?size=100&id=SrjIVYjR3wCA&format=png&color=c1440e",
  },
  {
    title: "UX/UI Design",
    description:
      "Craft intuitive and visually engaging interfaces. We focus on usability and aesthetics to enhance user experience and satisfaction.",
    icon: "https://img.icons8.com/?size=100&id=33423&format=png&color=C1440E",
  },
  {
    title: "Web Development",
    description:
      "Build responsive, secure, and scalable websites that drive growth and engagement with cutting-edge technologies.",
    icon: "https://img.icons8.com/?size=100&id=7692&format=png&color=C1440E",
  },
  {
    title: "Logo Design",
    description:
      "Make your brand unforgettable with a distinctive logo that captures your identity and leaves a lasting impression.",
    icon: "https://img.icons8.com/?size=100&id=25987&format=png&color=c1440e",
  },
  {
    title: "Video Editing",
    description:
      "Create captivating and engaging video content that captures your audience and leaves a lasting impression.",
    icon: "https://img.icons8.com/?size=100&id=15110&format=png&color=c1440e",
  },
];

export function Works() {
  return (
    <section
      id="works"
      className="bg-[#1a1a1a] text-[#ededed] py-20 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-transparent bg-clip-text mb-12 text-center">
          I can Execute...
        </h2>

        {/* First 3 cards in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice().map((service, index) => (
            <FlipCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ service }) {
  return (
    <div className="group perspective w-full sm:w-72">
      <div className="relative h-72 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute w-full h-full bg-[#2b2b2b] rounded-xl flex flex-col items-center justify-center backface-hidden border border-[#333] shadow-md">
          <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold text-[#c1440e]">{service.title}</h3>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-[#0b3d25] rounded-xl p-6 transform rotate-y-180 backface-hidden border border-[#444] shadow-lg flex items-center justify-center">
          <p className="text-lg text-[#ededed] leading-relaxed text-center">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
