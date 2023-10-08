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
  tailwind,
  nodejs,
  git,
  meta,
  starbucks,
  jesus,
  digitalcrafts,
  tesla,
  shopify,
  trello,
  fetchandpost,
  portfolio,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  pgsql,
  supabase,
  firebase,
  stepzen,
  sanity,
  metamask,
  thirdweb,
  apollo,
  graphql,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Pokemon Collector",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgresSQL",
    icon: pgsql,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Stepzen",
  //   icon: stepzen,
  // },
  // {
  //   name: "Sanity",
  //   icon: sanity,
  // },
  // {
  //   name: "Metamask",
  //   icon: metamask,
  // },
  // {
  //   name: "Third Web",
  //   icon: thirdweb,
  // },
  // {
  //   name: "Apollo",
  //   icon: apollo,
  // },
  // {
  //   name: "GraphQL",
  //   icon: graphql,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer Studen",
    company_name: "DigitalCrafts",
    icon: digitalcrafts,
    iconBg: "#383E56",
    date: "November 2017 - March 2018",
    points: [
      "Researched and implemented new technologies to improve development processes.",
      "Participated in a variety of campus events, such as career fairs, lectures, and workshops.",
      "Collaborated with other developers on code reviews, bug fixes, and feature development.",
      "Designed efficient database schemas to store data from the web applications.",
    ],
  },
  {
    title: "Further Education",
    company_name: "Self Teaching",
    icon: jesus,
    iconBg: "#E6DEDD",
    date: "Nobember 2017 - Present",
    points: [
      "The ability and motivation to keep learning and staying updated with the fast-paced web development industry.",
      "Understanding of hosting options, server setup, and deployment methods using platforms like AWS, Heroku, or Vercel.",
      "Understanding of both SQL and NoSQL databases, and how to interact with them using languages like SQL, Appwrite, or Firebase.",
      "Ability to connect to external APIs, as you'll need to communicate with the ChatGPT API or other conversational AI services.",
      "Self-motivated and eager to tackle new projects, continuously expanding knowledge through self-guided learning.",
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
    name: "Trello",
    description:
      "A clone of Trello that allows you stay up to date with your tasks! GPT will assist in notifying how many tasks within each board you have. You are freely able to move the boards, and transfer over cards from one board to another. Powered by Appwrite, a task can be created, updated, and deleted from the database.",
    tags: [
      {
        name: "NextJS 13",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Platform.OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: trello,
    source_code_link: "https://trello-ai-clone-e0uh1cgub-jesus369.vercel.app/",
    github_link: "https://github.com/Jesus369/trello-ai-clone",
  },
  {
    name: "Fetch and Post",
    description:
      "A simple website created with the help of Mock API. Interact with a live API. Make a post and get request wil be made to update to the list.",
    tags: [
      {
        name: "NextJS 13",
        color: "blue-text-gradient",
      },
      {
        name: "Fetch",
        color: "green-text-gradient",
      },
      {
        name: "MockAPI.io",
        color: "pink-text-gradient",
      },
    ],
    image: fetchandpost,
    source_code_link: "https://nextjs-server-actions-five.vercel.app/",
    github_link: "https://github.com/Jesus369/nextjs-server-actions",
  },
  {
    name: "Portfolio",
    description:
      "Welcome to my Portfolio! A learning experience where I dived into learning animating motion with Framer-Motion, and Three JS alongside with other repos such as react-three/fiber, react-three/drei, and React Vertical Timeline",
    tags: [
      {
        name: "NextJS 13",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
    github_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
