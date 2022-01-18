import React from 'react'
import { Encapsulamento, HeroP,
        HeroTitleWrap,HeroTitle,
        HeroWrap,RightIcon
        } from '../bicicletas/BicicletasElements'
import Ricon from '../../../images/bottom/top-right.svg'
import Licon from '../../../images/bottom/bottom-left.svg'
import RBicon from '../../../images/bottom/bottom-right-p.svg'
import Local from '../../../images/icones/local.svg'
import Email from '../../../images/icones/email.svg'
import Horario from '../../../images/icones/horario.svg'
import Telefone from '../../../images/icones/telefone.svg'
import RJ from '../../../images/fotos/rj.jpg'
import SP from '../../../images/fotos/sp.jpg'
import { FooterIcons,FooterLinkWrap,FooterIcon } from '../../Footer/FooterElements'


import { Hero, FormWrap, FormColor, Form, Adress, AdressTitle,CardsAdressWrap, 
        CardAdress, CardAdressIcon, CardAdressContentWrap, CardAdressContent, 
        FormBg, FormularioWrap, Formulario, Label, Input, InputWrap, TextArea, 
        FormularioBg, 
        Lojas,
        LojasWrap,
        LojaCardWrap,
        LojaCard,
        Iframe,
        LojaCardTitle,
        LojaCardBottom,
        InfoWrap,
        InfoCard,
        InfoVert,
        InfoP,
        InfoPWrap,
        InfoIconWrap,
        InfoIcon,
        IconP} from './ContatoElements'
import { BikeButton } from '../../BicicletasCards/BicicletasCardsElements'
import Foooter from '../../Footer'

function Contato() {
    return (
        <>
          <Hero>
            <HeroWrap>
              <Encapsulamento>
              <HeroP>Respostas em até 24hr</HeroP>
              <HeroTitleWrap><HeroTitle>Nosso contato</HeroTitle><HeroTitle>.</HeroTitle></HeroTitleWrap>
              </Encapsulamento>
              <RightIcon src={Ricon}/> 
            </HeroWrap>
          </Hero>

          <FormWrap>
            <FormColor/>
            <Form>

              <Adress>
                <FormBg src={Licon}/>
                <AdressTitle>loja online</AdressTitle>

                <CardsAdressWrap>

                  <CardAdress>
                    <CardAdressIcon src={Local}/>
                    <CardAdressContentWrap>
                      <CardAdressContent>Rua Ali Perto, 35</CardAdressContent>
                      <CardAdressContent>São Paulo - SP</CardAdressContent>
                      <CardAdressContent>Brasil - Terra - Via Láctea</CardAdressContent>
                    </CardAdressContentWrap>
                  </CardAdress>

                  <CardAdress>
                    <CardAdressIcon src={Email}/>
                    <CardAdressContentWrap>
                      <CardAdressContent>contato@bikcraft.com</CardAdressContent>
                      <CardAdressContent>assistencia@bikcraft.com</CardAdressContent>
                    </CardAdressContentWrap>
                  </CardAdress>

                  <CardAdress>
                    <CardAdressIcon src={Telefone}/>
                    <CardAdressContentWrap>
                      <CardAdressContent>+55  19 4002-8922</CardAdressContent>
                    </CardAdressContentWrap>
                  </CardAdress>

                </CardsAdressWrap>
                <FooterIcons style={{marginLeft:'2rem'}}>
                  <FooterLinkWrap href='#'><FooterIcon style={{color:'#F6AD08'}} className='fab fa-instagram'/></FooterLinkWrap>
                  <FooterLinkWrap href='#'><FooterIcon style={{color:'#F6AD08'}} className='fab fa-facebook'/></FooterLinkWrap>
                  <FooterLinkWrap href='#'><FooterIcon style={{color:'#F6AD08'}} className='fab fa-youtube'/></FooterLinkWrap>
                </FooterIcons>
              </Adress>

            <FormularioWrap>
              <Formulario>

                <InputWrap>
                  <Label htmlFor='nome'>Nome</Label>
                  <Input placeholder='Seu nome' id='nome'></Input>
                </InputWrap>

                <InputWrap>
                  <Label htmlFor='telefone'>Telefone</Label>
                  <Input placeholder='(11) 4002-8922' id='telefone'></Input>
                </InputWrap>

                <InputWrap>
                  <Label htmlFor='email'>Email</Label>
                  <Input placeholder='contato@email.com' id='email'></Input>
                </InputWrap>

                <InputWrap>
                  <Label htmlFor='text'>Mensagem</Label>
                  <TextArea id='text' placeholder='O que você precisa?' rows="4" cols="50"></TextArea>
                </InputWrap>
                
                <BikeButton href='#' style={{padding: '1rem 1.6rem'}}>enviar mensagem</BikeButton>
              </Formulario>
            </FormularioWrap>
            <FormularioBg src={RBicon}/>
            </Form>

          </FormWrap>

          <Lojas>
            <LojasWrap> 
              <HeroTitleWrap><HeroTitle style={{color:'#000'}}>lojas locais</HeroTitle><HeroTitle>.</HeroTitle></HeroTitleWrap>

              <LojaCardWrap>
                
                <LojaCard>
                  <Iframe src={RJ}/>
                  <LojaCardBottom>
                  <LojaCardTitle>Rio de Janeiro</LojaCardTitle>
                  <InfoWrap>

                    <InfoCard>
                      <InfoVert/>
                      <InfoPWrap>
                        <InfoP>Rua Ali Perto, 26</InfoP>
                        <InfoP>Rio de Janeiro - RJ</InfoP>
                      </InfoPWrap>
                    </InfoCard>

                    <InfoCard>
                      <InfoVert/>
                      <InfoPWrap>
                        <InfoP>rj@bikcraft.com</InfoP>
                        <InfoP>+55 22 4344-3425</InfoP>
                      </InfoPWrap>
                    </InfoCard>

                  </InfoWrap>
                  <InfoIconWrap>
                    <InfoIcon src={Horario}/>
                    <IconP>08-18h de seg à dom</IconP>
                  </InfoIconWrap>
                  </LojaCardBottom>
                  
                </LojaCard>

                <LojaCard>
                  <Iframe src={SP}/>
                  <LojaCardBottom>
                  <LojaCardTitle>São Paulo</LojaCardTitle>
                  <InfoWrap>

                    <InfoCard>
                      <InfoVert/>
                      <InfoPWrap>
                        <InfoP>Rua Ali Perto, 26</InfoP>
                        <InfoP>São Paulo - SP</InfoP>
                      </InfoPWrap>
                    </InfoCard>

                    <InfoCard>
                      <InfoVert/>
                      <InfoPWrap>
                        <InfoP>sp@bikcraft.com</InfoP>
                        <InfoP>+55 11 4344-3425</InfoP>
                      </InfoPWrap>
                    </InfoCard>

                  </InfoWrap>
                  <InfoIconWrap>
                    <InfoIcon src={Horario}/>
                    <IconP>08-18h de seg à dom</IconP>
                  </InfoIconWrap>
                  </LojaCardBottom>
                  
                </LojaCard>

              </LojaCardWrap>
            </LojasWrap>
          
          </Lojas>

          <Foooter/>
        </>
    )
}

export default Contato
