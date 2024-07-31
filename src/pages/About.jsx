import { useContext } from "react";
import AboutImg from "../assets/Images/about.webp"
import Buttons from "../components/Buttons";
import { ThemeContext } from "../Hooks/ThemeContext";
import { motion } from 'framer-motion'

const About = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id="about" className={`${theme === "Light" ? 'light' : 'dark'}`}>
      <section className="body-font overflow-hidden bg-gray-200 text-black dark:bg-black dark:text-white">
        <div className="p-5 mx-auto md:mt-0 md:mx-10 lg:mx-16">
          <div  className="flex flex-col text-center w-full mb-3">
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
              initial={{ opacity: 0, x: -59 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: '0.1' }}
              transition={{ duration: 2, stiffness: 120 }}
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
                initial={{ opacity: 0, x: 59 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: '0.1' }}
                transition={{ duration: 1.5, stiffness: 120 }}
                className="font-medium text-lg lg:text-base xl:text-xl leading-loose xl:leading-8"
              >
                I am a passionate and dedicated web developer with a strong background in creating visually stunning and highly functional websites.<br />
                Throughout my career, I have developed excellency in various web technologies, including HTML5, CSS3, and JavaScript. I am professional in popular libraries such as ReactJS and frameworks like NextJS and TailwindCSS, enabling me to build robust and responsive websites.<br />
                &emsp; &emsp;  I am eager to embrace new challenges and contribute to cutting-edge projects. Please feel free to connect with me through my social media links.
              </motion.p>
              <Buttons/>
            </div>
          </div>
        </div>
      </section></div>
  );
};

export default About;
