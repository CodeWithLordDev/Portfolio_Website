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
    <div className="project  min-h-screen p-8 ">
      <StarsBackground />
      <ShootingStars />
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-medium mt-6 mb-6 text-gray-800 dark:text-[#ffff]">Project</motion.h2>
      </div>
      <motion.div 
      
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
        
        {projects.map((project) => (
          <TiltGlareCard Card key={project.id}
           onClick={() => handleCardClick(project.title)}
           title={project.title}
           description={project.subheading}
           image={project.image}
          />
      ))}
      </motion.div>
    </div>
  );
};

export default ProjectPage;
