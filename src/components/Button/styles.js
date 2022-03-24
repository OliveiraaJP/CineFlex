import styled from "styled-components";

export const ButtonEl = styled.button`
width: ${(props) =>(props.isLargee ? "225px" : "83px" ) };
height: 43px;
margin: 0 8px 8px 0;

border-radius: 3px;
border: 0;
background-color: #E8833A;

display: flex;
align-items: center;
justify-content: center;

font-size: 14px;
color: #FFFFFF;
text-decoration:none;
`

