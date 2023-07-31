import React from 'react'
import { useState } from 'react'

interface AnimatedUnderlineLinkProps {
    text: string
    link: string
    dark: boolean
    scrolledToTop: boolean
}

const AnimatedUnderlineLink: React.FC<AnimatedUnderlineLinkProps> = ({text, link, dark, scrolledToTop}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleEnter = () => {
        setIsHovered(true)
    }

    const handleLeave = () => {
        setIsHovered(false)
    }

    return (
    <a onMouseEnter={handleEnter} onMouseLeave={handleLeave} href={link} className={`relative transition-colors text-lg font-semibold`}>
        {text}
        <div className={`absolute left-1/2 ${dark ? "bg-gray-100" : scrolledToTop ? "bg-gray-100" : "bg-gray-950"} ${isHovered ? "w-full transform -translate-x-1/2" : "w-0"}`} style={{height: "3px", bottom: "0px", transition: "width 0.3s ease-in-out, transform 0.3s ease-in-out"}}></div>
    </a>
    );
};

export default AnimatedUnderlineLink;