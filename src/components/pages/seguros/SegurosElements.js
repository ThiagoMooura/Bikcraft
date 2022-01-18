import styled from "styled-components";

export const Hero = styled.section`
    width: 100%;
    height: fit-content;
    background-color: #111111;
    position: relative;
    top: 4rem;
    padding: 3rem 2rem;
`
export const Vantagens = styled.section`
    width: 100%;
    background-color: #000;
    padding: 4rem;
    margin-top: 4rem;

    @media screen and (max-width: 425px) {
        padding: 4rem 2rem;
    }
`
export const VantagensWrap = styled.div`
    max-width: 72rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const VantagensCardsWrap = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    row-gap: 3rem;
    flex-wrap: wrap;
    margin-top: 4rem;

    @media screen and (max-width: 1280px) {
        
    }
`
export const VantagensCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    @media screen and (max-width: 1280px) {
        width: 40%;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`
export const VantagensIcon = styled.img`
    width: 2rem;
    height: 2rem;

    @media screen and (max-width: 768px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`
export const VantagensTitle = styled.h3`
    font-size: 1.5em;
    color: #fff;
    font-weight: 400;
    text-transform: capitalize;
    margin-top: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`
export const VantagensParagraph = styled.p`
    color: #b2b2b2;
    font-size: 1.05em;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`

/* ASK */
export const Ask = styled.section`
    width: 100%;
    padding: 5rem 2rem;

    @media screen and (max-width: 510px){
        padding: 3rem 1rem;
    }
`
export const AskWrap = styled.div`
    max-width: 72rem;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
`
export const AskCardsWrap = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 510px){
        margin-top: 2rem;
    }
`
export const AskCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;

    &:nth-child(odd){
        background-color: #F7F7F7;
    }
    @media screen and (max-width: 510px){
        padding: 0.8rem;
    }
`
export const AskTitleWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const AskRectangle = styled.div`
    width: 0.75rem;
    height: 0.5rem;
    background-color: #FFBB00;
    margin-right: 0.5rem;
`
export const AskTitle = styled.h3`
    color: #111111;
    font-weight: 700;
    font-size: 1.2em;
`
export const AskParagraphWrap = styled.div`
    max-width: 42rem;
    margin-left: 1.25rem;
    margin-top: 1rem;
`
export const AskParagraph = styled.p`
    color: #404040;
    font-size: 1em;
`
export const WrapTitle = styled.div`
    @media screen and (max-width: 440px){
        font-size: 0.8em;
    }
    @media screen and (max-width: 375px){
        font-size: 0.8em;
    }
`