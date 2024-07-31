import { useContext } from "react";
import { ThemeContext } from "../Hooks/ThemeContext";

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <div className=" text-center bg-gray-200 text-black dark:bg-black dark:text-white py-4 font-normal text-md md:text-lg md:p-5">
      <p>
        Made with ❤️ by <span className="font-bold text-green-400 animate-pulse italic"> Rahul Kumar</span>
      </p>
    </div></div>
  );
};

export default Footer;