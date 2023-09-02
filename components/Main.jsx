import React, { useEffect } from "react";
import Image from "next/image";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import mr_image from "../public/images/main/mr.png";
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="w-full h-[70vh] py-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14 justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-4xl sm:text-4xl md:text-4xl lg:text-8xl text-gray-600 font-playFair font-bold">
              ICAICCIT - <span>2023</span>
            </h3>

            <p className="text-3xl font-poppons text-center">
              International Conference on Advances in{" "}
            </p>
            <div className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold mt-2">
              <Typed
                strings={[
                  "Computation",
                  "Communication",
                  "Information Technology",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-3xl font-bold mt-10 text-gray-600 text-center">
              23<sup>rd</sup> and 24<sup>th</sup> November, 2023
            </p>
            <p className="text-2xl text-[#3FBA96] md:w-[800px] text-center font-bold mt-5">
              IEEE Delhi Section has agreed to be Technical Sponsor.(IEEE
              conference record number #60255)
            </p>
          </div>
          <div className="animate-translateAnimate hidden lg:block">
            <Image src={mr_image} width={600} height={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
