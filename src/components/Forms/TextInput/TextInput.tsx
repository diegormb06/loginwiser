import React from 'react';
import {InputWrapper, Label, Input} from './styles';

export interface TextInputProps {
  label: string;
  error?: string;
  mb?: number;
  mt?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  mb,
  mt,
  ...inputProps
}) => {
  return (
    <InputWrapper mt={mt} mb={mb}>
      <Label>{label}</Label>
      <Input {...inputProps} />
    </InputWrapper>
  );
};

export default TextInput;
