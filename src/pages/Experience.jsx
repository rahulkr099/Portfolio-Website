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
                  <h1 className='text-lg lg:text-xl font-semibold text-blue-500'>{curr.name} <span><a className='cursor-pointer' href={curr.link} target='_blank'>🔗</a></span></h1>
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


        <h2 className='text-center text-5xl m-6 text-green-400' >🗽 My Github Stats</h2>

        {theme === "Light" ? (<div className='flex flex-col justify-center items-center'>
          <p className='m-2'> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=rahulkr099&column=3&margin-w=15&margin-h=15" alt="rahulkr099" /></a> </p>

          <div>
            <motion.img
              layout='position'
              initial={{ opacity: 0, x: 59 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: '0.1' }}
              transition={{ duration: 2, stiffness: 120 }}
              alt="7oSkaaa's Github Stats" align="right" src="https://github-readme-streak-stats.herokuapp.com/?user=rahulkr099&" height="300px" />

            <motion.img
              layout='position'
              initial={{ opacity: 0, x: -59 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: '0.1' }}
              transition={{ duration: 2, stiffness: 120 }}
              className='m-2' alt="status github, commits, etc..." width="500px" align="left" src="https://github-readme-stats.vercel.app/api?username=rahulkr099&show_icons=true&locale=en" />
            <motion.img
              layout='position'
              initial={{ opacity: 0, y: 89 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: '0.1' }}
              transition={{ duration: 2, stiffness: 120 }}

              align="left" className='m-2' width="500px" src="https://github-readme-stats.vercel.app/api/top-langs?username=rahulkr099&show_icons=true&locale=en&layout=compact" alt="Top Lang Used" />
          </div>
        </div>)
          :

          (<div className='flex flex-col justify-center items-center'>
            <p className='m-2'> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=rahulkr099&theme=monokai&column=3&margin-w=15&margin-h=15" alt="rahulkr099" /></a> </p>

            <div>
              <motion.img
                layout='position'
                initial={{ opacity: 0, x: 59 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: '0.1' }}
                transition={{ duration: 2, stiffness: 120 }}
                alt="7oSkaaa's Github Stats" align="right" src="https://github-readme-stats.vercel.app/api?username=rahulkr099&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10" height="300px" />

              <motion.img
                layout='position'
                initial={{ opacity: 0, x: -59 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: '0.1' }}
                transition={{ duration: 2, stiffness: 120 }}
                className='m-2' alt="status github, commits, etc..." width="500px" align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=rahulkr099&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8" />
              <motion.img
                layout='position'
                initial={{ opacity: 0, y: 89 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: '0.1' }}
                transition={{ duration: 2, stiffness: 120 }}

                align="left" className='m-2' alt="most used languages" width="500px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahulkr099&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c" />
            </div>
          </div>)}
        <h2 className='text-center text-4xl mt-9 m-8 text-green-400' >### 🛡️ TryHackMe Badge</h2>
        
        <motion.p align="center"
        layout='position'
        initial={{ opacity: 0, y: 89 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: '0.1' }}
        transition={{ duration: 2, stiffness: 120 }}
        >
          <a href="https://tryhackme.com/p/rahulkrsh" target="_blank">
            <img src="https://tryhackme-badges.s3.amazonaws.com/rahulkrsh.png" alt="Your Image Badge" />
          </a>
        </motion.p>
        <h2 className='text-center text-5xl mt-9 m-8 text-green-400' >## 💻 Coding Ninjas</h2>
        
        <motion.p align="center"
        layout='position'
        initial={{ opacity: 0, y: 89 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: '0.1' }}
        transition={{ duration: 2, stiffness: 120 }}
        >
          <a href="https://www.naukri.com/code360/profile/rkrsharma" target="_blank">
          <div className="w-80 h-96">
  <img
    className="w-full h-full object-contain rounded-lg"
    src="https://res.cloudinary.com/dvawqmwkh/image/upload/v1746730365/coding-ninjas_ghlsdr.webp"
    alt="Your Image Badge"
  />
</div>
          </a>
        </motion.p>
      </div>
    </section>
  );
}

export default Experience;
