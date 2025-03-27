import React, { useState } from "react";
import { FaHiking, FaJava, FaPython, FaReact, FaDocker, FaGoogle, FaHtml5, FaCss3Alt, FaJs, FaCloud } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiKubernetes, SiPostgresql, SiMysql } from "react-icons/si";
import { GiTreehouse } from "react-icons/gi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dopamine Tracker",
    description:
      "A Flutter-based mobile app with a microservices backend, Firebase integration, and dynamic reminder system to boost mood tracking and user engagement.",
    tech: ["Flutter", "Firebase", "Microservices"],
  },
  {
    title: "Closet Management System",
    description:
      "Java full-stack application with PostgreSQL and real-time weather API for personalized outfit suggestions.",
    tech: ["Java", "PostgreSQL", "RESTful APIs"],
  },
  {
    title: "Flashback Memory",
    description:
      "Python app built in collaboration with UGA to enhance memory retention through structured check-ins and CI/CD pipeline.",
    tech: ["Python", "CI/CD", "User Testing"],
  },
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

export default function App() {
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300 font-sans overflow-x-hidden scroll-smooth">
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

      {/* Page 1: Introduction */}
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
              I'm an aspiring software engineer who recently graduated with a Bachelor in Software Engineering from Kennesaw State University. My passion for coding ignited in my senior year of high school when I read an article about how software changes lives. Since that day, I’ve pursued software engineering with the hope of building software that transforms lives.
            </motion.p>
          )}
        </div>
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
              className="w-40 h-40 flex items-center justify-center text-[9rem] text-green-800 bg-white rounded-full shadow hover:bg-green-100 cursor-pointer"
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-green-700 relative z-10">
        <p>Let’s hike through code together! 🚀🌲</p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800">
          Contact Me
        </button>
      </footer>
    </div>
  );
}
