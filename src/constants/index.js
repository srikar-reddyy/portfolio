import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  vnrvjietlogo,
  shopify,
  carrent,
  jobit,
  Nanologo,
  tripguide,
  threejs,
} from "../assets";
import staysyncImg from "../assets/projects/staysync.svg";
import ragImg from "../assets/projects/rag.svg";
import crowdImg from "../assets/projects/crowd.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "VNR VJIET",
    company_name: "Bachelor of Technology : Artificial Intelligence and Data Science",
    icon: vnrvjietlogo,//should change
    iconBg: "white",
    date: "September 2023 - June 2027",
    points: [
      "Throughout my college journey, I have proactively built a strong foundation in core computer science subjects. I began by mastering Data Structures and Algorithms (DSA), which helped sharpen my problem-solving and coding skills. Following this, I delved into Operating Systems and Design and Analysis of Algorithms (DAA), gaining a solid understanding of system-level concepts and algorithmic efficiency. Since my second year, I have consistently pursued advanced topics and hands-on learning to deepen my technical expertise.",
    ],
  },
  {
    title: "Nano Junior college",
    company_name: "Intermediate",
    icon: Nanologo,
    iconBg: "#E6DEDD",
    date: "January 2021 - May 2023",
    points: [
      "I completed my intermediate education from Nano Junior College under the TSBIE curriculum with an aggregate of 90%. Alongside, I prepared for JEE Mains and secured a percentile of 89, reflecting my strong foundation in Physics, Chemistry, and Mathematics.",
    ],
  },
  {
    title: "VRS & VJRS",
    company_name: "Central Board of Secondary Education",
    icon: vnrvjietlogo,
    iconBg: "white",
    date: "June 2018 - June 2021",
    points: [
      "I completed my Class 10 education under the CBSE curriculum at VRS & VJRS with a CGPA of 8.0 (80%).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const workExperience = [
  {
    title: "Full Stack Engineer",
    company_name: "StaySync",
    link: "https://staysync.io",
    date: "Present",
    points: [
      "Full stack engineer at StaySync, building a multi-tenant enterprise hostel management platform serving 2,400+ active users with 99.9% uptime.",
      "Digitized room allocation, outpasses and attendance workflows end to end.",
      "Optimized MongoDB queries by 40%, improving dashboard and API response times.",
      "Built with Node.js, TypeScript, Express, React and Zustand using AI-assisted engineering workflows.",
    ],
  },
];

const projects = [
  {
    name: "StaySync",
    description:
      "Multi-tenant enterprise hostel platform digitizing allocation, outpasses and attendance for 2,400+ users, with 99.9% uptime and 40% faster MongoDB queries.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: staysyncImg,
    live_link: "https://staysync.io",
  },
  {
    name: "Multi-Doc Reasoning Engine",
    description:
      "Full-stack RAG pipeline for querying and reasoning over multiple documents using embeddings and vector search, cutting retrieval latency by 70% with source-citation guardrails and hallucination checks.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "langchain", color: "green-text-gradient" },
      { name: "chromadb", color: "pink-text-gradient" },
    ],
    image: ragImg,
    source_code_link: "https://github.com/srikar-reddyy/rag-document-qa-system",
  },
  {
    name: "Smart Crowd Management",
    description:
      "Real-time computer vision pipeline for crowd monitoring, powered by YOLOv8, PyTorch and TensorRT and deployed on AWS EC2.",
    tags: [
      { name: "yolov8", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
    ],
    image: crowdImg,
  },
];

export { services, technologies, experiences, workExperience, testimonials, projects };
