const certificates = [
  {
    title: "Google Analytics for Beginners",
    link: "https://skillshop.credential.net/253b31df-2e71-4a4e-a5a5-98b758ecae5d#acc.F2p7bc3A",
  },
  {
    title: "Advanced Google Analytics",
    link: "https://skillshop.credential.net/0fc36fdc-b194-4408-b886-3170ad231e51#acc.FYZmt6WQ",
  },
  {
    title: "Google Analytics 4 (GA4) Fundamentals",
    link: "https://skillshop.credential.net/86f5c7e7-f761-4d3f-be87-1c8232789e18#acc.GymVSi2E",
  },
  {
    title: "GA4 Implementation",
    link: "https://skillshop.credential.net/f70ee103-9947-4d61-8e98-26431ea5edd4#acc.6ET2z5js",
  },
  {
    title: "GA4 for Power Users",
    link: "https://skillshop.credential.net/7d02fef8-a501-470c-baaa-24772a0baad3#acc.IRCykB7F",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-[#1a1a1a] text-[#ededed]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-transparent bg-clip-text">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[#c1440e] hover:bg-[#0b3d25] transition-colors duration-300 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-[#c1440e] hover:text-[#ededed] underline">View Certificate →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
