import React from "react";
import TiltGlareCard from "../components/TiltGlareCard";
import { motion } from "framer-motion";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProjects } from "../store/projectsSlice";

const ProjectPage = () => {
  const projects = useSelector(selectProjects);
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    console.log(`clicked on project ${title}`)
    const slug = title.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug
    navigate(`/projects/${slug}`);
  };
  return (
    <div className="project bg-[#020617] min-h-screen p-8 ">
      <StarsBackground />
      <ShootingStars />
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-medium text-slate-300">Project's</motion.h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
        {/* <TiltGlareCard
          image="assets\\Project\\buymeaChai.png"
          title="Buy me a Chai"
          className="text-slate-500 "
          description="A platform supporting creators through small contributions."
        />
        <TiltGlareCard
          image="assets\\Project\\netflix.png"
          title="Netflix clone"
          className="text-slate-500 "
          description="A sleek and functional streaming platform replica."
        />
        <TiltGlareCard
          image="assets\\Project\\x.jpg"
          title="X Clone"
          className="text-slate-500 "
          description="A recreation of the X platform with modern features."
        />
        <TiltGlareCard
          image="assets\\Project\\portfolio.jpg"
          title="Blog Website"
          className="text-slate-500 "
          description="A clean and intuitive space for blog sharing."
        />
        <TiltGlareCard
          image="assets\\Project\\linktree.jpg"
          title="Link Tree"
          className="text-slate-500 "
          description="A tool to organize and display multiple links in one place."
        />
        <TiltGlareCard
          image="assets\\Project\\employemanagement.jpg"
          title="Employe Management"
          className="text-slate-500 "
          description="A responsive system for managing employee data and tasks."
        />
        <TiltGlareCard
          image="assets\\Project\\snappy.jpg"
          title="Chat App (Snappy)"
          className="text-slate-500 "
          description="A chat application for developers to connect, discuss, and resolve issues."
        /> */}
        {projects.map((project) => (
          <TiltGlareCard Card key={project.id}
           onClick={() => handleCardClick(project.title)}
           title={project.title}
           description={project.subheading}
           image={project.image}
          />
      ))}
      </div>
    </div>
  );
};

export default ProjectPage;
