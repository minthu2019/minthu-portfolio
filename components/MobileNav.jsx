'use client'

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'
import Image from "next/image";

const links = [
    {
        name: "home",
        path: '/'
    },
    {
        name: "services",
        path: '/services'
    },
    {
        name: "resume",
        path: '/resume'
    },
    {
        name: "work",
        path: '/work'
    },
    {
        name: "contact",
        path: '/contact'
    },
];


const MobileNav = () => {
    const pathname = usePathname();
    
  return (
    <Sheet>
      <SheetTrigger className=" flex justify-center items-center">
        <CiMenuFries className=" text-[25px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col  items-center justify-center">
        
        {/* logo */}
        <div className="mb-[16px] text-[25px] xl:text-4xl font-semibold">
            <Link href={"/"} className="flex gap-2">
                <Image src="/assets/logo.png" alt="logoImage" width={40} height={40}/>
               Minthu<span className=" text-accent">.</span>
            </Link>
        </div>

        {/* nav */}
        <nav className=" flex items-center justify-center flex-col gap-8 ">
            {
                links.map((link, index) => {
                    return (
                        <Link 
                        href={link.path} 
                        key={index}
                        className={` ${link.path === pathname && ' text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
                        >{link.name}</Link>
                    )
                })
            }
        </nav>

        {/* <Link href={'/contact'} className="mt-10">
            <Button>Hire me</Button>
          </Link> */}

      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
