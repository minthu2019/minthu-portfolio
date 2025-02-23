'use client'

import CountUp from "react-countup"

const stats = [
    {
        num: 12,
        text: "Years of Experience",
    },
    {
        num: 26,
        text: "Projects completed",
    },{
        num: 8,
        text: "Technologies mastered",
    },{
        num: 500,
        text: "Code commits",
    },
]

const Stats = () => {
  return (
    <section className="pt-0 pb-4 xl:pt-0 xl:pb-0  ">
      <div className="container mx-auto ">
        <div className=" flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {
                stats.map((stat, index)=>{
                    return(
                        <div className=" flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp end={stat.num} duration={5} delay={2} 
                            className=" text-[25px] xl:text-6xl font-extrabold"/>
                            <p className={`${stat.text.length < 15 ? 'max-w-[50px] text-[12px]' : 'max-w-[100px] text-[12px]'} leading-snug
                             text-white/80`}>{stat.text}</p>
                        </div>
                    )
                })
            }
            
        </div>
      </div>
    </section>
  )
}

export default Stats
