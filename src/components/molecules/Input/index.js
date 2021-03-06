import React from 'react';
import { InputLabel } from '../../atoms';
import { InputContainer, InputText } from './styles';

export const Input = ({ label, placeholder, ...props }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        placeholder={placeholder}
        placeholderTextColor={'#E5E5E5'}
        {...props}
      />
    </InputContainer>
  );
};
