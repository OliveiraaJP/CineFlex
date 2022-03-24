import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//import ButtonEl from "../Button";

import { $H1, $Days } from "./styles";


function MoviePage(){

    const [chosenMovie, setChosenMovie] = useState([])
    const { idMovie } = useParams()
    const {days} = chosenMovie
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        promise.then(response => {
            const {data} = response;
            setChosenMovie(data)
        });

        promise.catch("erro")
    }, [])
    
    console.log(days);
    
    return(
        <>
        <$H1>Selecione o horário</$H1>
        <$Days> 
            <p>Quinta-feira - 24/06/2021</p>
            <div>
            {days.map((day, i) => {
                const {showtimes: showTimes, id, weekday, date} = day;
                return(
                    <div key={i}>{weekday} {id} {date}</div>
                )
            })}
            </div>
        </$Days>
        </>
    )
}

export default MoviePage;
// <ButtonEl buttonHTML={"19:00"}/>