import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faSteam} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faReddit} from "@fortawesome/free-brands-svg-icons";

function Home(){
    return (
        <div className="homecontainer mobilecontainer">
                <img src="/jag.jpg" alt="Bild på mig som barn" className="profilepic" />
                <div className="indextextcontainer">
                    <h1>Jonathan Ludvigsson</h1>
                    <h1>SYSTEMUTVECKLARE</h1>
                    <h1>CAMPUS VARBERG</h1>
                    <hr />
                    <div className="medialinks">
                      <a href="https://github.com/JonathanLudvigsson" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                      <a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                      <a href="https://steamcommunity.com/profiles/76561198042569756"target="_blank"><FontAwesomeIcon icon={faSteam}></FontAwesomeIcon></a>
                      <a href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                      <a href="https://www.reddit.com" target="_blank"><FontAwesomeIcon icon={faReddit}></FontAwesomeIcon></a>
                    </div>
            </div>
        </div>
    )
}

export default Home;