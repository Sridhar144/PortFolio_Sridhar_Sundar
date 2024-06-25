import React from 'react';
import Button from './ui/Button';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/info';

const Footer = () => {
  return (
    <footer className='w-full pt-10 pb-10 mb-[120px] md:mb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-12 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-60' />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <br />
                <span className='text-blue-400'>  your digital experience</span> to the next level?!
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>React out to me and let&apos;s figure out how to step up and help you acheive your goals</p>
            <a href="mailto:sridharsundar100@gmail.com">
                <Button
                title='Lets get in touch!'
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>

        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Sridhar</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt={profile.name} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  );
}

export default Footer;
