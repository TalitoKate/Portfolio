import "./projectdiv.css"
import { useNavigate } from 'react-router-dom'

export default function ProjectDiv({ title, src, description, link }) {

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
                <p>{description}</p>
            </div>
        </section>
    )
}
