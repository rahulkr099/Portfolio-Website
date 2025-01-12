import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import NameImg from "../assets/Images/name.webp"
import {motion} from 'framer-motion'
import ToggleMode from "./ToggleMode";
import { ThemeContext } from "../Hooks/ThemeContext";
import homeImg from '/svg/home.svg'
import aboutImg from '/svg/about.svg'
import skillsImg from '/svg/skills.svg'
import projectsImg from '/svg/projects.svg'
import experienceImg from '/svg/experience.svg'
import contactImg from '/svg/contact.svg'

const links = [
  {  icon: homeImg,
    title: "Home",
    link: "home",
  },
  { icon: aboutImg,
    title: "About",
    link: "about",
  },
  { icon: skillsImg,
    title: "Skills",
    link: "skills",
  },
  { icon: projectsImg,
    title: "Projects",
    link: "projects",
  },
  { icon: experienceImg,
    title: "Experience",
    link: "experience",
  },
  { icon: contactImg,
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {theme} = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <header className="body-font fixed inset-x-0 z-50 w-screen bg-[rgba(255,255,255,0.8)] text-black h-20  dark:bg-[rgba(56,56,56,0.6)] dark:text-white">
    
      <div className="mx-auto py-2 px-5 flex flex-row justify-between items-center lg:py-4">
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex justify-center items-center"
        >
          <img
            className="w-12 h-12 ml-3 cursor-pointer scale-125 lg:scale-150 lg:ml-10 hover:animate-pulse"
            src={NameImg}
            alt="Rahul"
          />
        </Link>
        <nav
         
          className="hidden md:ml-auto lg:flex flex-wrap items-center text-xl justify-center"
        >
          {links.map((item) => {
            return (
              <Link
                key={item.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to={item.link}
                
                className="mr-5 cursor-pointer hover:text-green-400 hover:animate-bounce md:mr-12"
              >
                <motion.div
                whileHover={{scale:1.5,textShadow:"0px 0px 8px rgba(0,255,0,0.5)"}}
                ><div className="flex"><img src={item.icon} alt="" className="h-7"/>{item.title}</div></motion.div>
              </Link>
            );
          })}
        <ToggleMode></ToggleMode>
        </nav>
        <div
          
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6 text-red-500 hover:font-bold hover:scale-150" />
            ) : (
              <BiMenu className="h-6 w-6 text-black dark:text-white hover:scale-150 hover:text-green-400 dark:hover:text-green-400" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div className="rounded-b-lg bg-[rgba(114,181,186,0.1)] text-black dark:text-white backdrop-blur dark:bg-[rgba(56,56,56,0.6)] shadow-lg px-5 pb-4 ">
              <nav
                
                className="flex flex-col gap-y-7 text-xl"
              >
                {links.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      onClick={() => setIsMenuOpen(false)}
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={750}
                      to={item.link}
                      className="cursor-pointer hover:text-green-400"
                    >
                     <motion.div
                     
                     whileHover={{scale:1.5,textShadow:"0px 0px 8px rgba(0,255,0,0.5)"}}
                     ><div className="flex justify-center items-center"><img src={item.icon} alt="" className="h-7"/>{item.title}</div></motion.div>
                    </Link>
                  );
                })}
             <div className="mx-auto"> <ToggleMode></ToggleMode></div>

              </nav>
            </div>
          </div>
        )}
      </div>
    
    </header></div>
  );
};

export default Navbar;
