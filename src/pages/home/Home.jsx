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
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Deleniti ad voluptatem nostrum in perferendis nam, impedit neque nobis amet 
                            ipsum sapiente debitis dicta numquam aperiam laborum tempora! Porro, eius saepe.
                        </p>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nemo, praesentium deserunt minus dignissimos dolor tenetur 
                            similique reiciendis nostrum quis blanditiis voluptatum ipsam 
                            aspernatur non quam in autem corporis harum nihil?
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
