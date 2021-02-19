import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border-width: 1px;
  background-color: orange;
`;

export const LoginBackground = styled.ImageBackground`
  flex: 2;
`;

export const PurpleBackground = styled.View`
  flex: 1;
  background-color: #130526;
`;

export const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-content: center;
  padding: 35px;
`;

export const FloatCard = styled.View`
  max-width: 500px;
  min-height: 340px;
  align-self: center;
  background-color: #fff;
  elevation: 1;
  width: 100%;
  margin: 0 45px;
  padding: 30px;
  border-radius: 8px;
`;
