import { motion } from 'framer-motion'
import { Link } from "react-scroll";
function Buttons() {
  return (
    <div
      className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
    >
      <motion.button
        layout='position'
        initial={{ opacity: 0, y: 59 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: '0.1' }}
        transition={{ duration: 1, stiffness: 120 }}
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
        href="https://drive.google.com/file/d/10mSlPv8vcblW-eeSOTnsPLGJsA2t8R0r/view?usp=sharing"
        
        target="_blank"
        rel="noreferrer"
      >
        <motion.button
          layout='position'
          initial={{ opacity: 0, y: 59 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: '0.1' }}
          transition={{ duration: 1, stiffness: 120 }}
          className="inline-flex font-medium text-white bg-green-500 border-2 border-white py-3 px-7 focus:outline-none hover:bg-white hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
          Get Resume
        </motion.button>
      </a>
    </div>
  )
}

export default Buttons