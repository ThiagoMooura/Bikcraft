import React from 'react'
import {BikeCards,BikeCardsImg,BikeName,
        BikeNameWrap,Line,BikePrice
        } from './BikeCardsElements'
import Bike1 from '../../images/bicicletas/magic.jpg'


function BikeCard({nome,preco,foto}) {
    return (
        <>
            <BikeCards>
                <BikeCardsImg src={foto}/>
                <BikeNameWrap>
                    <Line className={'line'} />
                    <BikeName>{nome}</BikeName>
                </BikeNameWrap>
                <BikePrice>{preco}</BikePrice>
            </BikeCards>
        </>
    )
}

export default BikeCard
