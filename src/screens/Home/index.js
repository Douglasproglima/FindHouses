import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Title,
  IconButton,
  Input,
  HousesList,
  Loader,
  FilterModal,
} from '../../components';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
// import { getHousesCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import { useHousesHooks } from '../../services/hooks';

export const HomeScreen = () => {
  const { onGetHouses } = useHousesHooks();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  //const { housesList, setHousesList } = useHousesStore();
  const { housesList, loadingHousesList } = useHousesStore();
  /*
  const [loading, setLoading] = useState(true);
  const callGetHouses = async () => {
    const result = await getHousesCall();
    setHousesList(result.properties ? result.properties : []);
    setLoading(false);
  };*/

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  useEffect(() => {
    //callGetHouses();
    onGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontrei aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton onPress={openFilterModal} iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />
          {loadingHousesList && <Loader />}
        </ContentContainer>
      </HousesList>

      {filterModalVisible && (
        <FilterModal onClose={closeFilterModal} visible={filterModalVisible} />
      )}
    </ScreenContainer>
  );
};
