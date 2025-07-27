import React from "react";
import Image from "next/image";
import "./style.css";

const Pillars = () => {
  return (
    <div className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-20">
      <header className="flex flex-col justify-center items-center gap-3 md:gap-5 text-center">
        <div className="flex gap-2">
          <Image src={"sub-title2.svg"} alt="subTitle" width={18} height={18} />
          <span className="text-md text-deep-steel">أركان الاسلام</span>
        </div>

        <h1 className="text-title text-3xl md:text-5xl">
          تعرف على أركان <br className="hidden sm:block" /> الإسلام الخمسة
        </h1>
      </header>
      <div className="flex flex-wrap justify-center gap-10 sm:gap-5">
        {/* Pillar 1 */}
        <div className="pillar-item  sm:w-40 md:w-48 lg:w-56 relative space-y-4 md:space-y-8">
          <div className="image-container rounded-full mt-14 sm:mt-20 w-26 h-26 sm:w-32 sm:h-32 mx-auto aspect-square overflow-hidden">
            <Image
              src="/pillar_2_1.jpg"
              className="mx-auto object-cover w-full h-full"
              alt="Shahada"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3 bg-lemon px-4 py-2 md:px-6 md:py-3">
            <Image
              className="h-12"
              src={"icon-1.svg"}
              alt="Shahada icon"
              width={32}
              height={32}
            />
            <span className="text-base md:text-base">الايمان بالله</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="pillar-item  sm:w-40 md:w-48 lg:w-56 relative space-y-4 md:space-y-8">
          <div className="image-container rounded-full  mt-14 sm:mt-20 w-26 h-26 sm:w-32 sm:h-32 mx-auto aspect-square overflow-hidden">
            <Image
              src="/pillar_2_2.jpg"
              className="mx-auto object-cover w-full h-full"
              alt="Salat"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3 bg-lemon px-4 py-2 md:px-6 md:py-3">
            <Image
              className="h-12"
              src={"icon-2.svg"}
              alt="Salat icon"
              width={64}
              height={64}
            />
            <span className="text-base md:text-base">اقامة الصلاة</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="pillar-item  sm:w-40 md:w-48 lg:w-56 relative space-y-4 md:space-y-8">
          <div className="image-container rounded-full  mt-14 sm:mt-20 w-26 h-26 sm:w-32 sm:h-32 mx-auto aspect-square overflow-hidden">
            <Image
              src="/pillar_2_3.jpg"
              className="mx-auto object-cover w-full h-full"
              alt="Sawm"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3 bg-lemon px-4 py-2 md:px-6 md:py-3">
            <Image
              className="h-12"
              src={"icon-3.svg"}
              alt="Sawm icon"
              width={64}
              height={64}
            />
            <span className="text-base md:text-base">صوم رمضان</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="pillar-item  sm:w-40 md:w-48 lg:w-56 relative space-y-4 md:space-y-10">
          <div className="image-container rounded-full  mt-14 sm:mt-20 w-26 h-26 sm:w-32 sm:h-32 mx-auto aspect-square overflow-hidden">
            <Image
              src="/pillar_2_4.jpg"
              className="mx-auto object-cover w-full h-full"
              alt="Zakat"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3 bg-lemon px-4 py-2 md:px-6 md:py-3">
            <Image
              className="h-12"
              src={"icon-4.svg"}
              alt="Zakat icon"
              width={64}
              height={64}
            />
            <span className="text-base md:text-base">ايتاء الزكاة</span>
          </div>
        </div>

        {/* Pillar 5 */}
        <div className="pillar-item  sm:w-40 md:w-48 lg:w-56 relative space-y-4 md:space-y-8">
          <div className="image-container rounded-full  mt-14 sm:mt-20 w-26 h-26 sm:w-32 sm:h-32 mx-auto aspect-square overflow-hidden">
            <Image
              src="/pillar_2_5.jpg"
              className="mx-auto object-cover w-full h-full"
              alt="Hajj"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3 bg-lemon px-4 py-2 md:px-6 md:py-3">
            <Image
              className="h-12"
              src={"icon-5.svg"}
              alt="Hajj icon"
              width={64}
              height={64}
            />
            <span className="text-base md:text-base">حج البيت</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;