import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import BikeBg from '../../images/bicicletas/nimbus-bg.jpg'
import TechnologyBg from '../../images/fotos/tecnologia.jpg'
import RateBkg from '../../images/fotos/download.jpg'
import styled from "styled-components";

export const Hero = styled.section`
    width: 100%;
    padding: 4rem 2.5rem;
    background-color: #000;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 890px){
        height: 90vh;
    }    
    @media screen and (max-width: 500px){
        padding: 4rem 1.5rem;
    }    
    @media screen and (min-height: 700px) and (orientation: portrait){
        height: 72vh;
    }
    @media screen and (max-height: 500px) and (orientation: landscape){
        height: 120vh;
    }
    @media screen and (max-width: 424px) and (orientation: landscape){
        height: 150vh;
    }
    @media screen and (max-height: 320px) and (orientation: landscape){
        height: 160vh;
    }
`
export const LeftIcon = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    bottom: -2rem;
    left: 1rem;
`
export const HeroContentWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    display: flex;
    max-width: 1200px;
    
    @media screen and (max-width: 890px){
        display: grid;
        grid-template-columns: repeat(1, auto);
        height: 90vh;
        padding-bottom: 0;
    }
`
export const HeroText = styled.div`
    width: 50%;
    height: auto;
    padding-bottom: 50%;
    position: relative;

    @media screen and (max-width: 890px){
        width: 100%;
        padding-bottom: 25%;
    }
    @media screen and (max-width: 890px){
        height: fit-content;
        margin-top: 2rem;
    }
`
export const HeroTextWrapper = styled.div`
    position: absolute;
    bottom: 15%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 2.4rem;

    @media screen and (max-width: 1300px){
        bottom: 1%;
    }
    @media screen and (max-width: 890px){
        padding-right: 0;
        position: unset;
        margin-top: 1rem;
    }
`
export const HeroTitle = styled.h1`
    color: #fff;
    font-size: 4em;
    line-height: 1em;

    @media screen and (max-width: 1300px){
        font-size: 3em;
    }
    @media screen and (max-width: 890px){
       font-size: 2em;
    }
`
export const Yellow  = styled.span`
    color: #FAB505;
`
export const HeroParagraph = styled.p`
    color: #B2B2A7;
    font-size: 1.5em;
    margin-top: 2rem;

    @media screen and (max-width: 1300px){
        font-size: 1.125em;
    }
    @media screen and (max-width: 890px){
       font-size: 1.1em;
       margin-top: 1rem;
    }
`
export const HeroImageWrapper = styled.div`
    width: 50%;
    padding-bottom: 67%;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 890px){
        padding-bottom: 52%;
        width: 100%;
        margin-top: -21%;
        background-image: url(${BikeBg});
        background-position: center;
        background-size: cover;
    }

    @media screen and (min-height: 700px) and (orientation: portrait){
        padding-bottom: 0;
        margin-top: -40%;
        height: 15rem;
    }
    @media screen and (max-height: 500px) and (orientation: landscape){
        padding-bottom: 0;
        height: 20rem;
    }
    @media screen and (max-height: 320px) and (orientation: landscape){
        padding-bottom: 0;
        height: 16rem;
    }
`
export const BikeImg = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;

    @media screen and (max-width: 890px){
        display: none;
    }
`
export const HeroButton = styled(Link)`
    background-color: #FAB505;
    color: #332200;
    font-weight: 700;
    font-size: 1.2em;
    width: max-content;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.9rem 2rem;
    border-radius: 5px;
    margin-top: 1.5rem;

    @media screen and (max-height: 320px) and (orientation: landscape){
        margin-bottom: 2rem;
    }
`


/* CHOOSE */
export const Choose = styled.section`
    width: 100%;
    padding: 14% 2rem;

    @media screen and (max-width: 890px){
        padding-top: 25%;
    }
    @media screen and (max-width: 760px){
        padding-top: 20%;
    }
    @media screen and (max-width: 500px){
        padding-top: 30%;
    }
    @media screen and (max-width: 588px) and (orientation: landscape){
        padding-top: 10rem;
    }
    @media screen and (max-width: 472px) and (orientation: landscape){
        padding-top: 13rem;
    }
    @media screen and (max-height: 320px) and (orientation: landscape){
        padding-top: 8rem;
    }
    
`
export const ChooseTitle = styled.h1`
    font-size: 3.5em;
    margin-left: 6rem;

    @media screen and (max-width: 890px){
        margin-left: 2rem;
        font-size: 2.5em;
    }
    @media screen and (max-width: 500px){
        margin-left: 1rem;
        font-size: 1.8em;
    }
`
export const ChooseBikesWrap = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 2rem;
    margin: 3% 0;
`

/* TECHNOLOGY */
export const Technology = styled.section`
    width: 100%;
    background-color: #111111;
    padding: 5rem;
    display: flex;
    position: relative;

    @media screen and (max-width: 980px){
        padding: 4rem 2.5rem;
    }
    @media screen and (max-width: 500px){
        padding: 4rem 1.5rem;
    }    
`
export const TechnologyContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 980px){
        width: 100%;
    }
`
export const PreTitle = styled.h3`
    color: #B2B2B2;
    font-size:1.5em;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`
export const TechnologyLink = styled(Link)`
    text-transform: uppercase;
    color: #FAB505;
    font-size: 1.7em;
    margin-top: 1.7rem;
    max-width: fit-content;
    position: relative;
    text-decoration: none;
    line-height: 1.8em;

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #FAB505;
        left: 0;
        bottom: 0px;
    }

    &:hover{
        color: #fff;
    }

    &:hover::after{
        background-color: #fff;
    }

    @media screen and (max-width: 600px){
        font-size: 1.2em;
    }
`
export const TechnologyCardsWrap = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;

    @media screen and (max-width: 600px){
        display: grid;
        grid-template-columns: repeat(1,auto);
        column-gap: 0;
        row-gap: 2rem;
    }
`
export const TechnologyBackground = styled.div`
    width: 40%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 5rem;
    height: 0;
    padding-bottom: 80%;
    background-image: url(${TechnologyBg});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 1125px){
        padding-bottom: 95%;
    }
    @media screen and (max-width: 980px){
        display: none;
    }
`

/* BRAND */
export const Brand = styled.section`
    width: 100%;
    padding: 12rem 1rem;
    padding-bottom: 6rem;

    @media screen and (max-width: 990px){
        padding: 6rem 1rem;
    }
`
export const BrandTitle = styled.h1`
    font-size: 4em;
    margin-left: 4rem;

    @media screen and (max-width: 890px){
        font-size: 2.5em;
        margin-left: 3rem;
    }
    @media screen and (max-width: 500px){
        font-size: 2.1em;
        text-align: center;
        margin-left: 0;
    }
`

/* RATE */
export const Rate = styled.section`
    width: 100%;
    height: 75vh;
    background: #FAB505;
    display: flex;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`
export const RateBg = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${RateBkg});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 900px){
        width: 100%;
    }
`
export const RateContentWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 3rem 5rem;

    @media screen and (max-width: 900px){
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 2rem 5rem;
    }
    @media screen and (max-width: 600px){
        padding: 2rem 3rem;
    }
`
export const FontAwesomeLeft = styled.i`
    position: absolute;
    top: 0;
    left: -2.5rem;
    color: #E4A30B;

    @media screen and (max-width: 900px){
        left: -1.9rem;
    }
`
export const FontAwesomeRight = styled.i`
    position: absolute;
    bottom: 0;
    right: -2.3rem;
    color: #E4A30B;

    @media screen and (max-width: 900px){
        right: -1.7rem;
    }
`
export const Italic = styled.i`

`
export const RateComent = styled.h1`
    color: #332200;
    font-size: 1.8em;
    position: relative;

    @media screen and (max-width: 900px){
        font-size: 1.4em;
        text-align: center;
        font-weight: 600;
    }
    @media screen and (max-width: 600px){
        font-size: 1.1em;
    }
`
export const Span = styled.span`
    position: relative;
`
export const RateName = styled.h4`
    font-size: 1.15em;
    color: #664400;
    margin-top: 2rem;

    @media screen and (max-width: 600px){
        font-size: 1em;
    }
`

/* SECURITY */
export const Security = styled.section`
    width: 100%;
    background-color: #111111;
    padding: 5rem 2rem 3rem 2rem;
`
export const SecurityTitleWrap = styled.div`
    max-width: 72rem;
    margin: auto;
`
export const SecurityTitle = styled.h1`
    color: #fff;
    font-size: 4rem;
    font-weight: 700;

    @media screen and (max-width: 890px){
        font-size: 2.5em;
    }
`
export const SecurityCardsWrap = styled.div`
    max-width: 72rem;
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 767px){
        row-gap: 2rem;
    }
`

/* FOOTER */
export const Footer = styled.footer`
    width: 100%;
    background-color: black;
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