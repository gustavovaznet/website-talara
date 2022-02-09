//SERVICES INDEX

//IMPORTING
import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer , ServicesH1 , ServicesWrapper , ServicesCard , ServicesIcon , ServicesH2 , ServicesP } from './ServicesElements';

//SERVICES
const services = () => {
    return (
        <>
        <ServicesContainer id = 'services'>
            <ServicesH1>
                Nossos Serviços    
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Armazenamento Ilimitado</ServicesH2>
                    <ServicesP>Armazene seus dados sem limite de espaço e pague somente o que usar.</ServicesP>
                </ServicesCard>    
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Segurança de Dados</ServicesH2>
                    <ServicesP>Mantenha todos os sus dados seguros automaticamente de forma simples.</ServicesP>
                </ServicesCard>   
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Conta Grátis</ServicesH2>
                    <ServicesP>Cadastre-se em nossa conta free e ganhe 10GB para armazenar seus dados.</ServicesP>
                </ServicesCard>   
            </ServicesWrapper>      
        </ServicesContainer>  
        </>
    )
}

export default services;
