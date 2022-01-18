import React from 'react'
import { FooterW,FooterCardsWrapper,FooterCard,
    FooterLogo, FooterCardTitle,FooterUl,
    FooterLi,FooterLink,FooterLine,FooterIcons,
    FooterIcon,FooterLinkWrap,FooterCredits,
    FooterSpan,FooterCreditsLink,FooterCreditsWrap } from './FooterElements'

function Foooter() {
    return (
        <>
            <FooterW>
                <FooterCardsWrapper>

                    <FooterCard>
                        <FooterLogo>bikcraft</FooterLogo>
                    </FooterCard>

                    <FooterCard>
                        <FooterCardTitle>contato</FooterCardTitle>

                        <FooterUl>
                            <FooterLi>
                                <FooterLink href='#'>+55 19 4002-8922</FooterLink>
                            </FooterLi>
                            <FooterLi>
                                <FooterLink href='#'>contato@bikcraft.com</FooterLink>
                            </FooterLi>
                            <FooterLine/>
                            <FooterLi>
                                <FooterLink href='#'>Rua Ali Perto, 77 - Joinvile</FooterLink>
                            </FooterLi>
                            <FooterLi>
                                <FooterLink href='#'>São Paulo - SP</FooterLink>
                            </FooterLi>
                            <FooterLine/>

                        </FooterUl>
                        <FooterIcons>
                            <FooterLinkWrap href='#'><FooterIcon className='fab fa-instagram'/></FooterLinkWrap>
                            <FooterLinkWrap href='#'><FooterIcon className='fab fa-facebook'/></FooterLinkWrap>
                            <FooterLinkWrap href='#'><FooterIcon className='fab fa-youtube'/></FooterLinkWrap>
                            
                        </FooterIcons>
                    </FooterCard>

                    <FooterCard>
                        <FooterCardTitle>informações</FooterCardTitle>

                        <FooterUl>
                            <FooterLi>
                                <FooterLink href='#'>Bicicletas</FooterLink>
                            </FooterLi>
                            <FooterLi>
                                <FooterLink href='#'>Seguros</FooterLink>
                            </FooterLi>
                            <FooterLi>
                                <FooterLink href='#'>Contato</FooterLink>
                            </FooterLi>
                            <FooterLi>
                                <FooterLink href='#'>Termos e condições</FooterLink>
                            </FooterLi>

                        </FooterUl>
                    </FooterCard>

                </FooterCardsWrapper>

                <FooterCredits>
                    <FooterCreditsWrap>
                        <FooterSpan>Designed by <FooterCreditsLink target={'_blank'} href='https://www.origamid.com/projetos/bikcraft/'>Origamid</FooterCreditsLink></FooterSpan>
                    </FooterCreditsWrap>
                    <FooterCreditsWrap>
                        <FooterSpan>Coded by <FooterCreditsLink target={'_blank'} href='https://thiago-moura.netlify.app/'>Thiago</FooterCreditsLink></FooterSpan>
                    </FooterCreditsWrap>
                </FooterCredits>

            </FooterW>   
        </>
    )
}

export default Foooter
