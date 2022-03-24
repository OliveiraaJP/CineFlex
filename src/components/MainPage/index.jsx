import { useState, useEffect } from "react"
import axios from "axios";


import Movie from "./Movie";
import { H1, MainEl } from "./styles";


function MainPage(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/");
        promise.then(response => {
            const {data} = response;
            console.log("data",data);
            setMovies(data)
        });
        
    }, [])

console.log(movies);

    return(
        <>
        <H1>Selecione o filme</H1>
        <MainEl> 
            {movies.map((movie) => (
                <Movie id={movie.id} posterURL={movie.posterURL} />
    ))}
        </MainEl>
        </>

    )
}

export default MainPage;