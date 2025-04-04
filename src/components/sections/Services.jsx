import { RevealOnScroll } from "../RevealOnScroll";

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
    title: "video Editing",
    description:
      "Create captivating and engaging video content that captures your audience and leaves a lasting impression.",
    icon: "https://img.icons8.com/?size=100&id=15110&format=png&color=c1440e",
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-[#1a1a1a] text-[#ededed] py-20">
      <RevealOnScroll>
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl font-spaceGrotesk text-center text-[#ededed] mb-8 font-bold tracking-tight">
            Se<span className="text-[#c1440e] font-bold">r</span>vices
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-[#ededed]/55 rounded-xl shadow-lg hover:scale-105 transition transform shadow-[#c1440e]/30"
              >
                <div className="flex flex-col items-center text-center">
                  <img src={service.icon} alt={`${service.title} Icon`} className="w-20 mb-4" />
                  <h5 className="text-xl font-semibold text-[#c1440e] mb-2">{service.title}</h5>
                  <p className="text-[#1a1a1a] text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
