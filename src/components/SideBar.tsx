import { DarkModeToggle } from "react-dark-mode-toggle-2"

interface SideBarProps {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    links?: [string, string][]
    buttons?: [string, ()=> void][]
    icons?: [string, string][]
}

const SideBar: React.FC<SideBarProps> = ({ dark, setDark, links, buttons, icons, isOpen, setIsOpen}) => {

    const delayClose = () => {
        setTimeout(() => {
            setIsOpen(false)
        }, 300);
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId.substring(1))
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
        delayClose()
    }

    const openTab = (url: string):void => {
        window.open(url, "_blank")
    }

    return (
        <div className={`fixed overflow-auto top-0 left-0 z-40 ${isOpen ? "bg-black h-screen w-full bg-opacity-50" : ""}`}>
            {isOpen && (
                <div onClick={()=>setIsOpen(false)}className="fixed top-0 h-full w-full" style={{left: "250"}}></div>
            )}
            <div id="sidebar menu" className={`z-50 overflow-y-auto visible flex flex-col fixed top-0 h-screen border-r-2 ${dark ? "bg-dark-theme-dark border-white" : "bg-light-theme-dark border-black"}`} style={{width: '250px', left: isOpen ? "0px" : "-260px", transition: "left 0.5s ease-in-out"}}>
                <div onClick={()=>setIsOpen(false)} className={`absolute font-bold top-0 right-2 text-2xl hover:cursor-pointer ${dark ? "text-gray-100 " : "text-gray-950 "}`} style={{zIndex: 51}}>x</div>
                <div className="flex flex-col items-center justify-between flex-grow gap-4">
                    {links && (
                        <div className={`border-b-2 pb-4 w-full flex flex-col items-center gap-4 ${dark ? "text-gray-100" : "text-gray-950"}`}>
                            <div className={`font-bold text-2xl text-center border-b-2 p-2 w-full`}>Navigation</div>
                            {links.length > 0 ? links.map((link, i)=><button key={`sidebar_link_${i}`} onClick={()=>scrollToSection(link[1])} className={`border-2 text-xl font-semibold rounded-lg ${dark ? "bg-dark-theme-mid-dark border-gray-100 hover:bg-dark-theme-light": "bg-light-theme-mid-dark hover:bg-light-theme-light border-gray-950"} p-2 w-4/5 flex justify-center`}>{link[0]}</button>) : null}
                        </div>)}
                    {icons && (
                        <div className={`flex flex-row w-full justify-evenly flex-wrap items-center grow ${dark ? "border-gray-100": "border-gray-950"}`}>
                            {icons.map((icon, i)=><div key={`sidebar_icon_${i}`} onClick={()=>openTab(icon[1])} className={`hover:scale-110 hover:cursor-pointer p-2 border-2 rounded-lg ${dark ? "bg-dark-theme-mid-dark hover:bg-dark-theme-light border-gray-100" : "bg-light-theme-mid-dark hover:bg-light-theme-light border-gray-950"}`}>
                                <img src={icon[0]} />
                            </div>)}
                        </div>
                    )}
                    {buttons && (
                        <div className="w-full">
                            <div className="flex flex-col w-full justify-center items-center gap-4">
                                {buttons.map((button, i) => <button key={`sidebar_button_${i}`} onClick={button[1]} className={`border-2 text-xl font-semibold rounded-lg p-2 w-4/5 ${dark ? "text-gray-100 bg-dark-theme-mid-dark border-gray-100 hover:bg-dark-theme-light": "text-gray-950 bg-light-theme-mid-dark hover:bg-light-theme-light border-gray-950"}`}>{button[0]}</button>)}
                            </div>
                        </div>
                    )}
                    <div className={`flex flex-col items-center w-full`}>
                        <div className={`border-t-2 w-full mb-2 ${dark ? "border-gray-100" : "border-gray-950"}`}></div>
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <div className={`text-lg font-semibold ml-2 ${dark ? "text-gray-100": "text-gray-950"}`}>{dark ? "Turn on the lights" : "Turn off the lights"}</div>
                            <DarkModeToggle onChange={setDark} isDarkMode={dark} size={60}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar