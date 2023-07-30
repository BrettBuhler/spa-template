import { useState, useEffect } from "react"
import SideBar from "./SideBar"

interface HamburgerMenuProps {
    dark: boolean
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ dark, isOpen, setIsOpen }) => {
    const [scrolledToTop, setScrolledToTop] = useState<boolean>(true)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
          setScrolledToTop(window.scrollY === 0)
        };
    
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      }, [])

    return (

        <div>
            <div onClick={handleClick} id='menu button' className="button h-full w-10 flex flex-col gap-1 justify-center items-center mr-4 hover:cursor-pointer hover:scale-105" style={{opacity: 1}}>
                <span className={`${dark ? "bg-gray-100" : scrolledToTop ? "bg-gray-100" : "bg-gray-950"} h-1 w-4/5`}></span>
                <span className={`${dark ? "bg-gray-100" : scrolledToTop ? "bg-gray-100" : "bg-gray-950"} h-1 w-4/5`}></span>
                <span className={`${dark ? "bg-gray-100" : scrolledToTop ? "bg-gray-100" : "bg-gray-950"} h-1 w-4/5`}></span>
            </div>
        </div>
    )
}

export default HamburgerMenu