import React, {useState} from 'react'
import {Header,Logo,Nav,NavMenu,NavLinks,NavLink,Hamburger,Line1,Line2,Line3,NavWrapper,LogoLink} from './NavbarElements'

function Navbar({toggle,closee,isOpen}) {

    return (
        <>
            <Header>
                <NavWrapper>
                    
                        <LogoLink exact to='/' onClick={closee}><Logo>bikcraft</Logo></LogoLink>
                
                    <Nav>
                        <NavMenu>
                            
                            <NavLinks>
                                <NavLink to='/bicicletas'>Bicicletas</NavLink>
                            </NavLinks>

                            <NavLinks>
                                <NavLink to='/seguros'>Seguros</NavLink>
                            </NavLinks>

                            <NavLinks>
                                <NavLink to='/contato'>Contato</NavLink>
                            </NavLinks>

                        </NavMenu>
                        <Hamburger onClick={toggle}>
                            <Line1 isOpen={isOpen}/>
                            <Line2 isOpen={isOpen}/>
                            <Line3 isOpen={isOpen}/>
                        </Hamburger>
                    </Nav>
                </NavWrapper>
            </Header>
        </>
    )
}

export default Navbar
