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

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "محمود جمال",
      title: "عالم في التفسير وعلوم القرآن",
      image: "/team_1_1.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "أحمد السيد",
      title: "داعية إسلامي ومتخصص في العقيدة",
      image: "/team_1_2.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "فاطمة محمد",
      title: "أستاذة في الفقه وأصوله",
      image: "/team_1_4.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "خالد عبد الرحمن",
      title: "خبير في الحديث النبوي وعلومه",
      image: "/team_1_3.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-20">
      <header className="flex flex-col justify-center gap-3 md:gap-5 items-center mb-16">
        <div className="flex gap-2 items-center text-center">
          <Image
            src={"sub-title2.svg"}
            alt="أيقونة"
            width={18}
            height={18}
            priority
          />
          <span className="text-md text-deep-steel text-center">
            أعضاء الفريق
          </span>
        </div>
        <h1 className="text-title text-3xl md:text-5xl font-bold text-center">
          علماء المركز الإسلامي
        </h1>
      </header>

      <div className="team-slider ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView:1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div
                className="card  rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="image-container relative w-full h-90">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="card-content p-6 py-10 text-center space-y-2 group hover:bg-lemon  bg-deep-steel bg-contain bg-[url('/team-shape.png')] hover:bg-[url('/team-shape-hover.png')] ">
                  <h2 className="text-white text-xl group-hover:text-title font-bold ">
                    {member.name}
                  </h2>
                  <p className="text-gray-300 group-hover:text-title text-sm ">{member.title}</p>

                  <div className="social-media text-white group-hover:text-title flex justify-center gap-4">
                    <a
                      href={member.social.facebook}
                      className="   hover:text-lemon transition-colors"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="sm"
                        className="rounded-full border border-white/75 p-2.5  aspect-square"
                      />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="   hover:text-lemon transition-colors"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="sm"
                        className="rounded-full border border-white/75 p-2.5  aspect-square"
                      />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="  hover:text-lemon transition-colors"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="sm"
                        className="rounded-full border border-white/75 p-2.5  aspect-square"
                      />
                    </a>
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

export default TeamSection;
