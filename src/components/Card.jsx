import {motion} from 'framer-motion'
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Card({props}) {
  console.log('card',props)
  return (
    <div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 sm:gap-x-1 md:gap-x-1 lg:gap-x-1 lg:gap-y-4 xl:gap-y-4 xl:gap-x-3 mt-4 md:mt-8 ">
          {props.reverse().map((project) => (
            <motion.div
            initial={{scale:0.9,boxShadow:'1px 1px 9px 0px rgba(5,251,28,1)'}}  
            whileHover={{scale:1.1,boxShadow:'1px 4px 9px 0px rgba(255,55,255,0.9)'}}
            transition={{duration:1.5, yoyo:Infinity}}
            key={project.id} className="group relative flex flex-col flex-wrap h-64 mx-auto shadow-xl rounded-xl">
              
              <img src={project.image} alt={project.name} className="h-64 w-64 rounded-xl shadow-md p-1"/>
              
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] backdrop-blur-md duration-500 rounded-xl">
                <h3 className="text-2xl font-medium text-white my-2">{project.name}</h3>
                <p className="px-2 text-lg text-white">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                {
                  project?.icons?.map((Icon,index)=>(
                    <div className="rounded-full p-2" key={index}>
                      <Icon className="text-white shadow-md shadow-neutral-700 hover:shadow-inner hover:shadow-green-300 rounded-md text-4xl font-bold hover:animate-spin"/>
                    </div>
                  ))
                }
                </div>
                <div className="flex gap-7 justify-center items-center my-7 text-2xl">
                  <div className="bg-white hover:bg-transparent rounded-full p-2 hover:shadow-inner hover:shadow-green-400 ">
                    <a className="text-black hover:text-whitesmoke text-xl bg-white " href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="bg-white hover:bg-transparent rounded-full p-2 hover:shadow-inner hover:shadow-green-400">
                  <a className="text-darkblue hover:text-whitesmoke text-xl bg-white" href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt  className='p-[1px]'/>
                  </a>
                  </div>
                </div>
              </div>
                {/* <div className="absolute left-20 top-72 text-xl text-white hover:opacity-0">{project.name}</div> */}
              
            </motion.div>
          ))}
        </div>
    </div>
  )
}
Card.propTypes = {
  reverse: PropTypes.func.isRequired,
  props: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the shape of each object in the array
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icons: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      demo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Card