import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ProjectCard.css';
import './projectcard.css'

export default function Projectcard({ src, title }) {
    return (
        <div className="project-card">
            <img src={src} alt={title} className="project-card-img" />
            
            <h1 className="project-card-title">{title}</h1>

            <Button 
                variant="contained" 
                className="project-card-btn"
                endIcon={<ArrowForwardIcon />}
            >
                More Information
            </Button>
        </div>
    );
}
