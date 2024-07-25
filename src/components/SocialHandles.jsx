
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div className="flex gap-5 my-4">
        <a className=" text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-150" href="https://github.com/rahulkr099" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="text-blue-500 text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://www.linkedin.com/in/rahul-kumar-1a5165287/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        
        {/* <a className="text-white text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://www.instagram.com/vijay_talakola/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a> */}
        
        <a className=" text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://x.com/rahul_kr_dev" rel="noreferrer" target="_blank">
          <FaXTwitter />
        </a>
        <a className="text-[#5865F2] text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://discordapp.com/users/rahulkumar04703" rel="noreferrer" target="_blank">
          <FaDiscord />
        </a>
    </div>
  )
}

export default SocialHandles