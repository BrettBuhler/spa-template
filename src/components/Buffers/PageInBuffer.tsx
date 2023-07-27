import { useState, useRef, useEffect } from "react"
interface PageInBufferProps {
    welcomeMsg?: boolean
    delay: number
}
const PageInBuffer:React.FC<PageInBufferProps> = ({ welcomeMsg = true, delay = 600 }) => {
    const [isBuffer, setIsBuffer] = useState<boolean>(true)
    const curtainsRef = useRef<Array<HTMLDivElement | null>>([])

    useEffect(()=>{
        setTimeout(()=>{
            closeBuffer()
        }, delay)
    },[])

    const closeBuffer = () => {
        curtainsRef.current.forEach((curtain, index) => {
            if (curtain) {
                curtain.style.animation = `slideAway-${index === 0 ? "left" : "right"} 2s forwards`
            }
        })

        setTimeout(() => {
            setIsBuffer(false)
        }, 2000)
    }

    if (isBuffer){
        return (
        <div className="absolute top-0 left-0 h-screen w-full flex z-10">
            <div className="flex flex-row w-full h-full">
                <div ref={(element)=> (curtainsRef.current[0] = element)}className="w-1/2 bg-black curtain flex items-center justify-end">
                    {welcomeMsg && (
                        <div className="text-white font-bold text-8xl">Wel</div>
                    )}
                </div>
                <div ref={(element) => (curtainsRef.current[1] = element)}className="w-1/2 bg-black curtain flex items-center justify-start">
                {welcomeMsg && (
                    <div className="text-white font-bold text-8xl">come</div>
                )}
                </div>
            </div>
        </div>
        )
    } else {
        return null
    }
}

export default PageInBuffer