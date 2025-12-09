import './projectlayout.css';
import Stack from '../components/stack/Stack';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectLayout({ 
    title, 
    shortDescription, 
    stack, 
    longDescription, 
    images,
    implementationImages,
    githubLink,
    githubLinks,
    downloadZip,
    deployedUrl,
    videoUrl,
    videoDescription,
    status 
}) {
    const navigate = useNavigate();

    return (
        <div className="project-layout">
            {/* Back Button */}
            <button className="back-button" onClick={() => navigate('/projects')}>
                <FaArrowLeft />
                <span>Back to Projects</span>
            </button>

            {/* Project Title */}
            <div className="project-title-section">
                <h1>{title}</h1>
                {status && (
                    <span className={`project-status ${status.toLowerCase().replace(' ', '-')}`}>
                        {status}
                    </span>
                )}
            </div>

            {/* Short Description */}
            <div className="project-short-description">
                <p>{shortDescription}</p>
            </div>

            {/* GitHub Link */}
            {githubLinks && githubLinks.length > 0 ? (
                <div className="project-github-section">
                    {githubLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaGithub />
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            ) : downloadZip ? (
                <div className="project-github-section">
                    <a href={downloadZip.url} download={downloadZip.filename} className="github-link download-link">
                        <FaDownload />
                        <span>{downloadZip.label || "Download Project"}</span>
                    </a>
                </div>
            ) : (githubLink || deployedUrl) && (
                <div className="project-github-section">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaGithub />
                            <span>View on GitHub</span>
                        </a>
                    )}
                    {deployedUrl && (
                        <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="github-link deployed-link">
                            <FaExternalLinkAlt />
                            <span>View Live Site</span>
                        </a>
                    )}
                </div>
            )}

            {/* Tech Stack */}
            <div className="project-stack-section">
                <h2>Tech Stack</h2>
                <div className="stack-items">
                    {stack.map((tech, index) => (
                        <div key={index} className="stack-item">
                            {tech.icon && (
                                <span className="stack-icon">{tech.icon}</span>
                            )}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Demonstration */}
            {videoUrl && (
                <div className="project-video-section">
                    <h2>Demonstration</h2>
                    {videoDescription && (
                        <p className="video-description">{videoDescription}</p>
                    )}
                    <div className="video-wrapper">
                        <video controls className="project-video">
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Visualisation Stack */}
            {!videoUrl && images && images.length > 0 && (
                <div className="project-images-section">
                    <h2>Visualisation</h2>
                    <div className="project-stack-wrapper">
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={true}
                            cards={images.map((image, i) => (
                                <img 
                                    key={i} 
                                    src={image.src} 
                                    alt={image.alt || `Project screenshot ${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                                />
                            ))}
                        />
                    </div>
                </div>
            )}

            {/* Implementation Stack */}
            {implementationImages && implementationImages.length > 0 && (
                <div className="project-images-section">
                    <h2>Implementation</h2>
                    <div className="project-stack-wrapper">
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={true}
                            cards={implementationImages.map((image, i) => (
                                <img 
                                    key={i} 
                                    src={image.src} 
                                    alt={image.alt || `Implementation ${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                                />
                            ))}
                        />
                    </div>
                </div>
            )}

            {/* Long Description */}
            <div className="project-long-description">
                <h2>About the Project</h2>
                <div className="description-content">
                    {typeof longDescription === 'string' ? (
                        <p>{longDescription}</p>
                    ) : (
                        longDescription
                    )}
                </div>
            </div>
        </div>
    );
}
