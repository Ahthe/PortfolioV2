import React from "react";
import {StaticImageData} from "next/image";

export type Service = {
  name: string;
  skills: string[];
};

export const Services: Service[] = [
  {
    name: "Programming Languages",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "C++",
      "C#",
      "Swift",
      "Golang",
      "Rust",
      "SQL",
    ],
  },  
  {
    name: "FRAMEWORKS",
    skills: [
      "HTML",
      "CSS",
      "ASP.NET",
      "Spring",
      "NodeJS",
      "Typescript",
      "NextJS",
      "React",
      "Astro",
      "Svelte",
      "Flask",
      "TailwindCSS",
      "Framer Motion",
      "Prisma",
      "Supabase",
      "MongoDB",
      "PocketBase",
    ],
  },
  {
    name: "Tool & Platforms",
    skills: [
      "AWS",
      "GCP",
      "Git",
      "CI/CD",
      "REST API",
      "Unity",
      "Figma",
      "UI/UX Design",
      "Wireshark",
      "Linux",
    ],
  },
];
