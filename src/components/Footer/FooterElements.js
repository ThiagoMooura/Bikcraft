import styled from "styled-components"

/* FOOTER */
export const FooterW = styled.footer`
    width: 100%;
    background-color: #000;
    padding: 3rem;
`
export const FooterCardsWrapper = styled.div`
    max-width: 72rem;
    display: flex;
    justify-content: space-between;
    margin: auto;

    @media screen and (max-width: 610px){
        flex-wrap: wrap;
    }
`
export const FooterCard = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 950px){
        &:first-child{
        display: none;
        }
        width: 40%;
    }
    @media screen and (max-width: 610px){
        width: 60%;
        &:nth-child(3){
            margin-top: 3rem;
        }
    }
    @media screen and (max-width: 545px){
        width: 100%;
    }
    
`
export const FooterLogo = styled.h1`
    font-size: 2em;
    color: #fff;
`
export const FooterCardTitle = styled.h3`
    font-weight: 400;
    font-size: 1.5em;
    color: #fff;
    text-transform: uppercase;

    @media screen and (max-width: 610px){
        font-size: 1.2em;
    }
`
export const FooterUl = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 1rem;
    
    @media screen and (max-width: 610px){
        margin-top: 0;
    }
`
export const FooterLi = styled.li`
    margin: 1rem 0;
`
export const FooterLink = styled.a`
    text-decoration: none;
    color: #b2b2b2;
    font-size: 1.1em;

    @media screen and (max-width: 610px){
        font-size: 1em;
    }
`
export const FooterLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: #111111;
`
export const FooterIcons = styled.div`
    margin-top: 2rem;

    @media screen and (max-width: 610px){
        margin-top: 1rem;
    }
`
export const FooterIcon = styled.i`
    color: #fff;
    font-size: 2em;

    @media screen and (max-width: 610px){
        font-size: 1.4em;
    }
`
export const FooterLinkWrap = styled.a`
    &:nth-child(2){
        margin: 0 2rem;
    }
`
export const FooterCredits = styled.div`
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    @media screen and (max-width: 425px){
        flex-direction: column;
    }
`
export const FooterCreditsWrap = styled.div`
    @media screen and (max-width: 425px){
        &:first-child{
            margin-bottom: 1rem;
        }
    }
`
export const FooterSpan = styled.span`
    color: #b2b2b2;
`
export const FooterCreditsLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: 600;
`