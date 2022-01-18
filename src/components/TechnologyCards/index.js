import React from 'react'
import {TechnologyCard,TechnologyCardIcon,
        TechnologyCardTitle,TechnologyCardParagraph
        } from './TechnologyCardsElements'


function TechnologyCards({icon, titulo, paragrafo}) {
    return (
        <>
            <TechnologyCard>
                <TechnologyCardIcon src={icon}/>
                <TechnologyCardTitle>{titulo}</TechnologyCardTitle>
                <TechnologyCardParagraph>{paragrafo}</TechnologyCardParagraph>
            </TechnologyCard>  
        </>
    )
}

export default TechnologyCards
