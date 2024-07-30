'use client'

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing  voluptatem! Libero, maxime voluptates.',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing  voluptatem! Libero, maxime voluptates.',
    href: '',
  },
  {
    num: '03',
    title: 'LOGO Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing  voluptatem! Libero, maxime voluptates.',
    href: '',
  },
  {
    num: '04',
    title: 'SEO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing  voluptatem! Libero, maxime voluptates.',
    href: '',
  },
]

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className=' min-h-[80vh] flex flex-col justify-center py-2 xl:py-0'>
      <div className="container mx-auto"> 
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition:{duration: 0.4, delay: 2.4, ease: "easeIn"}}}
        className=' grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
          {services.map((service, index)=>{
            return (
              <div key={index} >
                {/* top */}
                <div className=' flex flex-col justify-center gap-[16px] group '>
                  <div className=' w-full flex items-center justify-between'> 
                    <div className=' text-[30px] font-extrabold 
                    text-outline text-transparent group-hover:text-outline-hover
                    transition-all duration-500'>{service.num}</div>
                    <Link href={service.href} className='w-[50px] h-[50px] rounded-full 
                    bg-white group-hover:bg-accent transition-all duration-500 flex items-center
                    justify-center hover:-rotate-45'>
                      <BsArrowDownRight className=' text-primary text-[20px]'/>
                    </Link>
                  </div>
                  

                  {/* title */}
                  <h1 className=' text-[30px] font-bold leading-none text-
                   group-hover:text-accent transition-all duration-500'>{service.title}</h1>

                  {/* description */}
                  <p className='text-white/60 text-[12px]'>{service.desc}</p>
                  
                  {/* border  */}
                  <div className=' border-b border-white/20 w-full'></div>
                </div>
                
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
