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
import { GiTreehouse } from "react-icons/gi";
import { motion } from "framer-motion";
import KSU from "./assets/ksu-logo.png";
import GenerativeAI from "./assets/GenerativeAI.jpg"
import BachelorDegree from "./assets/BachelorDegree.png"
import InProgress from "./assets/Workinprogress.jpg"

const projects = [
  {
    title: "Dopamine Tracker",
    description:
      "A Flutter-based mobile app with a microservices backend, Firebase integration, and dynamic reminder system to boost mood tracking and user engagement.",
    tech: ["Flutter", "Firebase", "Microservices"],
    github: "https://github.com/DkGoat66/DopamineTracker"
  },
  {
    title: "Closet Management System",
    description:
      "Java full-stack application with PostgreSQL and real-time weather API for personalized outfit suggestions.",
    tech: ["Java", "PostgreSQL", "RESTful APIs"],
    github: "https://github.com/DkGoat66/Closet2.0"
  },
  {
    title: "Flashback Memory",
    description:
      "Python app built in collaboration with UGA to enhance memory retention through structured check-ins and CI/CD pipeline.",
    tech: ["Python", "CI/CD", "User Testing"],
    github:"https://github.com/DkGoat66/Flaskback-Memory"
    
  },
  {
    title: "Calculator-Web-Application",
    description:
    "C# Calculator-web-based application that utilizes Nunit for Unit Testing and Playwright for End-to-End Testing to ensure quality assurance",
    tech: ["Nunit", "Playwright"],
    github: "https://github.com/IbrahimaDiallo32/Calculator-Web-Application"
  }
];

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Google Cloud", icon: <FaGoogle /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

export default function Portfolio() {
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300 font-sans overflow-x-hidden scroll-smooth">
      {/* Sticky Header Navigation with Logo */}
      <header className="sticky top-0 bg-gradient-to-br from-green-200 via-green-100 to-green-300 text-green-900 py-4 px-6 shadow-lg border-b border-green-300 z-50">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="relative w-12 h-12 rounded-full bg-green-600 shadow-md overflow-hidden flex items-center justify-center">
            <FaHiking className="absolute text-green-200 text-3xl opacity-40" />
            <span className="text-white font-bold text-xl z-10">D</span>
          </div>
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
              <FaFileDownload />
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
        <img src={KSU} alt="KSU Logo" className="w-40 mb-6" />
        <p className="text-lg max-w-2xl text-green-800 text-center">
          I'm an aspiring software engineer who recently graduated with a Bachelor in Software Engineering from Kennesaw State University. My passion for coding ignited in my senior year of high school when I read an article about how software changes lives. Since that day, I’ve pursued software engineering with the hope of building software that transforms lives.Checkout my projects! 
        </p>
      </section>

      {/* Page 2: Projects */}
      <section id="projects" className="min-h-screen px-6 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Projects I've Worked On 🧩
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="rounded-2xl shadow-md bg-white p-6">
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
                     className="text-green-800 hover:text-blue-600 hover:underline"
                     title="Github Repository"
                    >
                     <FaGithub/>
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
        <div className="flex flex-wrap justify-center items-center gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-40 h-40 flex items-center justify-center text-[6rem] text-green-800 bg-white rounded-full shadow hover:bg-green-100 cursor-pointer"
              title={skill.name}
            >
              {skill.icon}
            </motion.div>
          ))}
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
        </div>
      </section> 

      {/* Connect Page */}
      <footer className="text-center py-10 text-green-700 relative z-10" id="connect">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Let's Connect 🌐</h2>
        <div className="flex justify-center gap-6 text-4xl">
          <a href="https://www.linkedin.com/in/diwakar-rai-15593a24b" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
            <FaLinkedin />
          </a>
          <a href="https://github.com/DkGoat66" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/DkGoat66/" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
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
