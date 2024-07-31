import { useContext } from 'react';
import { motion } from 'framer-motion'
import { ThemeContext } from "../Hooks/ThemeContext";
import { timeline } from '../Data/MernProjects'
const Experience = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <section id="experience" className={`${theme === "Light" ? 'light' : 'dark'}`}>
      <div className="myContainer p-10 z-10 text-black dark:text-white dark:bg-black bg-gray-200 overflow-hidden">
        <div className="flex flex-col w-full lg:text-lg items-center">
          <h1 className="text-3xl lg:text-4xl mb-4 italic" >
            A small<span className="font-bold ml-2 text-green-400">Introduction</span>
          </h1>
          <article >
            <div className="font-medium">
              Passionate self-taught developer with a lifelong love for coding. Skilled in MERN-stack development.
              <p className='text-center'> Eager to turn innovative ideas into reality.</p>
            </div>
          </article>
          <h2 className="mt-4 text-2xl font-bold text-orange-500 underline" >Timeline</h2>
          <motion.ul
            layout='position'
            initial={{ opacity: 0, y: 59 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: '0.2' }}
            transition={{ duration: 1, stiffness: 120 }}
            className=' p-0 flex flex-col gap-4 items-center'
          >
            {timeline.map((curr, index) => {
              return (
                <motion.li
                  layout='position'
                  initial={{ opacity: 0, y: 99 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: '0.1' }}
                  transition={{ duration: 2, stiffness: 120 }}
                  key={index} className='backdrop-blur-md mt-4 flex flex-col pl-5 border-l-4 p-2 w-2/3 border-green-400 rounded-lg shadow-sm shadow-green-300 hover:shadow-purple-600 hover:border-purple-600'>
                  <h1 className='text-lg lg:text-xl font-semibold text-blue-500'>{curr.name}</h1>
                  <h4 className='font-bold text-xs uppercase'>{curr.date}</h4>
                  <p className="mt-2" >{curr.from}</p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    {curr.sub && <li>
                      <span className="font-extrabold mr-1 mb-1 text-red-600">Course:</span>
                      <span >{curr.sub}</span>
                    </li>}
                    {curr.grade && <li className='text-sm mb-1'>
                      <span className="font-semibold mr-1">Grade :</span>
                      <span className='font-semibold'>{curr.grade}</span>
                    </li>}
                  </ul>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
