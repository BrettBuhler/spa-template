import Project from "./Project"
import projectImg from '../assets/Team-project.jpg'
interface ProjectsProps {
    dark: boolean
    projects: [string, string, string][]
}

const Projects:React.FC<ProjectsProps> = ({dark, projects}) => {
    return (
        <section id="projects" className={`flex items-center flex-col min-h-screen w-full ${dark ? "bg-dark-theme-mid-dark" : "bg-light-theme-mid-light"}`}>
            <div className={`w-4/5 flex-grow ${dark ? "bg-dark-theme-mid-light" : "bg-light-theme-mid-dark"} pt-32`}>
                <Project img={projectImg} title="Project" description="This is a project. Add more text to see how things work" dark={dark}/>
            </div>
        </section>
    )
}

export default Projects