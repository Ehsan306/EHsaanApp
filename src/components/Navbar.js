import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './123.png';
import logo1 from './singin.png';
import logo2 from './signup.png'
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
                {/*
                    https://www.iconfinder.com/icons/2135922/mobile_mobile_shopping_tablet_icon
                */}
             <Link to = '/'>
             <img src={logo}  alt="store" 
             width="30%" height="30%"
             className="navbar-brand" />
             </Link>
            
             <Link to = '/signin'>
             <img src={logo1}  alt="store" 
             width="10%" height="10%"/>
             </Link>
             
             <Link to = '/signup'>
             <img src={logo2}  alt="store" 
             width="30%" height="30%"/>
             </Link>
             
             
            <Link to = "/signin" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    Cart
                </ButtonContainer>
                    
                
            </Link>
            </NavWrapper>
         );
    }
} 
    

const NavWrapper = styled.nav`
background: pink;
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 3rem;
    text-transform: capitalize !important;
}
`;

 
