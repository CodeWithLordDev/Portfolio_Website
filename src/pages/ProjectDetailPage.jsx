import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import { motion, useInView } from "framer-motion";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { selectProjectBySlug } from "../store/projectsSlice";
import { useSelector } from "react-redux";
import { StarsBackground } from "../components/ui/stars-background";
import { ShootingStars } from "../components/ui/shooting-stars";

const ProjectDetailPage = () => {
  const { slug } = useParams();  // Getting the slug parameter from the URL
  const [markdownContent, setMarkdownContent] = useState("");
  const selectProject = selectProjectBySlug(slug);  // State to store markdown content
  const project = useSelector(selectProject);
  
  // Unified processor to parse and process markdown
  const processor = unified()
    .use(remarkParse)  // Parse markdown
    .use(remarkRehype)  // Convert markdown to HTML
    .use(rehypeDocument, { title: "Project" })  // Document wrapper
    .use(rehypeFormat)  // Format the HTML output
    .use(rehypeStringify)  // Convert HTML to string
    .use(rehypePrettyCode, {
      theme: "github-dark",  // Choose a theme for syntax highlighting
      lineNumbers: true,  // Enable line numbers for code blocks
      transformers: [
        transformerCopyButton({
          visibility: "always",  // Always show copy button for code
          feedbackDuration: 3000,  // Show feedback for 3 seconds after copying
        }),
      ],
    });

  // Process markdown content to HTML
  const processMarkdownContent = async (content) => {
    if (content) {
      const htmlContent = (await processor.process(content)).toString();
      setMarkdownContent(htmlContent);
    }
  };

  useEffect(() => {
    // Fetch markdown file based on the slug
    fetch(`/markdown/${slug}.md`)
      .then((response) => response.text())
      .then((text) => {
        processMarkdownContent(text);  // Process and set markdown content
      })
      .catch((error) => console.error("Error loading markdown:", error));
  }, [slug]);

  return (
    <>
    <StarsBackground />
    <ShootingStars />
    <div className="p-8 bg-[#020617] text-white min-h-screen">
      <motion.h1
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }} 
       className="text-4xl font-bold mb-4">Project Detail</motion.h1>
      <img src={project.image} alt={project.title} className="rounded-lg mb-8" />
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-2xl text-gray-400 mb-6">{project.subheading}</h2>
      <motion.div 
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 1, delay: 1 }}
       className="prose prose-invert">
        {/* Render markdown content as HTML */}
        <div dangerouslySetInnerHTML={{ __html: markdownContent }}
         />
      </motion.div>
    </div>
    </>
  );
};

export default ProjectDetailPage;
