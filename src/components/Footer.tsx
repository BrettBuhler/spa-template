import { useState, useEffect } from 'react'

interface FooterProps {
    dark: boolean
}

const Footer:React.FC<FooterProps> = ({dark}) => {
    const [darkBackground, setDarkBackground] = useState<string>('')
    const [lightBackground, setLightBackground] = useState<string>("")

    useEffect (()=>{
        setDarkBackground(getBackgroundColorById('dark-color'))
        setLightBackground(getBackgroundColorById('light-color'))
    },[])

    useEffect(()=>{
        if (darkBackground != "") {
            setDarkBackground(getBackgroundColorById('dark-color'))
            setLightBackground(getBackgroundColorById('light-color'))
        }
    }, [dark])
    
    const getBackgroundColorById = (elementId: string):string => {
        const element = document.getElementById(elementId)
        if (element) {
            const elementStyle = window.getComputedStyle(element)
            const backgroundColor = elementStyle.backgroundColor
            if (/^rgb/.test(backgroundColor)) {
                const rgbValues = backgroundColor.match(/\d+/g)
                if (rgbValues && rgbValues.length === 3) {
                    const hexCode = "#" + rgbValues.map(val => parseInt(val).toString(16).padStart(2, '0')).join('')
                    return hexCode
                }
            }
        }
        return "error"
    }

    return (
        <footer className={`relative ${dark ? "bg-dark-theme-mid-dark" : "bg-light-theme-mid-light"}`}>
            <div className="flex justify-center items-center h-full text-center absolute inset-0 pt-8 text-lg">
                <span className={`${dark ? "text-gray-100" : "text-gray-950"} font-bold`}>Designed by <a href='https://www.brettbuhler.com' target="_blank">Brett Buhler</a></span>
            </div>
            {/*The two divs below are used to get theme color from tailwind config*/}
            <div id="light-color" className={`h-1 w-1 absolute ${dark ? "bg-dark-theme-light" : 'bg-light-theme-light'}`} style={{zIndex: "-1"}}></div>
            <div id="dark-color" className={`h-1 w-1 absolute ${dark ? "bg-dark-theme-dark": "bg-light-theme-dark"}`} style={{zIndex: "-1"}}></div>
            <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
                <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill={darkBackground} />
                <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill={lightBackground} />
            </svg>
        </footer>
    )
}

export default Footer