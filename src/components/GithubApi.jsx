import { useEffect, useState } from 'react';

function GithubApi(){
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(null)
    useEffect(() => {
        fetch("https://api.github.com/users/JonathanLudvigsson/repos")
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
        data.map((item) => {
            return(
            <>
                <li key={item.id} className="githublink"><a href={item.html_url} target="_blank">{item.name}</a></li>
            </>
        )}
        )
    )
}
}

export default GithubApi;