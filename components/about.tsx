"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Recently graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span>, For the past 2 years
                I was mainly building backend infrastructure but now I want to embrace more challenging projects as a {" "}
                <span className="font-medium">full-stack web developer</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    Node.js, NestJS, React, Next.js and MongoDB/Firestore
                </span>
                . I am also familiar with PostgrSQL, Java, C# and Python. I am always looking to
                learn new technologies. Don't be discouraged if one buzz word is missing from the list because at the end of the day I can quickly expand my knowledge about specific topic. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy running. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">building long term investing systems for cryptocurrency markets</span>. I'm also
                learning how to speak Japanese, although Kanji still makes my mind go blank.
            </p>
        </motion.section>
    );
}