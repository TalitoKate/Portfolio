import ProjectLayout from "../../layouts/ProjectLayout";
import { FaPython, FaUnity, FaDocker, FaCode } from "react-icons/fa";

export default function Project3() {
    const projectData = {
        title: "Digital Twin Manufacturing System",
        shortDescription: "A virtual factory simulation platform that eliminates production downtime and travel costs by enabling remote management, testing, and optimization of industrial machinery through real-time synchronization with physical equipment.",
        stack: [
            { name: "Unity", icon: <FaUnity /> },
            { name: "C#", icon: <FaCode /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Docker", icon: <FaDocker /> },
        ],
        images: [
            { src: "/images/Project3/page1.png", alt: "Digital Twin - Main Interface" },
        ],
        implementationImages: [
            { src: "/images/Project3/tech4.png", alt: "Technical Implementation - Tech 4" },
            { src: "/images/Project3/tech3.png", alt: "Technical Implementation - Tech 3" },
            { src: "/images/Project3/tech2.png", alt: "Technical Implementation - Tech 2" },
            { src: "/images/Project3/tech1.png", alt: "Technical Implementation - Tech 1" },
        ],
        longDescription: (
            <>
                <p>
                    Developed for the Smart Sustainable Manufacturing (SSM) Lectorate in collaboration with the Dutch National Center of Expertise, this proof-of-concept addresses critical inefficiencies in Netherlands manufacturing: high travel costs for skilled technicians, production shutdowns costing billions annually, and limited educational capacity for industrial training. The Digital Twin creates a 1:1 virtual replica of the FischerTechnik factory that mirrors operational states and actions in real-time, enabling engineers to test updates, troubleshoot issues, and optimize workflows remotely without halting production. This solution directly addresses the risk of tech companies like ASML relocating due to inaccessible technical expertise.
                </p>
                <p>
                    The architecture implements a three-component system with bidirectional data flow: the Digital Twin (Unity-based 3D model with interactive controls and intricate control systems), the Programmable Logic Controller (PLC processing factory signals and coordinating responses), and the physical FischerTechnik factory with high bay warehouse, sorting line, multi-processing station, and vacuum suction gripper modules. Communication leverages Beckhoff's ADS (Automation Device Specification) protocol enabling real-time synchronization with under 5-second latency. The system employs RealVirtual interface to convert PLC signals into Unity-compatible code, while VPN server and secure router provide encrypted remote access treating both physical factory and Digital Twin as unified ADS clients.
                </p>
                <p>
                    Following Scrum methodology with iterative sprint reviews, development focused on three operational modes: Observation Mode (360-degree camera navigation, alert monitoring, component-specific data visualization), Control Mode (administrator-authenticated parameter adjustment affecting both digital and physical factories, real-time conveyor speed and temperature controls), and Testing Mode (new PLC code validation with variable assignment system). Key implementations include: mobile camera system replacing four static views for dynamic visualization, modular kinematics system allowing component import and configuration, automated alerting mechanisms reducing downtime, DFD diagrams documenting data flow between clients and factory, and comprehensive user manual for RealVirtual-based Digital Twin creation. The system successfully demonstrates how virtual factory simulation enhances Overall Equipment Effectiveness (OEE) while eliminating geographical constraints for technical expertise.
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
            downloadZip={{
                url: "/files/DigitalTwin.zip",
                filename: "DigitalTwin.zip",
                label: "Download Project"
            }}
            status="Finished"
        />
    );
}
