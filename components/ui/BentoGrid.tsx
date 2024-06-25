'use client';

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from '@/info/confetti.json';
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import Button from "./Button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id = 0, // Providing a default value of 0
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);
    const [animateClass, setAnimateClass] = useState("");

    useEffect(() => {
        const animationDelay = id * 0.1; // Staggered delay
        const animationDirection = id % 2 === 0 ? "slide-in-left" : "slide-in-right";
        setAnimateClass(`${animationDirection}`);
        // Apply the delay using inline style
    }, [id]);

    const handleCopy = () => {
        navigator.clipboard.writeText('brent.a.manke@gmail.com');
        setCopied(true);
    };

    const handleProjectClick = () => {
        let targetId = "";
        if (id === 3) {
            targetId = "technologies";
        } else if (id === 5) {
            targetId = "custom-web-solutions";
        } else if (id === 6) {
            targetId = "faster-turnaround-time";
        }

        if (targetId) {
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                animateClass,
                className
            )}
            style={{
                animationDelay: `${id * 0.2}s`,
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,9,121,1) 35%, rgba(63,0,150,1) 65%, rgba(32,0,77,1) 100%)',
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className='w-full h-full absolute'>
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover, object-center')}
                            width={500}
                            height={500}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={img}
                            alt={img}
                            className={"object-cover object-center, w-full, h-full"}
                            width={500}
                            height={500}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold" />*/}
                    </BackgroundGradientAnimation>
                )}
                

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

                    {id === 2 && <GridGlobe />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8">
                            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                                {['React.js', 'Next.js', 'TypeScript', 'CSharp'].map((item) =>
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>)}
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                                {['SQL', 'Wordpress', 'TailwindCSS', 'Bootstrap'].map((item) =>
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>)}
                                    
                            </div>
                        </div>
                    )}
{id === 5 && (
                    <div>
                        {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold" />*/}
                        <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={handleProjectClick}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 mt-5"
                                        >
                                            Click for more
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" align="center">
                                    <div className="bg-gray-800 text-white text-sm rounded-md p-2 shadow-lg">
                                        To get to know more about what i am doing!
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            </div>
                )}
                {id === 3 && (
                    <div>
                        {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold" />*/}
                        <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={handleProjectClick}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 mt-5"
                                        >
                                            Click for more
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" align="center">
                                    <div className="bg-gray-800 text-white text-sm rounded-md p-2 shadow-lg">
                                        A better view at my skillset
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            </div>
                )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings:
                                    {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>

                            <Button
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={handleProjectClick}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 mt-5"
                                        >
                                            Click for more
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" align="center">
                                    <div className="bg-gray-800 text-white text-sm rounded-md p-2 shadow-lg">
                                        Lets start a project together!
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );
};
