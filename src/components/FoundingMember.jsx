import React from 'react'
import { FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import "@/css/foundingMember.css";
function FoundingMember({name, avatar, linkedin, github}) {
  return (
    <div className='foundingMember py-5 bg-[#2D2D3F] flex justify-center items-center my-10  flex-col'>
        <img width={150} src='/psycho.png' className='rounded-full'/>

        <h1 className='my-10 text-white font-bold text-3xl'>{name}</h1>

        <div className='icons flex justify-center items-center'>
            <a href={github} target='_blank'>
        <FaGithub className='icon text-3xl text-white'/>
            </a>

            <a href={linkedin} target='_blank'>
        <FaLinkedin className='ml-3 icon text-3xl text-white'/>
        </a>
        </div>

    </div>
  )
}

export default FoundingMember