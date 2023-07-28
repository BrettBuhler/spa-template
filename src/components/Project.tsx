import { useState, useEffect } from "react"

interface ProjectProps {
    img: string
    title: string
    description: string
    dark: boolean
}

const Project:React.FC<ProjectProps> = ({ img, title, description, dark }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [borderOpacity, setBorderOpacity] = useState('opacity-0')

    const buttons = [["Code", "https://www.google.com"], ["Live Site", "https://www.google.com"], ["Video Demo", "https://www.google.com"]]

    useEffect(()=>{
        if (!isHovered){
            setTimeout(()=>{
                setBorderOpacity("none")
            },400)
        } else {
            setBorderOpacity("4")
        }
    },[isHovered])



    const handleEnter = () => {
        setIsHovered(true)
    }

    const handleLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className={`border-4 p-4 shadow-2xl relative ${isHovered ? "" : ""} ${dark ? "bg-dark-theme-mid-light border-white" : "bg-light-theme-mid-light border-black"}`}style={{height: "600px", width: "500px", backgroundImage: `url(${img})`, backgroundPosition: "center"}} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <div className={`flex items-center justify-center font-bold text-center text-3xl border-b-${borderOpacity} ${isHovered ? "" : ""} ${dark ? "bg-dark-theme-mid-light text-gray-100" : "bg-light-theme-mid-light text-gray-950"} absolute top-0 left-0 w-full`} style={{height: isHovered ? '50px' : '0', overflow: "hidden", transition: "height 0.5s ease-in-out"}}>
                    {title}
                </div>
                <div className="absolute w-full flex justify-between gap-6 pl-2 pr-2" style={{bottom: isHovered ? 106 : 6, left: 0, transition: "bottom 0.5s ease-in-out"}}>
                    {buttons.length > 0 && (
                        buttons.map((item, i) => (
                            <a href={item[1]} target="__blank" key={`project_button_${i}`} className={`shadow-md shadow-black text-center p-2 w-1/3 text-lg font-semibold rounded-xl ${dark ? "bg-dark-theme-mid-dark border-2 border-white text-gray-100" : "bg-light-theme-mid-dark border-2 border-black text-gray-950"}`}>{item[0]}</a>
                        )) 
                    )}
                </div>
                <div className={`items-center font-semibold flex pl-2 text-lg rounded-b-sm border-t-${borderOpacity} ${dark ? "bg-dark-theme-mid-light text-gray-100" : "bg-light-theme-mid-light text-gray-950"} absolute bottom-0 left-0 w-full`} style={{height: isHovered ? '100px' : '0', overflow: "hidden", transition: "height 0.5s ease-in-out"}}>
                    {description}
                </div>
        </div>
    )
}

export default Project