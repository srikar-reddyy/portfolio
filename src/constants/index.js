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

const projects = [
  {
    name: "Movie Application",
    description:
      "Developed a dynamic movie management platform that allows users to effortlessly organize and showcase their favorite movies, directors, and actors, while fostering a socially interactive and evolving user profile within the movie enthusiast community. Leveraged the flexibility of React to build an intuitive and responsive user interface, delivering a seamless and engaging movie exploration experience across various devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pocket News",
    description:
      "This web-app gives you a quick glance at today’s top headlines, right on your screen. It’s like carrying the front page of a newspaper in your pocket—fast, easy, and always up to date.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };