//SIGN IN INDEX

//IMPORTING
import React from 'react';
import { Container , FormWrap , Icon ,FormContent , Form , FormH1 , FormLabel , FormInput , FormButton , Text} from './SigninElements';
import logoImg from '../../images/logo.png';

//SIGN IN
const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon  to='/' >
                    <img src={logoImg} alt="Logo" />
                  </Icon>
                  <FormContent>
                    <Form action='#'>
                    <FormH1>Acesse sua Conta</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Senha</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Entrar</FormButton>
                    <Text>Esqueceu sua senha?</Text>
                    </Form>
                  </FormContent>
              </FormWrap>
            </Container>  
        </>
    )
}

export default SignIn;
