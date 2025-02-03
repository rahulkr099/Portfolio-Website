import { BiLogoMongodb, BiLogoNodejs,BiLogoTailwindCss, } from "react-icons/bi";
import { TbBrandNextjs, TbApi,} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
// import ComingSoonImg from '/Coming Soon.png'
// import BlogifyImg from '/Blogify.png'
const ComingSoonImg = "https://res.cloudinary.com/dvawqmwkh/image/upload/v1736681211/Coming_Soon_nmklxj.png"

const BlogifyImg = "https://res.cloudinary.com/dvawqmwkh/image/upload/v1736681212/Blogify_ifn0lb.png"

const ShortlyAppImg = "https://res.cloudinary.com/dvawqmwkh/image/upload/v1738577750/Screenshot_from_2025-02-03_15-34-53_izg41o.png"

const MernData = [
    {
      id: 1,
      bgCol: 'notwhite',
      type:'mern',
      name: "Blogify App",
      image: BlogifyImg,
      icons: [BiLogoMongodb,SiExpress,BiLogoNodejs],
      description: "This web app is used for creating and uploading blogs.",
      github: "https://github.com/rahulkr099/Blogify-App",
      demo: "https://blogify-beryl.vercel.app/",
    },
    {
      id: 2,
      bgCol: 'notwhite',
      type:'mern',
      name: "Shortly App",
      image: ShortlyAppImg,
      icons: [BiLogoTailwindCss,BiLogoReact ,BiLogoMongodb,BiLogoNodejs],
      description: 'This is a powerful URL shortener that helps you create short links, customize them.',
      github: "https://github.com/rahulkr099/Shortly",
      demo: "https://www.shortlyapp.in",
    },
    // {
    //   id: 3,
    //   bgCol: 'notwhite',
    //   type:'mern',
    //   name: "Shortly App",
    //   image: ComingSoonImg,
    //   icons: [ BiLogoTailwindCss,TbApi,BiLogoReact,BiLogoMongodb],
    //   description: "This application helps you to upload and save blog posts with backend.",
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   id: 4,
    //   bgCol: 'notwhite',
    //   type:'mern',
    //   name: "Twitter Clone",
    //   image: ComingSoonImg,
    //   icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss,BiLogoMongodb],
    //   description: "This is fully fledged twitter clone with backend.",
    //   github: "#",
    //   demo: "#",
    //  } ,
    //  {
    //   id: 5,
    //   bgCol: 'notwhite',
    //   type:'mern',
    //   name: "StackOverflow Clone",
    //   image: ComingSoonImg,
    //   icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss,BiLogoMongodb],
    //   description: "This is basic fledged stackoverflow clone with backend.",
    //   github: "#",
    //   demo: "#",
    //  } ,
]
export default MernData;
export const timeline = [
  {
    name: "Open Source Contribution",
    sub: "GirlScript Summer of Code Extended (GSSoC)",
    link:`https://drive.google.com/file/d/1K5FIdZJ-HcP-FMnL8OIi52mxxhs9raXA/view?usp=sharing`,
    date: 'Oct 2024 - Nov 2024',
    from: "I have done contribution in #OpenSource program by GirlScript Foundation. And their Open Source Contribution made to public repositories is highly valuable for my skills growth and learning.",
    
  },
{
    name: "Full Stack Developer",
    sub: 'Mern-Stack (MongoDB, Express, React.js, and Node.js)',
    link:`https://drive.google.com/file/d/1sQa8JZc7dC1QfJhr7Xj9qBg8hBig9H9P/view?usp=sharing`,
    date: 'Feb 2024 - Dec 2024',
    from: 'I have studied Web Development from Udemy Course. I have learnt a lot of modern technologies regarding web development and best industrial practices.',
    
  },
  {
    name: 'MERN Intership',
    sub: 'MongoDB, ReactJS, ExpressJS, NodeJS, Problem Solving',
    link:`https://drive.google.com/file/d/1Z2RdCVRTKRxhbDWHlDOnmtI5W0iWqmjz/view?usp=sharing`,
    date: 'Oct 2024 - Dec 2024',
    from: 'I had the incredible opportunity to work on MERN stack projects, which allowed me to enhance my technical skills and gain hands-on experience.',
    
  },
  {
    name: 'Software Tester Intern',
    sub: 'Testing, Application Tester, API Testing, Problem Solving',
    link:`https://drive.google.com/file/d/16xM1VLirO-fn0BZb1CiDjX9rUU-u-FFe/view?usp=sharing`,
    date: 'Oct 2024 - Nov 2024',
    from: 'I have done Tester Internship from Wyreflow Technologies of 1 month long. I helps me a lot to improve my testing skills and their teams are very supportive.',
    
  }
]

