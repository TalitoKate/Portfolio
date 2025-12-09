import ProjectHome from "../../components/projecthome/ProjectHome";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import './home.css'
import CircleText from "../../components/circletext/CircleText";

export default function Home(){
    return(
        <>
        
        <div className="home-main">

            {/* ABOUT ME */}
            <div className="about-me-section">
                <SectionTitle heading='About me'/>
                
                <div className="about-me-container">
                    <div className="about-me-text">
                        <p>
                            Full-stack software engineer specializing in building scalable web and mobile applications. Experienced in delivering production-ready solutions from concept to deployment across diverse domains including e-commerce, IoT, geolocation systems, and data analytics.
                        </p>
                        <ul className="about-me-highlights">
                            <li><strong>Technical Expertise:</strong> React, Next.js, Java, TypeScript, Swift, Python, PostgreSQL, AWS, Vercel</li>
                            <li><strong>Team Collaboration:</strong> Agile/Scrum methodologies, cross-functional teamwork, project workflow management</li>
                            <li><strong>Problem Solving:</strong> Translating business requirements into elegant technical solutions with clean, maintainable code</li>
                            <li><strong>End-to-End Development:</strong> API design, database architecture, secure authentication, payment integration, automated deployment</li>
                        </ul>
                    </div>

                    <div className="about-me-image">
                    <div className="circular-text-wrapper">
                            <CircleText 
                            text="EKATERINA • TARLYKOVA • "
                            radius={110}
                            duration={14}
                        />
                    </div>
                    </div>
                </div>
            </div>

            {/* PROJECTS */}
            <div className="my-projects-section">
                <SectionTitle heading={"My Projects"} />

                <div className="my-projects-container">
                    <div className="my-projects-text">
                        <p>
                            Explore a selection of my recent work spanning full-stack web development, mobile applications, and enterprise systems. Each project showcases different technical challenges and solutions, from real-time data processing to secure payment integrations and interactive user experiences.
                        </p>
                    </div>

                    <div className="my-projects-carousel">
                        <ProjectHome />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
