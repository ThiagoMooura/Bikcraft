import React from 'react'
import { Encapsulamento, HeroP,
         HeroTitleWrap,HeroTitle,
         HeroWrap,RightIcon
        } from '../bicicletas/BicicletasElements'
import Ricon from '../../../images/bottom/bottom-left.svg'
import { SecurityCardsWrap } from '../../HomePage/HomePageElements'
import SecurityCards from '../../../SecurityCards'
import Bike from '../../../images/icones/eletrica.svg'
import Carbono from '../../../images/icones/carbono.svg'
import Rastreador from '../../../images/icones/rastreador.svg'
import Rapidez from '../../../images/icones/velocidade.svg'
import Sustentavel from '../../../images/icones/sustentavel.svg'
import Seguro from '../../../images/icones/seguro.svg'
import Foooter from '../../Footer'

import { Hero, Vantagens, VantagensWrap,
        VantagensCardsWrap, VantagensCard,
        VantagensIcon,VantagensTitle,
        VantagensParagraph,
        /* ASK */
        Ask,AskWrap, AskCardsWrap, AskCard, 
        AskTitleWrap, AskRectangle, AskTitle, 
        AskParagraphWrap, AskParagraph, WrapTitle
        } from './SegurosElements'

function Seguros() {
    return (
        <>
            <Hero>
                <HeroWrap>
                    <Encapsulamento>
                    <HeroP>escolha o seguro</HeroP>
                    <HeroTitleWrap><HeroTitle>você seguro</HeroTitle><HeroTitle>.</HeroTitle></HeroTitleWrap>
                    </Encapsulamento>
                    <RightIcon src={Ricon}/> 
                </HeroWrap>
                
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
            </Hero>

            <Vantagens>
                <VantagensWrap>
                    <HeroTitleWrap><HeroTitle>vantagens</HeroTitle><HeroTitle>.</HeroTitle></HeroTitleWrap>

                    <VantagensCardsWrap>

                        <VantagensCard>
                            <VantagensIcon src={Bike}/>
                            <VantagensTitle>Reparo elétrico</VantagensTitle>
                            <VantagensParagraph>Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.</VantagensParagraph>
                        </VantagensCard>

                        <VantagensCard>
                            <VantagensIcon src={Carbono}/>
                            <VantagensTitle>Carbono</VantagensTitle>
                            <VantagensParagraph>Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.</VantagensParagraph>
                        </VantagensCard>

                        <VantagensCard>
                            <VantagensIcon src={Sustentavel}/>
                            <VantagensTitle>Sustentável</VantagensTitle>
                            <VantagensParagraph>Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.</VantagensParagraph>
                        </VantagensCard>

                        <VantagensCard>
                            <VantagensIcon src={Rastreador}/>
                            <VantagensTitle>Rastreador</VantagensTitle>
                            <VantagensParagraph>Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.</VantagensParagraph>
                        </VantagensCard>

                        <VantagensCard>
                            <VantagensIcon src={Seguro}/>
                            <VantagensTitle>Segurança</VantagensTitle>
                            <VantagensParagraph>Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.</VantagensParagraph>
                        </VantagensCard>

                        <VantagensCard>
                            <VantagensIcon src={Rapidez}/>
                            <VantagensTitle>Rapidez</VantagensTitle>
                            <VantagensParagraph>A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.</VantagensParagraph>
                        </VantagensCard>

                    </VantagensCardsWrap>
                </VantagensWrap>
            </Vantagens>

            <Ask>
                <AskWrap>
                <WrapTitle>
                    <HeroTitleWrap><HeroTitle style={{color:'#000'}}>perguntas frequentes</HeroTitle><HeroTitle>.</HeroTitle></HeroTitleWrap>
                </WrapTitle>
                <AskCardsWrap>

                    <AskCard>
                        <AskTitleWrap>
                            <AskRectangle/>
                            <AskTitle>Qual forma de pagamento vocês aceitam?</AskTitle>
                        </AskTitleWrap>
                        <AskParagraphWrap>
                            <AskParagraph>
                            Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.
                            </AskParagraph>
                        </AskParagraphWrap>
                    </AskCard>
                    <AskCard>
                        <AskTitleWrap>
                            <AskRectangle/>
                            <AskTitle>Como posso entrar em contato?</AskTitle>
                        </AskTitleWrap>
                        <AskParagraphWrap>
                            <AskParagraph>
                            Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.                            </AskParagraph>
                        </AskParagraphWrap>
                    </AskCard>
                    <AskCard>
                        <AskTitleWrap>
                            <AskRectangle/>
                            <AskTitle>Vocês possuem algum desconto?</AskTitle>
                        </AskTitleWrap>
                        <AskParagraphWrap>
                            <AskParagraph>
                            Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.
                            </AskParagraph>
                        </AskParagraphWrap>
                    </AskCard>
                    <AskCard>
                        <AskTitleWrap>
                            <AskRectangle/>
                            <AskTitle>Qual a garantia que possuo?</AskTitle>
                        </AskTitleWrap>
                        <AskParagraphWrap>
                            <AskParagraph>
                            Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.
                            </AskParagraph>
                        </AskParagraphWrap>
                    </AskCard>
                    <AskCard>
                        <AskTitleWrap>
                            <AskRectangle/>
                            <AskTitle>Posso parcelar no boleto?</AskTitle>
                        </AskTitleWrap>
                        <AskParagraphWrap>
                            <AskParagraph>
                            Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.
                            </AskParagraph>
                        </AskParagraphWrap>
                    </AskCard>
                    <AskCard>
                        <AskTitleWrap>
                            <AskRectangle/>
                            <AskTitle>Quantas trocas posso fazer ao ano?</AskTitle>
                        </AskTitleWrap>
                        <AskParagraphWrap>
                            <AskParagraph>
                            Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.
                            </AskParagraph>
                        </AskParagraphWrap>
                    </AskCard>

                </AskCardsWrap>
                </AskWrap>
            </Ask>

            <Foooter/>
        </>
    )
}

export default Seguros
