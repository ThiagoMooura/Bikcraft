import styled from "styled-components";

/* HERO */

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-color: red;
`
export const Hero = styled.div`
    position: relative;
    top: 4rem;
    width: 100%;
    background-color: #111111;
    padding: 3rem 2rem;

    @media screen and (max-width: 550px){
        padding: 3rem 1rem;
    }
`
export const HeroWrap = styled.div`
    max-width: 72rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
`
export const Encapsulamento = styled.div`

`
export const HeroP = styled.p`
    font-size: 1.5em;
    font-weight: 500;
    color: #b2b2b2;
    text-transform: uppercase;

    @media screen and (max-width: 970px){
        font-size: 1.2em;
    }
    @media screen and (max-width: 550px){
        font-size: 1em;
    }
    @media screen and (max-width: 375px){
        font-size: 0.9em;
    }
`
export const HeroTitleWrap = styled.div`
    width: fit-content;
    display: flex;
`
export const HeroTitle = styled.h1`
    font-size: 4em;
    color: #fff;
    font-weight: 600;

    &:last-child{
        color: #ffbb00;
    }

    @media screen and (max-width: 970px){
        font-size: 3em;
    }
    @media screen and (max-width: 550px){
        font-size: 2.5em;
    }
    @media screen and (max-width: 375px){
        font-size: 2em;
    }
`
export const RightIcon = styled.img`
    width: 3.5rem;
    height: 3.5rem;

    @media screen and (max-width: 970px){
        width: 2.7rem;
        height: 2.7rem;
    }
    @media screen and (max-width: 550px){
        width: 2.2rem;
        height: 2.2rem;
    }
    @media screen and (max-width: 375px){
        width: 1.9rem;
        height: 1.9rem;
    }
`

/* BICICLETAS */
export const BicicletasWrap = styled.section`
    width: 100%;
    margin-top: 4rem;
    padding-left: 1rem;

    @media screen and (max-width: 860px){
        padding-left: 0;
    }
`