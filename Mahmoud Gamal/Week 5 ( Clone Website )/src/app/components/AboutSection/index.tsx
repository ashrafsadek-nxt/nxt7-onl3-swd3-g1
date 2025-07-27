import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-10 space-y-10">
      <header className="space-y-6 md:space-y-8">
        <div className="flex gap-2 items-center">
          <Image src={"sub-title2.svg"} alt="أيقونة" width={18} height={18} />
          <span className="text-md text-deep-steel">من نحن</span>
        </div>
        <h3 className="text-3xl md:text-5xl text-title font-bold">
          مرحبا بك في <br /> مركز توبة الإسلامي
        </h3>
        <p className="text-base md:text-lg text-body-color leading-relaxed">
          مركز توبة الإسلامي مؤسسة دعوية تعليمية تهدف إلى نشر العلم الشرعي وفق منهج 
          أهل السنة والجماعة. نقدم برامج متكاملة لتعليم القرآن الكريم وعلومه، 
          والفقه والسنة، مع التركيز على التربية الإيمانية والأخلاق الإسلامية.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left Column - Features */}
        <div className="space-y-8 md:space-y-10 lg:w-1/2">
          {/* Feature 1 */}
          <div className="flex flex-row gap-6 md:gap-8 items-start">
            <div className="group p-3 bg-gray-100 rounded-full shadow-sm hover:bg-lemon hover:bg-opacity-20 transition-colors">
              <Image
                className="w-14 md:w-16 aspect-square transition-transform duration-500 group-hover:rotate-6"
                src={"./about_2_1.svg"}
                alt="أيقونة القرآن الكريم"
                width={38}
                height={38}
              />
            </div>
            <div>
              <h4 className="text-title text-lg md:text-xl font-semibold">
                تعليم القرآن الكريم
              </h4>
              <p className="text-body-color text-base md:text-lg mt-2">
                نقدم دورات متخصصة في تحفيظ القرآن الكريم وتجويده مع معلمين متقنين 
                للإقراء، وفق رواية حفص عن عاصم.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-row gap-6 md:gap-8 items-start">
            <div className="group p-3 bg-gray-100 rounded-full shadow-sm hover:bg-lemon hover:bg-opacity-20 transition-colors">
              <Image
                className="w-14 md:w-16 aspect-square transition-transform duration-500 group-hover:rotate-6"
                src={"./about_2_2.svg"}
                alt="أيقونة العلوم الشرعية"
                width={38}
                height={38}
              />
            </div>
            <div>
              <h4 className="text-title text-lg md:text-xl font-semibold">
                العلوم الشرعية
              </h4>
              <p className="text-body-color text-base md:text-lg mt-2">
                دروس منهجية في العقيدة والفقه والسيرة النبوية، مع التركيز على 
                الفهم الصحيح للإسلام بعيدًا عن الغلو والتطرف.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-row gap-6 md:gap-8 items-start">
            <div className="group p-3 bg-gray-100 rounded-full shadow-sm hover:bg-lemon hover:bg-opacity-20 transition-colors">
              <Image
                className="w-14 md:w-16 aspect-square transition-transform duration-500 group-hover:rotate-6"
                src={"./about_2_3.svg"}
                alt="أيقونة البرامج الدعوية"
                width={38}
                height={38}
              />
            </div>
            <div>
              <h4 className="text-title text-lg md:text-xl font-semibold">
                البرامج الدعوية
              </h4>
              <p className="text-body-color text-base md:text-lg mt-2">
                أنشطة دعوية متنوعة تشمل المحاضرات والندوات وبرامج توعية الشباب، 
                وفق منهج الوسطية والاعتدال.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="btns flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4">
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-lemon hover:bg-lemon-dark transition-colors text-white font-medium">
              اكتشف المزيد
            </button>
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-lg bg-slate-600 hover:bg-slate-700 text-white transition-colors font-medium">
              بضاعتنا
            </button>
          </div>
        </div>

        {/* Right Column - Testimonial */}
        <div className="space-y-5 lg:w-1/2">
          <div className="bg-slate-100 rounded-2xl flex flex-col gap-6 md:gap-10 p-6 md:p-10 py-12 md:py-20 justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <Image 
              alt="اقتباس" 
              src="/quote.svg" 
              width={42} 
              height={42} 
              className="opacity-80"
            />
            <p className="text-base md:text-lg text-body-color leading-relaxed">
              المركز يمثل نموذجًا رائعًا للعمل الإسلامي المؤسسي، يجمع بين الأصالة 
              والمعاصرة، ويهتم ببناء الشخصية المسلمة المتوازنة.
            </p>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-lemon">
                <Image 
                  alt="الشيخ محمود جمال" 
                  src="/testi.png" 
                  width={64} 
                  height={64}
                  className="object-cover"
                />
              </div>
              <span className="text-lg text-title font-medium">محمود جمال</span>
              <span className="text-sm text-body-color">رئيس مجلس الإدارة</span>
            </div>
          </div>
          
          <button className="w-full py-4 md:py-6 px-8 md:px-12 bg-slate-600 hover:bg-slate-700 text-base md:text-lg text-white rounded-xl transition-colors font-medium">
            انضم إلى مجتمعنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;