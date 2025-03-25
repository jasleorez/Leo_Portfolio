import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Success!", response);
        alert("Message Sent!");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
  id="contact"
  className="flex items-center justify-center py-20 px-4 bg-[#1a1a1a] text-[#ededed] min-h-[calc(100vh-80px)]"
>
      <RevealOnScroll>
        <div className="w-full max-w-4xl p-10 md:p-14 lg:p-16 bg-[#1a1a1a] rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#c1440e] to-[#c1440e]/80 bg-clip-text text-transparent">
            Let's work together!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                value={formData.from_name}
                className="w-full bg-[#1a1a1a] border border-[#c1440e]/50 rounded px-6 py-4 text-lg text-[#ededed] placeholder-gray-400 transition focus:outline-none focus:border-[#c1440e] focus:bg-[#1a1a1a]/80"
                placeholder="Your Name..."
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                value={formData.from_email}
                className="w-full bg-[#1a1a1a] border border-[#c1440e]/50 rounded px-6 py-4 text-lg text-[#ededed] placeholder-gray-400 transition focus:outline-none focus:border-[#c1440e] focus:bg-[#1a1a1a]/80"
                placeholder="Your Email..."
                onChange={(e) =>
                  setFormData({ ...formData, from_email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                className="w-full bg-[#1a1a1a] border border-[#c1440e]/50 rounded px-6 py-4 text-lg text-[#ededed] placeholder-gray-400 transition focus:outline-none focus:border-[#c1440e] focus:bg-[#1a1a1a]/80"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c1440e] text-[#ededed] py-4 px-6 rounded-lg text-lg font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(193,68,14,0.6)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
