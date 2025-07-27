"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  faCalendar,
  faUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "أهمية تجويد القرآن الكريم في العبادة",
      description:
        "كيف يمكن لإتقان التجويد أن يغير من علاقتك مع كتاب الله تعالى وأثره على الصلاة والتدبر",
      image: "/blog_1_1.jpg",
      date: "15 رمضان 1445",
      author: "الشيخ محمود جمال",
      readTime: "5 دقائق",
    },
    {
      id: 2,
      title: "الوسطية في الإسلام: مفهومها وتطبيقاتها",
      description:
        "بحث مفصل عن منهج الوسطية في الإسلام وكيفية تطبيقه في حياتنا المعاصرة",
      image: "/blog_1_2.jpg",
      date: "20 شوال 1445",
      author: "الداعية أحمد السيد",
      readTime: "8 دقائق",
    },
    {
      id: 3,
      title: "فقه الصيام المعاصر: أسئلة وأجوبة",
      description:
        "أهم المسائل الفقهية المتعلقة بالصيام في العصر الحديث وإجابات العلماء عليها",
      image: "/blog_1_3.jpg",
      date: "1 ذو القعدة 1445",
      author: "د. فاطمة محمد",
      readTime: "6 دقائق",
    },
    {
      id: 4,
      title: "السيرة النبوية: دروس وعبر للشباب",
      description:
        "كيف يمكن للشباب المسلم الاستفادة من سيرة النبي صلى الله عليه وسلم في حياتهم",
      image: "/blog_1_2.jpg",
      date: "10 ذو الحجة 1445",
      author: "أ. خالد عبد الرحمن",
      readTime: "7 دقائق",
    },
  ];

  return (
    <div className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-20">
      <header className="flex flex-col justify-center gap-3 md:gap-5 items-center mb-16">
        <div className="flex gap-2 items-center text-center">
          <Image
            src={"sub-title2.svg"}
            alt="أيقونة المدونة"
            width={18}
            height={18}
            priority
          />
          <span className="text-md text-deep-steel text-center">
            المدونة والأخبار
          </span>
        </div>
        <h1 className="text-title text-3xl md:text-5xl font-bold text-center">
          أحدث المقالات والنصائح
        </h1>
      </header>

      <div className="blog-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="card rounded-xl overflow-hidden  transition-shadow duration-300 h-full flex flex-col">
                <div className="image-container   rounded-xl overflow-hidden relative w-full h-60 md:h-72">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="  rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
                </div>

                <h2 className="text-title text-xl font-bold mt-4 mb-3 group-hover:text-deep-steel line-clamp-2">
                  {article.title}
                </h2>
                <div className="flex items-center gap-1 text-sm text-gray-500 ">
                  <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                  <span className="ml-6">{article.date}</span>
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="card-content py-4 flex-grow bg-white group-hover:bg-lemon-light transition-colors duration-300">
                  <p className="text-body-color text-sm md:text-base mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <button className="bg-lemon px-4 py-4 rounded-lg hover:text-lemon-dark font-medium flex items-center gap-2 transition-colors">
                      اقرأ المزيد
                      <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
                    </button>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;
