import styled from "styled-components";

export const $H1 = styled.span`
width: 100vw;
height: 110px;

display: flex;
align-items: center;
justify-content: center;

font-size: 24px;
color: #293845;
`

export const $AllSeats = styled.div`
margin: auto;
width: 90vw;

display: flex;
flex-wrap: wrap;
`

export const $Seat = styled.div`
width: 26px;
height: 26px;
background-color: #C3CFD9;
margin-right: 7px;
margin-bottom: ${(props) =>(props.status ? "10px" : "18px" ) };;
font-size: 11px;

border: 1px solid #808F9D;
border-radius: 12px;
box-sizing: border-box;

display: flex;
justify-content: center;
align-items: center;
`

export const $SeatStatus = styled.div`
width: 70vw;
margin: auto;
display: flex;
justify-content: space-around;
font-size: 13px;
margin-bottom: 20px;

    span{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`

export const $SeatEx = styled($Seat)`
border-color: ${(props) =>(props.borderAvailable ? "#1AAE9E" : "#F7C52B" ) };
background-color: ${(props) =>(props.backAvailable ? "#8DD7CF" : "#FBE192" ) };
margin-bottom: 10px;
`



export const $Forms = styled.form`

width: 90vw;
margin: auto;

    input{
        margin: 5px 0px 15px 0px;
        width:327px;
        height: 51px;
        border:1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 18px;
        
    }

    div{
        margin-top: 20px;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: center;
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
`