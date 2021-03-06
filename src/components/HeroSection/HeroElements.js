//HERO ELEMENTS

//IMPORTING
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { MdArrowForward , MdKeyboardArrowRight } from 'react-icons/md';

//HERO CONTAINER
export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content : center;
    align-items: center;
    padding : 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%  , rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg , rgba(0,0,0,0.2) 0% , transparent 100%);
        z-index: 2;
    }
`;

//HERO BG
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

//VIDEO BG
export const VideoBg = styled.video`
    width : 100%;
    height : 100%;
    -o-object-fit:cover;
    object-fit: cover;
    background : #232a34;
`;

//HERO CONTENT
export const HeroContent = styled.div`
    z-index : 3;
    max-width : 1200px;
    position : absolute;
    padding: 2px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

//HERO H1
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align : center;

    @media screen and (max-width: 798px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    
`
//HERO P
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 798px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
//HERO BTN WRAPPER
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
//ARROW FOWARD
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
//ARROW RIGHT
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
//BUTTON
export const Button = styled(Link)`
    border-radius:50px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding : ${ ( { big } )=>( big ? '14px 48px' : '12px 30px' ) };
    color : ${ ({ dark } )=> ( dark ? '#010606' : '#fff' ) };
    font-size : ${ ( { fontBig })=>( fontBig ? '20px' : '16px' )};
    outline: none;
    border : none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition :all 0.2s ease-in-out;
    
    &:hover{
    transition :all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71' )};
}
`;
