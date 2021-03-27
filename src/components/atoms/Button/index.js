import React from 'react';
import { ButtonContainer } from './styles';
import { ButtonText } from '../Text/index';

export const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
