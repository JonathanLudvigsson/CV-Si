import { useEffect, useState } from 'react';

function CVApi(){
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(null)
    useEffect(() => {
        fetch("/cv.json")
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setData(result)
            setIsLoaded(true)
        })
        .catch((error) => {
            setIsLoaded(true);
            console.log(error)
        })
    }, [])

    if (!isLoaded){
        return(
            <>
            <p>Loading...</p>
            </>
        )
    }
    else{
    return(
        <>
        <div className="educations">
            <h1>Utbildningar</h1> 
            <hr />
            <ul className="cvlist">
            {data.educations.map((item) => {
            return(
                <li key={item.id}><h3>{item.name}<br />{item.location}<br /></h3>{item.duration}</li>
        )})}
            </ul>
            <hr />
        </div>
        <div className="skills">
            <h1>Kunskaper</h1>
            <hr />
            <ul className="skillslist">
            {data.skills.map((item) => {
                return(
                <li key={item.id}><h3>{item.name}</h3></li>
            )})}
            </ul>
            <hr />
        </div>
        <div className="learning">
            <h1>Lär mig</h1>
            <hr />
            <ul className="learninglist">
            {data.learning.map((item) => {
            return(
                <li key={item.id}><h3>{item.name}</h3></li>
            )})}
            </ul>
        </div>
        </>
    )
    
}
}

export default CVApi;