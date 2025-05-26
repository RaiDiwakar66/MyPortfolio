import React, { useState } from "react";
import {
  FaHiking,
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaGoogle,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCloud,
  FaLinkedin,
  FaGithub,
  FaFileDownload
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiLeetcode,
  SiDuolingo
} from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { GiTreehouse } from "react-icons/gi";
import { motion } from "framer-motion";
import KSU from "./assets/ksu-logo.png";
import Diwakar from "./assets/Diwakar.jpg"
import GenerativeAI from "./assets/GenerativeAI.jpg"
import BachelorDegree from "./assets/BachelorDegree.png"
import InProgress from "./assets/Workinprogress.jpg"
import CalculatorWeb from "./assets/Calculator.png"
import ClosetSystem from "./assets/ClosetSystem.png"

const projects = [
  {
    title: "Dopamine Tracker",
    description:
      "A Flutter-based mobile app with a microservices backend, Firebase integration, and dynamic reminder system to boost mood tracking and user engagement.",
    tech: ["Flutter", "Firebase", "Microservices", "Dart"],
    github: "https://github.com/DkGoat66/DopamineTracker",
    image: InProgress
  },
  {
    title: "Closet Management System",
    description:
      "Java full-stack application with PostgreSQL and real-time weather API for personalized outfit suggestions.",
    tech: ["Java", "PostgreSQL", "RESTful APIs","JavaScript", "React JS","OpenWeatherMap API"],
    github: "https://github.com/DkGoat66/Closet2.0",
    image: ClosetSystem
  },
  {
    title: "Flashback Memory",
    description:
      "Python app built in collaboration with UGA to enhance memory retention through structured check-ins and CI/CD pipeline.",
    tech: ["Python", "CI/CD", "User Testing", "Django"],
    github:"https://github.com/DkGoat66/Flaskback-Memory",
    image: InProgress
    
  },
  {
    title: "Calculator-Web-Application",
    description:
    "C# Calculator-web-based application that utilizes Nunit for Unit Testing and Playwright for End-to-End Testing to ensure quality assurance",
    tech: ["Nunit", "Playwright","C#"],
    github: "https://github.com/IbrahimaDiallo32/Calculator-Web-Application",
    image: CalculatorWeb
  }
];

const skills = [
  { name: "Java", icon: <FaJava />, percentage: 90 },
  { name: "Python", icon: <FaPython />, percentage: 95 },
  { name: "JavaScript", icon: <FaJs />, percentage: 90 },
  { name: "React", icon: <FaReact />, percentage: 85 },
  { name: "Flutter", icon: <SiFlutter />, percentage: 85 },
  { name: "Firebase", icon: <SiFirebase />, percentage: 85 },
  { name: "Docker", icon: <FaDocker />, percentage: 70 },
  { name: "Kubernetes", icon: <SiKubernetes />, percentage: 70 },
  { name: "Google Cloud", icon: <FaGoogle />, percentage: 70 },
  { name: "SQL", icon: <SiMysql />, percentage: 75 },
  { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 70 },
  { name: "HTML", icon: <FaHtml5 />, percentage: 100 },
  { name: "CSS", icon: <FaCss3Alt />, percentage: 100 },
];

export default function Portfolio() {
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300 font-sans overflow-x-hidden scroll-smooth">
      {/* Sticky Header Navigation with Logo */}
      <header className="sticky top-0 bg-gradient-to-br from-green-200 via-green-100 to-green-300 text-green-900 py-4 px-6 shadow-lg border-b border-green-300 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
      <motion.div
        className="relative w-12 h-12 rounded-full bg-green-600 overflow-hidden flex items-center justify-center cursor-pointer"
        whileHover={{
        scale: 1.2,
        boxShadow: "0px 0px 25px 8px rgba(34,197,94,0.7)",
        rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.span
          className="absolute text-white font-bold text-xl z-20"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          D
        </motion.span>
        <GiTreehouse className="text-green-200 text-3xl z-10" />
      </motion.div>


          <nav className="flex gap-6 text-base font-semibold items-center">
            <a href="#intro" className="hover:text-green-800">Home</a>
            <a href="#about" className="hover:text-green-800">About Me</a>
            <a href="#projects" className="hover:text-green-800">Work</a>
            <a href="#skills" className="hover:text-green-800">Skills</a>
            <a href="#certifications" className="hover:text-green-800">Certifications</a>
            <a href="#connect" className="hover:text-green-800">Connect</a>
            <motion.a
              href="/Diwakar's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-600 text-xl"
              title="View Resume"
              whileHover={{ rotate: 20, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IoDocumentText />
            </motion.a>
          </nav>
        </div>
      </header>

      {/* Animated Tree Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-800 text-4xl cursor-pointer pointer-events-auto"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: [0, 10, -10, 0], opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.5 }}
            style={{ left: `${i * 10}%`, top: `${20 + (i % 3) * 20}%` }}
            whileHover={{ scale: 1.5, rotate: 20 }}
          >
            <GiTreehouse />
          </motion.div>
        ))}
      </div>

      {/* Introduction Section */}
      <section id="intro" className="min-h-screen flex justify-center items-center text-center px-4 relative z-10">
        <div>
          <motion.h1
            className="text-5xl font-bold text-green-900 mb-4 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onMouseEnter={() => setHasHovered(true)}
          >
            Hi, I'm Diwakar Rai 🌿
          </motion.h1>
          {hasHovered && (
            <motion.p
              className="text-lg max-w-2xl text-green-800 mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Turning Ideas into Impactful Application
            </motion.p>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">About Me 🍃</h2>
        <img src={Diwakar} alt="Diwakar Picture" className="w-48 rounded-full shadow-lg mb-10"/>
        <p className="text-lg max-w-2xl text-green-800 text-center">
          I'm an aspiring software engineer who recently graduated with a Bachelor in Software Engineering from Kennesaw State University. My passion for coding ignited in my senior year of high school when I read an article about how software changes lives. Since that day, I’ve pursued software engineering with the hope of building software that transforms lives. I love building projects that bring changes in our life. Check   out my projects! 
        </p>
         <img src={KSU} alt="KSU Logo" className="w-40 mb-6" />
      </section>

      {/* Page 2: Projects */}
      <section id="projects" className="min-h-screen px-6 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Projects I've Worked On 🤩
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="rounded-2xl shadow-md bg-white p-6">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-42 object-cover mb-4 rounded" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.5 }}
                />
                <h2 className="text-xl font-semibold text-green-700">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-200 text-green-900 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 hover:text-green-600 text-4xl"
                      title="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Page 3: Skills */}
<section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative z-10">
  <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
    My Skills 🔧
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-10 ">
{skills.map((skill, i) => {
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

  return (
    <div key={i} className="relative group w-48 h-48 flex items-center justify-center">
      {/* SVG Ring Progress on Hover */}
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute z-10 opacity-0 group-hover:opacity-100 transition duration-500"
      >
        <circle
          stroke="#D1FAE5"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#047857"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Icon - hides on hover */}
      <div className="z-20 w-32 h-32 rounded-full bg-white shadow flex items-center justify-center text-[4.5rem] text-green-800 transition-opacity duration-300 group-hover:opacity-0">
        {skill.icon}
      </div>

      {/* Percentage Text - appears on hover */}
      <div className="absolute z-30 text-lg font-bold text-green-900 opacity-0 group-hover:opacity-100 transition duration-300">
        {skill.percentage}%
      </div>
    </div>
  );
})}
  </div>
</section>


      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen py-20 px-6 relative z-10">
        <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">Certifications 🏅</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img src={BachelorDegree} alt="Bachelor Degree" className="w-full h-48 object-contain mb-4"/>       
            <h3 className="text-xl font-semibold text-green-800">Bachelor of Science in Software Engineering</h3>
            <p className="text-sm text-gray-700 mt-2"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img src={GenerativeAI} alt="Generative AI by" className="w-full h-48 object-contain mb-4"/>
            <h3 className="text-xl font-semibold text-green-800">Career Essential in Generative AI by Microsoft and LinkedIn</h3>
            <p className="text-sm text-gray-700 mt-2"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img src={InProgress} alt="Work In Progress" className="w-full h-48 object-contain mb-4"/>
            <h3 className="text-xl font-semibold text-green-800">AWS Certified Developer Associate</h3>
            <p className="text-sm text-gray-700 mt-2"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img src={InProgress} alt="Work In Progress" className="w-full h-48 object-contain mb-4"/>
            <h3 className="text-xl font-semibold text-green-800">CompTia A+</h3>
            <p className="text-sm text-gray-700 mt-2"></p>
          </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img src={InProgress} alt="Work In Progress" className="w-full h-48 object-contain mb-4"/>
            <h3 className="text-xl font-semibold text-green-800">Master of Science in CyberSecurity</h3>
            <p className="text-sm text-gray-700 mt-2"></p>
          </div>

        </div>
      </section> 

      {/* Connect Page */}
      <footer className="text-center py-10 text-green-700 relative z-10" id="connect">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Let's Connect 🌐</h2>
        <div className="flex justify-center gap-6 text-4xl">
          <a href="https://www.linkedin.com/in/diwakar-rai-15593a24b" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
            <FaLinkedin />
          </a>
          <a href="https://github.com/RaiDiwakar66" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/Diwakar66/" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
            <SiLeetcode />
          </a>
          <a href="https://www.duolingo.com/profile/DrTuPW" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
            <SiDuolingo/>
          </a>
        </div>
      </footer>
    </div>
  );
}
