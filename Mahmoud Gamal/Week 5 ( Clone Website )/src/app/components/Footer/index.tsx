import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-deep-steel text-white pt-12 pb-6 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Column 1: Logo and About */}
        <div className="space-y-4">
          <div className="logo flex items-center gap-3">
            <Image
              src={"/logo-white.png"}
              alt="شعار مركز توبة"
              width={64}
              height={64}
              className="w-14 h-14"
            />
            <div>
              <p className="text-xl font-bold">مركز توبة الإسلامي</p>
              <p className="text-lemon text-sm">سر الحياة الكاملة</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            مركز توبة الإسلامي مؤسسة دعوية تعليمية تهدف إلى نشر العلم الشرعي وفق
            منهج أهل السنة والجماعة، نسعى لخدمة المجتمع من خلال برامج متكاملة
            تعنى بتعليم القرآن الكريم وعلومه والفقه والسنة.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <span className="text-gray-300 text-sm">تابعنا على:</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-white hover:text-lemon transition-colors"
              >
                <FontAwesomeIcon
                  className="rounded-full text-title bg-lemon  p-2.5  aspect-square "
                  icon={faFacebook}
                  size="lg"
                />
              </a>
              <a
                href="#"
                className="text-white hover:text-lemon transition-colors"
              >
                <FontAwesomeIcon
                  className="rounded-full text-title bg-lemon  p-2.5  aspect-square "
                  icon={faTwitter}
                  size="lg"
                />
              </a>
              <a
                href="#"
                className="text-white hover:text-lemon transition-colors"
              >
                <FontAwesomeIcon
                  className="rounded-full text-title bg-lemon  p-2.5  aspect-square "
                  icon={faLinkedin}
                  size="lg"
                />
              </a>
              <a
                href="#"
                className="text-white hover:text-lemon transition-colors"
              >
                <FontAwesomeIcon
                  className="rounded-full text-title bg-lemon  p-2.5  aspect-square "
                  icon={faWhatsapp}
                  size="lg"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b border-white/25 pb-2">
            الخدمات
          </h2>
          <div className="space-y-3">
            {[
              "تحفيظ القرآن الكريم",
              "دورات التجويد المتقن",
              "الدروس العلمية",
              "الاستشارات الشرعية",
              "رحلات الحج والعمرة",
            ].map((service, index) => (
              <div
                key={index}
                className="flex gap-2 items-center hover:text-lemon transition-colors"
              >
                <Image
                  src={"sub-title2-lemon.svg"}
                  alt="أيقونة"
                  width={14}
                  height={14}
                />
                <span className="text-sm cursor-pointer">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b border-white/25 pb-2">
            روابط سريعة
          </h2>
          <div className="space-y-3">
            {[
              "الصفحة الرئيسية",
              "عن المركز",
              "فريق العمل",
              "المدونة",
              "تواصل معنا",
            ].map((link, index) => (
              <div
                key={index}
                className="flex gap-2 items-center hover:text-lemon transition-colors"
              >
                <Image
                  src={"sub-title2-lemon.svg"}
                  alt="أيقونة"
                  width={14}
                  height={14}
                />
                <span className="text-sm cursor-pointer">{link}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Support */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b border-white/25 pb-2">
            الدعم
          </h2>
          <div className="space-y-3">
            {[
              "الأسئلة الشائعة",
              "سياسة الخصوصية",
              "شروط الاستخدام",
              "التبرعات",
              "الشكاوى والمقترحات",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center hover:text-lemon transition-colors"
              >
                <Image
                  src={"sub-title2-lemon.svg"}
                  alt="أيقونة"
                  width={14}
                  height={14}
                />
                <span className="text-sm cursor-pointer">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>
          جميع الحقوق محفوظة © مركز توبة الإسلامي {new Date().getFullYear()}
        </p>
        <p className="mt-1">
          تطوير:{" "}
          <a
            href="mailto:mahmoudg.dev@gmail.com"
            className="text-lemon hover:underline"
          >
            Mahmoud Gamal
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
