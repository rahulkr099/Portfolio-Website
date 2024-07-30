import { BiLogoMongodb, BiLogoReact,BiLogoTailwindCss, } from "react-icons/bi";
import { TbBrandNextjs, TbApi,} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import ComingSoonImg from '/Coming Soon.png'


const MernData = [
    {
      id: "1",
      name: "StudyNotion",
      image: ComingSoonImg,
      icons: [BiLogoReact,BiLogoTailwindCss,BiLogoMongodb],
      description: "This web app is for students to learn through courses.",
      github: "#",
      demo: "#",
    },
    {
      id: "2",
      name: "Music Academy",
      image: ComingSoonImg,
      icons: [BiLogoTailwindCss, TbBrandNextjs,BiLogoMongodb],
      description: 'This web app is for music learners.',
      github: "#",
      demo: "#",
    },
    {
      id: "3",
      name: "Blog Post",
      image: ComingSoonImg,
      icons: [ BiLogoTailwindCss,TbApi,BiLogoReact,BiLogoMongodb],
      description: "This application helps you to upload and save blog posts with backend.",
      github: "#",
      demo: "#",
    },
    {
      id: "4",
      name: "Twitter Clone",
      image: ComingSoonImg,
      icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss,BiLogoMongodb],
      description: "This is fully fledged twitter clone with backend.",
      github: "#",
      demo: "#",
     } ,
     {
      id: "4",
      name: "StackOverflov Clone",
      image: ComingSoonImg,
      icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss,BiLogoMongodb],
      description: "This is basic fledged stackoverlflow clone with backend.",
      github: "#",
      demo: "#",
     } ,
]
export default MernData;
