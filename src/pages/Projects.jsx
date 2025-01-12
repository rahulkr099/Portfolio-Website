import ProjectsData from "../Data/ProjectsData";
import { ThemeContext } from "../Hooks/ThemeContext";
import MernData from "../Data/MernProjects";
import Card from '../components/Card'
import { useContext } from "react";
const Projects = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="projects" className={`${theme === "Light" ? 'light' : 'dark'}`}>
      <section className=" body-font overflow-hidden bg-gray-200 text-black dark:bg-black dark:text-white">
        <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
          <div className="flex flex-wrap w-full flex-col items-center text-center">
            <h1 className="sm:text-4xl text-4xl font-medium title-font mb-3 ">
              Projects
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-medium leading-relaxed text-green-400">MERN Projects</h1>
            <div><Card props={MernData}></Card></div>
            <h1 className="text-2xl mt-8 font-medium leading-relaxed text-green-400">Mini Projects</h1>
            <div><Card props={ProjectsData}></Card></div>
          </div>
        </div>
      </section></div>
  );
}

export default Projects