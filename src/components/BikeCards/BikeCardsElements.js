import styled from "styled-components";
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';


export const BikeCards = styled(Link)`
    width: fit-content;
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;

    &:hover .line{
        width: 1.5rem;
    }
`
export const BikeCardsImg = styled.img`
    height: 27rem;
    width: auto;
    border-radius: 5px;

    @media screen and (max-width: 890px){
        height: 20rem;
    }
    @media screen and (max-width: 500px){
        height: 18rem;
    }
`
export const BikeNameWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const Line =styled.div`
    width: 1rem;
    height: 0.6rem;
    background-color: #FAB505;
    margin-top: 0.8rem;
    margin-right: 0.5rem;
    transition: 0.3s;
`
export const BikeName = styled.h1`
    color: #000;
    font-size: 2em;
    margin-top: 0.5rem;

    @media screen and (max-width: 500px){
        font-size: 1.7em;
    }
`
export const BikePrice = styled.p`
    font-size: 1.2em;
    color: gray;
    margin-left: 1.6rem;
`