import { $Forms,$InputName, $InputCPF } from "./styles";

function Forms(){
    return(
        <$Forms>
            <p>Nome do comprador:</p>
            <$InputName />
            <p>CPF do comprador:</p>
            <$InputCPF />
        </$Forms>
    )
}

export default Forms;