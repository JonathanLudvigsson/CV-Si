import CVApi from "../components/CVApi"

function Aboutme(){
    return (
        <div className="aboutmecontainer mobilecontainer">
            <aside className="aboutme-aside">
                    <div className="educations">
                        <CVApi />
                    </div>
                </aside>
                <div className="aboutmetextcontainer">
                        <img src="/jag.jpg" alt="Bild på mig som barn" class="profilepicaboutme" />
                        <h1>Om Mig</h1>
                        <hr />
                        <p>Mitt namn är Jonathan Ludvigsson och jag är studerande till Systemutvecklare .NET på Campus Varberg. Jag har alltid haft ett stort intresse inom datorer och teknik
                             och tänkte därför att en utbildning till systemutvecklare skulle passa perfekt! <br /><br />
                             Mina fritidsintressen är datorspel, software och hardware och att sitta och pilla med teknik och olika prylar. </p> 
                    </div>
        </div>
    )
}

export default Aboutme;