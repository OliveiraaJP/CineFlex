import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from "react"
import axios from "axios"

import Forms from "./Forms"

import {$H1, $AllSeats, $Seat, $SeatStatus, $SeatEx} from "./styles"


function SessionPage(){

    const { idSession } = useParams()
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        promise.then(response => {
            const { data } = response
            console.log(data);
            setSeats(data.seats)
        })
    }, [])

console.log(seats);
console.log(typeof seats);

    return(
        <>
        <$H1>Selecione o(s) assento(s)</$H1>

        <$AllSeats>
            {seats.map((seat, i) => {
                const {id, name, isAvailable} = seat
                if(isAvailable === true){
                return(
                    <$Seat> {name} </$Seat>
                )} else {
                    return (
                        <$SeatEx> {name} </$SeatEx>
                    )
                }
            })}
        </$AllSeats>

        <$SeatStatus> 
        <span> <$SeatEx borderAvailable backAvailable/> Selecionado </span>
        <span>  <$Seat status/> Dísponivel</span>
        <span>  <$SeatEx/> Indisponível</span>
        </$SeatStatus>

        <Forms />
        </>
    )
}

export default SessionPage;