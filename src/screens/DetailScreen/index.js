import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getHouseDetail } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import {
  formatCurrencyUSD,
  formatCurrencyBRL,
} from '../../utils/formattedPrice';
import {
  getIfHouseIsFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/db';
import {
  Line,
  IconButton,
  DetailSectionTitle,
  DetailSubTitle,
  DetailTitle,
  DetailText,
  Loader,
  HouseFeatureCard,
} from '../../components';
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './styles';

export const DetailScreen = ({ navigation }) => {
  // const { selectedHouse } = route.params;
  const { selectedHouse } = useHousesStore();
  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const saveFavoriteHouse = async () => {
    if (isFavorite) {
      await removeHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel removido dos favorito com sucesso!');
      setIsFavorite(false);
    } else {
      await saveHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel salvo nos favorito com sucesso!');
      setIsFavorite(true);
    }
  };

  const checkIfHouseIsFavorite = async () => {
    const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
    setIsFavorite(isFavorite);
  };

  const getDetail = async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setHouseDetail(result.properties[0] ? result.properties[0] : null);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
    checkIfHouseIsFavorite();
  }, [selectedHouse]);

  const onClickArrowBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          onPress={onClickArrowBack}
          iconName="chevron-back"
          transparent
          onPress={onClickArrowBack}
        />

        <IconButton
          onPress={saveFavoriteHouse}
          iconName={isFavorite ? 'star' : 'star-outline'}
          transparent
          fill={isFavorite}
        />
      </ImageBackground>

      {loading ? (
        <BottomScreenContainer>
          <Loader />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle mb={6}>
            {houseDetail.address.line}
          </DetailTitle>

          <Line />

          <DetailSubTitle>
            {formatCurrencyBRL(
              houseDetail.community?.price_max || houseDetail.price,
            )}
          </DetailSubTitle>

          <DetailText>
            {`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}
          </DetailText>

          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>

          <Line />

          <FeaturesContainer>
            <HouseFeatureCard
              iconName="arrow-expand-all"
              iconLib="materialcommunity"
              featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
            />

            <HouseFeatureCard
              iconName="bed-king-outline"
              iconLib="materialcommunity"
              featureText={`${houseDetail.community?.beds_min} - ${houseDetail.community?.beds_max} beds`}
            />

            <HouseFeatureCard
              iconName="bath"
              iconLib="fontawesome"
              featureText={`${houseDetail.community?.baths_min} - ${houseDetail.community?.baths_max} baths`}
            />
          </FeaturesContainer>

          <DetailSectionTitle mt={24} mb={12}>
            Características do Imóvel
          </DetailSectionTitle>

          <Line />

          {houseDetail.features[1]?.text.map(item => (
            <DetailText key={item} mb={2}>
              {' '}
              - {item}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
