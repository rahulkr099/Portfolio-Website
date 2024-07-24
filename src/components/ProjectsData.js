import { BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";
import ToDoImg from '/ToDoList.png'
import MusicPlayerImg from '/Music-Player.png'
import StopWatchImg from '/StopWatch.png'
import TellMeAJokeImg from '/Tell-Me-A-Joke.png'
import CountDownTimerImg from '/CountDown-Timer.png'
import BookMarkKeeperImg from '/BookMark-Keeper.png'

const ProjectsData = [
  {
    id: "1",
    name: "To Do List",
    image: ToDoImg,
    icons: [BiLogoReact,BiLogoTailwindCss],
    description: "This website is used to set tasks and goals for productivity.",
    github: "https://github.com/rahulkr099/To-Do-List",
    demo: "https://rahulkr099.github.io/To-Do-List/",
  },
  {
    id: "2",
    name: "CountDown Timer",
    image: CountDownTimerImg,
    icons: [BiLogoTailwindCss, BiLogoHtml5,BiLogoJavascript],
    description: 'This website is used to set real time updates for users about upcoming events.',
    github: "https://github.com/rahulkr099/Countdown-Timer",
    demo: "https://rahulkr099.github.io/Countdown-Timer/",
  },
  {
    id: "3",
    name: "Tell Me A Joke",
    image: TellMeAJokeImg,
    icons: [ BiLogoTailwindCss,TbApi,BiLogoHtml5,BiLogoJavascript],
    description: "This application provides an interface to the users to listen jokes.",
    github: "https://github.com/rahulkr099/Tell-Me-a-Joke",
    demo: "https://rahulkr099.github.io/Tell-Me-a-Joke/",
  },
  {
    id: "4",
    name: "StopWatch",
    image: StopWatchImg,
    icons: [  SiExpress, BiLogoReact, BiLogoTailwindCss],
    description: "This application helps users to set stopwatch for different purposes.",
    github: "https://github.com/rahulkr099/StopWatch",
    demo: "https://rahulkr099.github.io/StopWatch/",
  },
  {
    id: "5",
    name: "Music Player",
    image: MusicPlayerImg,
    icons: [ BiLogoTailwindCss,BiLogoHtml5,BiLogoJavascript],
    description: "This is an online platform that allows users to listen music.",
    github: "https://github.com/rahulkr099/Music-Player",
    demo: "https://rahulkr099.github.io/Music-Player/",
  },
  {
    id: "6",
    name: "BookMark Keeper",
    image: BookMarkKeeperImg,
    icons: [ BiLogoTailwindCss,BiLogoHtml5, BiLogoJavascript],
    description: "This application allows users to save bookmark of any website.",
    github: "https://github.com/rahulkr099/Bookmark-Keeper",
    demo: "https://rahulkr099.github.io/Bookmark-Keeper/",
  },
];

export default ProjectsData;
