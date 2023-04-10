import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import EasterEgg from "./EasterEgg"

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                <NavLink to="/"><FontAwesomeIcon icon={faChevronRight} className="mobileHide"></FontAwesomeIcon>Hem</NavLink>
                </li>
                <li>
                <NavLink to="/aboutme"><FontAwesomeIcon icon={faChevronRight} className="mobileHide"></FontAwesomeIcon>Om mig</NavLink>
                </li>
                <li>
                <NavLink to="/portfolio"><FontAwesomeIcon icon={faChevronRight} className="mobileHide"></FontAwesomeIcon>Portfolio</NavLink>
                </li>
                <li className="beta">
                <NavLink to="/contactme"><FontAwesomeIcon icon={faChevronRight} className="mobileHide"></FontAwesomeIcon>Kontakta mig</NavLink>
                </li>
                <li id = "easteregg" className="mobileHide">
                <EasterEgg />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;