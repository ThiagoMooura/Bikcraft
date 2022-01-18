import styled from "styled-components";

export const BrandCardsWrapper = styled.ul`
    list-style: none;
    padding: 0 20px;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    margin-top: 4rem;

    @media screen and (max-width: 880px){
        grid-template-columns: repeat(2, 1fr);
    }
`
export const BrandCard = styled.li`
    display: flex;
    padding: 32px;
    border-left: 2px solid #ededed;
    justify-content: center;

    &:nth-child(1),&:nth-child(5){
        border-left: none;
    }
    &:nth-child(5),&:nth-child(6),&:nth-child(7),&:nth-child(8){
        border-top: 2px solid #ededed;
    }

    @media screen and (max-width: 880px){
        border: unset;
        border-top: 2px solid #ededed;

        &:nth-child(1),&:nth-child(2){
        border-top: none;
    }
        &:nth-child(1),&:nth-child(3),&:nth-child(5),&:nth-child(7){
        border-right: 2px solid #ededed;
    }
    }
`
export const BrandCardImg = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
`