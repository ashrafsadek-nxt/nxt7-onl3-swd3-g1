import Image from "next/image";
import React from "react";
import GlareHover from "../GlareHover";

const Gallery = () => {
  return (
    <section>
      <div className="mx-auto py-12 pb-0 px-4 sm:px-6 lg:px-10">
        <div className="img-box4">
          <div className="flex w-full flex-col sm:flex-row gap-8">
            <div className="img-wrapp flex flex-col flex-1/2 gap-8">
              <div className="img1 global-img overflow-hidden rounded-2xl ">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={1500}
                  playOnce={false}
                  className="hover:scale-125 transform transition-all duration-1500"
                >
                  <Image
                    src="/about_4_1.jpg"
                    alt="About 1"
                    className="object-cover bg-cover w-full "
                    width={500}
                    height={500}
                  />
                </GlareHover>
              </div>
              <div className="img2 global-img overflow-hidden rounded-2xl ">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={1500}
                  playOnce={false}
                  className="hover:scale-125 transform transition-all duration-1500"
                >
                  <Image
                    src="/about_4_2.jpg"
                    alt="About 1"
                    className="object-cover bg-cover w-full "
                    width={500}
                    height={500}
                  />
                </GlareHover>
              </div>
            </div>
            <div className="img-wrapp flex flex-col flex-1/2 gap-8">
              <div className="img3 global-img overflow-hidden rounded-2xl ">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={1500}
                  playOnce={false}
                  className="hover:scale-125 transform transition-all duration-1500"
                >
                  <Image
                    src="/about_4_3.jpg"
                    alt="About 1"
                    className="object-cover bg-cover w-full "
                    width={500}
                    height={500}
                  />
                </GlareHover>
              </div>
              <div className="img4 global-img overflow-hidden rounded-2xl  ">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={1500}
                  playOnce={false}
                  className="hover:scale-125 transform transition-all duration-1500"
                >
                  <Image
                    src="/about_4_4.jpg"
                    alt="About 1"
                    className="object-cover bg-cover w-full "
                    width={500}
                    height={500}
                  />
                </GlareHover>
              </div>
            </div>
            {/* <div className="discount-wrapp">
              <div className="logo">
                <Image
                  src="/assets/img/small-logo2.svg"
                  alt="Small Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="discount-tag">
                <span className="discount-anime">
                  <span className="char1">l</span>
                  <span className="char2">e</span>
                  <span className="char3">a</span>
                  <span className="char4">r</span>
                  <span className="char5">n</span>
                  <span className="char6"> </span>
                  <span className="char7">q</span>
                  <span className="char8">u</span>
                  <span className="char9">r</span>
                  <span className="char10">a</span>
                  <span className="char11">n</span>
                  <span className="char12"> </span>
                  <span className="char13">e</span>
                  <span className="char14">v</span>
                  <span className="char15">e</span>
                  <span className="char16">r</span>
                  <span className="char17">y</span>
                  <span className="char18">d</span>
                  <span className="char19">a</span>
                  <span className="char20">y</span>
                  <span className="char21"> </span>
                  <span className="char22">*</span>
                  <span className="char23"> </span>
                  <span className="char24">q</span>
                  <span className="char25">u</span>
                  <span className="char26">r</span>
                  <span className="char27">a</span>
                  <span className="char28">n</span>
                  <span className="char29"> </span>
                  <span className="char30">l</span>
                  <span className="char31">e</span>
                  <span className="char32">a</span>
                  <span className="char33">r</span>
                  <span className="char34">n</span>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
