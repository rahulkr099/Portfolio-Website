import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div className="flex gap-5 my-4">
        <a className="cursor-pointer text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-150" href="https://github.com/rahulkr099" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="cursor-pointer text-blue-500 text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="www.linkedin.com/in/rahulkr099" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        
        {/* <a className="cursor-pointertext-white text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://www.instagram.com/vijay_talakola/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a> */}
        
        <a className="cursor-pointer text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://x.com/rahul_kr_dev" rel="noreferrer" target="_blank">
          <FaXTwitter />
        </a>
        <a className="cursor-pointer text-[#5865F2] text-2xl md:text-xl transition duration-700 animate-bounce hover:scale-125" href="https://discord.com/channels/1324308323226353697/1324308323226353700" rel="noreferrer" target="_blank">
          <FaDiscord />
        </a>
    </div>
  )
}

export default SocialHandles