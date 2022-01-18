import styled from "styled-components";

export const Hero = styled.section`
    width: 100%;
    height: fit-content;
    background-color: #111111;
    position: relative;
    top: 4rem;
    padding: 3rem 2rem;
`
export const FormWrap = styled.div`
    width: 100%;
    position: relative;
    margin-top: 4rem;
    padding: 0 1rem 4rem 1rem;
    background-color: #F7F7F7;
`
export const FormColor = styled.div`
    position: absolute;
    background-color: #111111;
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
`
export const Form = styled.div`
    position: relative;
    z-index: 2;
    max-width: 72rem;
    margin: auto;
    box-shadow: 0 1px 2px rgba(0,0,0,0.3);
    border-radius: 7px;
    background-color: #fff;
    overflow: hidden;
    display: flex;

    @media screen and (max-width: 940px){
        flex-direction: column;
    }
`
export const Adress = styled.div`
    width: 41.5%;
    height: auto;
    background-color: #000;
    padding: 3.75rem 3.75rem 7rem 3.75rem;
    position: relative;

    @media screen and (max-width: 940px){
        width: 100%;
        padding: 1.5rem 1.5rem 6rem 1.5rem;
    }
    @media screen and (max-width: 425px){
        padding: 1.5rem 1.5rem 4.4rem 1.5rem;
    }
`
export const AdressTitle = styled.h2`
    color: #fff;
    font-size: 1.125em;
    text-transform: capitalize;
    font-weight: 500;
`
export const CardsAdressWrap = styled.div`
    margin: 3rem 0;

    @media screen and (max-width: 940px){
        margin: 1rem 0;
    }
`
export const CardAdress = styled.div`
    width: 100%;
    display: flex;

    &:nth-child(2){
        margin: 2rem 0;
    }
`
export const CardAdressIcon = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
`
export const CardAdressContentWrap = styled.div`
    width: 100%;
`
export const CardAdressContent = styled.p`
    color: #cccccc;
    font-size: 1.05em;
    line-height: 1.8em;
`
export const FormBg = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;

    @media screen and (max-width: 425px){
        width: 2.2rem;
        height: 2.2rem;
    }
`
export const FormularioWrap = styled.div`
    width: 58.5%;
    height: 100%;
    padding: 3.75rem;

    @media screen and (max-width: 940px){
        width: 100%;
        padding: 1rem;
    }
    
`
export const Formulario = styled.form`
    width: 100%;
    display: flex;    
    flex-wrap: wrap;
    justify-content: space-between;
`
export const InputWrap = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;

    &:nth-child(1){
        width:48%;
    }
    &:nth-child(2){
        width: 48%;
    }

    @media screen and (max-width: 650px){
        &:nth-child(1){
        width:100%;
    }
    &:nth-child(2){
        width: 100%;
    }
    }
`
export const Label = styled.label`
    font-size: 1.1em;
    margin-bottom: 0.7rem;
`
export const Input = styled.input`
    background-color: red;
    font-size: 1.02rem;
    font-weight: 400;
    background: #f7f7f7;
    border: 1px solid #ededed;
    padding: 1rem;
    border-radius: 4px;
    outline: none;
    margin-bottom: 1rem;

    &:focus-within{
        border: 1px solid #ffbb00;
        box-shadow: 0px 0px 4px #ffbb00;
        background-color: #fff;
    }
`
export const TextArea = styled.textarea`
    background-color: red;
    font-size: 1.02rem;
    font-weight: 400;
    background: #f7f7f7;
    border: 1px solid #ededed;
    padding: 1rem;
    border-radius: 4px;
    outline: none;
    margin-bottom: 1.5rem;
    resize: vertical;

    &:focus-within{
        border: 1px solid #ffbb00;
        box-shadow: 0px 0px 4px #ffbb00;
        background-color: #fff;
    }
`
export const FormularioBg = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;

    @media screen and (max-width: 425px){
        width: 2.2rem;
        height: 2.2rem;
    }
`
export const Lojas = styled.section`
    width: 100%;
    background-color: #F7F7F7;
    padding: 3rem 1.5rem 7rem 1.5rem;

    @media screen and (max-width:870px){
        padding-top: 0;
    }
`
export const LojasWrap = styled.div`
    max-width: 72rem;
    height: 100%;
    margin: auto;
`
export const LojaCardWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    @media screen and (max-width:700px){
        flex-direction: column;
        align-items: center;
    }
`
export const LojaCard = styled.div`
    width: 48%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);

    @media screen and (max-width:700px){
        width: 80%;
        &:last-child{
            margin-top: 4rem;
        }
    }
    @media screen and (max-width:470px){
        width: 100%;
    }
`
export const Iframe = styled.img`
    width: 100%;
    object-fit: contain;
`
export const LojaCardBottom = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 2rem;
`
export const LojaCardTitle = styled.h3`
    font-size: 2em;
    color: #111111;

    @media screen and (max-width:870px){
        font-size: 1.5em;
    }
`
export const InfoWrap = styled.div`
    width: 100%;
    height: auto;
    margin: 2rem 0;
    display: flex;

    @media screen and (max-width:870px){
        flex-direction: column;
    }
`
export const InfoCard = styled.div`
    width: 50%;
    height: 100%;
    display: flex;

    @media screen and (max-width:870px){
        &:last-child{
        margin-top: 1rem;
        }
        width: 100%;
    }
`
export const InfoVert = styled.div`
    width: 2px;
    height: 3.2rem;
    margin-right: 0.7rem;
    background-color: #ededed;
`
export const InfoPWrap = styled.div`
`
export const InfoP = styled.p`
    color: #595959;
    font-size: 1.05em;
    line-height: 1.5em;
`
export const InfoIconWrap = styled.div`
    width: 100%;
    display: flex;
`
export const InfoIcon = styled.img`
    margin-right: 0.7rem;
`
export const IconP = styled.p`
    font-size: 1.05em;
`