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
  LandingPage,
  zerobyte,
  remoteintegrity,
  python,
  django,
  redis,
  aws,
  PowerBI,
  AquaWare,
  CodeNerve,
  MCQ,
  PowerBIDashboard
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "AWS",
    icon:aws
  },
  {
    name: "Power BI",
    icon: PowerBI,
  },
  {
    name:"Redis",
    icon:redis
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
    name: "Three JS",
    icon: threejs,
  },
  
];

const experiences = [
  {
    title: "Software Engineer, Data Analyst",
    company_name: "Remote Integrity",
    icon: remoteintegrity,
    iconBg: "#000090",
    date: "August 2025- Ongoing",
    points: [
      "Processed millions of Water System data of government of Netherlands and its provinces",
      "Prepared Power BI and Superset dashboards and reports for better visualization and understanding of data trends.",
      "Created web application based on all of these data using DRF and NextJS RTK Query .",
      "Cloud deployment and management using AWS services, Docker, Kubernetes and Terraform.",
      "Automated data pipelines using Python scripts and Airflow to streamline data processing tasks.",
    ],
  },
  {
    title: "Junior Backend Developer",
    company_name: "Zero Byte",
    icon: zerobyte,
    iconBg: "#87CEEB",
    date: "January 2025- June 2025",
    points: [
      "Implemented Payment API(Bkash API) , MIM SMS API, Steadfast API, Pathao API ",
      "Used Redis, Celery, RabbitMQ for task scheduling and caching to improve application performance.",
      "Deployed in AWS using EC2, S3, RDS to ensure scalability and reliability.",
      "Created the backend for a large scale POS application using Django Rest Framework.",
      "Dockerized applications to ensure consistency across different environments and streamline the deployment process.",
    ],
  },
  {
    title: "Junior Front End Developer",
    company_name: "ITbee Solution",
    icon: itbee,
    iconBg: "#383E56",
    date: "August 2024- September 2024",
    points: [
      "Building and maintaining web applications using ReactJS, NextJS, and related technologies.",
      "Collaborating with designers, product managers, and developers to deliver high-quality solutions.",
      "Developing responsive and adaptive designs while ensuring compatibility across various browsers.",
      "Engaging in code reviews and offering constructive feedback to improve code quality.",
      "Integrating APIs to retrieve and display server-side data on the client interface.",
    ],
  },
  {
    title: "Internship",
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
  
];

const testimonials = [
  {
    testimonial:
      "Walid's technical skills, quick problem-solving abilities and immense work ethic are impressive, making them a valuable asset to any team.",
    name: "Martijn Van Ruiten",
    designation: "CEO",
    company: "AquaWare",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQGK9aT9HbX0_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1638926834700?e=1729728000&v=beta&t=ga5b6yqE0C3jxW7JFkWpipACOE7TgPrggP_kHBF0acU",
  },
  
  {
    testimonial:
      "Walid combines deep technical expertise with a strong work ethic, consistently delivering exceptional results as I've noticed during his University period.",
    name: "Sagir Ahmed",
    designation: "Senior Developer",
    company: "ITBee Solutions",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQHe9d_MRl41bQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1715137251142?e=1724655600&v=beta&t=h3POhja_51N7yIWXM3Ub0_rVzBfVPkAqhZgnD0GQ4zQ",
  },
  {
    testimonial:
      "Walid was an exceptional Next.js developer at Achintya Solutions, consistently delivering innovative and high-quality work. Much appreciated!",
    name: "Achintya",
    designation: "CEO",
    company: "Achintya Solutions",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFdh-Y6aYX9_g/company-logo_100_100/company-logo_100_100/0/1714597349521/achintyasolutions_logo?e=1732147200&v=beta&t=goAQRPUh6nPetJ3O8Oq1fu53g8E1SlUfFXUQaFdHhpY",
  },
];

const projects = [
  {
    name: "MCQ",
    description:
      "This is a live MCQ application where users can take exams on various subjects. It's a timed exam platform that provides instant feedback and detailed results analysis.",
    tags: [
      {
        name: "Django ",
        color: "green-text-gradient",
      },
      {
        name: "DRF",
        color: "blue-text-gradient",
      },

      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "blue-text-gradient",
      },
      {
        name:"Celery",
        color:"green-text-gradient"
      },
      {
        name:"Docker",
        color:"blue-text-gradient"
      },
      {
        name:"Nginx",
        color:"pink-text-gradient"
      },
      {
        name:"RTK Query",
        color:"orange-text-gradient"
      }
    ],
    image: MCQ,
    source_code_link:"https://github.com/Walid-IbneHasan/MCQ-Optimized",
    live_link: "",
  },
  {
    name: "CodeNerve",
    description:
      "This is a project for a Software Development Company. They provide various services regarding software development and IT solutions.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },

      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "Optimistic Caching",
        color: "blue-text-gradient",
      },
    ],
    image: CodeNerve,
    source_code_link:"https://github.com/Walid-IbneHasan/codenerve-digital-fusion",
    live_link: "https://www.codenerve.net/",
  },
  {
    name: "Aqua Ware",
    description:
      "This is a project about Netherlands Water System Company. They provide various services regarding water supply and management in Netherlands.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: AquaWare,
    source_code_link:"https://github.com/Walid-IbneHasan/Aqua-Ware",
    live_link: "https://www.aquaware.nl/",
  },
  {
    name:"Power BI Dashboard",
    description:
      "This project involves creating interactive Power BI dashboards to visualize complex datasets of government of Netherlands, enabling stakeholders to make data-driven decisions effectively.",
    tags: [
      {
        name: "Power BI",
        color: "orange-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "blue-text-gradient",
      },
      {
        name: "DAX",
        color: "green-text-gradient",
      },
      {
        name:"Data Processing",
        color:"pink-text-gradient"
      },
    ],
    image: PowerBIDashboard,

  },
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
    live_link: "https://codesync5.vercel.app/",
  },
  {
    name: "Car Showcase",
    description:
      "A comprehensive front-end application built with Next.js 14, designed for car enthusiasts to search and explore detailed information about various cars.",
    tags: [
      {
        name: "NextJS",
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
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
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
    name: "Landing Page",
    description:
      "This is a landing page design that I did for a client. The design is simple and clean, with a focus on the product and its features.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: LandingPage,
    source_code_link: "https://github.com/Walid-IbneHasan/Landing-Page",
    live_link: "https://landing-page-mauve-phi.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
