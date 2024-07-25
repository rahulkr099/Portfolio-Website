import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import { useTheme } from "../useContext/ThemeContext";

const Contact = () => {
  const {theme} = useTheme()
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm( "service_tmiwuw9", "template_w6aasfg", formRef.current, "3-BpUXj4r06HWYu9-" )
      .then(
        (result) => {
          toast.success("Message sent successfully",result);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <section className=" body-font  bg-gray-200 text-black dark:bg-black dark:text-white">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 ">
            Contact Me
          </h1>
          <p className="text-lg font-medium leading-relaxed text-green-400 ">
            Let us keep in touch
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-neutral-100 border border-blue-400 shadow-inner shadow-blue-400 text-black dark:bg-neutral-900 dark:text-white p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1  className="hidden md:block text-2xl lg:text-3xl text-green-400 mb-3 lg:mb-4">
              Get In Touch
            </h1>
            <div  className="flex gap-5 mb-4 justify-center md:mb-5">
              <SocialHandles/>
            </div>
            <div className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaPhoneAlt className="dark:text-white text-black" />
              <p className=" md:text-lg ">+91 8409515626</p>
            </div>
            <div  className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaEnvelope className="dark:text-white text-black" />
              <a href="mailto:techaffairs4@gmail.com" className=" md:text-lg">techaffairs4@gmail.com</a>
            </div>
            <div  className="flex gap-3 items-center md:gap-2 lg:gap-5">
              <FaMapMarkerAlt className="dark:text-white text-black" />
              <p className="leading-normal text-start  md:text-lg">Bokaro Steel City , Jharkhand , India</p>
            </div>
          </div>
          <form  ref={formRef} onSubmit={handleSubmit} className="flex flex-col p-2 md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5">
            <div  className="p-2 w-full">
              <input required placeholder="Name" type="text" name="from_name" className="mb-1 w-full bg-gray-300 dark:bg-gray-700 placeholder-black dark:placeholder-white rounded-md border border-green-400 shadow-inner shadow-green-400 focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-600 focus:border-none focus:shadow-none tplaceholder-black dark:placeholder-whiteext-base outline-none text-black dark:text-white p-2 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div  className="p-2 w-full">
              <input required placeholder="Email" type="email" name="from_email" className="mb-1 w-full bg-gray-300 dark:bg-gray-700 placeholder-black dark:placeholder-white rounded-md border border-green-400 shadow-inner shadow-green-400 focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-600 focus:border-none focus:shadow-none text-base outline-none text-black dark:text-white p-2 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="p-2 w-full">
              <textarea required placeholder="Message" name="message" className="mb-1 w-full bg-gray-300 dark:bg-gray-700 placeholder-black dark:placeholder-white rounded-md border border-green-400 shadow-inner shadow-green-400 focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-600 focus:border-none focus:shadow-none h-32 text-base outline-none text-black dark:text-white p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="p-2 w-full">
              <button className=" font-medium mx-auto my-3 text-white bg-green-600 border-0 py-2 px-12 focus:outline-none hover:scale-110 hover:bg-green-300 hover:text-black transition duration-500 rounded-xl text-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section></div>
  );
};

export default Contact;