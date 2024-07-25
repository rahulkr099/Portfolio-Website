import { useTheme } from "../useContext/ThemeContext";

const Footer = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <div className=" text-center  bg-gray-200 text-black dark:bg-black dark:text-white py-4 mt-2 font-normal text-md md:text-lg md:p-5 md:mt-4">
      <p>
        Made with ❤️ by <span className="font-bold text-green-400 animate-pulse italic"> Rahul Kumar</span>
      </p>
    </div></div>
  );
};

export default Footer;