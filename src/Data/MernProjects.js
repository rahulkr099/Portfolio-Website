import { BiLogoMongodb, BiLogoReact,BiLogoTailwindCss, } from "react-icons/bi";
import { TbBrandNextjs, TbApi,} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import ComingSoonImg from '/Coming Soon.png'

const MernData = [
    {
      id: 1,
      bgCol: 'notwhite',
      type:'mern',
      name: "StudyNotion",
      image: ComingSoonImg,
      icons: [BiLogoReact,BiLogoTailwindCss,BiLogoMongodb],
      description: "This web app is for students to learn through courses.",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      bgCol: 'notwhite',
      type:'mern',
      name: "Music Academy",
      image: ComingSoonImg,
      icons: [BiLogoTailwindCss, TbBrandNextjs,BiLogoMongodb],
      description: 'This web app is for music learners.',
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      bgCol: 'notwhite',
      type:'mern',
      name: "Blog Post",
      image: ComingSoonImg,
      icons: [ BiLogoTailwindCss,TbApi,BiLogoReact,BiLogoMongodb],
      description: "This application helps you to upload and save blog posts with backend.",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      bgCol: 'notwhite',
      type:'mern',
      name: "Twitter Clone",
      image: ComingSoonImg,
      icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss,BiLogoMongodb],
      description: "This is fully fledged twitter clone with backend.",
      github: "#",
      demo: "#",
     } ,
     {
      id: 5,
      bgCol: 'notwhite',
      type:'mern',
      name: "StackOverflow Clone",
      image: ComingSoonImg,
      icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss,BiLogoMongodb],
      description: "This is basic fledged stackoverflow clone with backend.",
      github: "#",
      demo: "#",
     } ,
]
export default MernData;
export const timeline = [
  {
    name: "Open Source Contribution",
    sub: "GirlScript Summer of Code Extended (GSSoC)",
    link:`https://drive.google.com/file/d/1K5FIdZJ-HcP-FMnL8OIi52mxxhs9raXA/view?usp=sharing`,
    date: 'Oct 2024 - Nov 2024',
    from: "I have done contribution in #OpenSource program by GirlScript Foundation. And their Open Source Contribution made to public repositories is considered highly valuable for my skills growth.",
    
  },
{
    name: "Full Stack Developer",
    sub: 'Mern-Stack (MongoDB, Express, React.js, and Node.js)',
    link:``,
    date: 'Jan 2024 - Aug 2024',
    from: 'I have learnt Web Dev through Online Courses and also get certifications from there.',
    
  },
  {
    name: 'Data Structure & Algorithm',
    sub: 'Arrays, Linked List, Stacks, Queues, Trees, Graphs, Hash Tables, Searching Algorithm, Sorting Algorithm, Divide & Conquer Algorithms, Recursion.',
    link:``,
    date: 'Dec 2024  - Mar 2025',
    from: 'Data Structures are like the Lego bricks of programming—they help us organize and manage data efficiently. C++ is like the heavyweight champion of programming languages. ',
    
  },
  {
    name: 'Software Tester Intern',
    sub: 'Testing, Application Tester, API Testing, Problem Solving',
    link:`https://drive.google.com/file/d/16xM1VLirO-fn0BZb1CiDjX9rUU-u-FFe/view?usp=sharing`,
    date: 'Oct 2024 - Nov 2024',
    from: 'I have done Tester Internship from Wyreflow Technologies of 1 month long. I helps me a lot to improve my testing skills and their teams are very supportive.',
    
  }
]

