import React from 'react';
import bg from '../../assets/images/wiserbg.jpg';
import MainTitle from '../../components/typography/MainTitle';
import Subtitle from '../../components/typography/Subtitle';
import TextInput from '../../components/Forms/TextInput/TextInput';

import {
  Container,
  PurpleBackground,
  LoginBackground,
  FloatCard,
  Wrapper,
} from './styles';
import {Text} from 'react-native';

const Login: React.FC = () => {
  return (
    <Container>
      <LoginBackground source={bg} />
      <PurpleBackground />
      <Wrapper>
        <FloatCard>
          <MainTitle>Olá, seja</MainTitle>
          <MainTitle>bem-vindo!</MainTitle>
          <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
          <TextInput label="e-mail" mt={35} mb={20} />
          <TextInput label="senha" />
        </FloatCard>
        <Text style={{color: 'white'}}>
          Esqueceu seu login ou senha? Clique aqui
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Login;
