import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(/service_bg.jpg)" }}
      className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 bg-cover bg-center"
    >
      {/* Image Section */}
      <div className="w-full lg:w-5/12 flex justify-center">
        <Image 
          src={"/service-img.png"} 
          alt="خدمات المركز الإسلامي" 
          width={600} 
          height={600}
          className="w-full max-w-md lg:max-w-full"
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-7/12 space-y-10 md:space-y-16">
        <header className="flex flex-col justify-center gap-3 md:gap-5">
          <div className="flex gap-2 items-center">
            <Image src={"sub-title2.svg"} alt="أيقونة" width={18} height={18} />
            <span className="text-md text-deep-steel">ماذا نقدم</span>
          </div>
          <h1 className="text-title text-3xl md:text-5xl font-bold">
            الخدمات التي نقدمها
          </h1>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Service 1 - Tajweed */}
          <div className="service-item space-y-4 ">
            <div className="box-icon flex justify-center items-center p-3 rounded-full w-16 h-16 bg-lemon">
              <Image
                src={"service_3_1.svg"}
                alt="أيقونة التجويد"
                width={40}
                height={40}
              />
            </div>
            <div className="box-p space-y-2">
              <h2 className="text-title text-xl md:text-2xl font-semibold">
                أصول التجويد والتفسير
              </h2>
              <p className="text-body-color text-base md:text-lg">
                تعلم أحكام التجويد الصحيحة وعلوم التفسير مع مشايخ متخصصين في قراءة القرآن الكريم وفهم معانيه.
              </p>
            </div>
          </div>
          
          {/* Service 2 - Hajj */}
          <div className="service-item space-y-4 ">
            <div className="box-icon flex justify-center items-center p-3 rounded-full w-16 h-16 bg-lemon">
              <Image
                src={"service_3_2.svg"}
                alt="أيقونة الحج"
                width={40}
                height={40}
              />
            </div>
            <div className="box-p space-y-2">
              <h2 className="text-title text-xl md:text-2xl font-semibold">
                رحلات الحج والعمرة
              </h2>
              <p className="text-body-color text-base md:text-lg">
                ننظم رحلات الحج والعمرة مع مرشدين شرعيين وخدمات مميزة لتجربة روحانية كاملة.
              </p>
            </div>
          </div>
          
          {/* Service 3 - Charity */}
          <div className="service-item space-y-4 ">
            <div className="box-icon flex justify-center items-center p-3 rounded-full w-16 h-16 bg-lemon">
              <Image
                src={"service_3_3.svg"}
                alt="أيقونة التبرعات"
                width={40}
                height={40}
              />
            </div>
            <div className="box-p space-y-2">
              <h2 className="text-title text-xl md:text-2xl font-semibold">
                خدمة التبرعات والصدقات
              </h2>
              <p className="text-body-color text-base md:text-lg">
                نوفر قنوات آمنة للزكاة والصدقات ونضمن وصولها لمستحقيها وفق الضوابط الشرعية.
              </p>
            </div>
          </div>
          
          {/* Service 4 - Calligraphy */}
          <div className="service-item space-y-4 ">
            <div className="box-icon flex justify-center items-center p-3 rounded-full w-16 h-16 bg-lemon">
              <Image
                src={"service_3_4.svg"}
                alt="أيقونة الخط العربي"
                width={40}
                height={40}
              />
            </div>
            <div className="box-p space-y-2">
              <h2 className="text-title text-xl md:text-2xl font-semibold">
                دورة الخط العربي
              </h2>
              <p className="text-body-color text-base md:text-lg">
                تعلم فن الخط العربي الأصيل مع خطاطين متخصصين في أنواع الخطوط المختلفة.
              </p>
            </div>
          </div>
        </div>
        
        <div className="btns flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-start">
          <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-slate-600 text-white hover:bg-slate-700 transition-colors">
            اكتشف المزيد
          </button>
          <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-lemon hover:bg-lemon-dark transition-colors">
            تحميل التطبيق
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;