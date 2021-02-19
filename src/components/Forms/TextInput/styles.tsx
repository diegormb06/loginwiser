import styled from 'styled-components/native';

export const InputWrapper = styled.View`
  margin-top: ${({mt}) => mt || 0}px;
  margin-bottom: ${({mb}) => mb || 0}px;
  height: 45px;
  width: 100%;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  height: 45px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 12px;
  text-transform: capitalize;
`;
