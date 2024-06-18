import React from "react";

const index = () => {
  const ieee_oversight_committee = [
    {
      name: "Prof. Chakradhar C Reddy",
      designation:
        "(Lead Member Coordinator for AICCIT-2023 and Executive Committee Member & Member-IEEE Delhi",
    },
    {
      name: "Prof. Mahesh Bundele",
      designation:
        "Executive Committee Member & Member-IEEE Delhi ection STDCOM on T & P Act",
    },
    {
      name: "Dr. Rajnish Sharma",
      designation:
        "Section Secretary & Member-IEEE Delhi Section STDCOM on T & P Act",
    },
    {
      name: "Dr. Pradeep K Gupta",
      designation:
        "Executive Committee Co-opted Member & Member-IEEE Delhi Section STDCOM on T & P Act",
    },
    {
      name: "Prof. Vivek Shrivastava",
      designation:
        "PES-IAS Chapter Secretary & Member-IEEE Delhi Section STDCOM on T & P Act",
    },
  ];

  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center mt-14 flex flex-col items-center">
        <h3 className="text-gray-600 text-5xl font-bold font-playFair">
          IEEE Oversight <span className="text-[#3FBA96]">Committee</span>
        </h3>
      </div>

      <div className="flex flex-col items-center text-center py-10 text-xl gap-10">
        {ieee_oversight_committee?.map((item, i) => (
          <p key={i}>
            {item.name},{" "}
            <span className="text-gray-600">{item.designation}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default index;
