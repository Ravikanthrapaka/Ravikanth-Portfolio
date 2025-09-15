
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









































// start


import { motion } from "framer-motion";
import { FaPython, FaLaptopCode, FaShieldAlt, FaMedal } from "react-icons/fa";

import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ConfettiButton } from "@/components/magicui/confetti";
import * as _BlurFadeMod from "@/components/magicui/blur-fade";
const BlurFade = _BlurFadeMod.BlurFade || _BlurFadeMod.default || (({ children }) => <>{children}</>);

// icons
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import User from "./assets/User.png";
import resume from "./assets/RAPAKA RAVIKANTH RESUME_2025.pdf";

export default function App() {
  const NAV_HEIGHT = 72;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const projects = [
    {
      title: "💬 INTERVIEW-GPT – AI-Powered Coding Interview Assistant",
      desc: "Responsive React app that generates coding questions and evaluates spoken answers using AI for real-time feedback.",
      github: "https://github.com/Ravikanthrapaka/interview_Gpt",
      live: "https://interview-gpt-lbz9.vercel.app/",
    },
    {
      title: "📝 TODORA – React ToDo App with Authentication",
      desc: "Task management app with Clerk Auth & Firebase. Add, view, delete tasks with secure sign-in and instant updates.",
      github: "https://github.com/Ravikanthrapaka/react-todoApp-Auth",
      live: "https://react-todo-app-auth-pu8l.vercel.app/",
    },
   
    {
      title: "🎬 NETFLIX CLONE – React Movie Streaming UI",
      desc: "Browse movies with hover effects, view details, and watch trailers in a responsive React UI.",
      github: "https://github.com/Ravikanthrapaka/Netflix-clone-react",
      live: "https://netflix-clone-react-nine-woad.vercel.app/",
    },
    {
    title: "🧘 TOPMIND-CARE – Landing Page",
    desc: "Landing page for mindfulness & meditation for kids (4–14). Fun, story-based meditations to build focus, kindness, and confidence. Safe and ad-free.",
    github: "https://github.com/Ravikanthrapaka/Topmind-care",
    live: "https://topmind-care-roan.vercel.app/",
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-4xl text-sky-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-purple-600" /> },
    { name: "WordPress", icon: <FaWordpress className="text-4xl text-blue-700" /> },
    { name: "Git/GitHub", icon: <FaGithub className="text-4xl text-gray-800" /> },
  ];

  return (
    <>
      {/* ====== NAVBAR ====== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="text-lg font-bold hover:cursor-pointer">Ravikanth</div> */}
            <div className="text-lg font-bold hover:cursor-pointer" onClick={() => scrollToSection("home")}
>
  Ravikanth
</div>
          
          </div>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            <button onClick={() => scrollToSection("home")} className="hover:cursor-pointer hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:cursor-pointer hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection("skills")} className="hover:cursor-pointer hover:text-blue-600">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="hover:cursor-pointer hover:text-blue-600">Projects</button>
            <button onClick={() => scrollToSection("resume")} className="hover:cursor-pointer hover:text-blue-600">Resume</button>
            <button onClick={() => scrollToSection("contact")} className="hover:cursor-pointer hover:text-blue-600">Contact</button>
          </nav>

          <div className="flex items-center gap-3 text-xl">
            <a href="https://www.linkedin.com/in/rapakaravikanth/" aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedin /></a>
            <a href="https://github.com/Ravikanthrapaka" aria-label="GitHub" className="hover:text-gray-800"><FaGithub /></a>
            <a href="https://x.com/RRAVIKANTH23144" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>
      </header>

      <div style={{ height: NAV_HEIGHT }} />

      <BlurFade delay={0.5} inView>
        {/* ====== HERO ====== */}
        <section id="home" className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <TypingAnimation startOnView={true}>Hey, I am Ravikanth 👋</TypingAnimation>
              </h1>
              <p className="mt-3 text-lg text-neutral-600 max-w-xl leading-relaxed">
                Frontend Developer & Freelance Web Designer —{" "}
                <span className="block md:inline">Building responsive, interactive web applications with React.</span>
              </p>
             <div className="flex items-center gap-3 text-xl">
  <a href="https://www.linkedin.com/in/rapakaravikanth/" aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedin /></a>
  <a href="https://github.com/Ravikanthrapaka" aria-label="GitHub" className="hover:text-gray-800"><FaGithub /></a>
  <a href="https://x.com/RRAVIKANTH23144" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
</div>

            </div>
            <div className="flex-shrink-0">
  <div className="flex-shrink-0">
  <motion.div
    initial={{ scale: 0, rotate: -10, opacity: 0 }}
    animate={{ scale: 1, rotate: 0, opacity: 1 }}
    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }} // much faster
    className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-br from-blue-400 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105"
  >
    <img
      src={User}
      alt="Ravikanth"
      className="w-full  h-full object-cover rounded-full"
    />
    {/* Hover overlay */}
    <div className="absolute hover:cursor-pointer inset-0 rounded-full bg-black/10 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
  </motion.div>
</div>
</div>

          </div>
        </section>

        {/* ====== ABOUT ====== */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-3">About me</h2>
          <p className="text-neutral-600 text-justify leading-relaxed">
            I am a Frontend Developer specializing in <span className="font-semibold text-black">React.js</span>, with expertise in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and WordPress. 
            I build dynamic, responsive, and user-friendly web applications that are visually appealing and highly functional.{" "}
            <span className="underline text-black">I have completed a B.Tech degree from Acharya Nagarjuna University and focus on turning ideas into seamless digital experiences.</span>{" "}
            I continuously explore new tools and techniques to make websites efficient, intuitive, and engaging.
          </p>
        </section>

        {/* ====== SKILLS ====== */}
        <section id="skills" className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="text-sm text-neutral-500 hidden sm:block">Tools & technologies I use</div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-2 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-250 border hover:border-blue-400"
                aria-label={s.name}
              >
                {s.icon}
                <div className="text-xs font-medium text-neutral-700">{s.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== PROJECTS ====== */}
        <section id="projects" className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <div className="text-sm text-neutral-500 hidden sm:block">Selected projects & demos</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-neutral-600 text-sm mt-1">{p.desc}</p>
                    <div className="mt-3 flex gap-2">
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-slate-900 text-white">GitHub</a>
                      <a href={p.live} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white">Live</a>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                      {idx + 1}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* ====== CERTIFICATIONS ====== */}

{/* ====== CERTIFICATIONS ====== */}
<section id="certifications" className="max-w-4xl mx-auto px-6 py-6">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-2xl font-bold mb-6"
  >
    Certifications
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      
      {
        title: "Frontend Web Development Bootcamp",
        issuer: "Codekaro",
        icon: <FaLaptopCode className="w-10 h-10 text-indigo-500" />,
        link: "https://codekaro.in/course-certificate/69789-5704",
      },
      {
        title: "Hackathon",
        issuer: "Pixxelhack Webathon 1.0, ACM-TCET",
        icon: <FaMedal className="w-10 h-10 text-yellow-500" />,
        link: "https://drive.google.com/file/d/1ASei9OBflw3bxz5DbOtEYj81uSD655xE/view",
      },
      {
        title: "Python Programming Certification",
        issuer: "CodeTantra",
        icon: <FaPython className="w-10 h-10 text-blue-500" />,
        link: "https://anucet.codetantra.com/cert/certificate.jsp?certId=CT1898-uyjVPRo-c",
      },
      
      {
        title: "Ethical Hacking & Cybersecurity",
        issuer: "iHack Academy",
        icon: <FaShieldAlt className="w-10 h-10 text-red-500" />,
        link: "https://cert.ihackacademy.in/certificate/IHAEH312RR.pdf",
      },
      {
        title: "Python Development Internship",
        issuer: "CodeClause",
        icon: <FaLaptopCode className="w-10 h-10 text-green-500" />,
        link: "https://drive.google.com/file/d/13nJjmtEzEwiN4j5_Tczauxt8q-AzM1Ks/view?usp=sharing",
      },
      
      
    ].map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center
                   border border-gray-200 hover:border-blue-500 hover:scale-105 transform transition-all duration-300 cursor-pointer"
      >
        {cert.icon}
        <h3 className="text-lg font-semibold text-gray-700 mt-4">{cert.title}</h3>
        <p className="text-sm text-gray-500">{cert.issuer}</p>
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            View Certificate
          </a>
        )}
      </motion.div>
    ))}
  </div>
</section>



        {/* ====== RESUME ====== */}
        <section id="resume" className="max-w-4xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-3">Resume</h2>
          <p className="text-neutral-600 mb-4">Download my latest resume to see more about my education, projects and certifications.</p>
          <a href={resume}
            download
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-md hover:scale-105 transform transition-all duration-300">
              Download Resume
          </a>
        </section>

        {/* ====== CONTACT ====== */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-8 pb-20">
          <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
          <p className="text-neutral-600 mb-4">Let’s turn ideas into reality. Drop me a message and let’s get started!</p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <a
  href="https://www.linkedin.com/messaging/compose/?recipient=rapakaravikanth"
  target="_blank"
  rel="noreferrer"
  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
>
  Message me on LinkedIn
</a>


        <ConfettiButton className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white font-medium shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
             Click me
          </ConfettiButton>
        </div>

        </section>
      </BlurFade>
    </>
  );
}











