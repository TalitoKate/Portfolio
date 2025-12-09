import ProjectLayout from "../../layouts/ProjectLayout";
import { FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiTensorflow } from "react-icons/si";

export default function Project2() {
    const projectData = {
        title: "House Weather Risk Analysis System",
        shortDescription: "A data-driven property risk evaluation tool that assesses individual homes based on structural features and environmental exposure, enabling personalized insurance premiums through open-source data analysis.",
        stack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "React", icon: <FaReact /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
        ],
        images: [
            { src: "/images/Project2/page5.png", alt: "House Risk Analysis - Risk Score" },
            { src: "/images/Project2/page4.png", alt: "House Risk Analysis - Risk Factors" },
            { src: "/images/Project2/page3.png", alt: "House Risk Analysis - Element Analysis" },
            { src: "/images/Project2/page2.png", alt: "House Risk Analysis - Map View" },
            { src: "/images/Project2/page1.png", alt: "House Risk Analysis - Home Page" },
        ],
        implementationImages: [
            { src: "/images/Project2/tech5.png", alt: "Technical Implementation - Tech 5" },
            { src: "/images/Project2/tech4.png", alt: "Technical Implementation - Tech 4" },
            { src: "/images/Project2/tech3.png", alt: "Technical Implementation - Tech 3" },
            { src: "/images/Project2/tech2.png", alt: "Technical Implementation - Tech 2" },
            { src: "/images/Project2/tech1.png", alt: "Technical Implementation - Tech 1" },
        ],
        longDescription: (
            <>
                <p>
                    Developed for Unigarant (ANWB's insurance subsidiary), this proof-of-concept system transforms traditional insurance risk assessment by integrating property-level data with environmental threat analysis. The platform evaluates homes based on 15 structural factors including roof type, tree proximity, foundation material, solar panel positioning, and security features, cross-referencing these with weather data from KNMI and Open-Meteo API. By generating tailored risk scores using open-source datasets (PDOK, Boomregister.nl), the system enables Unigarant to transition from generalized postal-code-based pricing to personalized, fair premiums that reflect actual property vulnerability.
                </p>
                <p>
                    The architecture implements a three-tiered modular design: Tertiary System (data collection from multiple external sources), Secondary System (data validation and processing with REST API), and Primary System (risk evaluation engine). The Tertiary layer features specialized modules for environmental factors (storms, floods, temperature) and house characteristics, employing AI-assisted models for solar panel detection via aerial imagery analysis and tree risk assessment using geometric proximity algorithms. Data flows through domain-specific receivers into local databases, then undergoes validation and normalization before reaching the centralized risk calculation engine that generates 0-100 risk scores with transparent factor breakdowns.
                </p>
                <p>
                    Following Scrum methodology across four sprints, development encompassed comprehensive system design with ERD modeling for NoSQL databases, DFD diagrams for data flow visualization, and Figma prototypes for UI/UX validation. Key implementations include: address-based property search using Dutch postal codes, AI-powered detection of solar panels from WMS imagery, automated tree risk calculation with configurable buffer zones, interactive map visualization with layer toggles, exportable risk report summaries, and REST API with Postman-validated endpoints. The system successfully demonstrates how combining structural property data with hyper-local environmental analysis enables proactive risk mitigation, supporting Unigarant's "predict, prevent, insure" vision for Insurance 2.0.
                </p>
            </>
        )
    };

    return (
        <ProjectLayout
            title={projectData.title}
            shortDescription={projectData.shortDescription}
            stack={projectData.stack}
            longDescription={projectData.longDescription}
            images={projectData.images}
            implementationImages={projectData.implementationImages}
            githubLink="https://github.com/TalitoKate/house-weather-risk-analysis-system"
            status="Finished"
        />
    );
}
