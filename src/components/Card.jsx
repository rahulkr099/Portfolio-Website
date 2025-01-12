import { motion } from 'framer-motion'
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Card({ props }) {
  // console.log('card',props)
  return (
    <div className='overflow-auto'>
      <div
        className={`${props.length < 6 ? 'shadow-md p-8 mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-3 sm:gap-x-4 md:gap-x-4 lg:gap-x-4 lg:gap-y-5 xl:gap-y-5 xl:gap-x-6 mt-6 md:mt-9' : 'p-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 sm:gap-x-4 md:gap-x-4 lg:gap-x-4 lg:gap-y-5 xl:gap-y-5 xl:gap-x-6 mt-6 md:mt-9 mx-auto'}`}
      >
        {props.reverse().map((project) => (
          <div
            key={project.id}><motion.div
              initial={{ boxShadow: '1px 1px 9px 0px rgba(5,251,28,1)' }}
              whileHover={{ boxShadow: '1px 4px 9px 0px rgba(255,55,255,0.9)' }}
              transition={{ duration: 1, yoyo: Infinity }}
              key={project.id} className={`${project.type === "mern" ? 'h-60 w-11/12 mx-auto rounded-xl group relative shadow-md my-1' : 'h-40 w-11/12 rounded-xl shadow-md group relative mx-auto my-1'}`}>

              <img src={project.image} loading='lazy' alt={project.name} className={`${project.type === "mern" ? 'h-60 w-full rounded-xl shadow-md p-1' : 'h-40 w-full rounded-xl shadow-md p-1'}`} />

              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-auto group-hover:h-full transition-[height_0.5s] backdrop-blur-md duration-500 rounded-xl">
                <h3 className={`${project.bgCol === "white" ? 'text-black' : 'text-white'} text-xl font-medium my-0`}>{project.name}</h3>
                <p className={`${project.bgCol === "white" ? 'text-black font-medium' : 'text-white font-medium'} px-2 text-sm`}>{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  {
                    project?.icons?.map((Icon, index) => (
                      <div className="rounded-full p-1" key={index}>
                        <Icon className={`${project.bgCol === "white" ? 'text-black' : 'text-white'} shadow-md shadow-neutral-700 hover:shadow-inner hover:shadow-green-300 rounded-md text-3xl font-bold hover:animate-spin`} />
                      </div>
                    ))
                  }
                </div>
                <div className="flex gap-7 justify-center items-center my-2 text-2xl">
                  <div className="bg-white hover:bg-transparent rounded-full p-2 hover:shadow-inner hover:shadow-green-400 ">
                    <a className='text-black hover:text-purple-300' href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="bg-white hover:bg-transparent rounded-full p-2 hover:shadow-inner hover:shadow-green-400">
                    <a className='text-black hover:text-purple-300' href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className='p-[1px]' />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="absolute left-20 top-72 text-xl text-white hover:opacity-0">{project.name}</div> */}

            </motion.div></div>
        ))}
      </div>
    </div>
  )
}
Card.propTypes = {
  reverse: PropTypes.func,
  length: PropTypes.number,
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
export default Card;