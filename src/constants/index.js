import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  java,
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
  shopify,
  ecom,
  lost,
  titan,
  book,
  tomato,
  news,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
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
    name: "Java",
    icon: java,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    title: "Software Developer Intern",
    company_name: "TheGrafx",
    //icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Enhanced observability and traceability by implementing cross app tracing between microservices. Engineered compliance-driven features to adhere to regulatory changes, effectively reducing business workload.",
      "Developed and optimized Restful API endpoints using Node.js and Express, resulting in a 35% decrease in response times for requests.",
      "Implemented Peer to Peer Chat application feature. This feature is role based which denotes which Role can start a conversation with which roles.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Varcons Technologies",
    //icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Played a key role in the React 18 upgrade and implemented server-side rendering, which improved website loading speed by 30% and optimized the overall user experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Sutish Tech Solutions",
    //icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Analyzed and optimized performance bottlenecks in 8+ existing back-end systems, such as database queries and storage solutions, to increase responsiveness.",
      "Communicated with line of business and assisted in requirements analysis, High Level Design, Low Level Design and code development for 3 applications.",
      "Participated in code reviews and software design meetings, resulting in a 15% improvement in code quality and a 10% reduction in bug-related delays.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "xx",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Bhavy's contribution as a web developer intern helped streamline our internal tools, saving us countless hours of manual work. His impact was immediate and lasting.",
    name: "Sneha Roy",
    designation: "Operations Manager",
    company: "TheGrafx",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Bhavy's attention to detail and commitment to delivering high-quality code impressed everyone on the team. He quickly became an asset to our development cycle.",
    name: "Rahul Verma",
    designation: "Senior Developer",
    company: "Varcons Technologies",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Bhavy played a crucial role in redesigning our website, making it more user-friendly and visually appealing. Our customer engagement has improved significantly since.",
    name: "Priya Singh",
    designation: "Marketing Head",
    company: "Sutish Tech Solutions",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Web App",
    description:
      "A full-stack MERN-based web application for seamless online shopping. Features include product browsing, a secure cart system, user authentication, and an admin panel for inventory management.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Authentication",
        color: "green-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/Bhavy457/Ecommerce-Site-MERN",
  },
  {
    name: "Lost and Found App",
    description:
      "A responsive website that helps users report and find lost or found items. It features easy item listing, search filters, and secure messaging to connect users and reunite them with their belongings.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "College",
        color: "green-text-gradient",
      },
      {
        name: "Real-World",
        color: "pink-text-gradient",
      },
    ],
    image: lost,
    source_code_link: "https://github.com/Bhavy457/Lost-And-Found-App",
  },
  {
    name: "Book Store Management",
    description:
      "A Java-based web application for managing book inventory, sales, and customer records. It includes features like stock tracking, order processing, and an intuitive dashboard for store administrators.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Servelets",
        color: "green-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/Bhavy457/BookStore-Management",
  },
  {
    name: "Titan Settler Project",
    description:
      "A gamified React-based web application developed for NASA Space Apps Challenge. Simulating life on Titan, it combines strategy and exploration elements, earning 1st place in the competition.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NASA",
        color: "green-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
    ],
    image: titan,
    source_code_link: "https://github.com/Bhavy457/Titan-Settlers",
  },
  {
    name: "NEWS App",
    description:
      "An Android application built using Java and Firebase for real-time news updates. Features include category filters, personalized feeds, and seamless backend integration for efficient data management.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Bhavy457/News-Application",
  },
  {
    name: "Tomato Leaf Disease Classifier",
    description:
      "A Python-based machine learning project utilizing Kaggle data to classify tomato leaf diseases. Features include image processing and predictive modeling to assist in early disease detection.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: tomato,
    source_code_link:
      "https://github.com/Bhavy457/Tomato-Leaf-Disease-Classifier",
  },
];

export { services, technologies, experiences, testimonials, projects };
