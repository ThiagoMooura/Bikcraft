import React from 'react'
import Ricon from '../../../images/bottom/bottom-left.svg'
import BicicletasCards from '../../BicicletasCards'
import nimbus from '../../../images/bicicletas/nimbus-bg.jpg'
import nebula from '../../../images/bicicletas/nebula-bg.jpg'
import magic from '../../../images/bicicletas/magic-bg.jpg'

import {/* HERO */     
        Hero, HeroWrap ,HeroP, HeroTitle 
        ,HeroTitleWrap,RightIcon, Encapsulamento,
        /* BICICLETAS */
        BicicletasWrap
        
        } from './BicicletasElements'
import Footer from '../../Footer/index'

function Bicicletas() {
    return (
        <>
            <Hero>
                <HeroWrap>
                    <Encapsulamento>
                    <HeroP>escolha a melhor para você</HeroP>
                    <HeroTitleWrap><HeroTitle>nossas bicicletas</HeroTitle><HeroTitle>.</HeroTitle></HeroTitleWrap>
                    </Encapsulamento>
                    <RightIcon src={Ricon}/> 
                </HeroWrap>
            </Hero>

            <BicicletasWrap>
                <BicicletasCards
                    BackgroundImage={nimbus}
                    preco='4999'
                    nome='Nimbus stark'
                    speed='50'
                    corPrincipal='#fff'
                    corSecundaria='#fff'
                />

                <BicicletasCards
                    BackgroundImage={magic}
                    preco='2499'
                    nome='Magic might'
                    speed='45'
                    corSecundaria='#111111'
                    titleColor='#fff'
                    contentColor='#b2b2b2'
                />

                <BicicletasCards
                    BackgroundImage={nebula}
                    preco='3999'
                    nome='Nebula cosmic'
                    speed='50'
                    corPrincipal='#fff'
                    corSecundaria='#fff'
                />
            </BicicletasWrap>

            <Footer/>
        </>
    )
}

export default Bicicletas
