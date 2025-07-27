"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    bg: "/hero_bg_1_1.jpg",
    image: "/hero-image-1.jpg",
  },
  {
    bg: "/hero_bg_1_2.jpg",
    image: "/hero-image-2.jpg",
  },
  {
    bg: "/hero_bg_1_3.jpg",
    image: "/hero-image-3.jpg",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation variants
  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-center bg-cover  "
            style={{ backgroundImage: `url("${slide.bg}")` }}
          >
            <div className="bg-gradient-to-t from-black/80 to-black/80">
              <div className=" px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between min-h-screen text-white">
                {/* Text Content - Slides from left */}
                <div className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 w-full lg:w-8/12 py-20 lg:py-34 lg:ml-10 xl:ml-20">
                  <motion.div
                    key={`title-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-[280px] mx-auto lg:mx-0"
                  >
                    <Image
                      src={"/sub-title.svg"}
                      width={280}
                      height={280}
                      layout="responsive"
                      alt={`Hero subtitle ${index + 1}`}
                    />
                  </motion.div>

                  <motion.h2
                    key={`heading-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl sm:text-3xl md:text-4xl leading-relaxed text-center lg:text-right"
                  >
                    وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ
                    وَالْمُؤْمِنُونَ وَسَتُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ
                    وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ
                  </motion.h2>

                  <motion.p
                    key={`paragraph-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base md:text-lg text-center lg:text-right"
                  >
                    inventore similique! Autem temporibus dolore voluptate
                    dolores velit quaerat labore, delectus recusandae sint eaque
                    asperiores dolorum optio nihil. Cum, fugit sapiente?
                  </motion.p>

                  <motion.div
                    key={`buttons-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromRight}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 justify-center lg:justify-start"
                  >
                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-lemon  text-title rounded shadow flex items-center justify-center">
                      <FontAwesomeIcon className="pl-2" icon={faPlay} />
                      القران الكريم كاملا
                    </button>
                    <button className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded shadow flex items-center justify-center">
                      خدمتنا
                      <FontAwesomeIcon
                        className="pr-2 sm:pr-4"
                        icon={faArrowLeft}
                      />
                    </button>
                  </motion.div>
                </div>

                {/* Image - Slides from bottom */}
                <div className="w-full lg:w-5/12 flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
                  <motion.div
                    key={`image-${activeIndex}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideFromBottom}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                  >
                    <Image
                      src={slide.image}
                      width={500}
                      height={500}
                      layout="responsive"
                      objectFit="contain"
                      alt={`Hero image ${index + 1}`}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
