import ProjectLayout from "../../layouts/ProjectLayout";
import { FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiTypescript, SiJavascript, SiSupabase } from "react-icons/si";

export default function Project6() {
    const projectData = {
        title: "Mental Well-Being App",
        shortDescription: "A personal mental well-being app with structured journaling and mood tracking. Users submit daily check-ins which automatically generate weekly and monthly summaries, with optional alerts and admin review for flagged content. Built with Supabase and PostgreSQL, enforcing secure and role-based data access.",
        stack: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Supabase", icon: <SiSupabase /> },
        ],
        images: [
            { src: "/images/Project6/page8.png", alt: "Mental Well-Being App - Page 8" },
            { src: "/images/Project6/page7.png", alt: "Mental Well-Being App - Page 7" },
            { src: "/images/Project6/page6.png", alt: "Mental Well-Being App - Page 6" },
            { src: "/images/Project6/page5.png", alt: "Mental Well-Being App - Page 5" },
            { src: "/images/Project6/page4.png", alt: "Mental Well-Being App - Page 4" },
            { src: "/images/Project6/page3.png", alt: "Mental Well-Being App - Page 3" },
            { src: "/images/Project6/page2.png", alt: "Mental Well-Being App - Page 2" },
            { src: "/images/Project6/page1.png", alt: "Mental Well-Being App - Page 1" },
        ],
        longDescription: (
            <>
                <p>
                    This solo-developed iOS mental health application combines structured self-reflection with intelligent reporting. Users submit daily mood and lifestyle entries, which are automatically aggregated into weekly and monthly reports, as long as the user has at least one entry in the relevant time period. Admins can view anonymized flagged reports to identify concerning trends.
                </p>
                <p>
                    The backend is designed using Supabase's PostgreSQL with full row-level security (RLS) and custom policies to protect user data. Schema includes normalized onboarding forms, feedback flags, and constraints for data retention (e.g. max 31 daily reports per user). Reports are auto-generated conditionally via scheduled SQL functions using Supabase's CRON jobs.
                </p>
                <p>
                    The project demonstrates secure database design, automated data summarization, user onboarding flows, and the integration of time-based logic within a fully managed BaaS setup. The system enforces strict access boundaries and includes performance-optimized views for admin dashboards.
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
            status="In Progress"
        />
    );
}
