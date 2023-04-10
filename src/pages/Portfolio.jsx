import GithubApi from "../components/GithubApi";
import {useState} from 'react';

function Show1(project){
    const [showing, setShowing] = useState(false)

    let text;

    switch(project){
        case 1: text = <p>Det första projektet vi hade och ett av dom första programmen jag skrev i C#. Väldigt simpelt program som vi använde för att lära oss hur datatyper och inputs fungerar, samt if/else och for-loopar</p>
        break;
        case 2: text = <p>Det första stora projektet vi hade i den första kursen. Vi hade ett invidivudellt projekt där vi skulle skapa en simpel internetbank. Var roligt att äntligen få jobba på något större och nu
        när man ser tillbaka så ser man verkligen meningen med att använda klasser och varför dom är så användbara.</p>
        break;
        case 3: text = <p>Det största projektet vi haft hittils. Vi skulle i grupp koda en mer avancerad internetbank, denna gången med objektorienterad programmering. Vi team kiwi kodade en riktigt bra bank enligt mig
        och jag lärde mig otroligt mycket under detta projektet. Det var också väldigt roligt att få jobba i en grupp och att få lära av varandra och se hur det är att koda med flera personer och långsamt bygga upp ett större program.</p>
        break;
    }

    if (showing == false){
    return(
        <button type="button" className="button1" onClick={() => {setShowing(true)}}>Läs mer</button>
    )
    }
    else{
        return(
            <>
            <button type="button" className="button1" onClick={() => {setShowing(false)}}>Läs mindre</button>
            <div className="project1text texttohide">
            {text}
            </div>
            </>
        )
    }
}

function Portfolio(){

    

    return (
        <div className="portfoliocontainer mobilecontainer">
            <div className="projects-content mobile-content">
            <h1>Mina Projekt</h1>
            <hr />
            <div className="project project1">
                <img src="/project1.PNG" />
                <h3>MyFirstProgram</h3><br />
                {Show1(1)}
            </div>
            <hr />
            <div className="project project2">
                <img src="/project2.PNG" />
                <h3>Individuellt Projekt - Internetbank</h3><br />
                {Show1(2)}
            </div>
            <hr />
            <div className="project project3">
                <img src="/project3.PNG" />
                <h3>Grupparbete - Kiwibankomaten</h3><br />
                {Show1(3)}
            </div>
            <h1>Github</h1> <hr />
            <ul className="githublinks"><GithubApi /></ul>
        </div>
        </div>
    )
}

export default Portfolio;