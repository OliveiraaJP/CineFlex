import styled from "styled-components";

export const $Footer = styled.footer`
position: fixed;
bottom: 0;
left: 0;
width: 100vw;
height: 117px;
padding: 0px 10px;

display: flex;
align-items: center;

border: 1px solid #9EADBA;
background-color: #DFE6ED;

font-size: 26px;
font-weight: 400;
font-size: 26px;
line-height: 30px;
color: #293845;

    img{
        width: 48px;
        height: 72px;
    }
`

export const $imgBox = styled.div`
width: 69px;
height: 89px;

border-radius: 2px;
box-shadow: 0px 2px 4px 0px #0000001A;

display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;

margin-right: 14px;
`

export const $textBox = styled.div`
width: calc(100% - 120px);


font-size: 26px;

display: flex;
align-items: flex-start;
justify-content: center;

flex-direction: column;

    p{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`