"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaDatabase, FaPython, FaFlask } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiMysql, SiFastapi, SiFlask, SiPowerbi, SiSimpleanalytics } from 'react-icons/si';
import { DiDjango, DiMongodb, DiNodejs } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { GiBrain, GiArtificialIntelligence } from 'react-icons/gi';

const Techno: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const technologies = [
    { Icon: RiReactjsLine, color: 'text-cyan-400' },
    { Icon: TbBrandNextjs, color: '' },
    { Icon: DiDjango, color: 'text-green-700' },
    { Icon: SiFlask, color: '' },
    { Icon: DiNodejs, color: 'text-green-600' },
    { Icon: SiMysql, color: 'text-sky-600' },
    { Icon: SiMongodb, color: 'text-green-400' },
    { Icon: SiPowerbi, color: 'text-yellow-500' },
    { Icon: GiArtificialIntelligence, color: 'text-orange-500' },
    { Icon: SiSimpleanalytics, color: '' },
  ];

  return (
    <div className='py-20' id='technologies'>
      <h1 className='heading'>
        <span className='text-purple'>Technologies</span>
      </h1>
      
      <div 
        ref={containerRef}
        className='flex flex-wrap items-center justify-center p-4 gap-x-9 gap-y-9 mt-10'
      >
        {technologies.map(({ Icon, color }, index) => (
          <div 
            key={index} 
            className={`rounded-2xl border-4 border-neutral-800 p-4 tech-icon ${isIntersecting ? 'animate' : ''}`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 100}ms`
            }}
          >
            <Icon className={`text-7xl ${color}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techno;