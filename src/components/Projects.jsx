
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <section className="text-white bg-black body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div id="projects" className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-white">
            Projects
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-xl font-medium leading-relaxed text-green-400">
            My Works
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
          {ProjectsData.reverse().map((project) => (
            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" key={project.id} className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-xl rounded-xl ">
              <img src={project.image} alt={project.name} className="h-80 rounded-xl shadow-md shadow-blue-400"/>
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-blue-500 rounded-xl">
                <h3 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="text-2xl font-medium text-white my-2">{project.name}</h3>
                <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="px-2 text-lg text-white">{project.description}</p>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="flex flex-wrap items-center gap-3 mt-3">
                {
                  project?.icons?.map((Icon,index)=>(
                    <div className="rounded-full p-2" key={index}>
                      <Icon className="text-white text-4xl font-bold"/>
                    </div>
                  ))
                }
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="flex gap-7 justify-center items-center my-7 text-2xl">
                  <div className="bg-white rounded-full p-2">
                    <a className="text-darkblue text-xl bg-white" href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="bg-white rounded-full p-2">
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
    </section>
  );
}

export default Projects