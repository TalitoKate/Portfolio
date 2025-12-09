import './findme.css';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function FindMe() {

  const items = [
    {
      label: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/TalitoKate"
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ekaterina-tarlykova-910459392/"
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.com/users/464318493303013770"
    },
    {
      label: "Email",
      icon: <FaEnvelope />,
      link: "mailto:	tarlykova021105@gmail.com"
    }
  ];

  return (
    <div className="findme-icons">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="findme-btn"
        >
          <span className="findme-back"></span>
          <span className="findme-front">
            <span className="findme-icon">{item.icon}</span>
          </span>
          <span className="findme-label"><p>{item.label}</p></span>
        </a>
      ))}
    </div>
  );
}
