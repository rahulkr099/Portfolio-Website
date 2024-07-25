
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";
import { useTheme } from "../useContext/ThemeContext";

const Projects = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <section className=" body-font  bg-gray-200 text-black dark:bg-black dark:text-white">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div id="projects" className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 ">
            Projects
          </h1>
          <p  className="text-xl font-medium leading-relaxed text-green-400">
            My Works
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
          {ProjectsData.reverse().map((project) => (
            <div  key={project.id} className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-xl rounded-xl ">
              <img src={project.image} alt={project.name} className="h-80 rounded-xl shadow-md shadow-blue-500"/>
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-blue-400 rounded-xl">
                <h3 className="text-2xl font-medium text-white my-2">{project.name}</h3>
                <p className="px-2 text-lg text-white">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                {
                  project?.icons?.map((Icon,index)=>(
                    <div className="rounded-full p-2" key={index}>
                      <Icon className="text-black shadow-md shadow-neutral-700 hover:shadow-inner hover:shadow-green-300 rounded-md text-4xl font-bold hover:animate-spin"/>
                    </div>
                  ))
                }
                </div>
                <div className="flex gap-7 justify-center items-center my-7 text-2xl">
                  <div className="bg-white rounded-full p-2 hover:shadow-inner hover:shadow-neutral-900 ">
                    <a className="text-darkblue text-xl bg-white " href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="bg-white rounded-full p-2 hover:shadow-inner hover:shadow-neutral-900">
                  <a className="text-darkblue text-xl bg-white" href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt  className='p-[1px]'/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section></div>
  );
}

export default Projects