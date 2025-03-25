// src/components/sections/SkillsAbout.jsx

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const skills = [
    {
        name: "Figma",
        level: "80%",
        icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
        name: "Canva",
        level: "95%",
        icon: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000",
    },
    {
        name: "HTML",
        level: "90%",
        icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=C1440E",
    },
    {
        name: "CSS",
        level: "80%",
        icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=C1440E",
    },
    {
        name: "JavaScript",
        level: "60%",
        icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=C1440E",
    },
    {
        name: "React",
        level: "85%",
        icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=C1440E",
    },
    {
        name: "Next.js",
        level: "50%",
        icon: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=C1440E",
    },
    {
        name: "Angular",
        level: "70%",
        icon: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
    },
    {
        name: "WordPress",
        level: "75%",
        icon: "https://img.icons8.com/?size=100&id=13664&format=png&color=000000",
    },
];

export const SkillsAbout = () => {
    const swiperRef = useRef(null);

    return (
        <section id="skillsabout" className="bg-[#1a1a1a] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c1440e] to-[#0b3d25]">
                    I have Accumulated...
                </h2>
                <p className="mt-2 text-lg text-[#ededed]">
                    I have a diverse skill set in programming and design, allowing me to create both functional and visually compelling projects.
                </p>
            </div>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet custom-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
                }}
                modules={[Pagination, Autoplay]}
                className="w-full px-4 pb-12"
            >
                {skills.map((skill, index) => {
                    const percentage = parseInt(skill.level); // Move this inside the map!
                    return (
                        <SwiperSlide key={index}>
                            <div className="relative bg-[#0b3d25] rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-transform hover:scale-105 duration-300 shadow-lg">
                                <div className="absolute inset-0 bg-green-500 opacity-10 blur-sm z-0 rounded-2xl"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center">
    <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4 mx-auto" />
                                    <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                                    <p className="text-lg font-bold  text-[#1a1a1a] bg-clip-text">
                                        {skill.level}
                                    </p>
                                    <div className="w-[180px] h-2 bg-[#ededed] rounded-full overflow-hidden mx-auto mt-2">
                                        <div
                                            className="h-full bg-[#c1440e] rounded-full transition-all duration-500"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
                }

            </Swiper>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-6 mt-10">
                <button
                    onClick={() => swiperRef.current.slidePrev()}
                    className="bg-gradient-to-r from-[#0b3d25] to-[#c1440e] text-[#1a1a1a] p-3 rounded-full shadow-lg hover:scale-110 transition"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => swiperRef.current.slideNext()}
                    className="bg-gradient-to-r from-[#c1440e] to-[#0b3d25] text-[#1a1a1a] p-3 rounded-full shadow-lg hover:scale-110 transition"
                >
                    <FaArrowRight />
                </button>
            </div>

            {/* Custom Swiper bullet styling */}
            <style>{`
          .swiper-pagination {
            bottom: -25px !important;
          }
          .custom-bullet {
            background: #ededed;
            opacity: 0.5;
            width: 12px;
            height: 12px;
            margin: 0 6px !important;
            border-radius: 9999px;
            transition: background 0.3s, transform 0.3s;
          }
          .custom-bullet-active {
            background: #c1440e;
            transform: scale(1.3);
            opacity: 1;
          }
        }
        .swiper-pagination {
          bottom: -20px !important;
        }
        `}</style>
        </section>
    );
};
