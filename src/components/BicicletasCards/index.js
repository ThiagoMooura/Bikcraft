import React from 'react'
import eletrica from '../../images/icones/eletrica.svg'
import carbono from '../../images/icones/carbono.svg'
import velocidade from '../../images/icones/velocidade.svg'
import rastreador from '../../images/icones/rastreador.svg'
import Ricon from '../../images/bottom/bottom-left.svg'


import { Card, ImageWrap, TextWrap,
        Rectangle, BikeName, BikeDescription,
        BikeTop, BikeBottom,BikeUl, BikeLi,
        BikeIcon,BottomWrap,BikeButton,
        BikeAwesome, CardWrap, CardSecondColor,
        Price, RightIcon}
        from './BicicletasCardsElements'

function BicicletasCards({nome,BackgroundImage,speed,corPrincipal,corSecundaria,titleColor,contentColor,preco}) {
    return (
        <>
        <CardWrap style={{backgroundColor:corPrincipal}}>
            <CardSecondColor style={{backgroundColor:corSecundaria}}/>
            <Card>
                <ImageWrap style={{backgroundImage:`url(${BackgroundImage})`}}>
                    <Price>R$ {preco}</Price>
                </ImageWrap>

                <TextWrap>
                    <RightIcon src={Ricon}/>
                    <BikeTop>
                        <Rectangle/>
                        <BikeName style={{color:titleColor}}>{nome}</BikeName>
                        <BikeDescription style={{color:contentColor}}>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</BikeDescription>
                    </BikeTop>
                    
                    <BikeBottom>
                        <BottomWrap>
                            <BikeUl>
                                <BikeLi style={{color:contentColor}}>
                                    <BikeIcon src={eletrica}/> Motor Elétrico
                                </BikeLi>
                                <BikeLi style={{color:contentColor}}>
                                    <BikeIcon src={carbono}/> Fibra de Carbono
                                </BikeLi>
                                <BikeLi style={{color:contentColor}}>
                                    <BikeIcon src={velocidade}/> {speed} Km/h
                                </BikeLi>
                                <BikeLi style={{color:contentColor}}>
                                    <BikeIcon src={rastreador}/> Rastreador
                                </BikeLi>
                            </BikeUl>
                            <BikeButton href='#'>mais sobre <BikeAwesome className='seta'>&#10140;</BikeAwesome></BikeButton>
                        </BottomWrap>
                    </BikeBottom>
                </TextWrap>
            </Card>
        </CardWrap>
        </>
    )
}

export default BicicletasCards
