import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AcademicPartners = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const partners = [
    { link: "images/partners/aws.png" },
    { link: "images/partners/oracle.png" },
    { link: "images/partners/ibm.png" },
    { link: "images/partners/microsoft.png" },
    { link: "images/partners/infosis1.png" },
    { link: "images/partners/purdue.png" },
    { link: "images/partners/liwa.png" },
  ];

  return (
    <section className="w-full mt-14" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-bold text-5xl font-playFair">
          Academic <span>Partners</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
          {partners?.map((partners, i) => (
            <div key={i} className="relative min-w-[5rem] max-w-[15rem] p-10">
              <img src={partners?.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPartners;
