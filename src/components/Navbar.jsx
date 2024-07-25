import { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import NameImg from "../assets/Images/name.png"
import { useTheme } from "../useContext/ThemeContext";
import {motion} from 'framer-motion'


const links = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Projects",
    link: "projects",
  },
  // {
  //   title: "Experience",
  //   link: "experience",
  // },
  {
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {theme,toggleTheme} = useTheme()
  console.log('themeName:',theme)
  console.log("theme:",toggleTheme);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <header className="body-font fixed inset-x-0 z-50 bg-gray-300 text-black dark:bg-neutral-900 dark:text-white">
    
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
                >{item.title}</motion.div>
              </Link>
            );
          })}
        <label className='flex cursor-pointer select-none items-center w-16 '>
        <div className='relative right-6'>
          <input
            type='checkbox'
            checked={isChecked}
            onClick={toggleTheme}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-10 w-20 rounded-full ${
              isChecked ?'bg-day bg-cover':'bg-night bg-cover'
            }`}
          ></div>
          <div
            className={`absolute left-2 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 dark:bg-white transition border-[1.9px] border-red-300 dark:border-gray-800 bg-opacity-60 dark:bg-opacity-20 ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
        </nav>
        <div
          
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div className="rounded-b-lg bg-gray-300 text-black dark:text-white dark:bg-gray-800 shadow-lg px-5 pb-4 ">
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
                      {item.title}
                    </Link>
                  );
                })}
              <label className='flex cursor-pointer select-none items-center w-16 '>
        <div className='relative left-28 md:left-80 '>
          <input
            type='checkbox'
            checked={isChecked}
            onClick={toggleTheme}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-10 w-20 rounded-full ${
              isChecked ?'bg-day bg-cover':'bg-night bg-cover'
            }`}
          ></div>
          <div
            className={`absolute left-2 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 dark:bg-white transition border-[1.9px] border-red-300 dark:border-gray-800 bg-opacity-60 dark:bg-opacity-20 ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>

              </nav>
            </div>
          </div>
        )}
      </div>
    
    </header></div>
  );
};

export default Navbar;
