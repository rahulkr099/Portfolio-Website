import { useContext } from 'react';
import SkillsData from '../Data/SkillsData'
import { ThemeContext } from "../Hooks/ThemeContext";
import {motion} from 'framer-motion'
const Skills = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div id="skills" className={`${theme==="Light"?'light':'dark'}`}>
    <section className=" body-font  bg-gray-200 text-black dark:bg-black dark:text-white">
      <div className="p-4 pt-0 mt-0 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div  className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7">
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 ">
            Skills
          </h1>
          <p  className="text-xl font-medium leading-relaxed text-green-400 ">
            My Technical Expertise
          </p>
        </div>
        <motion.div  
        layout='position'
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false, amount:'0.5'}}
        transition={{duration:1,stiffness:120}}
        className="px-2 py-6 bg-white dark:bg-[rgba(65,63,63,0.8)] rounded-lg grid justify-center items-center grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:py-5 lg:grid-cols-5 xl:grid-cols-6 border-blue-400 border-2 shadow-inner shadow-blue-400 ">
          {SkillsData.map((Skill) => {
            return (
              <div key={Skill.id} className="flex flex-col w-20 h-20 items-center justify-center md:w-24 md:h-24 lg:m-3 xl:m-5 mx-auto">
                <img src={Skill.image} loading='lazy' alt={Skill.name} className="m-2 object-cover w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition duration-700 hover:scale-150"/>
                <p>{Skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section></div>
  );
}

export default Skills