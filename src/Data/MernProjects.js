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
    name: "Open Source",
    sub: "GirlScript Summer of Code (GSSoC)",
    date: '10th MAY 2024 - 10th AUG 2024',
    from: "GirlScript Summer of Code is a 3-month long #OpenSource program by GirlScript Foundation.",
    grade: null,
  },
{
    name: "Full Stack Developer",
    sub: 'Mern-Stack (MongoDB, Express, React.js, and Node.js)',
    date: 'JAN 2024 - AUG 2024',
    from: 'I have learnt Web Dev through Online Courses and also get certifications from there.',
    grade: null,
  },
  {
    name: 'Data Structure & Algorithm',
    sub: 'Arrays, Linked List, Stacks, Queues, Trees, Graphs, Hash Tables, Searching Algorithm, Sorting Algorithm, Divide & Conquer Algorithms, Recursion.',
    date: 'AUG 2024  - DEC 2024',
    from: 'Data Structures are like the Lego bricks of programming—they help us organize and manage data efficiently. C++ is like the heavyweight champion of programming languages. ',
    grade: null,
  },
  {
    name: 'Graduation',
    sub: 'OOPs, Operating System, Data Structure and Algorithm, DBMS, Computer Networks, Fundamentals of Artificial Intelligence.',
    date: 'JULY 2023 - AUG 2026',
    from: 'Currently pursuing Bachelor of Computer Applications (BCA) from KRISHNA BALLAV COLLEGE, BERMO, BOKARO',
    grade: '8.0 (CGPA)'
  }
]

