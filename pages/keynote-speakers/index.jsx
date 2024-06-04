import React from "react";

const ResourcePerson = () => {

  const resource = [
    {
        photo: "images/resource_person/christopher.jpeg", designation: 'Director of the Computer Science Research Institute School of Computing at Ulster University.', name: 'Prof. Christopher Nugent'
    },
    {
        photo: "images/resource_person/swapnoneel.jpeg", designation: 'FIS Distinguished Professor of Computing, University of North Florida', name: 'Dr. Swapnoneel Roy'
    },
    {
      photo: "images/resource_person/sujit.jpeg", designation: 'Computer Scientist- AI, Huntsville, Alabama, United States', name: 'Dr .Sujit Roy'
    },
    {
      photo: "images/resource_person/ankit.jpg", designation: 'Research Professor, Department of ECE McCormick School of Engineering, Northwestern University', name: 'Dr. Ankit Agrawal'
    },
    {
      photo: "images/resource_person/murali.jpg", designation: 'Scientist-G & Head Interdisciplinary Cyber Physical Systems Division, Department of Science and Technology, New Delhi, India', name: 'Dr. K R Murali Mohan'
    },
    {
      photo: "images/resource_person/haider_raza.jpg", designation: 'Senior Lecturer School of Computer Science and Electronic Engineering (CSEE), University of Essex', name: 'Dr Haider Raza'
    },
    {
      photo: "images/resource_person/kamlesh.jpg", designation: 'Associate Professor, NIT, Hamripur(HP)', name: 'Dr.(Mrs.) Kamlesh Dutta'
    },
    {
      photo: "images/resource_person/valentina.png", designation: 'Head of the Intelligent Systems Research Centre, IEEE Senior Member', name: 'Prof. Valentina Emilia Balas'
    },
    {
      photo: "images/resource_person/rajeev.jpg", designation: 'Professor and Dean (Resource and Alumni Affairs) Department of Computer Science and Engineering, IIT - BHU', name: 'Dr. Rajeev Srivastava'
    },

    
  ]
  return (
    <section className="py-10 text-gray-600">
      <div className="text-center mt-14" data-aos="fade-right">
        <h3 className="text-gray-600 md:text-5xl text-3xl font-bold font-playFair">
          Keynote <span>Speakers</span>
        </h3>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap' data-aos="fade-right">
          {
            resource?.map((resource,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative w-[20rem] h-[29rem]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-2xl group-hover:text-cyan-600'>
                <img src={resource.photo} width="150" className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{resource.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{resource.designation}</p>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ResourcePerson;
