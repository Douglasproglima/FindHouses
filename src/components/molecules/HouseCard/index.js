import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useHousesStore } from '../../../services/stores';
import {
  CardContainer,
  CardImg,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';
import { CardTitle, CardDescription, CardHightLightText } from '../../atoms';
import { formattedPrice } from '../../../utils/formattedPrice';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation();
  const { setSelectedHouse } = useHousesStore();

  const onClickItemContainer = () => {
    setSelectedHouse(item);
    navigation.navigate('Detail');
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
          <CardHightLightText>{formattedPrice(price)}</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
