import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CardContainer,
  CardImg,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';
import { formattedPriceWithRegex } from '../../../utils/formattedPrice';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation();

  const onClickItemContainer = () => {
    navigation.navigate('Detail', { selectedHouse: item });
  };

  return (
    <CardContainer
      onPress={() => {
        onClickItemContainer();
      }}>
      <CardImg source={{ uri: imgSource }} />

      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>

        <TextContainerRight>
          <CardHightLightText>
            {formattedPriceWithRegex.format(price)}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
