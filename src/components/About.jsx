import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Timeline } from "./ui/timeline";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 }); // Adjust threshold as needed

    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const des = "ake the hassle out of launching and maintaining your website. Our platform ensures smooth deployment, continuous updates, and robust performance. Whether it’s managing hosting, integrating new features, or optimizing for speed, we’ve got you covered to keep your website running flawlessly."
    const content = [
        {
            title: "Collaborative Web Development",
            description:
                "Work together seamlessly with your team, clients, and stakeholders in real time. Collaborate on website designs, code reviews, and content updates to ensure every project aligns with your vision. Streamline your development process, share feedback, and deliver exceptional results faster with our platform.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-wrap p-2">
                    <span><TextGenerateEffect words={des} /></span>
                </div>
            ),
        },
        {
            title: "Stunning & Responsive Design",
            description:
                "Designed for All Devices Create visually appealing and fully responsive websites that look amazing on any device. From intuitive layouts to modern animations, deliver a user experience that captivates and engages visitors while staying true to your brand identity.",
            content: (
                <div className="h-full w-full  flex items-center justify-center  text-white">
                    <img
                        src="/assets/images/f1.png"
                        width={600}
                        height={600}
                        className="h-full w-full object-contain"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Smooth Deployment & Optimization",
            description:
                "Effortless Launch & Growth Deploy your website with ease and maintain peak performance post-launch. With ongoing optimization, secure hosting, and SEO-friendly practices, ensure your website is fast, reliable, and always ready to scale as your business grows.  ",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <img src="/assets/images/cloud.jpg"
                        width={600}
                        height={600}
                        className="h-full w-full object-contain"
                        alt="linear board demo" />
                </div>
            ),
        },
        {
            title: " Analytics & Continuous Improvement",
            description:
                "Data-Driven Success Track your website performance and gain actionable insights with powerful analytics. Understand your audience, optimize user journeys, and make data-driven decisions to enhance engagement and drive growth. Stay ahead by evolving your website to meet ever-changing needs.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <img src="/assets/images/Anlatics.webp"
                        width={600}
                        height={600}
                        className="h-full w-full object-contain"
                        alt=" " />
                </div>
            ),
        },
    ];
    const data = [
        // put Design here
        {
            title: "January 2025",
            content: (
                <div>
                    <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Launched my personal portfolio website using React.js and Tailwind CSS. I wanted to showcase my work and share my journey with the world. Here are some of the designs I created.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2024",
            content: (
                <div>
                    <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">
                        New Skills & Tools Learned
                    </p>
                    <span className="text-neutral-200 dark:text-neutral-200 text-xs md:text-base font-normal mb-4">Technical Skills: New programming languages, frameworks, or libraries you've explored</span>
                    <p className="text-neutral-200 flex flex-col items-start dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <span className="block"> March 2024: Learned MongoDB and integrated it into a full-stack web app for data storage.</span>
                        <span className="block">Mastered responsive design techniques and created mobile-first websites.</span>
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Challenges",
            content: (
                <div>
                    <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        November 2024: Faced challenges in responsive design, layout, state management, and components, overcame them using Tailwind CSS, React Context, and Redux.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Responsive Layout: Overcame issues with responsive layouts using Tailwind CSS's utilities.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Component Structure: Solved component breakdown issues by using functional components and React hooks.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ State Management: Used React Context for small apps and Redux for larger ones to manage global state effectively.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Layout Issues: Fixed alignment problems by using Tailwind’s flexbox and grid utilities.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Context API: Used React Context to avoid prop-drilling and manage global state more efficiently.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                            ✅ Form Handling: Simplified complex forms using React Controlled Components and Formik.
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            )


        },
        {
            title: "Projects & Contributions",
            content: (
                <div>
                    <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        February 2024: Completed an employee management system project that uses local storage.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            )


        },
    ];
    return (
        <div className="bg-[#020617]  top-0">
            <StarsBackground />
            <ShootingStars />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col space-x-4 items-center">
                <h2 className='text-2xl mt-4 text-white font-bold'>About Us</h2>
                <p className="text-base text-white mb-4 mt-5 font-semibold">Designing digital solutions that connect and inspire</p>
            </motion.div>
            <div className="bg-[#020617]">
                <StickyScroll content={content} />
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default About
