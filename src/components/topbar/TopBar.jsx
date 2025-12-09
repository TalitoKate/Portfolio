import NavBar from "../navbar/NavBar";
import { useLocation } from 'react-router-dom';
import './topbar.css'

export default function TopBar()
{
    const location = useLocation();
    const isProjectDetailPage = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';

    const isProjectsPage = location.pathname === '/projects';

    return(
        <>
        <div className="topbar">
            {!isProjectDetailPage && (
                <img 
                    src={isProjectsPage ? "/project-icon.svg" : "/home-icon.svg"} 
                    alt={isProjectsPage ? "Projects" : "Home"} 
                    className="home-logo" 
                />
            )}
            <NavBar />
        </div>
        </>
    )
}