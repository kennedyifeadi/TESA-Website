import React from 'react'
import twitterFill from '../assets/icons/twitter-fill.png'
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
      hoverIcon: twitterFill
    },
    {
      text: "YouTube",
      icon: youtube,
      hoverIcon: youtubeFill
    },
    {
      text: "Instagram",
      icon: instagram,
      hoverIcon: instagramFill
    },
    {
      text: "Facebook",
      icon: facebook,
      hoverIcon: facebookFill
    },
    {
      text: "Email",
      icon: email,
      hoverIcon: mailfill
    },
  ]
  return (
    <div className='w-full h-[15dvh] bg-[#1f1e1e] flex' >
      {
        Socials.map((social, index)=>{
          return (
            <SocialsCard key={index} text={social.text} icon={social.icon} hoverIcon={social.hoverIcon}/>
          )
        })
      }
    </div>
  )
}
