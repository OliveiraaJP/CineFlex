import { $Forms,$InputName, $InputCPF } from "./styles";
import Button from "../../Button"
import { useState } from "react";
import axios from "axios";

function Forms(){

    const [name, setName] = useState([])
    const [cpf, setCpf] = useState([])

    function reserveSeat(event){
        event.preventDefault()

        const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many")
        

    }

console.log(name);
console.log(cpf);


    return(
        <$Forms onSubmit={reserveSeat}>
            <label>Nome do comprador:</label>
            <$InputName  value={name} onChange={e => setName(e.target.value)} required/>
            <label>CPF do comprador:</label>
            <$InputCPF value={cpf} onChange={e => setCpf(e.target.value)} min-length={11} max-length={11} required/>
            <div>
                <Button isLarge buttonHTML="Reservar assento(s)" type="submit"/>    
            </div>
        </$Forms>
    )
}

export default Forms;