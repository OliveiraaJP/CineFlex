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

export const $Days = styled.div`
width: calc(100vw - 48px);
padding: 0 24px;

background-color: lightcoral;

    p{
        font-size: 20px;
        margin-bottom: 22px;
    }

    span{
        display: flex;
        flex-wrap: wrap;
    }
`