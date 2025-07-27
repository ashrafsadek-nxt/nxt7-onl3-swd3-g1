"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote: "بفضل الله ثم بفضل جهود مركز توبة، تمكنت من حفظ خمسة أجزاء من القرآن الكريم خلال عام واحد فقط. المشايخ هنا يتميزون بالحكمة والصبر في التعليم.",
    name: "أحمد محمد",
    role: "حافظ للقرآن الكريم",
    image: "/testi_3_1.png"
  },
  {
    id: 2,
    quote: "دورات التجويد في المركز غيرت طريقة تلاوتي للقرآن تماماً. الآن أستطيع التلاوة بالطريقة الصحيحة بفضل الله ثم بفضل تعليم المشايخ الأكفاء.",
    name: " علي",
    role: "طالب علوم إسلامية",
    image: "/testi_3_2.png"
  },
  {
    id: 3,
    quote: "شاركت في رحلة عمرة نظمها المركز وكانت من أفضل التجارب في حياتي. التنظيم كان ممتازاً والبرنامج الروحاني كان غنياً ومفيداً.",
    name: "خالد عبد الله",
    role: "عضو بالمركز منذ 5 سنوات",
    image: "/testi_3_3.png"
  },
  {
    id: 4,
    quote: "دورة الخط العربي ساعدتني في إتقان كتابة الآيات القرآنية بخط النسخ. المعلمون لديهم خبرة كبيرة ومتابعة دقيقة لكل طالب.",
    name: "أم عبد الله",
    role: "معلمة خط عربي",
    image: "/testi_3_4.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div
      style={{ backgroundImage: "url(/testi_bg_shape.png)" }}
      className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 bg-[#F1F3F5] relative"
    >
      <header className="flex flex-col justify-center gap-3 md:gap-5 items-center mb-24">
        <div className="flex gap-2 items-center text-center">
          <Image
            src={"sub-title2.svg"}
            alt="أيقونة"
            width={18}
            height={18}
            priority
          />
          <span className="text-md text-deep-steel text-center">
            آراء العملاء
          </span>
        </div>
        <h1 className="text-title text-3xl md:text-5xl font-bold text-center">
          قصص إسلامية
        </h1>
      </header>

      {/* Custom Image Pagination - Top */}
      <div className="custom-image-pagination flex justify-center gap-4 mt-16 ">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => {
              setActiveIndex(index);
              swiperInstance?.slideTo(index);
            }}
            className={`relative w-17 h-17  md:w-20 md:h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${index === activeIndex ? 'border-lemon scale-110' : 'border-transparent'}`}
            aria-label={`Go to ${testimonial.name}'s review`}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="100px"
            />
          </button>
        ))}
      </div>

      {/* Testimonial Slider */}
      <div className="testimonial-slider relative max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testi-slide flex flex-col items-center text-center space-y-8 px-4 p-8 rounded-xl ">
                <div className="quote-icon text-lemon text-4xl opacity-80">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p className="text-title text-lg md:text-xl font-medium leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-lemon mx-auto mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-title text-2xl font-semibold">
                    {testimonial.name}
                  </h2>
                  <p className="text-sm text-body-color mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;