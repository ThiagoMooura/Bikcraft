import styled from "styled-components";


export const SecurityCard = styled.div`
    width: 48%;
    height: fit-content;
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    border-radius: 5px;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`
export const SecurityTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const SecurityTitle = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #9c9c9c;
    margin-left: 1rem;

    @media screen and (max-width: 890px){
        font-size: 1.7em;
    }
    @media screen and (max-width: 425px){
        margin-left: 0;
    }
    @media screen and (max-width: 375px){
        font-size: 1.4em;
    }
`
export const SecurityPriceWrap = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: end;
`
export const SecurityNumber = styled.span`
    font-weight: 600;
    font-size: 2em;
    color: #fff;

    @media screen and (max-width: 890px){
        font-size: 1.7em;
    }
    @media screen and (max-width: 375px){
        font-size: 1.4em;
    }
`
export const SecurityText = styled.span`
    color: #9c9c9c;
    font-size: 0.9em;
`
export const SecurityMid = styled.div`
    width: 100%;
    height: 100%;
    margin: 2rem 0;
`
export const SecurityPhraseWrap = styled.div`
    display: flex;
    margin: 1rem 0;
    align-items: center;

    &:first-child{
        margin-top: 0;
    }
    &:last-child{
        margin-bottom: 0;
    }
`
export const SecurityIcon = styled.i`
    margin-right: 0.4rem;
    color: #FFBB00;
    font-size: 0.7em;
`
export const SecurityPhrase = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    color: #fff;

    @media screen and (max-width: 890px){
        font-size: 0.9em;
    }
`
export const SecurityBottom = styled.div`
    padding-bottom: 2rem;
    padding-top: 1rem;

    @media screen and (max-width: 425px){
        display: flex;
        justify-content: center;
    }
`
export const SecurityButton = styled.a`
    background-color: #404040;
    padding: 1rem 2rem;
    font-size: 1.1em;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 4px;
    margin-left: 1rem;

    @media screen and (max-width: 425px){
        margin-left: 0;
        font-size: 1em;
    }
`