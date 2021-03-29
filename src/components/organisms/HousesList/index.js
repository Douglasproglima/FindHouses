import React from 'react';
import { HouseCard } from '../../molecules/HouseCard';
import { HousesListContainer } from './styles';

export const HousesList = data => {
  console.log('HousesLists - Debug');
  console.log(data);

  return (
    <HousesListContainer
      data={data}
      renderItem={() => (
        <HouseCard
          title={item.address.line}
          description={`${item.address.neighborhood_name} - ${item.address.state}`}
          imageSource={item.photos[0].href}
          price={item.community.price_max}
        />
      )}
      keyExtractor={item => item.property_id}
    />
  );
};
