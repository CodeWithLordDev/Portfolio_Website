import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import { motion } from "framer-motion";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { selectProjectBySlug } from "../store/projectsSlice";
import { useSelector } from "react-redux";
import { StarsBackground } from "../components/ui/stars-background";
import { ShootingStars } from "../components/ui/shooting-stars";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const selectProject = selectProjectBySlug(slug);
  const project = useSelector(selectProject);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "Project" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      lineNumbers: true,
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const processMarkdownContent = async (content) => {
    if (content) {
      const htmlContent = (await processor.process(content)).toString();
      setMarkdownContent(htmlContent);
    }
  };

  useEffect(() => {
    fetch(`/markdown/${slug}.md`)
      .then((response) => response.text())
      .then((text) => processMarkdownContent(text))
      .catch((error) => console.error("Error loading markdown:", error));
  }, [slug]);

  return (
    <>
      {/* <StarsBackground />
      <ShootingStars /> */}
      <div className="min-h-screen flex flex-col items-center text-white p-4 md:p-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl text-neutral-700 dark:text-white md:text-5xl font-bold mb-6 text-center"
        >
          Project Detail
        </motion.h1>

        <div className="max-w-screen-lg w-full px-4 md:px-8">
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover mb-6"
          />

          {/* Project Title & Subheading */}
          <h1 className="text-2xl md:text-4xl text-neutral-600 dark:text-gray-300 font-bold mb-3 text-center">
            {project.title}
          </h1>
          <h2 className="text-lg md:text-2xl text-neutral-500 dark:text-gray-400 text-center mb-8">
            {project.subheading}
          </h2>

          {/* Markdown Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="prose prose-invert prose-lg md:prose-xl w-full text-gray-600 dark:text-white max-w-3xl mx-auto space-y-4"
          >
            <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
