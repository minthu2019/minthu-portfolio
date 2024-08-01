import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Image from "next/image"


const Header = () => {
  return (
    <header className=" py-2 xl:py-12 text-white ">
      <div className="container mx-auto flex items-center justify-between">

        {/* logo */}
        <Link href={'/'} >
          <div className="flex gap-2">
            <Image src="/assets/logo.png" alt="logoImage" width={30} height={30}/>
            <h1 className=" text-[25px] xl:text-4xl font-semibold">Minthu <span className=" text-accent">.</span></h1>
          </div>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
        
      </div>
    </header>
  )
}

export default Header
