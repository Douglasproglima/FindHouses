import React from 'react';
import {
  CardContainer,
  CardImg,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';
import { formattedPrice } from '../../../utils/formattedPrice';

export const HouseCard = ({ imgSource, title, description, price }) => {
  const formattedPrice = value => {
    if (value != null) {
      const formatted =
        '$ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

      return formatted;
    } else {
      return 0;
    }
  };

  return (
    <CardContainer>
      <CardImg source={{ uri: imgSource }} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>

        <TextContainerRight>
          <CardHightLightText>
            {formattedPrice.format(price)}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
