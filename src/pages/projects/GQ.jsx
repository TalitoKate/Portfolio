import ProjectLayout from "../../layouts/ProjectLayout";
import { FaApple, FaSwift, FaMapMarkedAlt } from "react-icons/fa";
import { SiSwift } from "react-icons/si";

export default function Project4() {
    const projectData = {
        title: "GeoQuest App",
        shortDescription: "A location-based mobile game for iOS that encourages players to explore real-world points of interest in Emmen through interactive map gameplay and contextual trivia challenges.",
        stack: [
            { name: "Swift", icon: <FaSwift /> },
            { name: "SwiftUI", icon: <SiSwift /> },
            { name: "iOS", icon: <FaApple /> },
            { name: "MapKit", icon: <FaMapMarkedAlt /> },
        ],
        images: [
            { src: "/images/Project4/page11.jpeg", alt: "GeoQuest - Page 11" },
            { src: "/images/Project4/page10.jpeg", alt: "GeoQuest - Page 10" },
            { src: "/images/Project4/page9.jpeg", alt: "GeoQuest - Page 9" },
            { src: "/images/Project4/page8.jpeg", alt: "GeoQuest - Page 8" },
            { src: "/images/Project4/page7.jpeg", alt: "GeoQuest - Page 7" },
            { src: "/images/Project4/page6.jpeg", alt: "GeoQuest - Page 6" },
            { src: "/images/Project4/page5.jpeg", alt: "GeoQuest - Page 5" },
            { src: "/images/Project4/page4.jpeg", alt: "GeoQuest - Page 4" },
            { src: "/images/Project4/page3.jpeg", alt: "GeoQuest - Page 3" },
            { src: "/images/Project4/page2.jpeg", alt: "GeoQuest - Page 2" },
            { src: "/images/Project4/page1.jpeg", alt: "GeoQuest - Page 1" },
        ],
        implementationImages: [
            { src: "/images/Project4/tech7.png", alt: "Technical Implementation - Tech 7" },
            { src: "/images/Project4/tech6.png", alt: "Technical Implementation - Tech 6" },
            { src: "/images/Project4/tech5.png", alt: "Technical Implementation - Tech 5" },
            { src: "/images/Project4/tech3.png", alt: "Technical Implementation - Tech 3" },
            { src: "/images/Project4/tech2.png", alt: "Technical Implementation - Tech 2" },
            { src: "/images/Project4/tech1.png", alt: "Technical Implementation - Tech 1" },
        ],
        longDescription: (
            <>
                <p>
                    Developed for iOS using SwiftUI, GeoQuest transforms urban exploration into an engaging game that encourages residents and visitors to discover Emmen's hidden gems. Players navigate an interactive map powered by MapKit and Core Location, walking to real-world points of interest within a 100-meter capture radius to answer contextual trivia questions. The game features color-coded markers (blue for uncaptured, green for captured locations), distance-sorted list view, and strategic gameplay elements including bombs and mines that affect capture mechanics. With goals of increasing foot traffic to local POIs (10+ locations per user monthly) and providing engaging question-based gameplay (average session length over 1 minute), GeoQuest delivers a battery-efficient geolocation experience (under 5% drain per 15-minute session).
                </p>
                <p>
                    The architecture implements SwiftData for persistence with entities for Place (POI details, capture status, trivia), Player (profile, inventory, capture history), and Item (bombs/mines with quantities). Core algorithms include Haversine distance calculations via CLLocation for precise capture verification, cooldown throttling preventing duplicate captures, and server-side answer hashing to prevent client-side cheating. The system features real-time updates through WebSocket Manager with persistent connection loops, automatic reconnection handling, and application notification dispatch. UI components include GameOverlayView HUD displaying progress bars and inventory counts, capture quiz modal with haptic feedback, and admin maintenance mode hidden behind debug gestures for live POI editing via YAML/CSV import.
                </p>
                <p>
                    Following comprehensive testing strategy with unit tests for capture logic, UI tests for map gestures and quiz flows, and closed beta TestFlight distribution to 25 users, the implementation ensures performance targets (55+ FPS on iPhone SE 2nd gen, over 99% crash-free sessions) and privacy compliance. The CI/CD pipeline leverages GitHub Actions with Xcode Cloud, automatic code signing, and Fastlane for App Store submission. Security measures include When-In-Use location access only, no continuous background tracking, anonymized capture events, and GDPR compliance. Workflow diagrams document place capture flow (proximity detection to quiz modal to answer evaluation to capture confirmation), quiz session lifecycle (question fetch to timeout handling to scoring to pass/fail threshold), mine-planting mechanics (token verification to 5-second cooldown to API invocation), and admin place-addition flow (authentication to edit mode to location selection to validation to API request with retry logic). The high-fidelity Figma prototype follows WCAG AA contrast guidelines with SwiftUI micro-interactions, positioning GeoQuest for scalable expansion beyond Emmen.
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
            githubLinks={[
                { label: "View Project on GitHub", url: "https://github.com/TalitoKate/AppDevelopment-Project" },
                { label: "View API Repository", url: "https://github.com/TalitoKate/AppDevelopmentAPI" }
            ]}
            status="Finished"
        />
    );
}
