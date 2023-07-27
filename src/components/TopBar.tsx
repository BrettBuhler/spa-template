import React, { useEffect, useState } from "react"

interface TopBarProps {
    title?: string
    buttons?: [string, ()=> void][]
    icons?: [string, ()=> void][]
    logo?: string
    links?: [string, string][]
    highlightLastButton?: boolean
    dark?: boolean
}

const TopBar:React.FC<TopBarProps> = ({title = "PlaceHolder", buttons = [], logo = "", links = [], highlightLastButton = false, dark = true}) => {
    const [scrolledToTop, setScrolledToTop] = useState<boolean>(true)
    const [topBarHeight, setTopBarHeight] = useState<string>("70px")

    useEffect(()=> {
        const handleScroll = () => {
            setScrolledToTop(window.scrollY === 0)
            setTopBarHeight(window.scrollY === 0 ? "70px" : "100px")
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const topBarStyle = {
        animation: `${scrolledToTop ? "" : "fadeIn"} 0.5s ease-in-out`,
        height: topBarHeight,
        transition: "height 0.5s ease-in-out"
    }
    //background color
    return (
        <div className={`z-50 fixed top-0 left-0 right-0 w-full border-b-2 border-custom-border flex flex-row justify-between items-center ${scrolledToTop ? "bg-transparent" : `${dark ? "bg-dark-theme-light shadow-dark-theme-dark" : "bg-light-theme-mid-light shadow-light-theme-dark"} pb-2 pt-2 fade-in vis shadow-sm`}`} style={topBarStyle}>
            <div id="topbar-left" className="pl-4 flex">
                <div className="flex flex-row gap-4 items-center text-2xl font-bold">
                    {logo === "" ? null : <img src={logo} alt="logo" className="h-12 w-12 mt-4 mb-4"></img>}
                    {/** Title text color */}
                    <div className={`${dark ? "text-gray-100" : scrolledToTop ? "text-gray-100" : "text-gray-950"}`}>{title}</div>
                </div>
                {/**Link color */}
                <div className={`font-semibold flex flex-row gap-4 items-center ml-8 text-md pt-2 ${dark ? "text-gray-100" : scrolledToTop ? "text-gray-100" : "text-gray-950"}`}>
                    {links.length > 0 && (links.map((item: any, i)=>(<a className="nav-button" key={`links_${i}`} href={item[1]}>{item[0]}</a>)))}
                </div>
            </div>
            <div id="topbar-right" className="pr-4">
                <div className="flex flex-row gap-4 font-bold">
                    {buttons.length >= 1 && (buttons.map((item: any, i) => {
                        if (i === buttons.length - 1 && highlightLastButton) {
                            return <button  className={`text-lg bg-button-highlight shadow-lg rounded-lg p-2 hover:bg-button-highlight-dark `} key={`topbar-right-${i}`} onClick={item[1]}>{item[0]}</button>
                        } else {
                            return <button className={`text-lg button  ${dark ? "text-gray-100" : scrolledToTop ? "text-gray-100" : "text-gray-950"} p-2 hover:underline`} key={`topbar-right-${i}`} onClick={item[1]}>{item[0]}</button>
                        }
                    }))}
                </div>
            </div>
        </div>
    )
}
export default TopBar