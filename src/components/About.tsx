interface AboutProps {
    dark?: boolean
    title?: string
    text?: string[]
    aboutTitle: string
    aboutSkills: [string, string][]
}

const About: React.FC<AboutProps> = ({ dark = true, title = "Place Holder", text = ["Place Holder Text", "More text"], aboutTitle, aboutSkills }) => {
    return (
      <section id="about" className={` w-full ${dark ? "bg-dark-theme-dark" : "bg-light-theme-dark"} transition-colors`}>
        <div className="flex  flex-col justify-center gap-4 h-full lg:flex-row" style={{ paddingTop: "130px", paddingBottom: "130px" }}>
          <div className={`w-full lg:w-1/2 lg:ml-4`}>
          <h2 className={`text-4xl text-center font-bold ${dark ? "text-gray-100" : "text-gray-950"}`}>{title}</h2>
                    <div className="flex flex-col h-3/5 text-xl font-semibold mt-6 ml-6 mr-6">
                        {text.map((paragraph, i) => 
                            <div>
                                <p key={`about_paragraph_${i}`} className={`flex-grow ${dark ? "text-gray-100" : "text-gray-950"}`}>{paragraph}</p>
                                {i < text.length - 1 && (<br></br>)}
                            </div>
                        )}
                    </div>
          </div>
          <div className="w-full lg:w-1/2 h-full lg:mr-4 pb-8">
            <h2 className={`text-4xl text-center font-bold ${dark ? "text-gray-100" : "text-gray-950"}`}>{aboutTitle}</h2>
            <div className="h-full flex flex-wrap items-center justify-center gap-4 flex-grow mt-8">
              {aboutSkills.map((skill, i) => (
                <div
                  className={`flex flex-col items-center border-2 justify-center shadow-lg rounded-lg ${dark ? "bg-dark-theme-light" : "bg-light-theme-light"}`}
                  style={{ minWidth: "140px", minHeight: "140px" }}
                  key={`skill_key_${i}`}
                >
                  <img src={skill[0]} className="" style={{ height: "70px", width: "70px" }} alt="Skill icon" />
                  <div className={`font-semibold ${dark ? "text-gray-100" : "text-gray-950"}`}>{skill[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;