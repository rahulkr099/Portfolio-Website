
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfilePic from "../assets/Images/hero2.png"

const Profile = () => {
  return (
    <section className="text-white body-font pt-16 lg:min-h-75vh bg-black">
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center mx-auto border-2 w-60 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt="Rahul"
          src={ProfilePic}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles />
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white"
          >
            Hello , I am <span className="text-green-400">Rahul Kumar</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-white mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={["Web Developer", "Freelancer", "Tech Enthusiast"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mb-2 text-white text-lg md:text-xl leading-relaxed"
          >
            I’m proficient in developing web applications using the MERN stack.
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="text-lg text-white md:text-xl"
          >
            I craft applications using MongoDB, Express, React, and Node.
          </p>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            <button className="inline-flex font-medium text-white bg-gray-900 border-2 border-white py-3 px-7 focus:outline-none hover:bg-gray-300 hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                Hire Me
              </Link>
            </button>
            <a
              // href="https://drive.google.com/drive/u/1/folders/1VLbE3u0gC3x66ClPWCUmcK75DuhTAyKx"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <button className="inline-flex font-medium text-white bg-green-500 border-2 border-white py-3 px-7 focus:outline-none hover:bg-gray-300 hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Wave  */}
      <div className="lg:mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          className=" w-full h-18 sm:h-20 lg:h-[15vh] border-0 border-red-500 "
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="waves">
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="0"
              fill="#E8461A"
              fillOpacity=".9"
            />
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="3"
              fill="#7BE81A"
              fillOpacity=".5"
            />
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="6"
              fill="#1A75E8"
              fillOpacity="0.9"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Profile;
