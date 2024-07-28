'use client'

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub} from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";


// project Arrays
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing  libero adipi Sed euismod, libero.',
    stack: [
      {
        name: 'Html 5'
      },
      {
        name: 'Css 3'
      },
      {
        name: 'Javascript'
      },
    ],
    image: '/assets/work/image1.jpg',
    live: 'https://minthu-walking-app.vercel.app/',
    github: 'https://github.com/minthu2019/walking-app',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing  libero adipi Sed euismod, libero.',
    stack: [
      {
        name: 'Next.js'
      },
      {
        name: 'Tailwind.css'
      },
      {
        name: 'Node.js'
      },
    ],
    image: '/assets/work/image2.jpg',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing  libero adipi Sed euismod, libero.',
    stack: [
      {
        name: 'Next.js'
      },
      {
        name: 'Taiwind.css'
      },
    ],
    image: '/assets/work/image3.jpg',
    live: '',
    github: '',
  },
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state base on current slide index
    setProject(projects[currentIndex]);
  } 

  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: 'easeIn'}}} 
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full gap-[30px] xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="group flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent
               transition-all duration-500 capitalize">{project.category} project</h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                )})}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
            </div>
            
             {/* buttons */}
            <div className="flex items-center gap-4 ">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className=" text-white text-3xl group-hover:text-accent "/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className=" text-white text-3xl group-hover:text-accent "/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {
                projects.map((project, index)=>{
                  return(
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center">
                        {/* overlay */}
                        <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* image */}
                        <div className=" relative w-full h-full rounded-md overflow-hidden ">
                          <Image src={project.image} alt={project.title} fill className=" object-cover "/>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              {/* slider buttons */}
              <WorkSlideBtns 
              containerStyles=' flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0
              z-20 w-full justify-between xl:w-max xl:justify-none' 
              btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex
              items-center justify-center transition-all rounded-full'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work


