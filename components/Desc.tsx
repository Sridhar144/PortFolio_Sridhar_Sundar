import React from 'react'
import { Heart, HeartHandshake, PencilRuler, Rabbit } from "lucide-react";

const Desc = () => {
  return (
    <div className="container mx-auto py-20">
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Starting from $1000 */}
      <div
        id="starting-from-1000"
        className="p-4 border border-purple-600 rounded-[12px] flex flex-col gap-2"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
        }}
      >
        <span className="text-[16px] text-white">Starting from</span>
        <span className="text-[28px] font-bold text-white">$1000</span>
        <p className="text-white mt-2">
          <strong>Languages & Tools:</strong> C, C++, Python, JavaScript, TypeScript, SQL, Django, Flask, ReactJS, Beautiful Soup, Matplotlib, Seaborn, Scikit, Tensorflow, Keras, Git, MySQL, VS Code, MATLAB, Jupyter Notebook, Docker, Postman, MongoDB
        </p>
      </div>

      {/* Custom Web Solutions */}
      <div
        id="custom-web-solutions"
        className="p-4 border border-purple-600 rounded-[12px] flex flex-col gap-4"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
        }}
      >
        <PencilRuler size={40} className="text-purple-500" strokeWidth={1.4} />
        <span className="text-[28px] font-bold text-white">Custom Web Solutions</span>
        <p className="text-white">
          Currently pursuing a Bachelors degree in Electronics and Telecommunication with a minor in Computer Science. 
          Engaged in Full-Stack Development and Data Analytics projects. Looking forward to leveraging my skills in Machine Learning and Web Development for impactful solutions.
        </p>
      </div>

      {/* Faster Turnaround Time */}
      <div
        id="faster-turnaround-time"
        className="p-4 border border-purple-600 rounded-[12px] flex flex-col gap-4 sm:col-span-2 lg:col-span-1 lg:row-span-2"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
        }}
      >
        <Rabbit size={40} className="text-purple-500" strokeWidth={1.4} />
        <span className="text-[28px] font-bold text-white">Faster Turnaround Time</span>
        <p className="text-white">
          Achievements include being a Top 10 finalist in a national hackathon and a finalist in a national ideation challenge. 
          Successfully completed projects such as MedAssist, ShopWithMe, and OnionNews, showcasing expertise in backend development, data analytics, and web scraping.
        </p>
        <div className="flex pt-2">
          <img
            src='sridhar_portfolio/public/leetprog.jpeg'
            className="w-full h-[140px] object-cover object-center rounded-[8px]"
            alt="Project Illustration"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div
        className="p-4 border border-purple-600 rounded-[12px] flex justify-between gap-10 col-span-1 sm:col-span-2 lg:col-span-1 lg:col-span-2"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
        }}
      >
        <div className="flex flex-col gap-4 text-white">
          <span className="text-[16px]">Reach out for collaboration or job opportunities:</span>
          <span className="font-bold">Sridhar Sundar</span>
          <span>+91 9372635328</span>
          <span>sridharsundar100@gmail.com</span>
        </div>
        <div className="flex w-full">
          <img
            src='sridhar_portfolio/public/gitprog.jpeg'
            className="w-full h-[140px] object-cover object-center rounded-[8px]"
            alt="Contact Illustration"
          />
        </div>
      </div>
    </section>
  </div>

  )
}

export default Desc