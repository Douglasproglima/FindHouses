import React from 'react';
import { formattedPrice } from '../../../utils/formattedPrice';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';
import {
  CardContainer,
  CardImg,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({
  imgSource,
  title = 'Casa de luxo à venda',
  description = 'R: Dona Florinda e Senhor Madruga, 71 - Vila do Chaves - MG',
  price = 1568,
}) => {
  return (
    <CardContainer>
      <CardImg source={{ uri: imgSource }} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>

        <TextContainerRight>
          <CardHightLightText>{formattedPrice(price)}</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
