import styled from "styled-components"


export const $Forms = styled.div`

width: 90vw;
margin: auto;

    input{
        margin: 5px 0px 15px 0px;
        width:327px;
        height: 51px;
        border:1px solid #D5D5D5;
        border-radius: 3px;

        ::placeholder{
            margin-left: 10px;
        }
    }
`

export const $InputName = styled.input.attrs({
    type: "text",
    placeholder:"Digite seu nome aqui..."
    
})`
    margin: 5px 0px 15px 0px;
    width:327px;
    height: 51px;
    border:1px solid #D5D5D5;
    border-radius: 3px;

    ::placeholder{
            margin-left: 10px;
    }
`

export const $InputCPF = styled.input.attrs({
    type: "number",
    placeholder:"Digite seu CPF aqui..."
    
})`
    margin: 5px 0px 15px 0px;
    width:327px;
    height: 51px;
    border:1px solid #D5D5D5;
    border-radius: 3px;

    ::placeholder{
            margin-left: 10px;
    }
`