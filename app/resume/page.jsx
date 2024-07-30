'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
    title: 'About me',
    description: 'I am a Frontend Developer with a passion for creating beautiful and functional websites ',
    info: [
      {
        fieldName: 'Name',
        fieldValue: 'Minthu Khaing',
      },
      {
        fieldName: 'Phone',
        fieldValue: '(+40) 453 464 398',
      },
      {
        fieldName: 'Experience',
        fieldValue: '1 Year',
      },
      {
        fieldName: 'Skype',
        fieldValue: 'minthu19',
      },
      {
        fieldName: 'Nationality',
        fieldValue: 'Myanmar',
      },
      {
        fieldName: 'Language',
        fieldValue: 'Myanmar, English, Malaysia',
      },
    ]
  };

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur provident assumenda repudiandae quae. ",
  items: [
    {
      company: "Abc Telecom",
      position: "Frontend Developer",
      duration: " 2022 - Present"
    },
    {
      company: "Freelance ",
      position: "Web Developer ",
      duration: " 2021 - 2022"
    },
    {
      company: "Learning YouTube",
      position: "Full Stack Developer",
      duration: " Summer 2023"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: " 2019 - 2020"
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: " 2018 - 2019"
    },
    {
      company: "Software Developer",
      position: "junior Developer",
      duration: " 2017 - 2018"
    },
  ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur provident assumenda repudiandae quae. ",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Developement Bootcamp",
      duration: " 2023 ",
    },
    {
      institution: "Codecademy",
      degree: "front-end Track",
      duration: " 2022 ",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: " 2020-2021 ",
    },
    {
      institution: "Tech Institude",
      degree: "Certified Web Developer",
      duration: " 2019 ",
    },
    {
      institution: "Designer School",
      degree: "Diploma in Graphic Design",
      duration: " 2016-2018 ",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: " 2014-2016 ",
    },
    
    
  ]
};

// skills data
const skills = {
  title: "My skills",
  description: 'I am a Frontend Developer with a passion for creating beautiful and functional websites ',
  skillLists: [
    {
      icon: <FaHtml5/>,
      name: 'html 5',
    },
    {
      icon: <FaCss3/>,
      name: 'css 3',
    },
    {
      icon: <FaJs/>,
      name: 'javascript',
    },
    {
      icon: <FaReact/>,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs/>,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs/>,
      name: 'node.js',
    },
    {
      icon: <FaFigma/>,
      name: 'figma',
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition:{duration: 0.4, delay: 2.4, ease: 'easeIn'}}}
    className=" min-h-[80vh] flex items-center justify-center py-2 xl:py-0 ">
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className=" flex flex-col xl:flex-row gap-[20px] ">
          <TabsList className=' flex xl:flex-col xl:w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-[8px]'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh]'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className=" flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-[30px] font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-[12px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                      {experience.items.map((item, index)=>{
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-[16px] px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className=" text-accent">{item.duration}</span>
                            <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className=" flex items-center gap-3"> 
                              {/* dot */}
                              <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                              <p className=" text-white/60">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className=" flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-[30px] font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-[12px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className='h-[400px]'>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                      {education.items.map((item, index)=>{
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className=" text-accent">{item.duration}</span>
                            <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className=" flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                              <p className=" text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full mb-6'>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className=" text-[30px] font-bold">{skills.title}</h3>
                  <p className="text-white/60 text-[12px] max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillLists.map((skillList, index)=>{
                  return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] 
                           bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skillList.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className=" capitalize ">{skillList.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[30px] font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-[12px] mx-auto xl:mx-0 text-white/60">{about.description}</p>
                <ul className=" grid grid-cols-1 xl:grid-cols-2 bg-[#232329] p-4 rounded-md mb-4 xl:mb-0 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((info, index)=>{
                      return(
                        <li key={index} className="flex items-center  justify-center xl:justify-start gap-4">
                          <span className=" text-white/60">{info.fieldName}</span>
                          <span className=" text-xl">{info.fieldValue}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
