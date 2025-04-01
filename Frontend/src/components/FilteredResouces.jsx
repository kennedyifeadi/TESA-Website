import React, { useContext } from 'react'
import Note from "../assets/gifs/LectureNotes.gif"
import VideoNote from "../assets/gifs/VideoNotes.gif"
import PQs from "../assets/gifs/PastQuestions.gif"
import Textbook from "../assets/gifs/Textbooks.gif"
import { ResoucesContext } from '../context/ResoucesContext'

export const FilteredResouces = () => {
  const {level, Department, link} = useContext(ResoucesContext)

  const Resources = [
    {
      tilte: "Lecture notes",
      link: link,
      gif: Note
    },
    {
      tilte: "Textbooks",
      link: link,
      gif: Textbook
    },
    {
      tilte: "Video guides",
      link: link,
      gif: VideoNote
    },
    {
      tilte: "PQs",
      link: link,
      gif: PQs
    }
  ]
  return (
    <div className='w-full h-screen flex bg-[#000000] flex-col'>
      <div className='w-full flex justify-center flex-col text-white mt-4'>
        <h1 className='w-full text-center text-4xl'>{Department}</h1>
        <span className='w-full text-center text-xl mt-2'>{level}</span>
      </div>
      <div className='w-full flex justify-evenly flex-wrap h-[50%] items-center'>
        {
          Resources.map((resource, index)=>(
            <div key={index} className='group relative w-[30%] max-w-[200px] h-[200px] bg-[#392B1A] border-white border rounded-md cursor-pointer active:scale-90 duration-500 transition-all ease-in-out'>
              <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF] to-[#FA8F21] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-md z-0"></div>
              <a href={resource.link} onClick={(e) => {e.stopPropagation(); window.open(resource.link, "_blank");}} target='_blank' rel="noopener noreferrer" className='relative w-full h-full flex-col flex z-10'>
                <div className='w-full h-[80%]'>
                  <img src={resource.gif} alt="" className='w-full h-full object-cover' />
                </div>
                <span className='w-full text-center text-xl text-white font-semibold'>{resource.tilte}</span>
              </a>
            </div>
          ))
        }
      </div>
      <div className='w-full flex justify-center h-[30%] items-center'></div>
    </div>
  )
}
