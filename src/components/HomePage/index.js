import React from 'react'
import Licon from '../../images/bottom/bottom-left.svg'
import BikeBg from '../../images/fotos/introducao.jpg'
import BikeCard from '../BikeCards/index'
import Bike1 from '../../images/bicicletas/magic.jpg'
import Bike2 from '../../images/bicicletas/nimbus.jpg'
import Bike3 from '../../images/bicicletas/nebula.jpg'
import TechnologyCards from '../TechnologyCards/index'
import Icon1 from '../../images/icones/eletrica.svg'
import Icon2 from '../../images/icones/rastreador.svg'
import Brand1 from '../../images/parceiros/caravan.svg'
import Brand2 from '../../images/parceiros/dogs.svg'
import Brand3 from '../../images/parceiros/flexblog.svg'
import Brand4 from '../../images/parceiros/handel.svg'
import Brand5 from '../../images/parceiros/lescone.svg'
import Brand6 from '../../images/parceiros/ranek.svg'
import Brand7 from '../../images/parceiros/surfbot.svg'
import Brand8 from '../../images/parceiros/wildbeast.svg'
import BrandCards from '../BrandCards/index'
import SecurityCards from '../../SecurityCards'
import {
        /* HERO */
        Hero,LeftIcon,HeroContentWrapper,
        HeroText,HeroImageWrapper,BikeImg,
        HeroTitle,HeroTextWrapper,Yellow,
        HeroParagraph,HeroButton, 
        /* CHOOSE */
        Choose,ChooseTitle,ChooseBikesWrap,
        /* TECHNOLOGY */
        Technology,TechnologyContentWrapper,
        PreTitle,TechnologyLink,TechnologyCardsWrap,
        TechnologyBackground,
        /* BRAND */
        Brand,BrandTitle,
        /* RATE */
        Rate,RateBg,RateContentWrapper,RateComent,
        Italic,FontAwesomeLeft,FontAwesomeRight,
        Span,RateName,
        /* SECURITY */
        Security, SecurityTitleWrap,SecurityTitle,
        SecurityCardsWrap,
        /* FOOTER */
        Footer,FooterCardsWrapper,FooterCard,
        FooterLogo, FooterCardTitle,FooterUl,
        FooterLi,FooterLink,FooterLine,FooterIcons,
        FooterIcon,FooterLinkWrap,FooterCredits,
        FooterSpan,FooterCreditsLink,FooterCreditsWrap
        } from './HomePageElements'

function HomePage() {
    return (
        <>
            <Hero>
                <HeroContentWrapper>
                    <HeroText>
                        <HeroTextWrapper>
                            <HeroTitle>Bicicletas feitas sob medida<Yellow>.</Yellow></HeroTitle>
                            <HeroParagraph>
                                Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.
                            </HeroParagraph>
                            <HeroButton>Escolha a sua</HeroButton>
                        </HeroTextWrapper>
                    </HeroText>
                    <HeroImageWrapper>
                        <BikeImg src={BikeBg}/>
                    </HeroImageWrapper>
                </HeroContentWrapper>
            </Hero>

            <Choose>
                <ChooseTitle>escolha a sua<Yellow>.</Yellow></ChooseTitle>
                <ChooseBikesWrap>
                    <BikeCard
                        foto={Bike1}
                        nome='Magic Might'
                        preco='R$ 2.499,00'
                    />
                    <BikeCard
                        foto={Bike2}
                        nome='Nimbus Stark'
                        preco='R$ 4.999,00'
                    />
                    <BikeCard
                        foto={Bike3}
                        nome='Nebula Cosmic'
                        preco='R$ 3.999,00'
                    />
                </ChooseBikesWrap>
            </Choose>

            <Technology>
                <TechnologyContentWrapper>
                    <PreTitle>Tecnologia avançada</PreTitle>
                    <HeroTitle>você escolhe as suas cores e componentes<Yellow>.</Yellow></HeroTitle>
                    <HeroParagraph>
                        Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.
                    </HeroParagraph>
                    <TechnologyLink>Escolha um Modelo</TechnologyLink>
                    <TechnologyCardsWrap>
                        <TechnologyCards
                            icon={Icon1}
                            titulo={'Motor elétrico'}
                            paragrafo={'Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.'}
                        />
                        <TechnologyCards
                            icon={Icon2}
                            titulo={'Rastreador'}
                            paragrafo={'Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.'}
                        />
                    </TechnologyCardsWrap>
                </TechnologyContentWrapper>
                <TechnologyBackground></TechnologyBackground>
            </Technology>

            <Brand>
                <BrandTitle>nossos parceiros<Yellow>.</Yellow></BrandTitle>
                <BrandCards
                    imagem1={Brand1}
                    imagem2={Brand6}
                    imagem3={Brand4}
                    imagem4={Brand2}
                    imagem5={Brand5}
                    imagem6={Brand3}
                    imagem7={Brand8}
                    imagem8={Brand7}
                />
            </Brand>

            <Rate>
                <RateBg/>
                <RateContentWrapper>
                    <RateComent><Italic><Span><FontAwesomeLeft className='fas fa-quote-left'/>Pedalar</Span> sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que <Span>amo.<FontAwesomeRight className='fas fa-quote-right'/></Span></Italic></RateComent>
                    <RateName>Ana Júlia</RateName>
                </RateContentWrapper>
            </Rate>

            <Security>
                <SecurityTitleWrap>
                    <SecurityTitle>seguros<Yellow>.</Yellow></SecurityTitle>
                </SecurityTitleWrap>

                <SecurityCardsWrap>
                    <SecurityCards
                        tipo={'prata'}
                        corTipo={'#9c9c9c'}
                        preco={'R$ 199'}
                        frase1={'Duas trocas por ano'}
                        frase2={'Assistencia técnica'}
                        frase3={'Suporte 08h às 18h'}
                        frase4={'Cobertura estadual'}
                        margin={'0'}
                        display={'none'}
                        corBotao={'#404040'}
                    />
                    <SecurityCards
                        tipo={'ouro'}
                        corTipo={'#FFBB00'}
                        preco={'R$ 299'}
                        frase1={'Cinco trocas por ano'}
                        frase2={'Assistencia especial'}
                        frase3={'Suporte 24h'}
                        frase4={'Cobertura nacional'}
                        frase5={'Desconto em parceiros'}
                        frase6={'Acesso ao Clube Bikcraft'}
                        display={'flex'}
                        corBotao={'#FAB00E'}
                        corTextoBotao={'#000'}
                        weight={'700'}
                    />
                </SecurityCardsWrap>
                
            </Security>

            <Footer>
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

            </Footer>
        </>
    )
}

export default HomePage