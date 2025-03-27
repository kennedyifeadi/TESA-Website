import React from 'react'
import supportTesa from "../assets/icons/hand-coin-fill.png"
import { Button } from './UI/Button'

export const About = () => {
  return (
    <div className='w-full h-max md:h-[100dvh] bg-[#392B1A] px-2 md:px-8 flex py-10'>
      <div className='w-full h-full px-6 flex flex-col items-center gap-6'>
        <h1 className='w-full text-center text-3xl md:text-5xl text-white' style={{ fontFamily: '"Aldrich", sans-serif' }}>About TESA</h1>
        <p className='w-full text-center text-white text-[12px] md:text-[20px] tracking-[2px]' style={{fontFamily:'"Poppins", sans-serif'}}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
 quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
 tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
 ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptateLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum
.
        </p>
        <Button title={"Support TESA"} width={"20px"} color={'#007AFF'} icon={supportTesa} hoverColor={"#007AFF"} hoverIcon={supportTesa}/>
      </div>
    </div>
  )
}
