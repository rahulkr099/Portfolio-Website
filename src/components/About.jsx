import AboutImg from "../assets/Images/about.webp"
import { Link } from "react-scroll";
import {useTheme} from "../useContext/ThemeContext";
import {motion} from 'framer-motion'

const About = () => {
  const {theme} = useTheme()

  
  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <section className="body-font overflow-hidden bg-gray-200 text-black dark:bg-black dark:text-white">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2">
            About Me
          </h1>
          <p
           
            className="text-lg mx-auto leading-relaxed font-medium text-green-400 text-center"
          >
            Why hire me ?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <motion.div
            layout='position'
            initial={{opacity:0,x:-59}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:false, amount:'0.1'}}
            transition={{duration:2,stiffness:120}}
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center mx-auto pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={AboutImg}
            />
          </motion.div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            <motion.p
              layout='position'
              initial={{opacity:0,x:59}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:false, amount:'0.1'}}
              transition={{duration:1.5,stiffness:120}}
              className="font-medium text-lg lg:text-base xl:text-xl leading-loose xl:leading-8"
            >
              I am a passionate and dedicated web developer with a strong background in creating visually stunning and highly functional websites.<br/>
              Throughout my career, I have developed excellency in various web technologies, including HTML5, CSS3, and JavaScript. I am professional in popular libraries such as ReactJS and frameworks like NextJS and TailwindCSS, enabling me to build robust and responsive websites.<br/>
              &emsp; &emsp;  I am eager to embrace new challenges and contribute to cutting-edge projects. Please feel free to connect with me through my social media links.
            </motion.p>
            <div
              
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <motion.button 
              layout='position'
              initial={{opacity:0,y:59}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false, amount:'0.1'}}
              transition={{duration:1,stiffness:120}}
              className="inline-flex font-medium text-white bg-gray-900 border-2 border-white py-3 px-7 focus:outline-none hover:bg-white hover:border-green-500 hover:text-black rounded-full text-md xl:px-10">
                <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                  to="contact"
                >
                  Hire Me
                </Link>
              </motion.button>
              <a
                // href="https://drive.google.com/drive/"
                onClick={()=> alert("Need some time for building Resume")}
                target="_blank"
                rel="noreferrer"
              >
                <motion.button 
                layout='position'
                initial={{opacity:0,y:59}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false, amount:'0.1'}}
                transition={{duration:1,stiffness:120}}
                className="inline-flex font-medium text-white bg-green-500 border-2 border-white py-3 px-7 focus:outline-none hover:bg-white hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default About;
