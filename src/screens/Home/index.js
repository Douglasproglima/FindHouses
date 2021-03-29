import React, { useEffect, useState } from 'react';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import {
  Title,
  IconButton,
  Input,
  HouseCard,
  HousesList,
} from '../../components';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const [housesListData, setHousesListData] = useState([]);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    console.log('Home');
    console.log(result.properties);

    setHousesListData(result.properties ? result.properties : []);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontrei aqui seu imóvel</Title>
        </TitleContainer>

        <IconButton iconName="filter" />
      </TopContainer>

      <Input label="Localização" placeholder="Digite o endereço" />

      <HouseCard imgSource="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></HouseCard>
      {/* <HousesList data={housesListData}></HousesList> */}
    </ScreenContainer>
  );
};
