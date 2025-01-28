import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Buy me a Chai",
    image: "/assets/Project/buymeaChai.png",
    subheading: "Support creators through small contribution.",
    markdownFile: "/markdown/buy-me-a-chai.md",
  },
  {
    id: 2,
    title: "Netflix Clone",
    image: "/assets/Project/netflix.png",
    subheading: "A sleek replica of the popular streaming platform.",
    markdownFile: "/markdown/netflix-clone.md",
  },
  {
    id: 3,
    title: "Chat App (Snappy)",
    image: "/assets/Project/snappy.jpg",
    subheading: "A chat app for developers to discuss and solve problems.",
    markdownFile: "/markdown/chat-app-snappy.md",
  },
  {
    id: 4,
    title: "X Clone",
    image: "/assets/Project/x.jpg",
    subheading: "A recreation of the X platform with modern features.",
    markdownFile: "/markdown/x-clone.md",
  },
  {
    id: 5,
    title: "Blog Website",
    image: "/assets/Project/portfolio.jpg",
    subheading: "A clean and intuitive space for blog sharing.",
    markdownFile: "/markdown/blog-website.md",
  },
  {
    id: 6,
    title: "Link Tree",
    image: "assets/Project/linktree.jpg",
    subheading: "A tool to organize and display multiple links in one place.",
    markdownFile: "/markdown/link-tree.md",
  },
  {
    id: 7,
    title: "Employe Management",
    image: "/assets/Project/employemanagement.jpg",
    subheading: "A responive system for managing employee data and tasks.",
    markdownFile: "/markdown/employe-management.md",
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const selectProjects = (state) => state.projects;
export const selectProjectBySlug = (slug) =>
  (state) =>
    state.projects.find(
      (project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

export default projectsSlice.reducer;
