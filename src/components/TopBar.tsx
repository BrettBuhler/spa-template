import React, { useEffect, useState } from "react"

import { DarkModeToggle } from "react-dark-mode-toggle-2"
import HamburgerMenu from "./HamburgerMenu"
import AnimatedUnderlineLink from "./AnimatedUnderlineLink"

interface TopBarProps {
    title?: string
    buttons?: [string, ()=> void][]
    icons?: [string, string][]
    logo?: string
    links?: [string, string][]
    highlightLastButton?: boolean
    isOpen: boolean
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
    dark?: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const TopBar:React.FC<TopBarProps> = ({title = "PlaceHolder", buttons = [], logo = "", links = [], highlightLastButton = false, dark = true, icons = [], setDark, isOpen, setIsOpen}) => {
    const [scrolledToTop, setScrolledToTop] = useState<boolean>(true)
    const [topBarHeight, setTopBarHeight] = useState<string>("60px")

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

    const [isMobile1, setIsMobile1] = useState<boolean>(false)
    const [isMobile2, setIsMobile2] = useState<boolean>(false)

    const [loadIn, setLoadIn] = useState<boolean>(false)

    const updateScreen = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateScreen)
        return () => {
            window.removeEventListener('resize', updateScreen)
        }
    },[])

    useEffect(()=> {
        const handleScroll = () => {
            setScrolledToTop(window.scrollY === 0)
            setTopBarHeight(window.scrollY === 0 ? "60px" : "70px")
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(()=> {
        if (screenWidth < 760) {
            setIsMobile1(true)
        } else {
            setIsMobile1(false)
        }
        if (screenWidth < 500) {
            setIsMobile2(true)
        } else {
            setIsMobile2(false)
        }
    }, [screenWidth])

    useEffect(() => {
        setTimeout(() => {
            setLoadIn(true)
        }, 100);
    }, [])

    const openTab = (url: string):void => {
        window.open(url, "_blank")
    }

    const topBarStyle = {
        animation: `${scrolledToTop ? "" : "fadeIn"} 0.5s ease-in-out`,
        height: topBarHeight,
        transition: "height 0.5s ease-in-out",
    }

    const toggleStyles = {
        opacity: `${scrolledToTop ? "0" : "1"}`,
    }

    //background color
    return (
        <div className={`w-screen ${loadIn ? "opacity-1" : "opacity-0"}`} style={{transition: "opacity 0.2s ease-in-out",}}>
            <div id='topbar' className={`z-40 fixed top-0 left-0 right-0 w-full border-b-2 border-custom-border flex flex-row justify-between items-center ${scrolledToTop ? "bg-transparent" : `${dark ? "bg-dark-theme-light shadow-dark-theme-dark" : "bg-light-theme-light shadow-light-theme-dark"} pb-2 pt-2 fade-in vis shadow-sm`}`} style={topBarStyle}>
                <div id="topbar-left" className="pl-4 flex">
                    <div className="flex flex-row gap-4 items-center text-2xl font-bold">
                        {logo === "" ? null : <img src={logo} alt="logo" className="h-12 w-12 mt-4 mb-4"></img>}
                        {/** Title text color */}
                        <div className={`${dark ? "text-gray-100" : scrolledToTop ? "text-gray-100" : "text-gray-950"}`}>{title}</div>
                    </div>
                    {/**Link color */}
                    {!isMobile2 && (
                        <div className={`font-semibold flex flex-row gap-4 items-center ml-8 text-md pt-2 ${dark ? "text-gray-100" : scrolledToTop ? "text-gray-100" : "text-gray-950"}`}>
                            {links.length > 0 && (links.map((item: any, i)=>(<div key={`animated_underline_${i}`}><AnimatedUnderlineLink text={item[0]} link={item[1]} dark={dark} scrolledToTop={scrolledToTop}/></div>)))}
                        </div>
                    )}
                </div>
                {!isMobile1 && (<div>
                    <div id="topbar-right" className="pr-4">
                    <div className="flex flex-row gap-4 font-bold">
                        {icons.length >= 1 && (icons.map((item:any, i) => {
                            return <img key={`top_bar_img_key${i}`} src={item[0]} onClick={()=>openTab(item[1])} className="hover:scale-110 hover:cursor-pointer"/>
                        }))}
                        {buttons.length >= 1 && (buttons.map((item: any, i) => {
                            if (i === buttons.length - 1 && highlightLastButton) {
                                return <button  className={`text-lg bg-button-highlight shadow-lg rounded-lg p-2 hover:bg-button-highlight-dark `} key={`topbar-right-${i}`} onClick={item[1]}>{item[0]}</button>
                            } else {
                                return <button className={`text-lg button  ${dark ? "text-gray-100" : scrolledToTop ? "text-gray-100" : "text-gray-950"} p-2 hover:underline`} key={`topbar-right-${i}`} onClick={item[1]}>{item[0]}</button>
                            }
                        }))}
                    </div>
                </div>
                    <div id="fade-in-btn" className={`fixed right-4 top-20 ${scrolledToTop ? "fade-out" : "fade-in"}`} style={toggleStyles}>
                        <DarkModeToggle
                            onChange={setDark}
                            isDarkMode={dark}
                            size={85}
                        />
                    </div>
                </div>)}
                {isMobile1 && (
                    <HamburgerMenu dark={dark} isOpen={isOpen} setIsOpen={setIsOpen}/>
                )}
            </div>
        </div>
    )
}
export default TopBar