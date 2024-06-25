import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/info';
import { Heart, HeartHandshake, PencilRuler, Rabbit } from "lucide-react";
import leetcode from '../public/leetprog.jpeg'
import github from '../public/gitprog.jpeg'

const Grid = () => {
  return (
    <section>
      <div id='about'>
      <BentoGrid>
        {gridItems.map
        ((item) => (
          <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      </div>
      <div id='do' className="container mx-auto py-20">
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Starting from $1000 */}
      
      {/* Custom Web Solutions */}
      <div
        id="custom-web-solutions"
        className="p-4 border border-purple-600 rounded-[12px] flex flex-col gap-4"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
        }}
      >
        <Rabbit size={40} className="text-purple-500" strokeWidth={1.4} />
        <span className="text-[28px] font-bold text-purple">Achievements include </span>
        <span className="text-[18px] font-semibold text-white">
          Top 10 finalist in a Unplugged Hackathon <br />
          Finalist in a national ideation case challenge by SRCC. <br />
          Achieved Top 3 in Bid-by-Bit coding challenge. <br />
          Solved over 400 problems across all platforms.

        </span>
      
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
        <PencilRuler size={40} className="text-purple-500" strokeWidth={1.4} />
        <span className="text-[28px] font-bold text-purple">Building Web Solutions</span>
        <p className="text-white">
          Currently pursuing a Bachelors degree in Electronics and Telecommunication with a minor degree in Computer Science. 
          Looking forward to leveraging my skills in Machine Learning and AI for impactful solutions.
          <br /> <br /> <strong>Some of my work</strong> <br />Built and currently working on Projects across a spectrum of topics like FullStack Development, Data Analytics, PowerBI, Supervised Learning, Web Scraping, Computer Vision

        </p>
          <div className="flex pt-2">
          <img
            src='/exp4.svg'
            className="w-full h-[100px] object-contain object-center rounded-[8px]"
            alt="Contact Illustration"
          /><img
          src='/exp3.svg'
          className="w-full h-[100px] object-contain object-center rounded-[8px]"
          alt="Contact Illustration"
        />
        </div>
        <div>
        <img
            src='/tail.svg'
            className="w-full h-[100px] object-contain object-center rounded-[8px]"
            alt="Contact Illustration"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div
        className="p-4 border border-purple-600 rounded-[12px] flex justify-between gap-10 col-span-1 sm:col-span-2 lg:col-span-1"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
        }}
      >
        {/* <div className="flex flex-col gap-4 text-white">
          <span className="text-[16px]">Reach out for collaboration or job opportunities:</span>
          <span className="font-bold">Sridhar Sundar</span>
          <span>+91 9372635328</span>
          <span>sridharsundar100@gmail.com</span>
        </div> */}
        <div className="flex w-full">
          <img
            src={leetcode.src}
            className="w-full h-[340px] object-contain object-center rounded-[8px]"
            alt="Project Illustration"
          />
        </div>
      </div>
    </section>
  </div>
    </section>
  )
}

export default Grid
