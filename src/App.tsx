import { useState } from "react"

import TopBar from "./components/TopBar"
import logo from "./assets/react.svg"
import Hero from "./components/Hero"
import About from "./components/About"
import PageInBuffer from "./components/Buffers/PageInBuffer"
import ToggleSwitch from "./components/Toggle/ToggleSwitch"

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

const App = () => {
    //Dark's initial state determines whether the default app theme is dark or light
    const [dark, setDark] = useState<boolean>(true)

    const aboutText = [
        "Are you looking for a versatile and powerful Single Page Application (SPA) template that seamlessly integrates React and TypeScript? Look no further! Our cutting-edge SPA template is meticulously crafted to provide a solid foundation for your projects, offering the perfect balance between ease of use for newcomers and unlimited flexibility for seasoned React and TypeScript developers.",
        "Whether you need a simple portfolio website or an engaging landing page, our template is the ideal starting point. Upon cloning the GitHub repository, you'll find everything set up and ready to go. You can jump right into the development process without spending precious time on tedious configurations."
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

    return (
        <div className="">
            {/**
             * set welcomeMsg to false to remove the welcome message on page load
             * set delay to how many miliseconds you want the PageInBuffer to display before showing the heropage
             * delete the PageInBuffer component if you do not want to display the buffer on load
             * 
             * Other Options for Buffer: (You will need to import the component at the top of the file)
             * <PixilatedFadeOutBuffer duration={5000}/>
             */}
            <PageInBuffer welcomeMsg={true} delay={600}/>
            <TopBar title="React App" buttons={[['Sign In', ()=>console.log('HERE')], ['Sign Up', ()=>console.log('Here')]]} logo={logo} links={[["Home", "#home"],["About","#about"], ["Continue", "#section3"]]} dark={dark} highlightLastButton={true}/>
            <Hero title="SPA Template" subTitle="easy portfolios & landing pages" background={background}/>
            <About title="SPA Template" text={aboutText} aboutTitle={"Built With:"}aboutSkills={aboutSkills} dark={dark}/>
            <section id="section3">
                <div id="continue" className="h-screen bg-light-theme-dark pt-32 pb-8">
                    <div className="w-4/5 h-full bg-light-theme-mid-dark mx-auto "></div>
                </div>
            </section>
            <div className="bg-light-theme-mid-light shadow-md shadow-light-theme-dark" style={{height: "100px"}}></div>
        </div>
    )
}

export default App
