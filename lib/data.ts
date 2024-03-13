import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import strategiesImg from "@/public/Strategies.png";
import devTranslateImg from "@/public/DevTranslate.png";
import dexscreenerImg from "@/public/dexscreener.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Developer",
    location: "Remote",
    description:
      "For 2 years I designed and implemented scalable APIs with GraphQL and background workers, built from sctach succesful SaaS architecture and was outsorced to other companies.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Bachelor of Engineering",
    location: "University of Siedlce",
    description:
      "Graduated.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Salesforce Developer Intern",
    location: "Warsaw, PL",
    description:
      "I participated in Salesforce Developer training and gained on hands experience with Javascript and SQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Programming Tutor",
    location: "Siedlce, PL",
    description:
      "I teached programming concepts like OOP to students and helped them with their personal projects",
    icon: React.createElement(FaBook),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "DevTranslate",
    description:
      "I worked mainly as a back-end developer on this project for a year. Users can translate their application files to diffrent language to increase their app's localization.",
    tags: ["Node.js", "GraphQL", "Next.js", "Stripe", "Firebase","GCP"],
    imageUrl: devTranslateImg,
  },
  {
    title: "DexiSnap",
    description:
      "Custom tool for collecting data from decentralized cryptocurrency exchanges.",
    tags: ["SvelteKit", "GraphQL", "TypeScript", "Nest.js", "GCP", "Firebase"],
    imageUrl: dexscreenerImg,
  },
  {
    title: "Quainlab",
    description:
      "A public web app where I show diffrent cryptocurrency analysis methods I develop during free time.",
    tags: ["Next.js", "Google Sheets", "Tailwind"],
    imageUrl: strategiesImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "SvelteKit",
  "Node.js",
  "NestJS",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgrSQL",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
  "Java",
  "C#",
  "C++",
  "Framer Motion",
] as const;