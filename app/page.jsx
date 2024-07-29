
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
     <div className="container mx-auto">
      <div className=" flex flex-col xl:flex-row items-center
       justify-between xl:pt-8 xl:pb-24">

        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          {/* <span className=" text-[20px]">Web Developer</span> */}
          <h1 className="h1 mb-[16px]">
            Hello I'm <br /> <span className=" text-accent">Minthu Khiang</span>
          </h1>
          <p className="max-w-[500px] text-[12px] mb-[16px] text-white">
            I'm a web developer based in Yangon, Myanmar. I'm passionate about
            building great products that users love. I'm currently working as a
            Web Developer.
          </p>

          {/* btn and socials */}
          <div className=" flex flex-col xl:flex-row items-center gap-[16px]">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className=" text-xl "/>
            </Button>

            <div className="mb-[16px] xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent
              rounded-full  flex justify-center items-center text-accent text-base hover:bg-accent 
              hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>

        {/* photo */}
        <div className=" order-1 xl:order-none mb-[16px] xl:mb-0">
          <Photo/>
        </div>

      </div>
     </div>

     <Stats/>
    </section>
  );
}
