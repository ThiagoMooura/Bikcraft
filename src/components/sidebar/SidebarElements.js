import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import styled from "styled-components";

export const Wrapper = styled.aside`
    position: fixed;
    width: 100%;
    position: fixed;
    background-color: #FAB505;
    padding: 1rem 2rem 1rem 2rem;
    z-index: 9;
    transition: 0.5s;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '4rem' : '-100vh')};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.6);

    @media screen and (min-width: 650px){
        display: none;
    }

`
export const Nav = styled.nav`
`
export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`
export const NavLinks = styled.li`
    margin: 0 1rem;
`
export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    position: relative;
    width: 100%;
    line-height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
