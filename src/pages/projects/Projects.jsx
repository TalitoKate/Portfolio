import ProjectDiv from "../../components/projectDiv/ProjectDiv"
import './projects.css'

export default function Projects() {
    return(
        
        <>
        <section className="projects-main">
            <div className="projects-cotainer">
                <ProjectDiv 
                    title="Mental Well-Being App"
                    src="/images/Project6/page1.png"
                    description="A personal mental well-being app with structured journaling and mood tracking, featuring automated weekly and monthly summaries."
                    link="/projects/mwba"
                    status="In Progress"
                />  
                <ProjectDiv 
                    title="E-commerce Website"
                    src="/images/Project5/page1.png"
                    description="A full-stack e-commerce platform enabling secure digital product sales with automated delivery and Stripe payment integration."
                    link="/projects/ec"
                    status="Finished"
                />  
                <ProjectDiv 
                    title="GeoQuest App"
                    src="/images/Project4/page11.jpeg"
                    description="A location-based mobile game for iOS that encourages players to explore real-world points of interest through interactive map gameplay and trivia."
                    link="/projects/gq"
                    status="Finished"
                />  
                <ProjectDiv 
                    title="Digital Twin Manufacturing System"
                    src="/images/Project3/page1.png"
                    description="A virtual factory simulation platform that eliminates production downtime and travel costs through real-time synchronization."
                    link="/projects/dt"
                    status="Finished"
                />
                <ProjectDiv 
                    title="House Weather Risk Analysis System"
                    src="/images/Project2/page1.png"
                    description="A data-driven property risk evaluation tool that assesses individual homes based on structural features and environmental exposure."
                    link="/projects/hwras"
                    status="Finished"
                />
                <ProjectDiv 
                    title="Weather Claim Prediction System"
                    src="/images/Project1/page1.png"
                    description="A proactive insurance solution leveraging real-time social media data to detect and visualize severe weather events across the Netherlands."
                    link="/projects/wcps"
                    status="Finished"
                />     
            </div>
        </section>
        </>
    )
}