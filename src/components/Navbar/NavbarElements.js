import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 4rem;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width: 1270px){
        padding: 0 2.5rem;
    }
    @media screen and (max-width: 500px){
        padding: 0 1.5rem;
    }    
`
export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.h1`
    color: #fff;
    font-size: 2em;
`
export const Nav = styled.nav`
`
export const NavMenu = styled.ul`
    list-style: none;
    display: flex;

    @media screen and (max-width: 650px){
        display: none;
    }
`
export const NavLinks = styled.li`
    margin-left:1rem;
`
export const LogoLink = styled(Link)`
    text-decoration: none;
`
export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1em;
    position: relative;
    width: 100%;
    line-height: 4rem;
    display: flex;

    &::before{
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #fff;
        bottom: 0.8rem;
        left: 0;
        transition: 0.3s;
    }

    &:hover::before{
        width: 100%;
    }
`
export const Hamburger = styled.div`
    display: none;
    width: 1.5rem;
    height: 1.1rem;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;

    @media screen and (max-width: 650px){
    display: flex;
    }
`
export const Line1 = styled.div`
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(7px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)')};
    transition: 0.3s;
`
export const Line2 = styled.div`
    width: 100%;
    height: 2px;
    background-color: #fff;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)')};
    transition: 0.3s;
`
export const Line3 = styled.div`
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(-9px) rotate(45deg)' : 'translateY(0px) rotate(0deg)')};
    transition: 0.3s;
`