//NAVBAR INDEX

//IMPORTING
import React , { useState , useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink } from './NavbarElements';
import logoImg from '../../images/logo.png';

//NAVBAR
const Navbar = ( { toggle } ) => {

    const [scrollNav , setScrollNav] = useState();

    const changeNav = ()=>{
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    //RETURN
    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to= '/' onClick={toggleHome}>
                    <img src={logoImg} alt="Logo" />
                </NavLogo>  
                <MobileIcon onClick = { toggle }>
                    <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={ true } exact = 'true'
                        offset={-80} 
                        >
                            Sobre
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={ true } exact = 'true'
                        offset={-80} >
                            Soluções 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={ true } exact = 'true'
                        offset={-80} >
                            Serviços 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup' smooth={true} duration={500} spy={ true } exact = 'true'
                        offset={-80} >
                            Cadastrar 
                        </NavLinks>
                    </NavItem>
                                    
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to='/signin'>
                            Entrar
                        </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar;