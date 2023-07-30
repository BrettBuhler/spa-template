import { DarkModeToggle } from "react-dark-mode-toggle-2"

interface SideBarProps {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    links?: [string, string][]
}

const SideBar: React.FC<SideBarProps> = ({ dark, setDark, links, isOpen, setIsOpen}) => {


    return (
        <div className={`fixed top-0 left-0 z-40 ${isOpen ? "bg-black h-screen w-full bg-opacity-50" : ""}`}>
            {isOpen && (
                <div onClick={()=>setIsOpen(false)}className="fixed top-0 h-full w-full" style={{left: "250"}}></div>
            )}
            <div id="sidebar menu" className={`z-50 visible flex flex-col fixed top-0 h-screen border-r-4 ${dark ? "bg-dark-theme-dark border-white" : "bg-light-theme-dark border-black"}`} style={{width: '250px', left: isOpen ? "0px" : "-260px", transition: "left 0.5s ease-in-out"}}>
                <div>
                    {links && (links.length > 0 ? links.map((link, i)=><div key={`sidebar_link_${i}`}></div>) : null)}

                </div>
                <DarkModeToggle onChange={setDark} isDarkMode={dark} size={85}/>
            </div>
        </div>
    )
}

export default SideBar