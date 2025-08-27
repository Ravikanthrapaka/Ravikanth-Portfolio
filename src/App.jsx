
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { GoDotFill } from "react-icons/go";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ConfettiButton } from "@/components/magicui/confetti";
import React from 'react'

import User from "./assets/User.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {
  return (
    
      

    <>

    <BlurFade  delay={0.500} inView>
            {/* <img
              className="mb-4 size-full rounded-lg object-contain"
              
            /> */}
          

    <section className='mt-18 max-w-2xl mx-auto'>

      <div className='flex gap-14 items-center '>
        <div>
          
            <div className=" font-4xl font-black "> 
                  <h1 className='text-4xl font-black'> <TypingAnimation startOnView={true}>Hey, I am Ravikanth👋</TypingAnimation></h1>
          <p className='font-light text-lg mt'>Frontend Developer & Freelance Web Designer Building Responsive, Interactive Web Applications with React</p>


            </div>
        
          <div className="flex gap-3 mt-1">
            <a className='text-xl' href="/"><FaLinkedin /></a>
            <a className='text-xl' href="/"><FaGithub /></a>
            <a className='text-xl' href="/"><FaTwitter /></a>
          </div>
        
        </div>
        <img className='h-40 w-40 object-cover rounded-full' src={User} alt="" />
      </div>
    </section>





    <section className='mt-10 max-w-2xl mx-auto'>

      <h1 className='text-2xl font-black'>About me</h1>
      <p className='font-light text-justify text-neutral-500 mt-2'>
        I am a Frontend Developer specializing in React, with expertise in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and WordPress. I build dynamic, responsive, and user-friendly web applications that are visually appealing and highly functional. <span className='underline text-black'>I have completed a B.Tech degree from Acharya Nagarjuna University and focus on turning ideas into seamless digital experiences.</span> I continuously explore new tools and techniques to make websites efficient, intuitive, and engaging.
      </p>
    </section>


    <section className='mt-10 max-w-2xl mx-auto'>
      
      <h1 className='text-2xl font-black '> My Projects</h1>
      
      <div>
        <p className='text-lg text-black mt-3'>🎬 Movie/Entertainment App</p>
        <p className='text-neutral-500'>Movie search app using APIs (OMDb API), shows details like ratings, cast, and poster.</p>
      </div>

      <div>
        <p className='text-lg text-black mt-2'>💬Chatgpt & AI Image Generator App🖼️</p>
        <p className='text-neutral-500'>Real-time chat interface for smooth messaging & Generates images dynamically from user prompts</p>
      </div>

      <div>
        <p className='text-lg text-black mt-2'>To-Do List / Task Manager App 📝</p>
        <p className='text-neutral-500'>A responsive task management app built with React that allows users to instantly add, edit, and delete tasks.</p>
      </div>
      
      
    </section>


    <section className='mt-10 mb-36 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-black'>Get in Touch</h1>
          <p className='font-light text-lg text-neutral-500 mt-1'>Let’s turn ideas into reality. Drop me a message and let’s get started!</p>

          <div className="relative">
            <ConfettiButton className="mt-3 px-5 font-semibold rounded-full">Text me on Twitter</ConfettiButton>
          </div>
    </section>

    </BlurFade>
    </>
  


  )
}

export default App
