import React from 'react';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { Title, IconButton, Input } from '../../components';
export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontrei aqui seu imóvel</Title>
        </TitleContainer>

        <IconButton iconName="filter" />
      </TopContainer>

      <Input label="Localização" placeholder="Digite o endereço" />
    </ScreenContainer>
  );
};
