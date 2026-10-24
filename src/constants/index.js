import staysyncImg from '../assets/projects/staysync.svg';
import ragImg from '../assets/projects/rag.svg';
import crowdImg from '../assets/projects/crowd.svg';
import vnrvjietLogo from '../assets/company/vnrvjietlogo.png';
import nanoLogo from '../assets/company/Nanologo.png';

export const profile = {
  name: 'Srikar Reddy',
  headline: 'Full Stack & AI Engineer',
  location: 'Hyderabad, India',
  email: 'srikarsrikar303@gmail.com',
  resume: 'https://drive.google.com/file/d/1q1pOFgrvK8iflwMWjGlFZzf38fuvRPlD/view?usp=drivesdk',
  github: 'https://github.com/srikar-reddyy',
  linkedin: 'https://www.linkedin.com/in/srikar-reddy-81577b263/',
};

export const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export const heroStats = [
  { value: '2,400+', label: 'Active users served' },
  { value: '99.9%', label: 'Production uptime' },
  { value: '70%', label: 'Faster RAG retrieval' },
];

export const workExperience = [
  {
    title: 'Full Stack Engineer',
    company: 'StaySync',
    link: 'https://staysync.io',
    date: 'Present',
    points: [
      'Build and ship StaySync, a multi-tenant hostel management platform serving 2,400+ active users at 99.9% uptime.',
      'Digitized room allocation, outpasses and attendance end to end, replacing manual workflows.',
      'Optimized MongoDB queries by 40%, speeding up dashboards and APIs.',
      'Stack: Node.js, TypeScript, Express, React, Zustand and MongoDB, built with AI-assisted engineering workflows.',
    ],
  },
];

export const projects = [
  {
    name: 'StaySync',
    summary:
      'Multi-tenant hostel management platform digitizing allocation, outpasses and attendance for 2,400+ users.',
    image: staysyncImg,
    tags: ['TypeScript', 'Node.js', 'Express', 'React', 'MongoDB'],
    metrics: ['2,400+ users', '99.9% uptime', '40% faster queries'],
    live: 'https://staysync.io',
    caseStudy: {
      problem:
        'Hostels handled room allocation, outpass approvals and attendance manually, which is slow to run and hard to audit at scale.',
      role:
        'Full stack engineer across the backend services, APIs and React dashboards.',
      architecture: [
        'Multi-tenant Node.js + Express + TypeScript backend on MongoDB',
        'React dashboards with Zustand for state management',
        'Workflows for allocation, outpasses and attendance on a shared core',
      ],
      impact: [
        'Serving 2,400+ active users in production',
        '99.9% uptime',
        '40% faster MongoDB queries after optimization',
      ],
    },
  },
  {
    name: 'Multi-Doc Reasoning Engine',
    summary:
      'Full-stack RAG pipeline for querying and reasoning across many documents, with source citations and hallucination checks.',
    image: ragImg,
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React'],
    metrics: ['70% lower retrieval latency', 'Cited answers'],
    source: 'https://github.com/srikar-reddyy/rag-document-qa-system',
    caseStudy: {
      problem:
        'Answering questions across a large set of PDFs needs grounded, verifiable answers. A plain LLM call hallucinates and cannot cite its sources.',
      role: 'Designed and built the full pipeline, from ingestion and the FastAPI backend to the React frontend.',
      architecture: [
        'PDF ingestion with PyPDF, chunked and embedded with Sentence Transformers',
        'ChromaDB vector store for semantic retrieval',
        'LangChain orchestration with an LLM for grounded generation',
        'Modular FastAPI backend (routes, services, pipelines) with a React (Vite) UI',
      ],
      impact: [
        'Retrieval latency cut by 70%',
        'Strict source-citation guardrails and hallucination checks on every answer',
      ],
    },
  },
  {
    name: 'Smart Crowd Management',
    summary:
      'Real-time computer vision pipeline that detects people and flags dense zones from live camera feeds.',
    image: crowdImg,
    tags: ['Python', 'YOLOv8', 'PyTorch', 'TensorRT', 'AWS EC2'],
    metrics: ['Real-time detection', 'GPU-optimized'],
    caseStudy: {
      problem:
        'Crowded venues need early warning when areas become dangerously dense, and that has to happen live rather than from recorded footage.',
      role: 'Built the detection pipeline and its deployment.',
      architecture: [
        'YOLOv8 person detection built on PyTorch',
        'TensorRT optimization for real-time GPU inference',
        'Deployed on AWS EC2',
      ],
      impact: ['Real-time people counting and crowd-density monitoring'],
    },
  },
];

export const education = [
  {
    school: 'VNR Vignana Jyothi Institute of Engineering & Technology',
    degree: 'B.Tech, Artificial Intelligence & Data Science',
    date: '2023 – 2027',
    logo: vnrvjietLogo,
    points: [
      'Core CS foundation: Data Structures & Algorithms, Operating Systems, Design & Analysis of Algorithms',
      'Building production software alongside coursework since second year',
    ],
  },
  {
    school: 'Nano Junior College',
    degree: 'Intermediate (TSBIE), MPC',
    date: '2021 – 2023',
    logo: nanoLogo,
    points: ['Scored 90% aggregate', 'JEE Main: 89th percentile'],
  },
  {
    school: 'VRS & VJRS',
    degree: 'Class X (CBSE)',
    date: '2018 – 2021',
    points: ['CGPA 8.0'],
  },
];
