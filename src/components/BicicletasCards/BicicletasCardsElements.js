import styled from "styled-components";
import foto from '../../images/bicicletas/nimbus-bg.jpg'


export const Card = styled.div`
    max-width: 72rem;
    height: 21.05rem;
    display: flex;
    margin: auto;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 860px){
        flex-direction: column;
        height: 120vh;
        padding: 0 1rem;
    }
    @media screen and (max-width: 600px){
        height: 100vh;
    }
    @media screen and (max-height: 1000px) and (orientation: portrait){
        height: 72vh;
    }
    @media screen and (max-height: 720px) and (orientation: portrait){
        height: 84vh;
    }
    @media screen and (max-height: 640px) and (orientation: portrait){
        height: 87vh;
    }
    @media screen and (max-height: 570px) and (orientation: portrait){
        height: 100vh;
    }

`
export const ImageWrap = styled.div`
    width: 48%;
    height: 100%;
    background-image: url(${foto});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (max-width: 860px){
        width: 100%;
    }
`
export const TextWrap = styled.div`
    width: 52%;
    height: 100%;
    padding-left: 2.5rem;
    padding-right: 1rem;

@media screen and (max-width: 860px){
        width: 100%;
        padding: 0;
        margin-top: 1rem;
        height: fit-content;
    }
`
export const BikeTop = styled.div`
    min-height: 36%;
    width: 100%;
`
export const Rectangle = styled.div`
    width: 0.75rem;
    height: 0.5rem;
    background-color: #ffbb00;
`
export const BikeName = styled.h2`
    font-size: 2em;
    font-weight: 700;
    color: #111111;
    text-transform: capitalize;
    margin-top: 0.2em;

    @media screen and (max-width: 860px){
        margin-top: 0;
        font-size: 1.5em;
    }
`
export const BikeDescription = styled.p`
    font-size: 1.1em;
    color: #595959;
    margin-top: 1em;

    @media screen and (max-width: 860px){
        font-size: 1em;
    }
`
export const BikeBottom = styled.div`
    width: 100%;
    min-height: 64%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 860px){
        min-height: unset;
        height: fit-content;
        margin-top: 2rem;
    }
`
export const BottomWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
    }
`
export const BikeUl = styled.ul`
    list-style: none;
    width: fit-content;
    margin-left: -0.6rem;

    @media screen and (max-width: 600px){
        display: grid;
        grid-template-columns: repeat(2,auto);
        width: 100%;
        justify-content: space-between;
        margin: 0 0 1rem 0;
    }
`
export const BikeLi = styled.li`
    display: flex;
    font-size: 1.125em;
    color: #595959;
    font-weight: 600;
    margin: 0.7rem 0;
    
    &:first-child{
        margin-top: 0;
    }
    &:last-child{
        margin-bottom: 0;
    }

    @media screen and (max-width: 600px){
    &:first-child{
        margin-top: 0.7rem;
    }
    &:last-child{
        margin-bottom: 0.7rem;
    }
    font-size: 1em;
    }
    @media screen and (max-width: 375px){
        font-size: 0.9em;
    }
`
export const BikeIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;

    @media screen and (max-width: 375px){
        width: 1.2rem;
        height: 1.2rem;
    }
`
export const BikeButton = styled.a`
    background: linear-gradient(#ffbf00, #f2a50c);
    padding: 1rem 3.5rem 1rem 1.6rem;
    font-size: 1.125em;
    text-transform: uppercase;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    color: #332200;
    font-weight: 700;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    &:hover{
        background: linear-gradient(#ebb410, #d6920b);
    }
    &:hover .seta{
        right: 0.7rem;
    }

    @media screen and (max-width: 600px){
        font-size: 1em;
        padding: 1rem 2.5rem 1rem 1rem;
    }
`
export const BikeAwesome = styled.span`
    color: #332200;
    font-size: 1.125em;
    position: absolute;
    top: 25%;
    transition: 0.3s;
    right: 1.3rem;

    @media screen and (max-width: 600px){
        font-size: 1em;
        top: 30%;
        right: 1rem;
    }
`
export const CardWrap = styled.div`
    width: 100%;
    padding: 3.5rem 0;
    position: relative;

    @media screen and (max-width: 860px){
        background-color: #111111;
    }
`
export const CardSecondColor = styled.div`
    width: 69.9%;
    position: absolute;
    height: 100%;
    background: green;
    right: 0;
    top: 0;
    z-index: 0;
`
export const Price = styled.span`
    color: #fbfbfb;
    background-color: #000;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;
    font-size: 1.125em;
    font-weight: 600;
    margin-top: 2rem;

    @media screen and (max-width: 600px){
        font-size: 1em;
    }
    @media screen and (max-width: 375px){
        font-size: 0.8em;
        margin-top: 1.5rem;
    }
`
export const RightIcon = styled.img`
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    right: 1rem;

    @media screen and (max-width: 860px){
        width: 2.5rem;
        height: 2.5rem;
    }

    @media screen and (max-width: 600px){
        right: 1.3rem;
        width: 2rem;
        height: 2rem;
    }
`