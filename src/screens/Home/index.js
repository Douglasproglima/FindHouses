import React, { useEffect, useState } from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import {
  Title,
  IconButton,
  Input,
  HousesList,
  Loader,
  DetailText,
} from '../../components';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [housesListData, setHousesListData] = useState([]);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    console.log({ result });
    console.log(result.properties);
    //console.tron.log(result.properties);

    setHousesListData(result.properties ? result.properties : []);
    setLoading(false);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesListData}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontrei aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />
          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
