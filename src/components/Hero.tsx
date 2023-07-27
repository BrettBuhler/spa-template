interface HeroProps {
    title: string
    subTitle: string
    background: string
}

const Hero: React.FC<HeroProps> = ({ title, subTitle, background }) => {
    return (
        <section id="home" className="h-screen flex items-center justify-center" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundColor: 'black'}}>
            <div className="top-0 left-0 w-full h-full bg-black absolute opacity-50"></div>
            <fieldset style={{transform: "rotateX(180deg)"}}className="rounded-br-2xl rounded-tl-2xl border-8 border-white bg-transparent p-4 flex justify-center items-center">
                <div className="bg-transparent p-2 mb-4">
                    <h1 style={{transform: "rotateX(180deg)"}} className="text-6xl font-bold text-white">{title}</h1>
                </div>
                <legend className="text-xl font-bold text-white mx-auto pb-3 pl-2 pr-2" style={{transform: "rotateX(180deg)"}}>{subTitle}</legend>
            </fieldset>

        </section>
    )
}

export default Hero