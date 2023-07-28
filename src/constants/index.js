import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  boostrap,
  tailwind,
  nodejs,
  mongodb,
  linkedin,
  twitter,
  instagram,
  imgGen,
  threejs,
  github,
  esefj,
  zsmart,
  php,
  laravel,
  mysql,
  python,
  django,
  java,
  lablib,
  esef,
  eventj,
  eisenHower,
  tictactoe,
  ensaj,
  html,
  css,
  c,
  cpp,
  git,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    percentage:95,
  },
  {
    name: "CSS 3",
    icon: css,
    percentage:85,
  },
  {
    name: "JavaScript",
    icon: javascript,
    percentage:80,
  },
  {
    name: "React JS",
    icon: reactjs,
    percentage:85,
  },
  {
    name: "Boostrap",
    icon: boostrap,
    percentage:85,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    percentage:70,
  },
  {
    name: "Node JS",
    icon: nodejs,
    percentage:80,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    percentage:80,
  },
  {
    name: "Three JS",
    icon: threejs,
    percentage:60,
  },
  {
    name: "git",
    icon: git,
    percentage:80,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  //   percentage:80,
  // },
  {
    name: "PHP",
    icon: php,
    percentage:70,
  },
  {
    name: "Laravel",
    icon: laravel,
    percentage:70,
  },
  {
    name: "MySql",
    icon: mysql,
    percentage:70,
  },
  {
    name: "Python",
    icon: python,
    percentage:90,
  },
  {
    name: "Django",
    icon: django,
    percentage:85,
  },

  {
    name: "Java",
    icon: java,
    percentage:80,
  },
  {
    name: "C",
    icon: c,
    percentage:65,
  },
  {
    name: "CPP",
    icon: cpp,
    percentage:60,
  }
];


const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "ESEF El jadida · Internship",
    icon: esefj,
    iconBg: "#383E56",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications for student registration using Laravel, PHP 8 and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating authentication and authorization mechanisms to ensure secure access and protect sensitive student information.",
      "Employing version control systems (e.g., Git) for collaborative development, tracking changes, and ensuring code integrity."
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Z SMART SERVICE · Internship",
    icon: zsmart,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jun 2022",
    points: [
      "Providing a comprehensive library of hands-on coding labs and projects across various programming languages, frameworks, and technologies.",
      "Incorporating step-by-step tutorials and guided exercises to support learners in understanding and applying concepts effectively.",
      "Ensuring mobile compatibility and a responsive design, enabling users to access and learn from Labs on various devices.",
    ],
  }
];

const educations = [
  {
    title: "Bac Science Math",
    School_name: "Lycée technique ibn soulayman rasmouki - Tiznit",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 2017 - Jun 2019",
  },
  {
    title: "Deux années du cycle préparatoire",
    School_name: "Ecole Nationale des sciences appliquées d'El Jadida",
    icon: ensaj,
    iconBg: "#383E56",
    date: "Sep 2019 - Jun 2022",
  },
  {
    title: "Ingénierie Informatique et Technologies Emergentes (2ITE)",
    School_name: "Ecole Nationale des sciences appliquées d'El Jadida",
    icon: ensaj,
    iconBg: "#383E56",
    date: "Sep 2023- Present",
  },
]

const projects = [
  {
    name: "LabLib",
    description:
      "Lablib is a learning platform fousing on the learning by doing approach. Developers and programmers can learn and develop theirs skill with Labs",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind ",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "ES6",
        color: "red-text-gradient",
      },
    ],
    image: lablib,
    source_code_link: "#",
  },
  {
    name: "Esefj",
    description:
      "A web-based platform facilitating student registration and management at Esef El Jdadida.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "red-text-gradient",
      },
    ],
    image: esef,
    source_code_link: "https://esefj.ma/",
  },
  {
    name: "EventJ",
    description:
      "In response to the FABLAB event organized by Ensaj in 2022, I created a user-friendly web page that served as a comprehensive resource hub. This platform contained all the essential information needed by attendees, ensuring their seamless access to event details and updates.",
    tags: [
      {
        name: "html 5",
        color: "blue-text-gradient",
      },
      {
        name: "css 3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "red-text-gradient",
      },
    ],
    image: eventj,
    source_code_link: "https://fablab-ucd.org/",
  },
  {
    name: "Eisen Hower Matrix",
    description:
      "Aims to help users manage their tasks effectively by providing a simple and intuitive interface for organizing and prioritizing tasks based on the Eisenhower matrix.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: eisenHower,
    source_code_link: "https://github.com/mohamed2020m/eisenhowerMatrix",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Play Tic Tac Toe game",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://mohamed2020m.github.io/Tic-Tac-Toe/public/index.html",
  },
  {
    name: "Image Generator Using StabilityAI",
    description:
      "Generate images from text Using StabilityAI",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra-UI",
        color: "green-text-gradient",
      },
      {
        name: "Emotion",
        color: "pink-text-gradient",
      },
    ],
    image: imgGen,
    source_code_link: "https://github.com/mohamed2020m/iOS-Calculator",
  },
];

const contacts = [
  {
    title: "Twitter",
    icon: twitter,
    url: "https://twitter.com/Leeuw02",
  },
  {
    title: "Github",
    url: "https://github.com/mohamed2020m/",
    icon: github,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/mohamed-essabir-a23633196/",
    icon: linkedin,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/leeuw_med/",
    icon: instagram,
  },
];

const textTransition = [
  {
    greeting: "Hi, Call me",
    nickname: "Leeuw"
  }, 
  {
    greeting: "Welcome To My",
    nickname: "Portfolio"
  }, 
  {
    greeting: "Don't hesitate To",
    nickname: "Contact me 😃"
  }, 
]


export {
  textTransition,
  services,
  technologies,
  educations,
  experiences,
  projects,
  contacts,
};
