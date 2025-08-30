
// import { TypingAnimation } from "@/components/magicui/typing-animation";
// import { WordRotate } from "@/components/magicui/word-rotate";
// import { GoDotFill } from "react-icons/go";
// import { BlurFade } from "@/components/magicui/blur-fade";
// import { ConfettiButton } from "@/components/magicui/confetti";
// import React from 'react'

// import User from "./assets/User.png"
// import { FaLinkedin } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";

// function App() {
//   return (
    
      

//     <>

//     <BlurFade  delay={0.500} inView>
//             {/* <img
//               className="mb-4 size-full rounded-lg object-contain"
              
//             /> */}
          

//     <section className='mt-18 max-w-2xl mx-auto'>

//       <div className='flex gap-14 items-center '>
//         <div>
          
//             <div className=" font-4xl font-black "> 
//                   <h1 className='text-4xl font-black'> <TypingAnimation startOnView={true}>Hey, I am Ravikanth👋</TypingAnimation></h1>
//           <p className='font-light text-lg mt'>Frontend Developer & Freelance Web Designer Building Responsive, Interactive Web Applications with React</p>


//             </div>
        
//           <div className="flex gap-3 mt-1">
//             <a className='text-xl' href="/"><FaLinkedin /></a>
//             <a className='text-xl' href="/"><FaGithub /></a>
//             <a className='text-xl' href="/"><FaTwitter /></a>
//           </div>
        
//         </div>
//         <img className='h-40 w-40 object-cover rounded-full' src={User} alt="" />
//       </div>
//     </section>





//     <section className='mt-10 max-w-2xl mx-auto'>

//       <h1 className='text-2xl font-black'>About me</h1>
//       <p className='font-light text-justify text-neutral-500 mt-2'>
//         I am a Frontend Developer specializing in React, with expertise in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and WordPress. I build dynamic, responsive, and user-friendly web applications that are visually appealing and highly functional. <span className='underline text-black'>I have completed a B.Tech degree from Acharya Nagarjuna University and focus on turning ideas into seamless digital experiences.</span> I continuously explore new tools and techniques to make websites efficient, intuitive, and engaging.
//       </p>
//     </section>


//     <section className='mt-10 max-w-2xl mx-auto'>
      
//       <h1 className='text-2xl font-black '> My Projects</h1>
      
//       <div>
//         <p className='text-lg text-black mt-3'>🎬 Movie/Entertainment App</p>
//         <p className='text-neutral-500'>Movie search app using APIs (OMDb API), shows details like ratings, cast, and poster.</p>
//       </div>

//       <div>
//         <p className='text-lg text-black mt-2'>💬Chatgpt & AI Image Generator App🖼️</p>
//         <p className='text-neutral-500'>Real-time chat interface for smooth messaging & Generates images dynamically from user prompts</p>
//       </div>

//       <div>
//         <p className='text-lg text-black mt-2'>To-Do List / Task Manager App 📝</p>
//         <p className='text-neutral-500'>A responsive task management app built with React that allows users to instantly add, edit, and delete tasks.</p>
//       </div>
      
      
//     </section>


//     <section className='mt-10 mb-36 max-w-2xl mx-auto'>
//       <h1 className='text-2xl font-black'>Get in Touch</h1>
//           <p className='font-light text-lg text-neutral-500 mt-1'>Let’s turn ideas into reality. Drop me a message and let’s get started!</p>

//           <div className="relative">
//             <ConfettiButton className="mt-3 px-5 font-semibold rounded-full">Text me on Twitter</ConfettiButton>
//           </div>
//     </section>

//     </BlurFade>
//     </>
  


//   )
// }

// export default App









import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ConfettiButton } from "@/components/magicui/confetti";
import React from 'react';

import User from "./assets/User1.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {
  return (
    <BlurFade delay={0.5} inView>
      <section className="mt-12 max-w-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-14 items-center">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-black">
              <TypingAnimation startOnView={true}>Hey, I am Ravikanth 👋</TypingAnimation>
            </h1>
            <p className="mt-2 text-base sm:text-lg font-light">
              Frontend Developer & Freelance Web Designer building responsive, interactive web applications with React
            </p>

            <div className="flex gap-3 mt-3 text-xl">
              <a href="/"><FaLinkedin /></a>
              <a href="/"><FaGithub /></a>
              <a href="/"><FaTwitter /></a>
            </div>
          </div>

          <img className="h-36 w-36 sm:h-40  sm:w-40 object-cover rounded-full" src={User} alt="Profile" />
        </div>
      </section>

      {/* About Me */}
      <section className="mt-10 max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-black">About Me</h1>
        <p className="mt-2 text-neutral-500 text-justify font-light text-sm sm:text-base">
          I am a Frontend Developer specializing in React, with expertise in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and WordPress. I build dynamic, responsive, and user-friendly web applications that are visually appealing and highly functional. <span className='underline text-black'>I have completed a B.Tech degree from Acharya Nagarjuna University and focus on turning ideas into seamless digital experiences.</span> I continuously explore new tools and techniques to make websites efficient, intuitive, and engaging.
        </p>
      </section>

      {/* Projects */}
      <section className="mt-10 max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-black">My Projects</h1>

        <div className="mt-3">
          <p className="text-lg text-black">🎬 Movie/Entertainment App</p>
          <p className="text-neutral-500 text-sm sm:text-base">Movie search app using APIs (OMDb API), shows details like ratings, cast, and poster.</p>
        </div>

        <div className="mt-3">
          <p className="text-lg text-black">💬 ChatGPT & AI Image Generator App 🖼️</p>
          <p className="text-neutral-500 text-sm sm:text-base">Real-time chat interface for smooth messaging & generates images dynamically from user prompts.</p>
        </div>

        <div className="mt-3">
          <p className="text-lg text-black">✅ React To-Do / Task Manager App</p>
          <p className="text-neutral-500 text-sm sm:text-base">A responsive task management app built with React that allows users to instantly add, edit, and delete tasks.</p>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="mt-10 mb-36 max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-black">Get in Touch</h1>
        <p className="mt-1 text-neutral-500 text-sm sm:text-base font-light">Let’s turn ideas into reality. Drop me a message and let’s get started!</p>
        <div className="mt-3">
          <ConfettiButton className="px-5 py-2 font-semibold rounded-full">Text me on Twitter</ConfettiButton>
        </div>
      </section>
    </BlurFade>
  );
}

export default App;
