import React from "react";

const Dates = () => {

  return (
    <section className="py-24 text-gray" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-white text-5xl font-bold font-playFair ">
          Important <span>Dates</span>
        </h3>
      </div>

      <div className="mt-10 justify-center  flex text-gray-600">
        <table className="text-white">
          <tr className="text-2xl">
            <td>Paper Submission Deadline:</td>
            <td>15<sup>th</sup> July, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Acceptance Notification:</td>
            <td>5<sup>th</sup> September, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Camera Ready Paper Submission Deadline:</td>
            <td>30<sup>th</sup> September, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Last Date for Registration:</td>
            <td>10<sup>th</sup> October, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Conference Dates:</td>
            <td>23<sup>rd</sup> & 24<sup>th</sup> November, 2023</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Dates;

