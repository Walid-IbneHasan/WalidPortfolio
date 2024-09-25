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
  SplitBill,
  iPhoneSiteRemodified,
  itbee,
  CodeSync5,
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
    iconBg: "#fff",
    date: "April 2024-August 2024",
    points: [
      "Developing and maintaining web applications using ReactJS, NextJS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Integrated API services to fetch data from the server and display it on the client-side.",
    ],
  },
  {
    title: "Junior Front End Developer",
    company_name: "ITbee Solution",
    icon: itbee,
    iconBg: "#383E56",
    date: "September 09- Ongoing",
    points: [
      "Building and maintaining web applications using ReactJS, NextJS, and related technologies.",
      "Collaborating with designers, product managers, and developers to deliver high-quality solutions.",
      "Developing responsive and adaptive designs while ensuring compatibility across various browsers.",
      "Engaging in code reviews and offering constructive feedback to improve code quality.",
      "Integrating APIs to retrieve and display server-side data on the client interface.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Walid was an exceptional Next.js developer at Achintya Solutions, consistently delivering innovative and high-quality work.",
    name: "Achintya",
    designation: "CEO",
    company: "Achintya Solutions",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFdh-Y6aYX9_g/company-logo_100_100/company-logo_100_100/0/1714597349521/achintyasolutions_logo?e=1732147200&v=beta&t=goAQRPUh6nPetJ3O8Oq1fu53g8E1SlUfFXUQaFdHhpY",
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
        name: "ReactJS",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Parallax",
        color: "blue-text-gradient",
      },
    ],
    image: NextGenAttractiveUI,
    source_code_link:
      "https://github.com/Walid-IbneHasan/NewGenAttractiveUI-Site",
    live_link: "https://new-gen-attractive-ui-site.vercel.app/",
  },

  {
    name: "CodeSync5",
    description:
      "A website for a startup company that provides software development services. The website is built with Next.js 14, featuring a modern design and smooth animations using GSAP.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },

      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
      {
        name: "ShadCN",
        color: "blue-text-gradient",
      },
    ],
    image: CodeSync5,
    source_code_link: "https://github.com/Chy-Zaber-Bin-Zahid/It-Firm",
    live_link: "https://it-firm-five.vercel.app/",
  },
  {
    name: "Car Showcase",
    description:
      "A comprehensive front-end application built with Next.js 14, designed for car enthusiasts to search and explore detailed information about various cars.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Headles-cms",
        color: "pink-text-gradient",
      },
    ],
    image: CarShowcase,
    source_code_link: "https://github.com/Walid-IbneHasan/Car-Showcase",
    live_link: "https://car-showcase-beta-ashen.vercel.app/",
  },
  {
    name: "iPhone Site Remodification",
    description:
      "Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models",
    tags: [
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: iPhoneSiteRemodified,
    source_code_link:
      "https://github.com/Walid-IbneHasan/iphone-site-remodified",
    live_link: "https://iphone-site-remodified-rub1.vercel.app/",
  },
  {
    name: "Note Creation",
    description:
      "A full-stack application designed to help users create and manage notes efficiently. This project features:",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: NoteCreation,
    source_code_link: "https://github.com/Walid-IbneHasan/Note-Creation",
    live_link: "https://note-creation.onrender.com/",
  },
  {
    name: "Split Bill",
    description:
      "About This is a simple react project where I can add friends and split the bill with them. In this project I can also see how much I have to pay to a certain friend considering who is paying the bill. This is a single page project to practice my react skills.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "state-management",
        color: "green-text-gradient",
      },
      {
        name: "hooks",
        color: "pink-text-gradient",
      },
    ],
    image: SplitBill,
    source_code_link: "https://github.com/Walid-IbneHasan/Split-Bill",
    live_link: "https://split-bill-hazel.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
