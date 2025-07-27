"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";
interface DonationCard {
  id: number;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  likes: number;
}

const donationCardsData: DonationCard[] = [
  {
    id: 1,
    title: "بناء مسجد جديد",
    description: "ساهم في بناء مسجد يستوعب 500 مصلٍ في منطقة محرومة",
    image: "/donation_1_1.jpg",
    raised: 45000,
    goal: 100000,
    likes: 12400,
  },
  {
    id: 2,
    title: "إفطار صائم",
    description: "توفير وجبات إفطار شهر رمضان لعائلات محتاجة",
    image: "/donation_1_2.jpg",
    raised: 25000,
    goal: 50000,
    likes: 8700,
  },
  {
    id: 3,
    title: "كفالة يتيم",
    description: "ساهم في كفالة أيتام وتوفير التعليم والرعاية لهم",
    image: "/donation_1_3.jpg",
    raised: 60000,
    goal: 100000,
    likes: 15600,
  },
  {
    id: 4,
    title: "حفر بئر ماء",
    description: "حفر آبار مياه شرب في مناطق تعاني من شح المياه",
    image: "/donation_1_4.jpg",
    raised: 35000,
    goal: 75000,
    likes: 9800,
  },
  {
    id: 5,
    title: "مشروع إغاثة",
    description: "توفير مساعدات عاجلة للمتضررين من الكوارث الطبيعية",
    image: "/donation_1_5.jpg",
    raised: 80000,
    goal: 120000,
    likes: 18200,
  },
  {
    id: 6,
    title: "مكتبة قرآنية",
    description: "إنشاء مكتبة لتعليم القرآن وتحفيظه للأطفال",
    image: "/donation_1_6.jpg",
    raised: 20000,
    goal: 50000,
    likes: 6500,
  },
  {
    id: 7,
    title: "علاج مرضى",
    description: "مساعدة المرضى غير القادرين على تحمل تكاليف العلاج",
    image: "/donation_1_7.jpg",
    raised: 70000,
    goal: 150000,
    likes: 14300,
  },
  {
    id: 8,
    title: "مشروع زواج",
    description: "مساعدة الشباب غير القادرين على تكاليف الزواج",
    image: "/donation_1_8.jpg",
    raised: 30000,
    goal: 80000,
    likes: 7600,
  },
  {
    id: 9,
    title: "تعليم ديني",
    description: "دعم مدارس تحفيظ القرآن وتعليم العلوم الشرعية",
    image: "/donation_1_9.jpg",
    raised: 55000,
    goal: 90000,
    likes: 11200,
  },
];

const SupportSection: React.FC = () => {
  const [values, setValues] = useState<Record<number, string>>(() =>
    donationCardsData.reduce((acc, card) => {
      acc[card.id] = "600";
      return acc;
    }, {} as Record<number, string>)
  );
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleValueChange = (id: number, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-20">
      <header className="flex flex-col justify-center gap-3 md:gap-5 items-center">
        <div className="flex gap-2 items-center text-center">
          <Image
            src={"sub-title2.svg"}
            alt="أيقونة"
            width={18}
            height={18}
            priority
          />
          <span className="text-md text-deep-steel text-center">ادعم مشاريعنا</span>
        </div>
        <h1 className="text-title text-3xl md:text-5xl font-bold text-center">
          ساهم في أعمال الخير
        </h1>
      </header>

      <div className="slider   ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="pb-12 "
        >
          {donationCardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card rounded-xl bg-slate-100 space-y-5 relative h-full mx-2 ">
                <div className="image-container h-64 md:h-72 relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover rounded-t-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={card.id <= 3} // Only prioritize first 3 images
                  />
                </div>
                <div className="card-content p-4 md:p-6">
                  <div className="card-text space-y-3 mb-6">
                    <h2 className="text-title text-xl md:text-2xl font-semibold">
                      {card.title}
                    </h2>
                    <p className="text-body-color text-base md:text-lg h-14">
                      {card.description}
                    </p>
                  </div>
                  <div className="donation-box bg-white rounded-lg p-4 space-y-6 flex flex-col">
                    <div className="flex flex-col">
                      <span className="mx-auto text-lg font-medium">
                        ${values[card.id]}
                      </span>
                      <input
                        className="w-full h-2 bg-lemon rounded-lg appearance-none cursor-pointer accent-lemon
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-6 
                         [&::-webkit-slider-thumb]:h-6 
                         [&::-webkit-slider-thumb]:bg-lemon
                         [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:border-2 
                         [&::-webkit-slider-thumb]:border-white 
                         [&::-webkit-slider-thumb]:shadow-md"
                        type="range"
                        min="0"
                        max="1000"
                        step="5"
                        value={values[card.id]}
                        onChange={(e) =>
                          handleValueChange(card.id, e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-row justify-between text-sm md:text-base">
                      <span>وصلنا: {card.raised.toLocaleString()}$</span>
                      <span>الهدف: {card.goal.toLocaleString()}$</span>
                    </div>
                    <div className="flex flex-row items-end justify-between">
                      <button className="rounded-lg text-title bg-lemon py-3 px-6 md:py-4 md:px-8 hover:bg-lemon-dark transition-colors">
                        تبرع الآن
                      </button>
                      <button className="text-slate-700 rounded-lg border border-slate-300 px-3 py-1 md:px-4 md:py-2 hover:bg-slate-50 transition-colors">
                        <span dir="ltr" className="text-sm md:text-base">
                          {card.likes.toLocaleString()}
                        </span>
                        <FontAwesomeIcon
                          className="px-2 text-red-500"
                          icon={faHeart}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center my-10 gap-4">
          <button
            className="custom-prev bg-lemon text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-lemon-dark transition-all hover:scale-105 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </button>
          <div className="text-gray-600 text-sm md:text-base">
            <span className="font-medium">{activeIndex + 1}</span>
            <span> / </span>
            <span>{donationCardsData.length}</span>
          </div>
          <button
            className="custom-next bg-lemon text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-lemon-dark transition-all hover:scale-105 disabled:opacity-50"
            aria-label="Next slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
