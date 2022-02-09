//DATA INFO SECTION PAGE

//IMPORTING
import SVG1 from '../../images/svg-1.svg'
import SVG2 from '../../images/svg-2.svg'
import SVG3 from '../../images/svg-3.svg'

//HOME OBJ ONE
export const homeObjOne = {
    id : 'about',
    lightBg : false,
    lightText : true,
    lightTextDesc : true,
    topLine : 'Backup em Nuvem',
    headLine : 'Pacote Gold sem limite de armazenamento',
    description: `Mantem todos os seus arquivos protegidos e acessíveis de qualquer ponto do mundo, segurança
    e disponibilidade dos seus dados de qualquer lugar do mundo, soluções em nuvem é com a gente! #vemserTALARA  
                    `,
    buttonLabel : 'Assinar',
    imgStart : false,
    img : SVG1,
    alt: 'car',
    dark: true,
    primary  : true,
    darkText : false
};

//HOME OBT TWO
export const homeObjTwo = {
  id : 'discover',
  lightBg : true,
  lightText : false,
  lightTextDesc : false,
  topLine : 'Segurança de Dados',
  headLine : 'Mantenha seus dados dados seguros',
  description: `Nossa solução é completa e abrange um pilar importante para qualquer solução de backup a segurança.
  Mantenha seus dados seguros e sem complicação, um sistema simples e eficaz para mater seus backups sem dor de cabeça.  
                  `,
  buttonLabel : 'Saiba mais',
  imgStart : true,
  img : SVG2,
  alt: 'car',
  dark: false,
  primary  : false,
  darkText : true
};

//HOME OBJ THREE
export const homeObjThree = {
  id : 'signup',
  lightBg : true,
  lightText : false,
  lightTextDesc : false,
  topLine : '#vemserTALARA',
  headLine : 'Cadastre-se agora em nossa solução free',
  description: `Faça um teste agora mesmo com nosso pacote free, é 100% gratuito e te da até 10GB de armazenamento
  para manter seus dados seguros e acessíveis de qualquer lugar.  
                  `,
  buttonLabel : 'Cadastrar',
  imgStart : false,
  img : SVG3,
  alt: 'car',
  dark: false,
  primary  : false,
  darkText : true
};
