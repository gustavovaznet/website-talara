//HEROSECTION INDEX

//IMPORTING
import React,{ useState } from 'react'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement'
import { HeroContainer , HeroBg , VideoBg ,HeroContent , HeroH1 ,HeroP , HeroBtnWrapper , ArrowForward ,ArrowRight } from './HeroElements'

//HERO SECTION
const HeroSection = () => {

    const [ hover , setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    //RETURN
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type= 'video/mp4' />            
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Soluções em Cloud Computing
                </HeroH1>
                <HeroP>
                    Conheça nossa solução de backup em nuvem, a melhor e mais completa solução do mercado.
                </HeroP>   
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter= { onHover } onMouseLeave = { onHover} primary = 'true' dark='true'
                     smooth={true} duration={500} spy={ true } exact = 'true'
                     offset={-80} 
                    >
                        Conheça { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
