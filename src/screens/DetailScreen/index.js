import React, { useEffect, useState } from 'react';
import { getHouseDetail } from '../../services/calls';
import formattedPriceWithRegex from '../../utils/formattedPrice';
import {
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
import { useHousesStore } from '../../../services/stores';

export const DetailScreen = ({ route, navigation }) => {
  const { selectedHouse } = useHousesStore();
  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState(null);

  useEffect(() => {
    async function callGetHouseDetail() {
      const result = await getHouseDetail(selectedHouse.property_id);
      setHouseDetail(result.properties[0] ? result.properties[0] : null);
      setLoading(false);
    }
    callGetHouseDetail();
  }, [selectedHouse]);

  const onClickArrowBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photo[0].href }}>
        <IconButton
          onPress={onClickArrowBac}
          iconName="chevron-back"
          transparent
        />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>

      {loading ? (
        <BottomScreenContainer>
          <Loader />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{houseDetail.address.line}</DetailTitle>

          <DetailSubTitle>
            {formattedPriceWithRegex.format(houseDetail.community.price_max)}
          </DetailSubTitle>

          <DetailText>
            {`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}
          </DetailText>

          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>
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
          {houseDetail.features[1].text.map(item => (
            <DetailText mb={2} key={item}>
              * {item}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
