//FOOTER INDEX

//IMPORTING
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterContainer , FooterWrap  ,FooterLinksContainer,FooterLinksWrapper ,FooterLinkItems , FooterLinkTitle , FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink  } from './FooterElements';
import logoImg from '../../images/logo.png';

//FOOTER
const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                       
                        <FooterLinkItems>
                            <FooterLinkTitle>Links</FooterLinkTitle>
                                <FooterLink to = '/about'>Sobre</FooterLink>
                                <FooterLink to = '/discover'>Soluções</FooterLink>
                                <FooterLink to = '/services'>Serviços</FooterLink>
                                <FooterLink to = '/signup'>Cadastrar</FooterLink>
                                <FooterLink to = '/signin'>Entrar</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Contato</FooterLinkTitle>
                                <FooterLink to = '/signin'>SAC</FooterLink>
                                <FooterLink to = '/signin'>Suporte Técnico</FooterLink>
                                <FooterLink to = '/signin'>Ouvidoria</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Talara</FooterLinkTitle>
                                <FooterLink to = '/signin'>Carreiras</FooterLink>
                                <FooterLink to = '/signin'>Parcerias</FooterLink>
                                <FooterLink to = '/signin'>Consultoria</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
                                <FooterLink to = '/signin'>Instagram</FooterLink>
                                <FooterLink to = '/signin'>Facebook</FooterLink>
                                <FooterLink to = '/signin'>Youtube</FooterLink>
                                <FooterLink to = '/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img src={logoImg} alt="Logo" />
                        </SocialLogo>
                        <WebsiteRights> Talara Networks @ { Date.getFullYear} Todos os direitos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink aria-label = 'Facebook' href='/' target='_blank'><FaFacebook /></SocialIconLink>
                            <SocialIconLink aria-label = 'Instagram' href='/' target='_blank'><FaInstagram /></SocialIconLink>
                            <SocialIconLink aria-label = 'Twitter' href='/' target='_blank'><FaTwitter /></SocialIconLink>
                            <SocialIconLink aria-label = 'Youtube' href='/' target='_blank'><FaYoutube /></SocialIconLink>
                            <SocialIconLink aria-label = 'Linkedin' href='/' target='_blank'><FaLinkedin /></SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            </FooterContainer>   
        </>
    )
}

export default Footer;
