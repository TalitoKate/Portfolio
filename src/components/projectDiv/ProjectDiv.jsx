import "./projectdiv.css"
import { useNavigate } from 'react-router-dom'

export default function ProjectDiv({ title, src, description, link, status }) {

    const navigate = useNavigate(); // <-- call the hook here

    return (
        <section
            className="projects-div"
            onClick={() => navigate(link)}   // <-- call navigate here
        >
            <div>
                <img src={src} alt="PlaceHolder" className="project-image" />
            </div>
            <div>
                <h2>{title}</h2>
                {status && (
                    <span className={`project-card-status ${status.toLowerCase().replace(' ', '-')}`}>
                        {status}
                    </span>
                )}
                <p>{description}</p>
            </div>
        </section>
    )
}
