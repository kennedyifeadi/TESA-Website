import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import twitterFill from '../assets/icons/twitter-fill.png'
import { FaLinkedinIn } from "react-icons/fa6";
import instagramFill from '../assets/icons/icons8-instagram-32 1.png'
import mailfill from '../assets/icons/mail-open-arrow-up-svgrepo-com 1.png'
import twitter from '../assets/icons/twitter.png'
import youtube from '../assets/icons/youtube.png'
import facebook from '../assets/icons/facebook.png'
import email from '../assets/icons/email.png'
import instagram from '../assets/icons/instagram.png'
import youtubeFill from '../assets/icons/youtube-fill.png'
import facebookFill from '../assets/icons/facebookFill.png'
import { SocialsCard } from './UI/SocialsCard'

export const Socials = () => {
  const Socials = [
    {
      text: "X/Twitter",
      icon: twitter,
      hoverIcon: twitterFill,
      link : "https://x.com/tesa_ui?s=21"
    },
    {
      text: "YouTube",
      icon: youtube,
      hoverIcon: youtubeFill,
      link : ""
    },
    {
      text: "Instagram",
      icon: instagram,
      hoverIcon: instagramFill,
      link : "https://www.instagram.com/techites_?igsh=djMycDJ2N3FoaDEy"
    },
    {
      text: "LinkedIn",
      icon: <FaLinkedinIn />,
      hoverIcon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/tesa-ui/"
    },
    {
      text: "Email",
      icon: email,
      hoverIcon: mailfill,
      link : "mailto:techitesui@gmail.com"
    },
  ]
  return (
    <div className='w-full h-[10dvh] md:h-[15dvh] bg-[#1f1e1e] flex' >
      {
        Socials.map((social, index)=>{
          return (
            <SocialsCard key={index} text={social.text} icon={social.icon} hoverIcon={social.hoverIcon} link={social.link}/>
          )
        })
      }
    </div>
  )
}
