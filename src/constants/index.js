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
  mongodb,
  git,
  figma,
  NextGenAttractiveUI,
  threejs,
  CarShowcase,
  NoteCreation,
  achintya,
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
    title: "FrontEnd Development",
    icon: web,
  },
  {
    title: "3D Web Development",
    icon: mobile,
  },
  {
    title: "API Integration",
    icon: backend,
  },
  {
    title: "NextJS Fullstack",
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
];

const experiences = [
  {
    title: "Next JS Developer",
    company_name: "Achintya Solutions",
    icon: achintya,
    iconBg: "#383E56",
    date: "April 2024-August 2024",
    points: [
      "Developing and maintaining web applications using ReactJS, NextJS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Integrated API services to fetch data from the server and display it on the client-side.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Walid was an exceptional Next.js developer at Achintya Solutions, consistently delivering innovative and high-quality work.",
    name: "Aman Gupta",
    designation: "CEO",
    company: "Achintya Solutions",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHz3MBu6AVwxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678910634886?e=1729728000&v=beta&t=1kJfXCjhCbf0E5iL8Y3ZJd5BjvkyP9p8VLEPHgR9wDM",
  },
  {
    testimonial:
      "Walid's technical skills and problem-solving abilities are impressive, making them a valuable asset to any team.",
    name: "Khalid Ibne Hasan",
    designation: "Product Manager",
    company: "Keyin College",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQGK9aT9HbX0_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1638926834700?e=1729728000&v=beta&t=ga5b6yqE0C3jxW7JFkWpipACOE7TgPrggP_kHBF0acU",
  },
  {
    testimonial:
      "Walid combines deep technical expertise with a strong work ethic, consistently delivering exceptional results as I've noticed during his University period.",
    name: "Nafis Mostofa",
    designation: "CEO",
    company: "Rose Tech",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQHe9d_MRl41bQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1715137251142?e=1724655600&v=beta&t=h3POhja_51N7yIWXM3Ub0_rVzBfVPkAqhZgnD0GQ4zQ",
  },
];

const projects = [
  {
    name: "New Gen Attractive UI Site",
    description:
      "This project showcases a modern UI/UX design built with React 18 and Tailwind CSS, featuring a new-generation interface and smooth parallax effects for an enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "parallax",
        color: "blue-text-gradient",
      },
    ],
    image: NextGenAttractiveUI,
    source_code_link:
      "https://github.com/Walid-IbneHasan/NewGenAttractiveUI-Site",
    live_link: "https://new-gen-attractive-ui-site.vercel.app/",
  },
  {
    name: "Note Creation",
    description:
      "A full-stack application designed to help users create and manage notes efficiently. This project features:",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: NoteCreation,
    source_code_link: "https://github.com/Walid-IbneHasan/Note-Creation",
    live_link: "https://note-creation.onrender.com/",
  },
  {
    name: "Car Showcase",
    description:
      "A comprehensive front-end application built with Next.js 14, designed for car enthusiasts to search and explore detailed information about various cars.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "headles-cms",
        color: "pink-text-gradient",
      },
    ],
    image: CarShowcase,
    source_code_link: "https://github.com/Walid-IbneHasan/Car-Showcase",
    live_link: "https://car-showcase-beta-ashen.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
