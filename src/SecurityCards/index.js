import React from 'react'

import { SecurityCard, 
        SecurityTop, SecurityTitle,
        SecurityPriceWrap, SecurityNumber,
        SecurityText,SecurityMid,SecurityPhraseWrap,
        SecurityIcon,SecurityPhrase, SecurityBottom,
        SecurityButton } from './SecurityCardsElements'

function SecurityCards({tipo,margin, corTipo ,preco , frase1, frase2, frase3, frase4 , frase5 , frase6 , display, corBotao ,corTextoBotao, weight}) {
    return (
        <>

                <SecurityCard>
                    
                    <SecurityTop>
                        <SecurityTitle style={{color:corTipo}}>{tipo}</SecurityTitle>
                        <SecurityPriceWrap>
                            <SecurityNumber>{preco}</SecurityNumber>
                            <SecurityText>mensal</SecurityText>
                        </SecurityPriceWrap>
                    </SecurityTop>

                    <SecurityMid>
                        <SecurityPhraseWrap>
                            <SecurityIcon className='fas fa-check'/>
                            <SecurityPhrase>{frase1}</SecurityPhrase>
                        </SecurityPhraseWrap>
                        <SecurityPhraseWrap>
                            <SecurityIcon className='fas fa-check'/>
                            <SecurityPhrase>{frase2}</SecurityPhrase>
                        </SecurityPhraseWrap>
                        <SecurityPhraseWrap>
                            <SecurityIcon className='fas fa-check'/>
                            <SecurityPhrase>{frase3}</SecurityPhrase>
                        </SecurityPhraseWrap>
                        <SecurityPhraseWrap style={{marginBottom:margin}}>
                            <SecurityIcon className='fas fa-check'/>
                            <SecurityPhrase>{frase4}</SecurityPhrase>
                        </SecurityPhraseWrap>
                        <SecurityPhraseWrap style={{display:display}}>
                            <SecurityIcon className='fas fa-check'/>
                            <SecurityPhrase >{frase5}</SecurityPhrase>
                        </SecurityPhraseWrap>
                        <SecurityPhraseWrap style={{display:display}}>
                            <SecurityIcon className='fas fa-check'/>
                            <SecurityPhrase>{frase6}</SecurityPhrase>
                        </SecurityPhraseWrap>
                    </SecurityMid>

                    <SecurityBottom>
                        <SecurityButton style={{color:corTextoBotao, backgroundColor:corBotao, fontWeight:weight}} href='#'>inscreva-se</SecurityButton>
                    </SecurityBottom>

                </SecurityCard>


        </>
    )
}

export default SecurityCards
