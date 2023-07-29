import { useState, useEffect } from "react"

interface ProjectProps {
    img: string
    title: string
    description: string
    dark: boolean
}

const Project:React.FC<ProjectProps> = ({ img, title, description, dark }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [borderOpacity, setBorderOpacity] = useState<boolean>(false)
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)
    const [isBackDrop, setIsBackDrop] = useState<boolean>(false)

    const buttons = [["Code", "https://www.google.com"], ["Live", "https://www.google.com"], ["Demo", "https://www.google.com"]]
    const innerText = ["Front-End: React, Tailwind CSS, CSS, HTML", "Back-end: None, make this into a full stack app yourslef!","This is some long text, this is more long text. I wan't some random long text, give me longer text how can i give you longer text this is more text lorum ipso tyd fo this is more this is more then I I need more text to see what happens when I go long this needs to go longer this is longer than wh"]

    useEffect(()=>{
        if (!isHovered){
            setIsBackDrop(false)
            setTimeout(()=>{
                setBorderOpacity(false)
            },400)
        } else {
            setBorderOpacity(true)
            if (isHovered) {
                setIsBackDrop(true)
            }
        }
    },[isHovered])

    const updateScreen = () => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', updateScreen)
        return () => {
            window.removeEventListener('resize', updateScreen)
        }
    },[])



    const handleEnter = () => {
        setIsHovered(true)
    }

    const handleLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className={`border-4 p-4 shadow-md relative ${isHovered ? "" : ""} ${dark ? "bg-dark-theme-mid-light border-white shadow-black" : "bg-light-theme-mid-light border-black shadow-black"}`}style={{height: "600px", maxHeight: "75vh", width: "500px", maxWidth: screenWidth > 699 ? "40vw" : "60vw", minWidth:'290px', backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover"}} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className={`overflow-hidden ${isBackDrop ? dark ? 'bg-black' : 'bg-white' : '' } absolute top-0 left-0 h-full w-full bg-opacity-95`} style={{transition: "background 0.5s ease-in-out"}}>
                {isBackDrop && (
                    <div className={`pt-20 flex flex-col justify-end text-lg font-semibold ${dark ? "text-gray-100" : "text-gray-950"}`}>
                        {innerText.map((text, i) => <p key={`inner_text_${i}`} className={`ml-4 ${i !== 0 ? "mt-2" : ""}`}>{text}</p>)}
                    </div>
                )}
            </div>
            <div className={`flex items-center justify-center font-bold text-center text-3xl ${borderOpacity ? "border-b-4" : ""} ${isHovered ? "" : ""} ${dark ? "bg-dark-theme-light text-gray-100" : "bg-light-theme-light text-gray-950"} absolute top-0 left-0 w-full`} style={{height: isHovered ? '50px' : '0', overflow: "hidden", transition: "height 0.5s ease-in-out"}}>
                {title}
            </div>
            <div className="absolute w-full flex justify-between gap-6 pl-2 pr-2" style={{bottom: isHovered ? 106 : 6, left: 0, transition: "bottom 0.5s ease-in-out"}}>
                {buttons.length > 0 && (
                    buttons.map((item, i) => (
                        <a href={item[1]} target="__blank" key={`project_button_${i}`} className={`shadow-md shadow-black text-center p-2 w-1/3 text-lg font-semibold rounded-xl ${dark ? "bg-dark-theme-mid-dark border-2 border-white text-gray-100 hover:bg-dark-theme-dark" : "bg-light-theme-mid-dark border-2 border-black text-gray-950 hover:bg-light-theme-dark"}`}>{item[0]}</a>
                    )) 
                )}
            </div>
            <div className={`items-center font-semibold flex pl-2 text-lg rounded-b-sm ${borderOpacity ? "border-t-4": ""} ${dark ? "bg-dark-theme-light text-gray-100" : "bg-light-theme-light text-gray-950"} absolute bottom-0 left-0 w-full`} style={{height: isHovered ? '100px' : '0', overflow: "hidden", transition: "height 0.5s ease-in-out"}}>
                {description}
            </div>
        </div>
    )
}

export default Project