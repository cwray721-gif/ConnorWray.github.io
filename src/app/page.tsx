"use client";

import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin, Mail, Download, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Chris Taylor.";

  useEffect(() => {
    let typeInterval: NodeJS.Timeout;
    let loopInterval: NodeJS.Timeout;

    const startTyping = () => {
      let index = 0;
      setText(""); 

      typeInterval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        
        if (index === fullText.length) {
          clearInterval(typeInterval);
        }
      }, 100);
    };

    startTyping();

    loopInterval = setInterval(() => {
      clearInterval(typeInterval); 
      startTyping();
    }, 5000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[80vh] animate-slide-up">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px]">
            {text}
            <span className="animate-pulse text-green-800">|</span>
          </h1>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl min-h-[80px]">Let's build something amazing together.</h1>
          <p className="text-xl text-gray-800 max-w-lg">
            I'm a cybersecurity professional and a software engineer passionate about building efficient solutions, while making 
            them safe for all at the exact same time.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* 1. VIEW MY WORK BUTTON */}
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium
                         text-white bg-green-700 rounded-lg hover:bg-green-700  transition-colors"
            >
              View My Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium
                        text-white bg-brown rounded-lg hover:bg-brown-hover transition-colors"
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* 2. NEW RESUME BUTTON */}
            <a
              href="/Chris_Taylor_SWE.pdf"
              download="Chris_Taylor_SWE.pdf" 
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-900 border-2 border-gray-200 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://www.linkedin.com/in/chris-taylor-737469212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Chris-Taylor7" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-black transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:chtaylor270@gmail.com" target="_blank"
                className="p-3 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+442071234567"
                className="p-3 text-gray-500 hover:text-green-500 transition-colors"
                >
                <Phone size={24}  />
              </a>
              <a 
                href="https://www.instagram.com/christaylorisapunk/" target="_blank"
                className="p-3 text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.discord.com/users/465965656270045184" target="_blank"
                className="p-3 text-gray-500 hover:text-blue-300 transition-colors"
              >
                <FontAwesomeIcon 
                  icon={faDiscord} 
                  className="text-gray-500 hover:text-blue-300 transition-colors" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Photo Placeholder */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl bg-gray-100 flex items-center justify-center">
             <img 
              src="/profile.jpg" 
              alt="Chris Taylor" 
              className="object-cover w-full h-full"
            /> 
          </div>
        </div>
      </div>

      <br />
      
      <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px] pt-16">About Me</h1>
          <p className="text-xl text-gray-800 max-w-lg">
            Hi, I'm Christopher Taylor — a software engineer with a background in application security. 
            I graduated from the University of Cincinnati in May 2026 with a double major in Cybersecurity 
            and IT-Networking Systems, and I'm drawn to work at the intersection of the two: building 
            software that's not just functional, but secure by design.
            <br /> <br />
            I'm currently a Software Engineer at Sherwin-Williams in Cleveland, where I work on modernizing 
            internal applications in Java Spring Boot and Vue.js, supporting a sales planning platform used 
            by over 1,000 employees across the company. Before that, I spent time on the security side at 
            Lincoln Electric, driving DevSecOps adoption — everything from integrating SAST/SCA scanning 
            into developer pipelines to sitting down with teams to figure out how to make security fit 
            naturally into their workflow. I like this kind of work because it's as much about people as 
            it is about tooling; making someone's 8-hour day a little easier is a real win.
            <br /> <br />
            Outside of work, I've served as president of one of UC's satellite esports clubs, and I help 
            run the Collegiate Esports Network, a charity that organizes events to raise money for causes 
            like The Red Cross and A Kid Again.
            <br /> <br />
            Thanks for stopping by — I'd love to hear from you.
          </p>
      </div>

    </div>
  );
}