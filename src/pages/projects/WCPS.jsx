import ProjectLayout from "../../layouts/ProjectLayout";
import { FaPython, FaAws, FaJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";

export default function Project1() {
    const projectData = {
        title: "Weather Claim Prediction System",
        shortDescription: "A proactive insurance solution leveraging real-time social media data to detect and visualize severe weather events across the Netherlands, enabling timely preventive measures and reducing claim costs.",
        stack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "AWS", icon: <FaAws /> },
        ],
        images: [
            { src: "/images/Project1/page6.png", alt: "Weather Claim Prediction - Page 6" },
            { src: "/images/Project1/page5.png", alt: "Weather Claim Prediction - Page 5" },
            { src: "/images/Project1/page4.png", alt: "Weather Claim Prediction - Page 4" },
            { src: "/images/Project1/page3.png", alt: "Weather Claim Prediction - Page 3" },
            { src: "/images/Project1/page2.png", alt: "Weather Claim Prediction - Page 2" },
            { src: "/images/Project1/page1.png", alt: "Weather Claim Prediction - Page 1" },
        ],
        implementationImages: [
            { src: "/images/Project1/tech4.png", alt: "Technical Implementation - Tech 4" },
            { src: "/images/Project1/tech3.png", alt: "Technical Implementation - Tech 3" },
            { src: "/images/Project1/tech2.png", alt: "Technical Implementation - Tech 2" },
            { src: "/images/Project1/tech1.png", alt: "Technical Implementation - Tech 1" },
        ],
        longDescription: (
            <>
                <p>
                    Developed for Unigarant (ANWB's insurance subsidiary), this proof-of-concept system transforms traditional reactive insurance into a proactive "predict, prevent, insure" model. By collecting geo-tagged social media posts from X (formerly Twitter), the application detects localized weather events—microbursts, hailstorms, and heavy rainfall—that province-wide alerts often miss. The system provides real-time intelligence to Claims and Prevention teams, enabling timely interventions that reduce damage and maintain affordable premiums.
                </p>
                <p>
                    The architecture implements a three-stage pipeline: data fetching via X API with OAuth 2.0 authentication, rigorous data processing including validation and transformation with pandas and regex, and storage in DynamoDB optimized for time-series data. The Python-based backend built with Flask handles API requests with rate limit management and batch processing, while the frontend features an interactive Leaflet.js map displaying color-coded severity markers and real-time updates.
                </p>
                <p>
                    Following Scrum methodology across four sprints, the development encompassed comprehensive stakeholder analysis, technical design documentation, and iterative prototyping. Key implementations include: automated email notifications via SMTP to Unigarant employees, a Chrome extension for intranet integration providing popup alerts, REST API with Swagger documentation, AI-powered filtering to reduce false positives, and GDPR-compliant data handling with anonymized user information. The system successfully demonstrates feasibility of combining meteorological data with hyper-local social signals to reduce claim costs.
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
            githubLink="https://github.com/TalitoKate/weather-claim-prediction-system-project"
            status="Finished"
        />
    );
}
