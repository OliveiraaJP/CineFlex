import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"
import axios from "axios"

import {$H1, $AllSeats, $Seat, $SeatStatus, $SeatEx, $Forms,$InputName, $InputCPF } from "./styles"

import Button from "../Button"
import Footer from "../Footer";


function SessionPage(){

    const navigate = useNavigate();
    const { idSession } = useParams()
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
    const [seats, setSeats] = useState([]);

    const [selectedSeat, setSelectedSeat] = useState([]);
    const [numberSeat, setNumberSeat] = useState([])

    const [footerMovie, setFooterMovie] = useState({})

    useEffect(() => {
        promise.then(response => {
            const { data } = response
            console.log(data);
            setSeats(data.seats)
            setFooterMovie(data)
        })
    }, [])


    function selectSeat(idSeat, nameSeat){
        console.log(idSeat, nameSeat);
        if(selectedSeat.includes(idSeat)){
            const newArray = selectedSeat.filter(el => {
                if(idSeat !== el){
                    return el
                }
            }); 
            setSelectedSeat(newArray)
            
            const newArrayNumber = numberSeat.filter(el => {
                if(nameSeat !== el){
                    return el
                }
            }); 
            setNumberSeat(newArrayNumber)

        } else{
            setSelectedSeat([...selectedSeat, idSeat])
            setNumberSeat([...numberSeat, nameSeat])
        }
    }
    console.log(selectedSeat);
    console.log(numberSeat);


    console.log(footerMovie);

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    function reserveSeat(event){
        event.preventDefault()
        
        const order = {
            ids: selectedSeat,
            name: name,
            cpf: cpf
        }

        const {movie:{title}, day:{weekday, date}} = footerMovie
        
        console.log(order);
        const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",order)

        request.then((response) => {
            
            navigate("/sucesso", {state: {name, cpf, numberSeat, title, weekday, date  } })
            
            console.log(response)
        })


        request.catch(err => console.log(err))
    }

console.log(name);
console.log(cpf);


    return Object.keys(footerMovie).length > 0 ?  (
        <>
        <$H1>Selecione o(s) assento(s)</$H1>

        <$AllSeats>
            {seats.map((seat, i) => {
                const {id, name, isAvailable} = seat
                if(isAvailable === true && !selectedSeat.includes(id)){
                return(
                    <$Seat onClick={() => selectSeat(id, name)}> {name} </$Seat>
                )} 
                
                else if(selectedSeat.includes(id)){
                    return(
                        <$SeatEx borderAvailable backAvailable onClick={() => selectSeat(id, name)}> {name} </$SeatEx>
                    )} 
                
                else {
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

        <$Forms onSubmit={reserveSeat}>
            <label>Nome do comprador:</label>
            <$InputName  value={name} onChange={e => setName(e.target.value)} required/>
            <label>CPF do comprador:</label>
            <$InputCPF value={cpf} onChange={e => setCpf(e.target.value)} min-length={11} max-length={11} required/>
            <div>
                <Button isLarge buttonHTML="Reservar assento(s)" type="submit"/>    
            </div>
        </$Forms>
        
        
        
            
        <Footer imgMovie={footerMovie.movie.posterURL}
            nameMovie={footerMovie.movie.title}
            dayMovie={footerMovie.day.weekday}
            timeMovie={footerMovie.name}
            hyphen={" - "}/>
        
        </>
    ) :
    <></>
}

export default SessionPage;