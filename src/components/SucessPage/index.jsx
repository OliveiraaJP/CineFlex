

import { Link, useLocation } from "react-router-dom";
import {$H1, $Box, $ButtonBox} from "./styles"
import Button from "../Button"

function SucessPage(){

    const navigate = useLocation();
    console.log(navigate)
    const {state} = navigate
    console.log(state)

    return(
        <>
        <$H1>Pedido feito <br/> com sucesso!</$H1>

        <$Box> 
            <h2>Filme e sessão </h2> 
            <p>
                {state.title}
            </p>  
            <span>
            {state.date}    
            </span>  
            {state.weekday}
        </$Box>

        <$Box> 
            <h2>Assentos</h2> 
            {state.numberSeat.map(seat => <p>Assento {seat}</p>)}
        </$Box>

        <$Box>
            <h2>Comprador </h2> 
            <p>Nome: {state.name}</p>
            <p>CPF: {state.cpf}</p>
        </$Box>

        <$ButtonBox>
            <Link to="/" style={{textDecoration:'none'}}>
                <Button buttonHTML="Voltar para home" isLarge/>        
            </Link>
        </$ButtonBox>
        </>
    )
}





export default SucessPage;