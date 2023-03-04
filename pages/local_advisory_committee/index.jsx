import React from "react";
const Technical = () => {

  const local = [
    {
      photo: "/images/local/sarita.jpg", name: "Prof. Sarita Sachdeva", designation: "Ex Director & Dean R&D, MRIIRS"
    },
    {
      photo: "/images/local/leena.jpg", name: "Prof. Leena G", designation: "HOD - EEE, FET, MRIIRS"
    },
    {
      photo: "/images/local/devendra.png", name: "Prof. Devendra Vashist", designation: "HOD - AU, FET, MRIIRS"
    },
    {
      photo: "/images/local/Manoj.png", name: "Prof. Monoj Nayak", designation: "HOD - ME, FET, MRIIRS"
    },
    {
      photo: "/images/local/Sunita.png", name: "Prof. Sunita Bansal", designation: "HOD - Civil, FET, MRIIRS"
    },
    {
      photo: "/images/local/jyoti.png", name: "Prof. Jyoti Chawla", designation: "HOD - Applied Sciences, FET, MRIIRS"
    },
    {
      photo: "/images/local/abhiruchi.png", name: "Prof. Abhiruchi Passi", designation: "HOD - ECE, FET, MRIIRS"
    },
    {
      photo: "/images/local/rashmi.jpeg", name: "Prof. Rashmi Agarwal", designation: "Head, FCA, MRIIRS"
    },
  ]


  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-20 text-white text-center">
        <h3 className="text-4xl font-semibold" data-aos="fade-right">
          Advisory <span>Committee</span>
        </h3>
        <p
          className="text-[#de0650] mt-14 text-3xl font-bold"
          data-aos="fade-right"
        >
          Local Technical Advisory Committee
        </p>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          data-aos="fade-right"
        >
          {local?.map((local, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="text-6xl group-hover:text-cyan-600">
                  <img src={local.photo} className="rounded-full" />
                </div>
              </div>
              <p className="text-lg mt-2 text-white">{local.name}</p>
              <p className="text-lg mt-3 text-white">
                {local.designation}
              </p>
            </div>
          ))}
        </div>
        <p className='text-[#de0650] mt-20 text-3xl font-bold' data-aos="fade-right">Organizing Committee</p>
        <p className='text-white  mt-20 text-3xl font-bold' data-aos="fade-right">CSE, FET, MRIIRS</p>
      </div>
    </section>
  );
};

export default Technical;
