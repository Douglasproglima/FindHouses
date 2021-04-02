import React from 'react';
import { ButtonContainer } from './styles';
import { ButtonText } from '../Text/index';

export const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};
