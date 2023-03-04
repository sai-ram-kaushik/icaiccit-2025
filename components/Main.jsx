import React, { useEffect } from "react";
import Image from "next/image";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
const Main = () => {

  useEffect(() => {
    Aos.init({duration: 500});
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between" data-aos="fade-right">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto gap-8 md:gap-32">
          <div className="flex flex-col justify-center items-center w-full px-2 py-8 text-white">
            <h1 className="text-5xl sm:text-3xl md:text-7xl  md:leading-normal leading-10 text-white font-bold font-playFair">
              AICCIT-<span className="text-[#de0650] font-playFair">2023</span>
            </h1>

            <h3 className="text-[18px] sm:text-[20px] md:text-[23.5px] text-center font-playFair">
              International Conference on Advancing in{" "}
              <span>
                <Typed
                  className=""
                  strings={[
                    "Computation",
                    "Communication",
                    "Information Technology",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h3>

            <p className="text-white mt-8 font-bold text-2xl sm:text-3xl md:text-4xl font-playFair">
              23<sup className="text-[#de0650]">rd</sup> & 24
              <sup className="text-[#de0650]">th</sup> November 2023
            </p>
          </div>
          <div>
            <Image
              src="/images/main/mr.png"
              width={600}
              height={600}
              className="animate-translateAnimate"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col" data-aos="fade-right">
        <p className="text-white text-2xl md:text-5xl font-bold font-playFair">
          About <span>Conference</span>
        </p>
        <p className="m-10 text-justify text-white w-[900px]">
          The main objective of <b>AICCIT-2023</b> is to invite all the Academicians,
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
