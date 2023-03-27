import React from 'react'

const Skills = () => {


  const chief_patron = [
    {
      photo: "/images/chief_patrons/prashant.webp", designation: 'President, MREI', name: 'Dr. Prashant Bhalla' 
    },
    {
      photo: "/images/chief_patrons/Amit.jpg", designation: 'Vice President, MREI', name: 'Dr. Amit Bhalla' 
    },
  ]

  const patrons = [
    {
      photo: "/images/patrons/sanjay.jpg", designation: 'Vice Chancellor, MRIIRS', name: 'Dr. Sanjay Shrivastava'
    },
    {
      photo: "/images/patrons/naresh.jpg", designation: 'Pro Vice Chancellor', name: 'Dr. Naresh Grover' 
    },
    {
      photo: "/images/patrons/pardeep.jpg", designation: 'Pro Vice Chancellor, MRIIRS', name: 'Dr. Pardeep Kumar' 
    },
    {
      photo: "/images/patrons/Arora.jpg", designation: 'Registrar, MRIIRS', name: 'Shri. R.K Arora' 
    },
  ]

  const co_patrons = [
    {
      photo: '/images/co_patron/geeta.png', designation: "", name: "Dr. Geeta Ninzawan"
    },
    {
      photo: "/images/co_patron/brijesh.jpeg", designation: "Dean Academics, MRIIRS", name: "Dr. Brijesh Kumar"
    },
    {
      photo: "/images/co_patron/Sarita.jpg", designation: "Dean R&D, MRIIRS", name: "Dr. Sarita Sachdewa"
    },
    {
      photo: "/images/co_patron/nandini.jpeg", designation: "Director CDC", name: "Dr. Nandani"
    }
  ]

  const general_chair = [
    {
      photo: "/images/general_chair/Tapas.jpeg", designation: "Associate Dean, CSE, FET, MRIIRS", name: "Dr. Tapas Kumar"
    }
  ]

  const chair = [
    {
      photo: "/images/chair/suresh.jpg", designation: "Professor, CSE, FET, MRIIRS", name: "Dr. Suresh Kumar"
    }
  ]

  const co_chair = [
    {
      photo: "/images/co-chair/charu.jpeg", designation: "Professor Head, CSE, FET, MRIIIRS",name: "Dr. Charu Virmani"
    },
    {
      photo: "/images/co-chair/supriya.jpg", designation: "Professor, CSE, FET, MRIIIRS",name: "Dr. Supriya P. Panda"
    },
    {
      photo: "/images/co-chair/rashima.jpeg", designation: "Director IQAC, Professor", name: "Dr. Rashima Mahajan"
    }
  ]

  const convener = [
    {
      photo: "/images/convener/poonam.jpeg", designation: "Professor, CSE, FET, MRIIRS", name: "Dr. Poonam Tanwar"
    }
  ]

  const organizing = [
    {
      photo: "/images/organizing/deepa_bura.jpg", name: "Dr. Deepa Bura", designation: "Professor, CSE, FET, MRIIRS"
    },
    {
      photo: "/images/organizing/indu.jpg", name: "Dr. Indu Kashyap", designation: "Professor, CSE, FET, MRIIRS"
    },
    {
      photo: "/images/organizing/nitasha_soni.jpg", name: "Dr. Nitasha Soni", designation: "Professor, CSE, FET, MRIIRS"
    },
    {
      photo: "/images/organizing/sahoo.jpg", name: "Dr. R C Sahoo", designation: "Associate Professor, CSE, FET, MRIIRS"
    }
  ]

  return (
    <section id='skills' className='py-10 relative'>
      <div className='mt-20 text-gray-600 text-center'>
        <h3 className='text-4xl font-bold font-playFair' data-aos="fade-right">Conference <span>Committee</span></h3>
        <p className='text-[#de0650] mt-14 text-3xl font-bold font-playFair' data-aos="fade-right">Chief Patrons</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap' data-aos="fade-right">
          {
            chief_patron?.map((chief_patron,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={chief_patron.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{chief_patron.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{chief_patron.designation}</p>
          </div>
            ))
          }
        </div>


        <p className='text-[#de0650] mt-20 text-3xl font-bold font-playFair' data-aos="fade-right">Patrons</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'data-aos="fade-right">
          {
            patrons?.map((patrons,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={patrons.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{patrons.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{patrons.designation}</p>
          </div>
            ))
          }
        </div>

        <p className='text-[#de0650] mt-20 text-3xl font-bold font-playFair' data-aos="fade-right">Co-Patrons</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'data-aos="fade-right">
          {
            co_patrons?.map((co_patrons,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={co_patrons.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{co_patrons.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{co_patrons.designation}</p>
          </div>
            ))
          }
        </div>


        <p className='text-[#de0650] mt-20 text-3xl font-bold font-playFair' data-aos="fade-right">General Chair</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap' data-aos="fade-right">
          {
            general_chair?.map((general_chair,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={general_chair.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{general_chair.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{general_chair.designation}</p>
          </div>
            ))
          }
        </div>
        <p className='text-[#de0650] mt-20 text-3xl font-bold font-playFair' data-aos="fade-right">Chair</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap' data-aos="fade-right">
          {
            chair?.map((chair,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={chair.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{chair.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{chair.designation}</p>
          </div>
            ))
          }
        </div>

        <p className='text-[#de0650] mt-20 text-3xl font-bold font-playFair' data-aos="fade-right">Co-Chair</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap' data-aos="fade-right">
          {
            co_chair?.map((co_chair,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={co_chair.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{co_chair.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{co_chair.designation}</p>
          </div>
            ))
          }
        </div>

        <p className='text-[#de0650] mt-20 text-3xl font-bold font-playFair' data-aos="fade-right">Convener</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap' data-aos="fade-right">
          {
            convener?.map((convener,i) =>(
              <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl'>
            <div className='flex items-center justify-center'>
              <div className='text-6xl group-hover:text-cyan-600'>
                <img src={convener.photo} className="rounded-full"/>
              </div>
            </div>
            <p className='text-lg mt-2 text-gray-600'>{convener.name}</p>
            <p className='text-lg mt-3 text-gray-600'>{convener.designation}</p>
          </div>
            ))
          }
        </div>

        <p
          className="text-[#de0650] mt-14 text-3xl font-bold font-playFair"
          data-aos="fade-right"
        >
          Organizing Secretaries
        </p>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          data-aos="fade-right"
        >
          {organizing?.map((organizing, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="text-6xl group-hover:text-cyan-600">
                  <img src={organizing.photo} className="rounded-full" />
                </div>
              </div>
              <p className="text-lg mt-2 text-gray-600">{organizing.name}</p>
              <p className="text-lg mt-3 text-gray-600">
                {organizing.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
