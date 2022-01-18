import React from 'react'
import {BrandCardsWrapper,BrandCard,
        BrandCardImg} from './BrandCardsElements'

function BrandCards({imagem1,imagem2,imagem3,imagem4,imagem5,imagem6,imagem7,imagem8}) {
    return (
        <>
            <BrandCardsWrapper>

                <BrandCard>
                    <BrandCardImg src={imagem1}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem2}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem3}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem4}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem5}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem6}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem7}/>
                </BrandCard>

                <BrandCard>
                    <BrandCardImg src={imagem8}/>
                </BrandCard>

            </BrandCardsWrapper>
        </>
    )
}

export default BrandCards
