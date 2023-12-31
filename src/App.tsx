//React Hooks
import { useState, useEffect } from "react"

//JavaScript animation library
import AOS from "aos"
import "aos/dist/aos.css"

//components
import TopBar from "./components/TopBar"
import logo from "./assets/react.svg"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import PageInBuffer from "./components/Buffers/PageInBuffer"
import Footer from "./components/Footer"

//Add an image to the assets folder then change import to your hero background
import background from "./assets/vertical-low-angle-grayscale-city-buildings-with-cloudy-sky-background.jpg"


//Add icons for skills display
import htmlIcon from './assets/html-48.png'
import reactIcon from './assets/react-48.png'
import cssIcon from './assets/css-48.png'
import typescriptIcon from './assets/typescript-48.png'
import tailwindIcon from './assets/tailwind-css-48.png'
import githubIcon from './assets/github-48.png'
import javascriptIcon from './assets/javascript-48.png'
import viteIcon from './assets/Vite.js.png'

//icons for topbar
import linkedinIcon from './assets/linked-in-48.png'

//background images for projects
import teamProjectImg from './assets/Team-project.jpg'
import aiImage1 from './assets/ai_img_1.png'
import flashStudyImg from './assets/flashstudy1.png'
import aiImage2 from './assets/ai_img_2.png'
import SideBar from "./components/SideBar"

const App = () => {
    //Dark's initial state determines whether the default app theme is dark or light
    const [dark, setDark] = useState<boolean>(true)
    //isOpen holds the sidebars open / close state. By default the sidebar will only be functional if the user is on mobile.
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(()=> {
        AOS.init({
            duration: 800,
            once: true,
        })
        AOS.refresh()
    },[])

    /*
    Fill Your about section with differnt chunks of text each sperate string indiates a line break. About text can have as many lines / page breaks as you like. 
     */
    const aboutText = [
        "Are you looking for a versatile and powerful Single Page Application (SPA) template that seamlessly integrates React and TypeScript? Look no further! Our cutting-edge SPA template is meticulously crafted to provide a solid foundation for your projects, offering the perfect balance between ease of use for newcomers and unlimited flexibility for seasoned React and TypeScript developers.",
        "Whether you need a simple portfolio website or an engaging landing page, our template is the ideal starting point. Upon cloning the GitHub repository, you'll find everything set up and ready to go. You can jump right into the development process without spending precious time on tedious configurations.",
    ]

    /** Skills to fill in the aboutSKills section index 0 is an image, index 1 is the display name */
    const aboutSkills: [string, string][] = [
        [htmlIcon, "HTML"],
        [reactIcon, "React"],
        [cssIcon, "CSS"],
        [typescriptIcon, "TypeScript"],
        [tailwindIcon, "Tailwind CSS"],
        [githubIcon, "Git Hub"],
        [javascriptIcon, "JavaScript"],
        [viteIcon, "Vite"]
    ]
    /** DummyLink links / text for the base example. Remove this from your own projects*/
    const dummyLink = "https://github.com/BrettBuhler/spa-template"
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    /** Project items to go in the Projects component [Image, Title, Description, [Innter text, eact new element is a line break], [[button display text, button link]]] */
    const projectItems: [string, string, string, string[], string[][]][] = [
        [teamProjectImg, 'Example 1', 'This is some description text. Keep it short!',["This example has one button", "this is some project innter text","this is a new line","on small screens this text might be hidden"], [["one", dummyLink]]],
        [aiImage1, 'Exampe 2', 'No limits to creativity. Add your own projects and showcase your brilliance here!',[loremIpsum],[["one", dummyLink], ["two", dummyLink]]],
        [aiImage2, "Example 3", "SPA template gives you the skelleton to craft your personal portfolio. Use what you like.",[loremIpsum],[["one", dummyLink],["two", dummyLink],["three", dummyLink]]],
        [flashStudyImg, "Flash Study", "AI powered Full Stack Web App designed to automate the study process.",["Front End: React.js TypeScript / JavaScript HTML CSS", "Back End: Node.js Express.js MongoDB", "Payments: Stripe","Authentication: Passport.js", "Cloud Services: Google Cloud Platform"],[["Site","https://flash-study.uc.r.appspot.com/"],["Code", "https://github.com/BrettBuhler/flash-study"],["Demo", "https://www.youtube.com/watch?v=Z50n7F_hAdc"]]]
    ]

    //icons for topbar (set Icons as an empty array to remove icons from top bar. Index 0 is the an image, Index 1 is the link)
    const topBarIcons:[string, string][] = [[linkedinIcon, "https://www.linkedin.com/"], [githubIcon, "https://github.com/"]]

    //buttons for topBar Buttons are an array with the 0 index being the display text and index 1 being an onClick function. to make the right most
    //button have a highlighted style, set highlightLastButton to true in the TopBar Component.
    const topBarButtons:[string, ()=>void][] = [['Sign In', ()=>alert("Set Up Your own functions in App.tsx, and add them to topBarButtons")], ['Sign Up', ()=>alert("Set Up Your own functions in App.tsx, and add them to topBarButtons")]]

    /**Top bar / sidebar links first index is the desplayed text, second is the section to scroll to (Leave as is unless you are adding to the base site or making a landing page with different secitons)*/
    const topBarLinks:[string,string][] = [["Home", "#home"],["About","#about"], ["Projects", "#projects"]]

    return (
        <div className="w-max-screen">
            {/**
             * set welcomeMsg to false to remove the welcome message on page load
             * set delay to how many miliseconds you want the PageInBuffer to display before showing the heropage
             * delete the PageInBuffer component if you do not want to display the buffer on load
             * 
             * Other Options for Buffer: (You will need to import the component at the top of the file)
             * <PixilatedFadeOutBuffer duration={5000}/>
             */}
            <PageInBuffer welcomeMsg={true} delay={1000}/>
            {/**
             * title: Your Topbar's title
             * highlightlastbutton: true or false. If it's true, the last button on your topbar will have a highlighted style
             * buttons: array of buttons. Index 0 is the display text, Index 1 is the onClick function. Pass in an empty array to not display buttons in topbar
             * logo: topbar logo.
             * links: navigation links index 0 is the text to be displayed index 1 is the section id (default sections are #home, #about, #projects)
             * icons: 
             */}
            <TopBar title="React App" highlightLastButton={true} buttons={topBarButtons} logo={logo} links={topBarLinks} icons={topBarIcons} dark={dark} setDark={setDark} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Hero title="SPA Template" subTitle="easy portfolios & landing pages" background={background}/>
            <About title="SPA Template" text={aboutText} aboutTitle="Built With:" aboutSkills={aboutSkills} dark={dark}/>
            <Projects dark={dark} title="Projects" projects={projectItems}/>
            <Footer dark={dark} />
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} dark={dark} setDark={setDark} links={topBarLinks} buttons={topBarButtons} icons={topBarIcons}/>
        </div>
    )
}

export default App
