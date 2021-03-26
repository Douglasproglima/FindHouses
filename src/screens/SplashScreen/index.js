import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionImage } from './styles';
import Logo from '../../assets/img/Logo.png';

export const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={Logo} resizeMode="center" />
    </SectionView>
  );
};
