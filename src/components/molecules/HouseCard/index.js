import React from 'react';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';
import {
  CardContainer,
  CardImg,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource }) => {
  return (
    <CardContainer>
      <CardImg source={{ uri: imgSource }} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>Casa de luxo à venda</CardTitle>
          <CardDescription>
            R: Dona Florinda e Senhor Madruga, 71 - Vila do Chaves - MG
          </CardDescription>
        </TextContainerLeft>

        <TextContainerRight>
          <CardHightLightText>R$1.600,00</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
