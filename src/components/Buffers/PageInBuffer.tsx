import { useState, useRef, useEffect } from "react"
interface PageInBufferProps {
    welcomeMsg?: boolean
    delay: number
}
const PageInBuffer:React.FC<PageInBufferProps> = ({ welcomeMsg = true, delay = 600 }) => {
    const [isBuffer, setIsBuffer] = useState<boolean>(true)
    const curtainsRef = useRef<Array<HTMLDivElement | null>>([])
    const getCWidth = () => {
        const element = document.getElementById("c_char")
        if (element) {
            return element.offsetWidth
        }
        return 0
    }
    const [cWidth] = useState<number>(getCWidth())

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
            <div className="fixed top-0 h-screen w-screen flex z-50 pointer-events-none" style={{right: `-${cWidth/2}`}}>
                <div className="flex flex-row w-full h-full">
                    <div ref={(element)=> (curtainsRef.current[0] = element)}className="w-1/2 bg-black curtain flex items-center justify-end">
                        {welcomeMsg && (
                            <div className="text-white font-bold text-5xl md:text-6xl lg:text-8xl">Wel</div>
                        )}
                    </div>
                    <div ref={(element) => (curtainsRef.current[1] = element)}className="w-1/2 bg-black curtain flex items-center justify-start">
                    {welcomeMsg && (
                        <div className="text-white font-bold text-5xl md:text-6xl lg:text-8xl"><div id="c_char"className="inline">c</div>ome</div>
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