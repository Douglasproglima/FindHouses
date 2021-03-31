import React, { useEffect, useState } from 'react';
import { ScreenContainer } from './styles';

export const DetailScreen = ({ route }) => {
  const { selectedHouse } = route.params;
  console.log({ selectedHouse });

  return <ScreenContainer></ScreenContainer>;
};
