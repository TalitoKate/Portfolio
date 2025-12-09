import ProjectLayout from "../../layouts/ProjectLayout";
import { FaReact, FaStripe, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma } from "react-icons/si";

export default function Project5() {
    const projectData = {
        title: "E-commerce Website",
        shortDescription: "A full-stack e-commerce platform enabling secure digital product sales with automated delivery, featuring Stripe payment integration, cloud-based file storage, and an admin dashboard for comprehensive product and order management.",
        stack: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Stripe", icon: <FaStripe /> },
        ],
        videoUrl: "/videos/ecommerce-demo.mp4",
        videoDescription: "Demonstration of the full functionality including admin dashboard and automated email delivery system.",
        longDescription: (
            <>
                <p>
                    Developed as a complete digital marketplace solution, this e-commerce platform streamlines the entire sales cycle from product listing to automated delivery. Built with Next.js 14's App Router architecture, the system leverages server-side rendering and serverless functions deployed on Vercel for optimal performance and scalability.
                </p>
                <p>
                    The architecture implements a comprehensive three-tier system: a customer-facing storefront with dynamic product pages and secure checkout, an administrative dashboard for product management and analytics, and a backend webhook system for automated order fulfillment. The payment processing pipeline integrates Stripe's Payment Intent API with webhook handlers that automatically trigger order creation, download link generation, and email notifications upon successful transactions.
                </p>
                <p>
                    Key technical implementations include: Vercel Blob storage for scalable file uploads with automatic URL generation, PostgreSQL database hosted on Supabase with connection pooling optimized for serverless environments, time-limited download verification system preventing unauthorized access, React Email templates with Resend API for transactional emails, and Prisma ORM with type-safe database operations. The frontend features responsive Tailwind CSS styling with custom animated components including marquee effects and interactive click sparkles.
                </p>
                <p>
                    Security measures encompass password-protected admin routes using Next.js middleware with bcrypt authentication, form validation with Zod schemas, and secure file delivery through temporary verification tokens that expire after 24 hours. The system implements proper error handling with graceful degradation when database connectivity issues occur, comprehensive logging for debugging webhook failures, and cache invalidation strategies ensuring real-time product updates across all pages.
                </p>
                <p>
                    Following modern development practices, the project utilizes TypeScript for type safety, Git version control with systematic commits, environment-based configuration for production/development separation, and RESTful API design patterns. The platform successfully demonstrates feasibility of building a production-ready e-commerce system with automated digital product delivery, reducing manual fulfillment overhead while maintaining secure and reliable customer experiences.
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
            videoUrl={projectData.videoUrl}
            videoDescription={projectData.videoDescription}
            githubLink="https://github.com/TalitoKate/E-Commerce-Personal-Project"
            deployedUrl="https://e-commerce-talitokate.vercel.app/"
            status="Finished"
        />
    );
}
