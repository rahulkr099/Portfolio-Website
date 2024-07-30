import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

import ToDoImg from '/ToDoList.webp'
import DictImg from '/DictionaryApp.webp'
import DrawAppImg from '/DrawingApp.webp'
import ImgEditorImg from '/ImageEditor.webp'
import ImgResizeImg from '/ImageResizer.webp'
import DevDetectImg from '/DevDetective.webp'
import WeatherImg from '/WeatherApp.webp'
import PassGenImg from '/PasswordGenerator.webp'
import NoteTakingImg from '/NoteTakingApp.webp'
import CurrencyConvImg from '/Currency Converter.webp'
import TicTacToeImg from '/Tic Tac Toe.webp'
import StopWatchImg from '/StopWatch.webp'
import TellMeAJokeImg from '/Tell-Me-A-Joke.webp'
import CountDownTimerImg from '/CountDown-Timer.webp'


const ProjectsData = [
  {
    id: 1,
    name: "To Do List",
    image: ToDoImg,
    icons: [BiLogoReact,BiLogoTailwindCss,BiLogoHtml5],
    description: "This website is used to set tasks and goals for productivity.",
    github: "https://github.com/rahulkr099/To-Do-List",
    demo: "https://to-do-list-mu-puce.vercel.app/",
  },
  {
    id: 2,
    name: "CountDown Timer",
    image: CountDownTimerImg,
    icons: [BiLogoCss3, BiLogoHtml5,BiLogoJavascript],
    description: 'This website is used to set real time updates for users about upcoming events.',
    github: "https://github.com/rahulkr099/Countdown-Timer",
    demo: "https://rahulkr099.github.io/Countdown-Timer/",
  },
  {
    id: 3,
    name: "Tell Me A Joke",
    image: TellMeAJokeImg,
    icons: [ BiLogoCss3,TbApi,BiLogoHtml5,BiLogoJavascript],
    description: "This application provides an interface to the users to listen jokes.",
    github: "https://github.com/rahulkr099/Tell-Me-a-Joke",
    demo: "https://rahulkr099.github.io/Tell-Me-a-Joke/",
  },
  {
    id: 4,
    name: "StopWatch",
    image: StopWatchImg,
    icons: [BiLogoHtml5, BiLogoReact, BiLogoTailwindCss],
    description: "This application helps users to set stopwatch for different purposes.",
    github: "https://github.com/rahulkr099/StopWatch",
    demo: "https://rahulkr099.github.io/StopWatch/",
  },
  {
    id: 5,
    name: "English Dictionary",
    image: DictImg,
    icons: [ BiLogoCss3,BiLogoHtml5,BiLogoJavascript],
    description: "This app serves the purposes of being a basic dictionary which can search word of your choice.",
    github: "https://github.com/rahulkr099/Dictionary-App",
    demo: "https://rahulkr099.github.io/Dictionary-App/",
  },
  {
    id: 6,
    name: "Drawing App",
    image: DrawAppImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This application allows users to switch between dark and light mode.",
    github: "https://github.com/rahulkr099/Drawing-App",
    demo: "https://rahulkr099.github.io/Drawing-App/",
  },
  {
    id: 7,
    name: "Image Editor",
    image: ImgEditorImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This app can help you to edit your image with some good features.",
    github: "https://github.com/rahulkr099/Image-Editor",
    demo: "https://rahulkr099.github.io/Image-Editor/",
  },
  {
    id: 8,
    name: "Dev Detective",
    image: DevDetectImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This app is used to find github details using username of developers.",
    github: "https://github.com/rahulkr099/Dev-Detective",
    demo: "https://rahulkr099.github.io/Dev-Detective/",
  },
  {
    id: 9,
    name: "Image Resizer",
    image: ImgResizeImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This app is used to resize the image of your desired choice.",
    github: "https://github.com/rahulkr099/Image-Resizer",
    demo: "https://rahulkr099.github.io/Image-Resizer/",
  },
  {
    id: 10,
    name: "Weather App",
    image: WeatherImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript,TbApi],
    description: "This is weather app which shows weather of your desired city.",
    github: "https://github.com/rahulkr099/Weather-App",
    demo: "https://rahulkr099.github.io/Weather-App/",
  },
  {
    id: 11,
    name: "Password Generator",
    image: PassGenImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This app is used to generate strong password for your signup/login.",
    github: "https://github.com/rahulkr099/Password-Generator",
    demo: "https://rahulkr099.github.io/Password-Generator/",
  },
  {
    id: 12,
    name: "Note Taking App",
    image: NoteTakingImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This app serves the purpose of taking notes and saving it on your localstorage.",
    github: "https://github.com/rahulkr099/Note-Taking-App",
    demo: "https://rahulkr099.github.io/Note-Taking-App/",
  },
  {
    id: 13,
    name: "Currency Converter",
    image: CurrencyConvImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoReact,TbApi],
    description: "This application allows users to switch between dark and light mode.",
    github: "https://github.com/rahulkr099/Currency-Converter",
    demo: "https://currency-converter-chi-topaz.vercel.app/",
  },
  {
    id: 14,
    name: "Tic Tac Toe",
    image: TicTacToeImg,
    icons: [ BiLogoCss3,BiLogoHtml5, BiLogoJavascript],
    description: "This is the game of Tic Tac Toe.",
    github: "https://github.com/rahulkr099/Tic-Tac-Toe",
    demo: "https://rahulkr099.github.io/Tic-Tac-Toe/",
  },
];

export default ProjectsData;
