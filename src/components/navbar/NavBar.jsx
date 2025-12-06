import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar-links">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          "navbar-link" + (isActive ? " navbar-link-active" : "")
        }
      >
        HOME
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          "navbar-link" + (isActive ? " navbar-link-active" : "")
        }
      >
        PROJECTS
      </NavLink>
    </nav>
  );
}
