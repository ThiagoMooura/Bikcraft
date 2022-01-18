import styled from "styled-components";

export const TechnologyCard = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px){
        width: 100%;
    }
`
export const TechnologyCardIcon = styled.img`
    width: 2rem;
` 
export const TechnologyCardTitle = styled.h1`
    color: #fff;
    text-transform: capitalize;
    margin: 0.5rem 0;
    font-weight: 600;
`
export const TechnologyCardParagraph = styled.p`
    color: #B2B2A7;
`