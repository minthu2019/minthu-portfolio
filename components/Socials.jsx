import { icons } from "lucide-react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa';

const socials = [
    {
        icon: <FaGithub/>,
        path: 'https://github.com/minthu2019?tab=repositories',
    },
    {
        icon: <FaLinkedinIn/>,
        path: 'https://www.facebook.com/minthu.khaing.921',
    },
    {
        icon: <FaYoutube/>,
        path: 'https://www.youtube.com/channel/UC2TdJePKfXSBp4_w-20T2Lw',
    },
    {
        icon: <FaTwitter/>,
        path: '',
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index)=>{
        return (
            <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
        )
      })}
    </div>
  )
}

export default Socials
