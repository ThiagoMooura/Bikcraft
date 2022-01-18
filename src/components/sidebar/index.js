import React from 'react'
import {Wrapper,Nav,NavMenu,NavLinks,NavLink} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <>
            <Wrapper isOpen={isOpen}>
                <Nav>
                    <NavMenu>
                        
                        <NavLinks>
                            <NavLink to='/bicicletas' onClick={toggle}>Bicicletas</NavLink>
                        </NavLinks>

                        <NavLinks>
                            <NavLink to='/seguros' onClick={toggle}>Seguros</NavLink>
                        </NavLinks>

                        <NavLinks>
                            <NavLink to='/contato' onClick={toggle}>Contato</NavLink>
                        </NavLinks>
                    </NavMenu>
                </Nav>
            </Wrapper>
        </>
    )
}

export default Sidebar
