  import React, { useEffect } from "react";
import Image from "next/image";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import mr_image from '../public/images/main/mr.png'
const Main = () => {

  useEffect(() => {
    Aos.init({duration: 500});
  }, []);

  return (
    <>
     <div className="w-full h-screen">
        <div className="flex items-center justify-center w-full h-full gap-20">
          <div className="flex flex-col items-center justify-center text-gray-600">
            <h1 className="font-poppins">ICAICCIT - <span>2023</span></h1>
            <p className="text-4xl font-poppins mt-2 font-bold">International Conference on Advances in </p>
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold mt-2">
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
            <p className="text-3xl font-bold mt-10 text-gray-600">23<sup>rd</sup> and 24<sup>th</sup> November, 2023</p>
            <p className="text-2xl text-[#3FBA96] md:w-[800px] text-center font-bold mt-5">IEEE Delhi Section has agreed to be Technical Sponsor.(IEEE conference record number #60255)</p>
          </div>

          <div className="animate-translateAnimate">
              <Image src={mr_image} width={600} height={600} />
          </div>
        </div>
     </div>

      <div className="flex items-center justify-center flex-col" data-aos="fade-right">
        <p className="text-gray-600 text-2xl md:text-5xl font-bold font-playFair">
          About <span>Conference</span>
        </p>
        <p className="m-10 text-justify text-gray-600 ">
          The main objective of <b>ICAICCIT-2023</b> is to invite all the Academicians,
          Researchers, and industrialists worldwide to participate and discuss
          the latest achievements in the advanced field of computing like
          Advancement in the Artificial Intelligence, Blockchain, Cyber
          Security, Distributed Computing and Internet of Things. The main goal
          of the conference is to provide a forum for high-quality reports on
          the state-of-the-art Theory, Technology, and Applications of advanced
          fields of computing as used in measurement, automation, and scientific
          research, in industry and business. The initiative provides a focused
          and highly interactive forum where both researchers and technologists
          have the opportunity to present and discuss leading research topics,
          developments, and future directions in their areas of interest. The
          importance of the conference is its vision to establish scientific
          contacts between research teams and scientists from different
          countries for future joint research collaborations.
        </p>
      </div>
    </>
  );
};

export default Main;
