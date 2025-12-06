import ProjectDiv from "../../components/projectDiv/ProjectDiv"
import './projects.css'

export default function Projects() {
    return(
        
        <>
        <section className="projects-main">
            <div className="projects-cotainer">
                <ProjectDiv 
                    title="Project 1"
                    src="OneFifty.png"
                    description="This is a description for Project 1."
                    link="/test"   
                />     
                {/* love what ever you want to make the link to each of your projects it will be here as ive written test*/}
                
                <ProjectDiv 
                    title="Project 1"
                    src="OneFifty.png"
                    description="This is a description for Project 1."
                    link="/test"
                />
                <ProjectDiv 
                    title="Project 1"
                    src="OneFifty.png"
                    description="This is a description for Project 1."
                />
                <ProjectDiv 
                    title="Project 1"
                    src="OneFifty.png"
                    description="This is a description for Project 1."
                />  
            </div>
        </section>
        </>
    )
}