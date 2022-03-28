import {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import ButtonEl from "../Button";
import Footer from "../Footer";

import { $H1, $Days } from "./styles";


function MoviePage(){
    const [imgURL, setImgURL] = useState("")
    const [nameMovie, setNameMovie] = useState("")
    const { idMovie } = useParams()

    //const [chosenMovie, setChosenMovie] = useState({})
    const [days, setDays] = useState([])
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        promise.then(response => {
            const {data} = response;
            setImgURL(data.posterURL)
            setNameMovie(data.title)
            setDays(data.days);
        });
    }, [])
    
    console.log(imgURL);
    return  (
        <>
        <$H1>Selecione o horário</$H1>
        <$Days>       
            {days.map((day) => {
                const {showtimes: times, id, weekday, date} = day;
                return (
                    <span key={id}>
                    <p> {weekday} - {date}</p>
                    
                    <span>
                    {times.map((time, i) => 
                    <Link to={`/sessao/${time.id}`} style={{textDecoration:'none'}} key={i}> 
                        <ButtonEl buttonHTML={time.name} /> 
                    </Link>
                    )}
                    </span>
                    </span>
                )
            })}
        </$Days>
        <Footer imgMovie={imgURL} nameMovie={nameMovie}/>
        </>
    )
}

export default MoviePage;